/**
 * POST /api/contact
 *
 * Takes a public contact-form submission and turns it into a lead in the
 * Hub via the Hub's MCP server (/api/mcp on hub.farleycreative.com).
 *
 * Env vars:
 *   FARLEY_HUB_TOKEN — bearer token issued in the Hub at /settings/agent-access
 *   FARLEY_HUB_URL   — defaults to https://hub.farleycreative.com
 *
 * If FARLEY_HUB_TOKEN isn't set, the route fails-open with a 503 + clear
 * error message so the operator knows to wire it up.
 */

import { NextResponse } from "next/server";

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
      return NextResponse.json(
        {
          ok: false,
          error: "hub-error",
          message: `Hub returned ${hubRes.status}.`,
        },
        { status: 502 },
      );
    }
    if (data.error) {
      console.error("[contact] hub MCP returned error", data.error);
      return NextResponse.json(
        {
          ok: false,
          error: "hub-error",
          message: data.error.message ?? "Hub error",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] hub fetch failed", err);
    return NextResponse.json(
      {
        ok: false,
        error: "hub-unreachable",
        message: (err as Error).message,
      },
      { status: 502 },
    );
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
