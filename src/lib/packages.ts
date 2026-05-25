/**
 * Packages — structured data per Collie's 2026-05-25 PM assets.
 *
 * Two families, each with 4 tiers:
 *
 * 1. Brand & Marketing (project-based, one-time pricing)
 *    Identity → Branding → Brand Launch → Enterprise Rebrand
 *    Source: Hub asset "Farley Creative Marketing Packages" (ID 12)
 *
 * 2. Social Media (recurring monthly)
 *    Seed → Foundation → Growth → Enterprise
 *    Source: Hub asset "Farley Creative Social Media Packages" (ID 13)
 *
 * Deliverables below are my best-practice take on standard agency tier
 * wording — Collie's expected to edit before final. Prices are from her
 * assets verbatim.
 */

export type PackageTier = {
  slug: string;
  name: string;
  price: string; // formatted: "$500" or "from $500/mo"
  cadence: "project" | "monthly";
  positioning: string; // one-line "best fit for…"
  highlight?: boolean; // anchor tier — most visible
  deliverables: string[];
};

export type PackageFamily = {
  slug: string;
  name: string;
  description: string;
  cadence: "project" | "monthly";
  tiers: PackageTier[];
};

export const PACKAGE_FAMILIES: PackageFamily[] = [
  {
    slug: "brand-marketing",
    name: "Brand & Marketing",
    description:
      "Project-based engagements for brand identity, marketing systems, and launches. Pricing is starting point — scope shapes the final number.",
    cadence: "project",
    tiers: [
      {
        slug: "identity",
        name: "Identity",
        price: "$500",
        cadence: "project",
        positioning: "For early-stage brands establishing a credible visual footprint.",
        deliverables: [
          "1-hour strategy meeting",
          "Up to 3 brand revisions",
          "Primary logo design",
          "Brand color palette",
        ],
      },
      {
        slug: "branding",
        name: "Branding",
        price: "$1,500",
        cadence: "project",
        positioning: "For brands ready for a full visual system — logo, typography, voice, the kit.",
        deliverables: [
          "Brand identity development",
          "Multiple revision rounds",
          "Logo system (primary + alternates)",
          "Typography + color palette",
          "Brand voice + guidelines",
          "Brand kit established",
        ],
      },
      {
        slug: "brand-launch",
        name: "Brand Launch",
        price: "$5,000",
        cadence: "project",
        positioning: "For founders launching a new venture — brand from concept to live.",
        highlight: true,
        deliverables: [
          "Brand-from-concept-to-launch",
          "Logo system + brand guidelines",
          "Brand book published",
          "Website (built or audited)",
          "Social + email marketing setup",
          "Branding & marketing audit",
          "Launch-week brand rollout",
        ],
      },
      {
        slug: "enterprise-rebrand",
        name: "Enterprise Rebrand",
        price: "$8,500",
        cadence: "project",
        positioning: "For established brands that need a comprehensive rebuild — strategy through execution.",
        deliverables: [
          "Full rebrand kickoff meeting",
          "Extended visual identity system",
          "Brand book + brand system",
          "Social templates + asset library",
          "Brand strategy + positioning",
          "Marketing audit + analytics setup",
          "Custom web development",
          "Multi-channel identity rollout",
        ],
      },
    ],
  },
  {
    slug: "social-media",
    name: "Social Media",
    description:
      "Monthly retainers for social media strategy, content, and execution. Built to compound — not flame out.",
    cadence: "monthly",
    tiers: [
      {
        slug: "seed",
        name: "Seed",
        price: "$500/mo",
        cadence: "monthly",
        positioning: "For brands establishing a consistent social presence.",
        deliverables: [
          "5–7 posts per month",
          "Content + branded templates",
          "Scheduling + publishing",
          "Monthly analytics report",
          "Baseline metrics tracking",
        ],
      },
      {
        slug: "foundation",
        name: "Foundation",
        price: "$750/mo",
        cadence: "monthly",
        positioning: "For brands building real engagement and audience habit.",
        deliverables: [
          "8–12 posts per month",
          "Content + branded templates",
          "Scheduling + publishing",
          "Basic customer engagement",
          "Monthly analytics report",
          "Reach + engagement + follower-change tracking",
          "Monthly strategy check-in call",
        ],
      },
      {
        slug: "growth",
        name: "Growth",
        price: "$1,250/mo",
        cadence: "monthly",
        positioning: "For brands scaling their content output and starting paid amplification.",
        highlight: true,
        deliverables: [
          "12–15 posts per month",
          "Custom graphic design",
          "Photo + short-video editing",
          "Content + branded templates",
          "Active customer engagement",
          "Basic content moderation",
          "Paid ad management (starter)",
          "Monthly strategy check-in call",
          "Dedicated account manager",
        ],
      },
      {
        slug: "enterprise",
        name: "Enterprise",
        price: "$2,000/mo",
        cadence: "monthly",
        positioning: "For brands treating social as a primary revenue channel — full execution.",
        deliverables: [
          "15–20 posts per month",
          "Custom graphic design + copy",
          "Photo + short-video editing",
          "Story / branded templates",
          "Active customer engagement",
          "Audience targeting + segmentation",
          "Paid ad campaign creation + management",
          "Monthly strategy check-in call",
        ],
      },
    ],
  },
];

export function getPackageFamily(slug: string): PackageFamily | undefined {
  return PACKAGE_FAMILIES.find((f) => f.slug === slug);
}
