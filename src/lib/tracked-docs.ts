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
 *
 * A multi-page preview uses `site`: each page is a stack of section images
 * with links laid over the buttons, so the client clicks from the homepage
 * into the pages behind it (/d/<token>/<slug>).
 *
 * Add `?review` to a link to look at it yourself: that visit isn't logged as
 * an open, so the Hub only shows when the client looked.
 */

/** A clickable area on a preview section, in the design's own pixels. */
export type PreviewLink = {
  x: number;
  y: number;
  w: number;
  h: number;
  /** A page slug in the same preview ("" is home) or a full https:// URL. */
  href: string;
  /** Read by screen readers and shown on hover. */
  label: string;
};

export type PreviewSection = {
  src: string;
  alt: string;
  /** Design size in px. Sections default to the 1440×900 Canva frame. */
  width?: number;
  height?: number;
  links?: PreviewLink[];
};

export type PreviewSite = {
  /** Top-bar menu, in order. */
  nav: { slug: string; label: string }[];
  /** Pages keyed by slug; "" is the homepage. */
  routes: Record<string, { title: string; sections: PreviewSection[] }>;
  /** Slim footer under every page but home, which ends with its own. */
  footer?: PreviewSection;
};

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
  /** Multi-page website preview with clickable buttons. */
  site?: PreviewSite;
  /** Hub prospect id whose timeline receives the open events. */
  prospectId: number;
  /** Who this link was sent to — included in the open-event note. */
  recipient: string;
};

const TANNER_V2 = "/d/tanner-website-preview-v2-0cfd87cf";

const TANNER_DMN =
  "https://www.nbcdfw.com/news/local/dallas-morning-news/frisco-businessmen-ordered-to-pay-400-million-in-damages-for-fraud-scheme/4049791/";

// The homepage's Trial Advocacy and Arbitration sections also open their own
// pages, where the same button leads on to Contact instead.
const tannerAdvocacy = (href: string): PreviewSection => ({
  src: `${TANNER_V2}/home-4.jpg`,
  alt: "Trial Advocacy: strategies that fit the jury, not fight it",
  links: [{ x: 90, y: 761, w: 540, h: 76, href, label: "Strengthen your trial team" }],
});

const tannerArbitration = (href: string): PreviewSection => ({
  src: `${TANNER_V2}/home-5.jpg`,
  alt: "Arbitration: efficiency and fairness from a former judge",
  links: [{ x: 1034, y: 761, w: 316, h: 76, href, label: "Request Tanner" }],
});

