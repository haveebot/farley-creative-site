/**
 * POST /api/contact
 *
 * Takes a public contact-form submission and turns it into a lead in the
 * Hub via the Hub's MCP server (/api/mcp on hub.farleycreative.com), and
 * emails a copy of the submission to the operator's inbox.
 *
 * Env vars:
 *   FARLEY_HUB_TOKEN    — bearer token issued in the Hub at /settings/agent-access
 *   FARLEY_HUB_URL      — defaults to https://hub.farleycreative.com
 *   RESEND_API_KEY      — enables the inbox copy; without it, submissions go
 *                         to the Hub only (the pre-Aug-2026 behavior)
 *   CONTACT_NOTIFY_TO   — defaults to collie@farleycreative.com
 *   CONTACT_NOTIFY_FROM — defaults to "Farley Creative <onboarding@resend.dev>",
 *                         which only delivers to the Resend account owner's own
 *                         address; switch to a farleycreative.com sender once
 *                         the domain is verified in Resend
 *
 * If FARLEY_HUB_TOKEN isn't set, the route fails-open with a 503 + clear
 * error message so the operator knows to wire it up. The inbox copy fires
 * even when the Hub call fails, so a submission is never silently lost.
 */

import { NextResponse, after } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 30;

type Body = {
  name?: string;
  email?: string;
  company?: string;
  interest?: string;
  message?: string;
};

const HUB_URL = process.env.FARLEY_HUB_URL ?? "https://hub.farleycreative.com";

export async function POST(request: Request) {
  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid-body" },
      { status: 400 },
    );
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const company = (body.company ?? "").trim();
  const interest = (body.interest ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "missing-fields", message: "Name, email, and message are required." },
      { status: 400 },
    );
  }
  if (!isValidEmail(email)) {
    return NextResponse.json(
      { ok: false, error: "invalid-email" },
      { status: 400 },
    );
  }

  const token = process.env.FARLEY_HUB_TOKEN;
  if (!token) {
    return NextResponse.json(
      {
        ok: false,
        error: "not-configured",
        message:
          "FARLEY_HUB_TOKEN not set — operator needs to generate an agent token at hub.farleycreative.com/settings/agent-access and set it as a Vercel env var on this project.",
      },
      { status: 503 },
    );
  }

  // Compose a lead in the shape the Hub's create_lead MCP tool expects.
  // source_type is a required enum — "other" is the right fit for inbound
  // contact-form submissions (not a job posting / RFP / article / etc.).
  // The full form data lives in raw_content so the operator sees every field
  // when they open the lead in the Hub.
  const leadFields = {
    source_type: "other",
    source_url: "https://farleycreative.com/contact",
    source_title: `Contact form — ${name}${company ? ` (${company})` : ""}`,
    business_name: company || undefined,
    raw_content: composeRawContent({ name, email, company, interest, message }),
    service_signal: interestToServiceSignals(interest),
  };

  let hubOk = false;
  let hubErrorMessage = "Hub error";
  try {
    const hubRes = await fetch(`${HUB_URL}/api/mcp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: "create_lead",
          arguments: leadFields,
        },
      }),
    });

    const data = await hubRes.json();

    if (!hubRes.ok) {
      console.error("[contact] hub MCP non-OK", hubRes.status, data);
      hubErrorMessage = `Hub returned ${hubRes.status}.`;
    } else if (data.error) {
      console.error("[contact] hub MCP returned error", data.error);
      hubErrorMessage = data.error.message ?? "Hub error";
    } else {
      hubOk = true;
    }
  } catch (err) {
    console.error("[contact] hub fetch failed", err);
    hubErrorMessage = (err as Error).message;
  }

  // Inbox copy fires after the response is sent, and regardless of the Hub
  // outcome — when the Hub is down, this email is the only record.
  after(() => sendInboxCopy({ name, email, company, interest, message, hubOk }));

  if (!hubOk) {
    return NextResponse.json(
      { ok: false, error: "hub-error", message: hubErrorMessage },
      { status: 502 },
    );
  }
  return NextResponse.json({ ok: true });
}

// Email a copy of the submission to the operator via Resend's REST API.
// No-op unless RESEND_API_KEY is set. Failures are logged, never surfaced —
// the Hub lead is the source of truth and the form's success doesn't depend
// on the email.
async function sendInboxCopy({
  name,
  email,
  company,
  interest,
  message,
  hubOk,
}: {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
  hubOk: boolean;
}): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return;

  const to = process.env.CONTACT_NOTIFY_TO ?? "collie@farleycreative.com";
  const from =
    process.env.CONTACT_NOTIFY_FROM ?? "Farley Creative <onboarding@resend.dev>";

  const subjectName = name.replace(/[\r\n]+/g, " ").slice(0, 80);
  const subject = `New inquiry — ${subjectName}${interest ? ` · ${interest}` : ""}`;

  const text = [
    composeRawContent({ name, email, company, interest, message }),
    "",
    hubOk
      ? "Saved to the Hub leads queue: https://hub.farleycreative.com/pipeline/leads"
      : "⚠️ Saving to the Hub FAILED for this submission — this email is the only copy.",
    "",
    "— farleycreative.com/contact",
  ].join("\n");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: [email],
        subject,
        text,
      }),
    });
    if (!res.ok) {
      console.error("[contact] resend non-OK", res.status, await res.text());
    }
  } catch (err) {
    console.error("[contact] resend send failed", err);
  }
}

function composeRawContent({
  name,
  email,
  company,
  interest,
  message,
}: {
  name: string;
  email: string;
  company: string;
  interest: string;
  message: string;
}): string {
  const parts: string[] = [];
  parts.push(`Name: ${name}`);
  parts.push(`Email: ${email}`);
  if (company) parts.push(`Company / project: ${company}`);
  if (interest) parts.push(`Interested in: ${interest}`);
  parts.push("");
  parts.push("Message:");
  parts.push(message);
  return parts.join("\n");
}

// Map the public form's "Interested in" picker to the Hub's
// service_signal enum (defined in farley-creative-hub/src/lib/pipeline-shared.ts).
// Values must be one of: brand_identity, web_design, marketing, strategy,
// packaging, social_media, content, other.
function interestToServiceSignals(interest: string): string[] | undefined {
  const map: Record<string, string[]> = {
    "Brand strategy + identity": ["brand_identity", "strategy"],
    "Multi-channel marketing": ["marketing", "social_media", "content"],
    "Web design + build": ["web_design"],
    "Event design + execution": ["marketing"],
    "Full marketing partnership": ["marketing", "strategy", "brand_identity"],
    "Single project / one-off": ["other"],
    "Not sure yet — let's talk": ["other"],
  };
  const hit = map[interest];
  return hit && hit.length > 0 ? hit : undefined;
}

function isValidEmail(s: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}
