/**
 * Case studies — content per Collie's IMG_3038 template:
 *
 *   1. Challenge / Objective
 *   2. The Hook
 *   3. Strategy
 *   4. Outcome (Measurable)
 *   5. CTA for potential client
 *
 * Six projects per her 2026-05-25 home page mockup:
 *   Port A Local · Palm Social Club · Palm Republic · PALMFEST · Sage Em · Cinnamon Shore
 */

export type GalleryImage = {
  src: string;
  alt: string;
  /** "wide" = aspect 16:9-ish, "tall" = portrait, "square" = ~1:1 */
  shape?: "wide" | "tall" | "square";
};

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
  live_url?: string; // public-facing URL if the brand is live
  live_url_label?: string; // display label, defaults to the URL hostname
  hero?: GalleryImage; // top-of-page hero image
  gallery?: GalleryImage[]; // additional images sprinkled through the case study
  /** Alternative to hero image — renders the card's photo-area as a Forest Teal
   *  panel with this quote text. Used for Sage Em per home page mockup. */
  feature_quote?: string;
  /** When true, the home-page tile renders photo + title only (no eyebrow,
   *  body, or read-case-study link). Used for Cinnamon Shore per mockup. */
  card_minimal?: boolean;
  /** When true, the case study detail page skips the H1 title in the header
   *  because the hero banner already contains the title typography. */
  hero_has_title?: boolean;
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
    live_url: "https://theportalocal.com",
    live_url_label: "theportalocal.com",
    hero: {
      src: "/work/port-a-local/hero.jpg",
      alt: "Port A Local — aerial drone shot of the Port Aransas pier and Gulf surf with coral lighthouse mark and tagline 'Discover Port Aransas Like a Local'",
      shape: "wide",
    },
    hero_has_title: true,
  },
  {
    slug: "palm-social-club",
    title: "The Palm Social Club",
    kind: "Brand + Hospitality Design",
    client: "Palm Family Ventures · Port Aransas, TX",
    year: "2022–present",
    scope: [
      "Brand concept",
      "Hospitality design",
      "Creative direction",
      "Interior + spatial design",
      "Programming + experience strategy",
    ],
    hook_short:
      "Hospitality brand built as an immersive experience — not just a venue. Brand, environment, and programming developed together so music, design, and community intersect by design.",
    challenge:
      "Port Aransas is a coastal town built on tourism, but its bar scene defaulted to predictable formats — beach bars, sports bars, surf shops with taps. The Palm Family Ventures team wanted something rooted in the creative culture of the town: a hospitality concept that locals would treat as their own, that visitors would seek out, and that worked equally as a music venue, a daytime hang, and a late-night room.",
    hook:
      "Don't design a bar that hosts music — design a brand that lives in music, design, and community equally, then build the room around it. Most hospitality projects bolt branding onto an interior after the fact. The Palm Social Club was conceived from the brand outward — the visual language, atmosphere, and programming developed together so the venue felt designed for the experience it was meant to host.",
    strategy: [
      "Led concept development and brand identity from inception",
      "Directed interior experience, visual language, and spatial design as one cohesive system",
      "Drew the visual direction from vintage hospitality, coastal modernism, and Port Aransas history — refined aesthetic with approachable, inviting energy",
      "Built a six-color palette (warm black, dark green, sage, mustard, coral, magenta) that scaled from menus to merchandise to signage",
      "Oversaw creative across brand, environment, and programming — managed collaboration across design, build, and operations teams",
    ],
    outcome: [
      "Established a strong cultural presence within the Port Aransas community",
      "Became a central gathering space for locals, visitors, musicians, and creatives",
      "Curated music program + elevated beverage program + thoughtfully appointed environment create a distinct sense of place",
      "Repeat-engagement venue model — visitors return because the brand experience is the product, not the drink list",
    ],
    cta:
      "Building a hospitality brand where the venue, the brand, and the experience need to feel like one decision? Let's talk.",
    status: "live",
    hero: {
      src: "/work/palm-social-club/hero.jpg",
      alt: "The Palm Social Club — green wood-slat sign with gold lettering and three signature cocktails on the bar",
      shape: "wide",
    },
  },
  {
    slug: "palm-republic",
    title: "The Palm Republic",
    kind: "Lifestyle Brand + Retail",
    client: "Palm Family Ventures · Port Aransas, TX",
    year: "2017–present",
    scope: [
      "Brand identity system",
      "Product strategy",
      "Retail environment design",
      "Creative direction + collaborations",
    ],
    hook_short:
      "Lifestyle brand born from disaster relief — a single flag and t-shirt fundraiser that evolved into a brand platform rooted in resilience, pride, and community identity.",
    challenge:
      "Port Aransas was devastated by Hurricane Harvey in 2017. The town needed a unifying symbol — something locals could rally around and visitors could carry home as a marker of solidarity. The brief: build a brand that worked simultaneously as a fundraiser, an identity for the community, and the beginning of something that could outlive the recovery itself.",
    hook:
      "Build the brand as a cultural platform, not a product line. Most lifestyle brands start with a product and bolt meaning on later. The Palm Republic was built the other way — meaning first, products as the carrier. Every shirt, sticker, and storefront has to mean something to the community wearing it. That ordering is why the brand outlived the moment that started it.",
    strategy: [
      "Developed a scalable brand system across retail, product, and digital platforms",
      "Built a logo family, typography system, and coastal-inspired color palette applied across apparel, packaging, retail, and digital",
      "Designed multiple retail environments — integrated merchandising, storytelling, and spatial design into one consistent brand experience",
      "Directed creative collaborations (GET OUTSIDE × PALM REPUBLIC) extending the brand into new product categories",
      "Positioned the brand as a cultural platform — events, partnerships, and community engagement woven into the brand's operating rhythm",
    ],
    outcome: [
      "Operates as both a commercial business AND a cultural platform — connecting people through place and shared identity",
      "Multiple permanent retail environments built and operating",
      "Brand serves as platform for community events, partnerships, and cultural engagement",
      "What began as a single flag + t-shirt fundraiser is now a multi-channel lifestyle brand with sustained customer loyalty",
    ],
    cta:
      "Building a lifestyle brand that needs to stand for something beyond what it sells? Let's talk.",
    status: "live",
    hero: {
      src: "/work/palm-republic/hero.jpg",
      alt: "The Palm Republic — heather-grey trucker cap with Port Aransas flag patch, sitting on coastal rocks",
      shape: "wide",
    },
  },
  {
    slug: "palmfest",
    title: "PALMFEST",
    kind: "Event Brand + Experiential Marketing",
    client: "Palm Family Ventures · Port Aransas, TX",
    year: "2020–present",
    scope: [
      "Brand identity",
      "Creative direction",
      "Festival design + experiential marketing",
      "Multi-channel campaign execution",
    ],
    hook_short:
      "Community-driven music + lifestyle festival that grew from small-scale event into multi-day cultural staple. Flexible brand system scaled across five years of festival growth.",
    challenge:
      "A community-driven music and lifestyle festival in a coastal town competing against established Texas festivals (ACL, SXSW, Float Fest) with thousand-times the marketing budget. The festival needed a brand identity strong enough to be recognized regionally, flexible enough to scale from year-to-year, and rooted enough in Port Aransas to feel native — not transplanted.",
    hook:
      "Build a brand system that grows with the festival, not one that needs to be rebuilt every year. Most festival branding gets reinvented annually — new posters, new lineup graphics, new website. PALMFEST was designed as a flexible visual system that scaled across five years of growth, expanding into new venues + audiences while keeping the same recognizable identity.",
    strategy: [
      "Built brand identity + creative direction as a flexible system, not a one-year campaign",
      "Extended the brand across signage, merchandise, sponsorship activations, social media, and web — all rendering from one visual system",
      "Designed as a fully immersive brand experience — stage design, signage, merch, and digital all part of the same scalable identity",
      "Adapted identity to new venues and audiences as the festival grew across years",
      "Partnered with local organizations on scholarships and arts initiatives — woven the fundraising into the brand activation",
    ],
    outcome: [
      "62% increase in total festival revenue",
      "76% growth in festival attendance",
      "77% of ticket sales tracked to web marketing campaigns",
      "48% year-over-year web traffic increase in 2025",
      "Evolved from small-scale community event into multi-day cultural festival blending arts, music, culinary, and community",
    ],
    cta:
      "Building a brand for an event — and you want the brand to scale with the event year over year? Let's talk.",
    status: "live",
    hero: {
      src: "/work/palmfest/hero.jpg",
      alt: "PALMFEST main stage with giant letter installation, festival crowd, palm trees, and the Gulf in the background",
      shape: "wide",
    },
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
    live_url: "https://sageem.co",
    live_url_label: "sageem.co",
    feature_quote:
      "One system.\nEvery building.\nEngineered for the spaces it protects.",
  },
  {
    slug: "cinnamon-shore",
    title: "Cinnamon Shore",
    kind: "Hospitality + Real Estate",
    client: "Cinnamon Shore Resort & Realty · Port Aransas, TX",
    year: "2015–2017",
    scope: [
      "Brand transformation",
      "Marketing strategy",
      "In-house team build",
      "Agency direction",
      "Performance + paid marketing",
    ],
    hook_short:
      "Brand and marketing transformation for a luxury coastal resort + real estate brand — aligning identity, messaging, and customer experience to support scalable growth.",
    challenge:
      "A luxury coastal resort and real estate brand on the Texas Gulf Coast with no cohesive brand identity, fragmented marketing across channels, and no internal marketing team structure or agency partner. Growth was capped not by demand but by the absence of a unified system to convert it.",
    hook:
      "Build the brand-and-marketing system the company should have started with — identity, team, agency partner, and performance discipline as one decision. Most growth-stage hospitality brands try to bolt marketing on piece by piece (an ad agency here, a freelance designer there). The Cinnamon Shore engagement proved the inverse: stand up the entire system at once, with one operator holding the integration line, and the channels start compounding inside a year.",
    strategy: [
      "Led brand transformation — aligned identity, messaging, and customer experience as one scalable visual + messaging system",
      "Built a dynamic in-house marketing team from scratch",
      "Sourced and hired the right creative agency partner; directed agency work across paid, social, email, and web",
      "Defined positioning and growth strategy at the leadership level",
      "Oversaw digital, paid, and performance execution end-to-end — improving acquisition, conversion, and overall performance",
    ],
    outcome: [
      "37% increase in total revenue",
      "68% of bookings tracked to web marketing campaign efforts",
      "224% increase in call volume",
      "Scalable marketing foundation built — internal team + agency partnership + performance discipline operating as one system",
      "Strengthened customer journey and unified brand experience across channels",
    ],
    cta:
      "Standing up the marketing function for a hospitality, real estate, or growth-stage brand — and you want someone to own the brand-and-system integration, not just one channel? Let's talk.",
    status: "live",
    hero: {
      src: "/work/cinnamon-shore/hero.jpg",
      alt: "Cinnamon Shore aerial — pastel beach houses lining the dunes, with surf in the foreground",
      shape: "wide",
    },
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return CASE_STUDIES.find((c) => c.slug === slug);
}
