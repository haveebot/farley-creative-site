/**
 * Experience — Collie's pre- and parallel-to-Farley-Creative credentials,
 * mirrored from her current portfolio (farleycreative.com home page + the
 * /collie-farley-portfolio 28-slide deck).
 *
 * Separated from /work (Farley Creative formal case studies) because these
 * are either: pre-agency career credentials, or recent client engagements
 * that haven't been written up as full case studies yet.
 *
 * Four categories in priority order:
 *   1. Recent client work (RK Coastal Customs / RK Projects)
 *   2. In-house leadership (Cinnamon Shore — Director of Marketing)
 *   3. Selected brand engagements (Gully's Landing, Downtown Grub, Texas Culture Co)
 *   4. Product + packaging design (Wrangler, Jack Daniel's, Stetson)
 */

export type ExperienceEntry = {
  slug: string;
  name: string;
  role: string;
  summary: string;
  highlights?: string[]; // measurable outcomes / specific work
  detail?: string; // longer paragraph if useful
  featured?: boolean; // gets bigger treatment
  image?: { src: string; alt: string };
};

export type ExperienceCategory = {
  slug: string;
  title: string;
  description: string;
  entries: ExperienceEntry[];
};

export const EXPERIENCE_CATEGORIES: ExperienceCategory[] = [
  {
    slug: "recent-client-work",
    title: "Recent client work",
    description:
      "Brand identity + digital engagements actively running. Full case studies in development.",
    entries: [
      {
        slug: "rk-projects-port-aransas",
        name: "RK Projects Port Aransas · RK Coastal Customs",
        role: "Brand identity · Website + e-commerce · Visual system",
        summary:
          "Luxury custom home builder serving Port Aransas. Brand identity, full website, and a coastal-customs e-commerce extension — refined visual system anchoring the leader in luxury custom builds on the Texas coast.",
        detail:
          "RK Projects is the leading luxury custom home builder in Port Aransas — \"form meets function in exquisite style.\" Farley Creative built the brand identity system, the website + e-commerce surface, and the visual language across the parent brand and its RK Coastal Customs sub-brand.",
        highlights: [
          "Coastal-customs graphic design blueprint with full color system",
          "Custom website at rkprojectspa.com",
          "RK Coastal Customs e-commerce + storefront extension",
          "Brand applied across digital, signage, and print",
        ],
        featured: true,
        image: {
          src: "/work/rk-projects/hero.png",
          alt: "RK Projects Port Aransas mobile site — luxury custom home builders, kitchen interior",
        },
      },
    ],
  },
  {
    slug: "in-house",
    title: "In-house leadership",
    description:
      "Senior marketing leadership roles that proved out the operating model Farley Creative now runs with clients.",
    entries: [
      {
        slug: "cinnamon-shore",
        name: "Cinnamon Shore",
        role: "Director of Marketing · Brand Transformation",
        summary:
          "Led brand and marketing transformation for a Texas coastal real-estate community — aligning identity, messaging, and customer experience to support scalable growth.",
        detail:
          "Inherited a brand with no cohesive identity, fragmented marketing across channels, no internal team structure, and no agency partner. Built the marketing function from the ground up — defined positioning and growth strategy, hired the creative agency partner, built a dynamic in-house team, directed cross-functional execution across digital, paid, and performance.",
        highlights: [
          "37% increase in total revenue income",
          "68% of bookings tracked to web marketing campaigns",
          "224% call volume increase",
          "Built scalable marketing foundation + improved team alignment",
        ],
        featured: true,
        image: {
          src: "/experience/cinnamon-shore/hero.png",
          alt: "Cinnamon Shore community aerial — white coastal homes on the Texas Gulf",
        },
      },
    ],
  },
  {
    slug: "additional-brand-work",
    title: "Selected brand engagements",
    description:
      "Brand identity, web, and marketing engagements across hospitality, retail, and culture clients.",
    entries: [
      {
        slug: "gullys-landing",
        name: "Gully's Landing",
        role: "Brand identity · Website design",
        summary:
          "Hospitality brand identity and digital presence for a coastal Texas destination.",
      },
      {
        slug: "downtown-grub",
        name: "Downtown Grub",
        role: "Brand identity · Campaign development",
        summary:
          "Restaurant brand identity, signage, and ongoing campaign development.",
      },
      {
        slug: "texas-culture-company",
        name: "Texas Culture Company",
        role: "Brand identity · SEO · Performance marketing",
        summary:
          "Brand identity system paired with digital and performance marketing strategy.",
      },
    ],
  },
  {
    slug: "product-design",
    title: "Product + packaging design",
    description:
      "Licensed-product design and art direction for iconic American heritage brands. National retail distribution. International manufacturing partner collaboration.",
    entries: [
      {
        slug: "wrangler",
        name: "Wrangler",
        role: "Product Designer · Art Director",
        summary:
          "Licensed leather goods and accessories. Wallet packaging designed to resemble the iconic back pocket of Wrangler jeans.",
      },
      {
        slug: "jack-daniels",
        name: "Jack Daniel's",
        role: "Product Designer · Art Director",
        summary:
          "Licensed BBQ + lifestyle goods. BBQ tool set designed in reclaimed whiskey-barrel wood, produced through international manufacturing partners.",
      },
      {
        slug: "stetson",
        name: "Stetson",
        role: "Product Designer · Art Director",
        summary:
          "Licensed western accessories — rodeo buckle design, leather goods, branded retail collections. Heritage-brand DNA translated into market-ready product.",
      },
    ],
  },
];
