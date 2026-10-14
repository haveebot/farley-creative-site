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
 *
 * Website design previews use `pages` instead of `file`: section images
 * (exported from Canva at 2x) in /public/d/<token>/, stacked edge to edge so
 * the client scrolls one homepage the way they would on the live site.
 */

export type TrackedDoc = {
  /** Unguessable URL segment AND the public PDF filename stem (/public/d/<token>.pdf). */
  token: string;
  /** Shown in the browser tab and the slim viewer header. */
  title: string;
  /** Short human label used in the Hub open-event note. */
  label: string;
  /** Path to the PDF under /public. Omit for a website preview (`pages`). */
  file?: string;
  /** Website preview: section images under /public, top to bottom. */
  pages?: { src: string; alt: string }[];
  /** Hub prospect id whose timeline receives the open events. */
  prospectId: number;
  /** Who this link was sent to — included in the open-event note. */
  recipient: string;
};

export const TRACKED_DOCS: Record<string, TrackedDoc> = {
  "tanner-website-preview-76b068f3": {
    token: "tanner-website-preview-76b068f3",
    title: "Tanner Neidhardt Law — Website Design Preview",
    label: "Website Design Preview (first look)",
    pages: [
      { src: "/d/tanner-website-preview-76b068f3/01.jpg", alt: "Hero: Tanner Neidhardt, trial lawyer, strategist, former judge and arbitrator" },
      { src: "/d/tanner-website-preview-76b068f3/02.jpg", alt: "Three ways to work with Tanner: TN Law, TN Trial Advocacy and TN Arbitration" },
      { src: "/d/tanner-website-preview-76b068f3/03.jpg", alt: "TN Law: representing corporations and individuals" },
      { src: "/d/tanner-website-preview-76b068f3/04.jpg", alt: "$399 million jury verdict, July 2026" },
      { src: "/d/tanner-website-preview-76b068f3/05.jpg", alt: "Trial Advocacy: strategies that fit the jury, not fight it" },
      { src: "/d/tanner-website-preview-76b068f3/06.jpg", alt: "Arbitration: efficiency and fairness from a former judge" },
      { src: "/d/tanner-website-preview-76b068f3/07.jpg", alt: "Experience: judge, trial lawyer, strategist and teacher" },
      { src: "/d/tanner-website-preview-76b068f3/08.jpg", alt: "Tanner in the news: recent coverage" },
      { src: "/d/tanner-website-preview-76b068f3/09.jpg", alt: "Texan Integrity" },
      { src: "/d/tanner-website-preview-76b068f3/10.jpg", alt: "Contact Tanner Neidhardt Law" },
    ],
    prospectId: 5,
    recipient: "Tanner & Lauren Neidhardt",
  },
  "bird-dog-proposal-2434dec5": {
    token: "bird-dog-proposal-2434dec5",
    title: "Bird Dog Designs — Farley Creative Proposal",
    label: "Farley Creative Proposal (Where to Start)",
    file: "/d/bird-dog-proposal-2434dec5.pdf",
    prospectId: 3,
    recipient: "Paul Anderson & Gillian",
  },
  "the-palms-proposal-b633794d": {
    token: "the-palms-proposal-b633794d",
    title: "The Palms — Farley Creative Proposal",
    label: "Farley Creative Proposal",
    file: "/d/the-palms-proposal-b633794d.pdf",
    prospectId: 2,
    recipient: "Shana Craine",
  },
  "the-palms-overview-38b8089f": {
    token: "the-palms-overview-38b8089f",
    title: "The Palms — Marketing & Sales Overview",
    label: "Marketing & Sales Overview",
    file: "/d/the-palms-overview-38b8089f.pdf",
    prospectId: 2,
    recipient: "Shana Craine",
  },
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