const TANNER_SITE: PreviewSite = {
  nav: [
    { slug: "", label: "Home" },
    { slug: "law", label: "TN Law" },
    { slug: "advocacy", label: "Trial Advocacy" },
    { slug: "arbitration", label: "Arbitration" },
    { slug: "about", label: "About" },
    { slug: "contact", label: "Contact" },
  ],
  routes: {
    "": {
      title: "Home",
      sections: [
        {
          src: `${TANNER_V2}/home-1.jpg`,
          alt: "Tanner Neidhardt: trial lawyer and strategist, former judge, arbitrator",
          links: [{ x: 1076, y: 772, w: 274, h: 76, href: "contact", label: "Get in touch" }],
        },
        {
          src: `${TANNER_V2}/home-2.jpg`,
          alt: "Three ways to work with Tanner: TN Law for clients, TN Advocacy for counsel, TN Arbitration for parties",
          links: [
            { x: 72, y: 58, w: 408, h: 784, href: "law", label: "TN Law, for clients" },
            { x: 516, y: 58, w: 408, h: 784, href: "advocacy", label: "TN Advocacy, for counsel" },
            { x: 961, y: 58, w: 408, h: 784, href: "arbitration", label: "TN Arbitration, for parties" },
          ],
        },
        {
          src: `${TANNER_V2}/home-3.jpg`,
          alt: "$409 million jury verdict, July 2026",
          links: [{ x: 540, y: 734, w: 361, h: 62, href: TANNER_DMN, label: "Read the coverage" }],
        },
        tannerAdvocacy("advocacy"),
        tannerArbitration("arbitration"),
        {
          src: `${TANNER_V2}/home-6.jpg`,
          alt: "Experience: former judge, trial lawyer, trial strategist and teacher",
        },
        {
          src: `${TANNER_V2}/home-7.jpg`,
          alt: "Tanner in the news: recent coverage",
          links: [
            { x: 82, y: 177, w: 430, h: 70, href: TANNER_DMN, label: "The Dallas Morning News" },
            { x: 82, y: 329, w: 430, h: 70, href: "https://www.statesman.com/news/local/article/georgetown-land-deal-fraud-22362857.php", label: "Austin American-Statesman" },
            { x: 82, y: 482, w: 430, h: 70, href: "https://therealdeal.com/texas/2026/07/15/pair-of-frisco-entrepreneurs-ordered-to-pay-400m/", label: "The Real Deal" },
            { x: 82, y: 634, w: 430, h: 70, href: "https://www.youtube.com/watch?v=i8G9pG4UIn4", label: "KXAN" },
          ],
        },
        {
          src: `${TANNER_V2}/home-8.jpg`,
          alt: "Texan Integrity",
          links: [{ x: 580, y: 748, w: 281, h: 62, href: "about", label: "About Tanner" }],
        },
        {
          src: `${TANNER_V2}/home-9.jpg`,
          alt: "Contact Tanner Neidhardt Law",
          links: [{ x: 1028, y: 750, w: 322, h: 110, href: "contact", label: "Contact" }],
        },
      ],
    },
    law: {
      title: "TN Law",
      sections: [
        {
          src: `${TANNER_V2}/law-1.jpg`,
          alt: "TN Law: representing corporations and individuals",
          links: [{ x: 540, y: 777, w: 361, h: 62, href: "contact", label: "Discuss your case" }],
        },
        {
          src: `${TANNER_V2}/law-2.jpg`,
          alt: "Recent results: two jury verdicts in 2026, one on each side",
          links: [{ x: 990, y: 761, w: 360, h: 76, href: "contact", label: "Discuss your case" }],
        },
      ],
    },
    advocacy: {
      title: "Trial Advocacy",
      sections: [
        tannerAdvocacy("contact"),
        {
          src: `${TANNER_V2}/advocacy-1.jpg`,
          alt: "Three services: trial partner, case strategy and mock trial",
          links: [
            { x: 103, y: 689, w: 344, h: 55, href: "contact", label: "Add Tanner to your team" },
            { x: 548, y: 689, w: 344, h: 55, href: "contact", label: "Get a fresh perspective" },
            { x: 993, y: 689, w: 344, h: 55, href: "contact", label: "Schedule a mock trial" },
          ],
        },
        {
          src: `${TANNER_V2}/advocacy-2.jpg`,
          alt: "What lawyers say about working with Tanner",
          links: [{ x: 130, y: 682, w: 460, h: 56, href: "contact", label: "Strengthen your trial team" }],
        },
      ],
    },
    arbitration: {
      title: "Arbitration",
      sections: [
        tannerArbitration("contact"),
        {
          src: `${TANNER_V2}/arbitration-1.jpg`,
          alt: "Arbitration Q&A: Tanner in his own words",
        },
      ],
    },
    about: {
      title: "About",
      sections: [
        {
          src: `${TANNER_V2}/about-1.jpg`,
          alt: "About Tanner: small town to big ideas",
          links: [{ x: 1076, y: 772, w: 274, h: 76, href: "contact", label: "Get in touch" }],
        },
        {
          src: `${TANNER_V2}/about-2.jpg`,
          alt: "Four paths of preparation: prosecutor, litigator, governor's counsel and trial judge",
        },
      ],
    },
    contact: {
      title: "Contact",
      sections: [
        {
          src: `${TANNER_V2}/contact-1.jpg`,
          alt: "Contact Tanner: choose the door that fits your case and send a message",
        },
      ],
    },
  },
  footer: {
    src: `${TANNER_V2}/footer.jpg`,
    alt: "Tanner Neidhardt Law, principal office in Austin, Texas",
    height: 202,
    links: [
      { x: 75, y: 58, w: 802, h: 86, href: "", label: "Home" },
      { x: 1028, y: 52, w: 322, h: 110, href: "contact", label: "Contact" },
    ],
  },
};

export const TRACKED_DOCS: Record<string, TrackedDoc> = {
  "tanner-website-preview-v2-0cfd87cf": {
    token: "tanner-website-preview-v2-0cfd87cf",
    title: "Tanner Neidhardt Law — Website Design Preview",
    label: "Website Design Preview (edited, with inner pages)",
    site: TANNER_SITE,
    prospectId: 5,
    recipient: "Tanner & Lauren Neidhardt",
  },
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

/**
 * One page of a multi-page preview: its own sections, then the shared footer
 * on every page but home. Undefined for a slug the preview doesn't have.
 */
export function previewSections(
  site: PreviewSite,
  slug: string,
): PreviewSection[] | undefined {
  if (!Object.hasOwn(site.routes, slug)) return undefined;
  const { sections } = site.routes[slug];
  return slug && site.footer ? [...sections, site.footer] : sections;
}
