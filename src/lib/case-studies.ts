/**
 * Case studies — content per Collie's IMG_3038 template:
 *
 *   1. Challenge / Objective
 *   2. The Hook
 *   3. Strategy
 *   4. Outcome (Measurable)
 *   5. CTA for potential client
 *
 * Five projects per her IMG_3036:
 *   Port A Local · Palm Social Club · Palm Republic · PALMFEST · Sage Em
 *
 * Two are "live" (Port A Local + Sage Em — projects Heye Lab built);
 * three are "placeholder" awaiting Collie's client material.
 */

export type CaseStudy = {
  slug: string;
  title: string;
  kind: string; // e.g. "Brand + Platform"
  client: string;
  year: string;
  scope: string[];
  hook_short: string; // for the index card
  challenge: string;
  hook: string;
  strategy: string[];
  outcome: string[];
  cta: string;
  status: "live" | "placeholder";
};

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: "port-a-local",
    title: "Port A Local",
    kind: "Brand + Platform",
    client: "Port A Local",
    year: "2025–present",
    scope: [
      "Brand identity",
      "Wheelhouse operator-tool design",
      "Editorial system",
      "Multi-tenant platform brand",
    ],
    hook_short:
      "Coastal community platform — brand identity, operator tool design, and the operating principles for a local-first digital experience.",
    challenge:
      "Port Aransas, TX is a small Gulf Coast town with a complex audience: full-time locals, weekend tourists, vacation-rental managers, restaurant owners, and the businesses that serve all of them. The existing digital options were either gatekept — filtered listings, paid placement — or scattered across Facebook groups and town bulletin boards. The town needed a community-first digital platform where any operator could show up without an agency budget, and where quality won on merit rather than marketing spend.",
    hook:
      "Don't filter who gets in — make quality visible instead. Most local platforms try to maintain quality by restricting who can list, who can post, who can join. The result is a market where established operators dominate by default. Port A Local inverted the model: anyone gets in, quality is surfaced through the platform itself, and small operators share the same shelf as big ones. The result is a platform locals trust because it isn't curated against them, and operators trust because they don't have to buy their way in.",
    strategy: [
      "Brand identity rooted in coastal-town pragmatism — not vacation-rental glossy",
      "Visual system built on editorial typography, restrained color, and content-first layout",
      "Operator tooling — a self-serve marketing surface any small operator can run themselves",
      "Editorial spine — public-records journalism and dispatch coverage that build platform trust over time",
      "Connected sub-tenant model so partner brands inherit the platform's operating principles and look",
    ],
    outcome: [
      "Live at theportalocal.com with full operator dashboard + editorial publishing",
      "Multi-operator architecture proven in production — partner brands running on the same platform foundation",
      "Revenue-share deals closed with local operators",
      "Wheelhouse marketing-tool pattern referenced across other tenant builds",
      "Brand system used as canonical reference for community-first hyperlocal architecture",
    ],
    cta:
      "Building a hyperlocal platform, community brand, or hospitality identity that needs to feel native to where it lives? Let's talk.",
    status: "live",
  },
  {
    slug: "palm-social-club",
    title: "Palm Social Club",
    kind: "Brand + Experience",
    client: "Palm Family Ventures",
    year: "—",
    scope: ["Brand identity", "Experiential design", "Multi-channel marketing"],
    hook_short:
      "Hospitality brand identity built to live in a physical space, on screens, and in customer memory.",
    challenge:
      "[Placeholder — Collie to add: original brand challenge for the property, founding context, the gap the brand needed to fill in its market.]",
    hook:
      "[Placeholder — the strategic insight that shaped the work. The 'why this and not the obvious thing' that made the brand land differently.]",
    strategy: [
      "[Placeholder — strategy bullet 1]",
      "[Placeholder — strategy bullet 2]",
      "[Placeholder — strategy bullet 3]",
    ],
    outcome: [
      "[Placeholder — measurable outcome: revenue lift, retention, opening attendance, etc.]",
      "[Placeholder — measurable outcome 2]",
      "[Placeholder — measurable outcome 3]",
    ],
    cta:
      "Building a hospitality brand that needs to feel the same way across every customer touchpoint? Let's talk.",
    status: "placeholder",
  },
  {
    slug: "palm-republic",
    title: "Palm Republic",
    kind: "Brand + Marketing",
    client: "Palm Family Ventures",
    year: "—",
    scope: ["Brand strategy", "Multi-channel marketing", "Visual identity"],
    hook_short:
      "Multi-channel brand presence connecting strategy, design, and execution across every customer touchpoint.",
    challenge:
      "[Placeholder — Collie to add: the brand context, audience, what wasn't working with the previous approach.]",
    hook:
      "[Placeholder — the strategic insight that anchored the work.]",
    strategy: [
      "[Placeholder — strategy bullet 1]",
      "[Placeholder — strategy bullet 2]",
      "[Placeholder — strategy bullet 3]",
    ],
    outcome: [
      "[Placeholder — measurable outcome 1]",
      "[Placeholder — measurable outcome 2]",
      "[Placeholder — measurable outcome 3]",
    ],
    cta: "Need a brand system that holds its shape across paid, social, owned, and earned? Let's talk.",
    status: "placeholder",
  },
  {
    slug: "palmfest",
    title: "PALMFEST",
    kind: "Event Design",
    client: "Palm Family Ventures",
    year: "—",
    scope: ["Event concept", "Brand-aligned execution", "Multi-channel rollout"],
    hook_short:
      "Concept-to-fruition event execution. The kind of weekend a customer talks about for a year.",
    challenge:
      "[Placeholder — Collie to add: original event brief, audience, the bar for what success looked like.]",
    hook:
      "[Placeholder — the angle that made this event different from the dozen other festivals in its space.]",
    strategy: [
      "[Placeholder — strategy bullet 1]",
      "[Placeholder — strategy bullet 2]",
      "[Placeholder — strategy bullet 3]",
    ],
    outcome: [
      "[Placeholder — attendance, revenue, press, social reach]",
      "[Placeholder — outcome 2]",
      "[Placeholder — outcome 3]",
    ],
    cta:
      "Designing an event from concept to fruition — and you want the brand to live in it, not just be slapped on it? Let's talk.",
    status: "placeholder",
  },
  {
    slug: "sage-em",
    title: "Sage Em",
    kind: "Brand + Systems",
    client: "Sage Em (Texas lighting rep agency)",
    year: "2025–present",
    scope: [
      "Brand identity",
      "Agency operating system",
      "Sales + contract templates",
      "Outreach pattern library",
    ],
    hook_short:
      "Texas lighting rep agency — brand identity and operating system bridging creative with conversion at every product line.",
    challenge:
      "A founder-led B2B lighting rep agency in Texas needed the brand and operating muscle of a much larger firm — without the overhead. The principal had decades of specifier and manufacturer relationships, a clear catalog of 29 products across 5 categories, and a strong personal brand. The agency itself needed a polished commercial presence that could carry the principal's credibility into rooms he wasn't in yet, plus an internal operating system that turned every prospect interaction into structured pipeline.",
    hook:
      "Operational simplicity over coverage. A rep agency's brand is judged by the quality of its first email, its first quote, and its first contract — not the number of pages on its website. The work was less about a big marketing presence and more about making every routine artifact (intro email, brand pack, scope sheet, contract) feel polished, consistent, and obviously the work of a real firm.",
    strategy: [
      "Brand identity calibrated to specifier + manufacturer audience — refined-but-grounded, not generic-corporate",
      "Standard intro-email template productized and tested in live outreach across multiple agencies",
      "Quote-based contract structure — operational simplicity over clause coverage; Reserve over Remove for optional terms",
      "Brand pack + ETL form + spec sheet generators rendering from a single canonical source so every external artifact is verifiably consistent",
      "Roster curation rule (≤15 staff = full roster in agencies database; >15 = leadership-tier cut + full roster in HQ seed) so the system scales without bloat",
    ],
    outcome: [
      "Foundation v1 signed off in-person by principal (29 products · 5 categories locked)",
      "Multiple agency relationships activated under the contract framework",
      "Standard intro-email pattern landing cleanly across rep-agency outreach (recovery-as-intro composition validated in live exchanges)",
      "Operator-grade dashboard pattern carried forward into other Heye Lab tenant builds",
    ],
    cta:
      "Running a founder-led B2B agency or rep firm that needs to feel as polished as the brands you represent? Let's talk.",
    status: "live",
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
