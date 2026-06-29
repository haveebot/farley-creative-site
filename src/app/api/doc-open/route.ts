/**
 * POST /api/doc-open
 *
 * Records a document "open" event for a tracked link (/d/<token>).
 * (Named distinctly from the site-wide <Tracker> analytics, which posts to
 * the Hub's own /api/track on a different host.)
 * Called by the viewer's client-side beacon, so only real browsers reach it —
 * email scanners and link unfurlers that pre-fetch the page don't run JS.
 *
 * Logs the open to the Hub as a note on the document's prospect timeline via
 * the same MCP endpoint + token the contact form uses.
 *
 * Env vars:
 *   FARLEY_HUB_TOKEN — bearer token (already set in Vercel for /api/contact)
 *   FARLEY_HUB_URL   — defaults to https://hub.farleycreative.com
 *
 * Tracking must never be load-bearing: every failure path still returns a
 * benign 200/204 so the viewer is unaffected.
 */

import { NextResponse } from "next/server";
import { getTrackedDoc } from "@/lib/tracked-docs";

export const dynamic = "force-dynamic";
export const maxDuration = 15;

const HUB_URL = process.env.FARLEY_HUB_URL ?? "https://hub.farleycreative.com";

// Coarse bot filter. The JS-beacon design already excludes most automated
// fetchers; this catches headless/automation UAs that do run JS.
const BOT_UA =
  /bot|crawl|spider|slurp|preview|scan|monitor|headless|phantom|curl|wget|python-requests|facebookexternalhit|slackbot|whatsapp|telegram|bingpreview|embedly|quora link|vkshare|w3c_validator/i;

export async function POST(request: Request) {
  let token = "";
  try {
    const body = (await request.json()) as { token?: string };
    token = (body.token ?? "").trim();
  } catch {
    return NextResponse.json({ ok: false }, { status: 204 });
  }

  const doc = getTrackedDoc(token);
  if (!doc) {
    // Unknown token — don't reveal anything, don't log.
    return new NextResponse(null, { status: 204 });
  }

  const ua = request.headers.get("user-agent") ?? "";
  if (BOT_UA.test(ua)) {
    return new NextResponse(null, { status: 204 });
  }

  const hubToken = process.env.FARLEY_HUB_TOKEN;
  if (!hubToken) {
    console.error("[track] FARLEY_HUB_TOKEN not set — open not logged", {
      token,
    });
    return new NextResponse(null, { status: 204 });
  }

  const referer = request.headers.get("referer") ?? "";
  const note = composeNote(doc.label, doc.recipient, doc.token, ua, referer);

  try {
    const hubRes = await fetch(`${HUB_URL}/api/mcp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${hubToken}`,
      },
      body: JSON.stringify({
        jsonrpc: "2.0",
        id: 1,
        method: "tools/call",
        params: {
          name: "log_prospect_activity",
          arguments: {
            prospect_id: doc.prospectId,
            kind: "note",
            content: note,
          },
        },
      }),
    });
    if (!hubRes.ok) {
      console.error("[track] hub non-OK", hubRes.status, await safeText(hubRes));
    } else {
      const data = await hubRes.json().catch(() => null);
      if (data?.error) console.error("[track] hub error", data.error);
    }
  } catch (err) {
    console.error("[track] hub fetch failed", (err as Error).message);
  }

  // Always succeed from the browser's perspective.
  return new NextResponse(null, { status: 204 });
}

function composeNote(
  label: string,
  recipient: string,
  token: string,
  ua: string,
  referer: string,
): string {
  const parts = [
    `📄 Document opened: "${label}"`,
    `Sent to: ${recipient}`,
    `Link: farleycreative.com/d/${token}`,
  ];
  if (ua) parts.push(`Browser: ${ua.slice(0, 180)}`);
  if (referer) parts.push(`Referrer: ${referer.slice(0, 180)}`);
  return parts.join("\n");
}

async function safeText(res: Response): Promise<string> {
  try {
    return (await res.text()).slice(0, 300);
  } catch {
    return "";
  }
}
