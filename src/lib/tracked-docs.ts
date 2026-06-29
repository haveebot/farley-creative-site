/**
 * Tracked document links.
 *
 * Each entry is a document served at an UNGUESSABLE URL:
 *   https://farleycreative.com/d/<token>
 *
 * The page renders the PDF inline (no login, no account — Shana just clicks
 * and reads in her browser). When a real browser opens it, a client-side
 * beacon hits /api/track, which logs an "open" event to the Hub prospect
 * timeline named by `prospectId` so Collie can see when it was viewed.
 *
 * To add a new tracked doc:
 *   1. Drop the PDF in /public/d/<token>.pdf (use an unguessable filename —
 *      `python3 -c "import secrets; print(secrets.token_hex(4))"` for the suffix).
 *   2. Add an entry below keyed by the same token.
 *   That's it — the route, viewer, and tracking pick it up automatically.
 */

export type TrackedDoc = {
  /** Unguessable URL segment AND the public PDF filename stem (/public/d/<token>.pdf). */
  token: string;
  /** Shown in the browser tab and the slim viewer header. */
  title: string;
  /** Short human label used in the Hub open-event note. */
  label: string;
  /** Path to the PDF under /public. */
  file: string;
  /** Hub prospect id whose timeline receives the open events. */
  prospectId: number;
  /** Who this link was sent to — included in the open-event note. */
  recipient: string;
};

export const TRACKED_DOCS: Record<string, TrackedDoc> = {
  "the-palms-moodboard-7bb0934c": {
    token: "the-palms-moodboard-7bb0934c",
    title: "The Palms — Preliminary Moodboard Concepts",
    label: "Preliminary Moodboard Concepts",
    file: "/d/the-palms-moodboard-7bb0934c.pdf",
    prospectId: 2,
    recipient: "Shana Craine",
  },
  "the-palms-brand-kit-dfeb38aa": {
    token: "the-palms-brand-kit-dfeb38aa",
    title: "The Palms — Interim Brand Kit",
    label: "Interim Brand Kit (Temporary)",
    file: "/d/the-palms-brand-kit-dfeb38aa.pdf",
    prospectId: 2,
    recipient: "Shana Craine",
  },
};

export function getTrackedDoc(token: string): TrackedDoc | undefined {
  return TRACKED_DOCS[token];
}
