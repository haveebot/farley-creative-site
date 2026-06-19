/**
 * /design-services data.
 *
 * Each section is a single pre-laid composition designed by C in Canva
 * (design DAHLpGJGHmo "Farley Creative Design Services"), exported as one
 * image so her design intent stays intact end-to-end — same pattern as
 * /branding. The page renders: hero (with a real CTA over the pictured
 * button) → selected work → Christi (consultation / interiors / fine art)
 * → closing CTA.
 *
 * Source PNGs: 2400×2000 each. Optimized to JPG in public/design-services/.
 */

export type DesignImage = {
  slug: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  /**
   * Section background, sampled to match this image's own backdrop so the
   * image edges blend seamlessly into the page instead of leaving a faint
   * near-match seam against cream. Each of C's compositions sits on a
   * slightly different neutral, so the background is matched per-section.
   */
  bg: string;
  /** Small forest-teal eyebrow rendered above the image (optional). */
  eyebrow?: string;
  /** When true, the section flows under the previous one (no divider / tight top). */
  tight?: boolean;
  /**
   * A real link overlaid on a button pictured inside the composition (same
   * trick as the hero's "Let's Start Designing" CTA). Coords are percentages
   * of the image, so the hit area tracks the button at every viewport width.
   */
  cta?: {
    href: string;
    /** sr-only label announced for the link. */
    label: string;
    left: string;
    top: string;
    width: string;
    height: string;
  };
};

export const DS_HERO: DesignImage = {
  slug: "hero",
  src: "/design-services/hero.jpg",
  alt: "Farley Creative — graphic design, fine art, and consultation services. If it involves design, we can do it. No project too small.",
  width: 2400,
  height: 2000,
  bg: "#FCF9F2",
};

export const DS_SECTIONS: DesignImage[] = [
  {
    slug: "selected-work",
    src: "/design-services/portfolio-1.jpg",
    alt: "Selected Farley Creative design work — brand moodboards, luxury identity systems, real-estate marketing for RK Projects, product packaging, and event invitation suites.",
    width: 2400,
    height: 2000,
    bg: "#F0EDEA",
    eyebrow: "Selected Work",
  },
  {
    slug: "product-and-print",
    src: "/design-services/portfolio-2.jpg",
    alt: "More Farley Creative work — Palm Republic apparel and patches, custom-printed shipping boxes, posters, and invitation designs.",
    width: 2400,
    height: 2000,
    bg: "#E5E2E1",
    tight: true,
  },
  {
    slug: "meet-christi",
    src: "/design-services/meet-christi.jpg",
    alt: "Meet Christi Farley — Art and Interior Design Consultant for Farley Creative. A retired interior designer with 34 years at the Susan Castor Collection and a degree in fine arts, available for commissioned original watercolor art, architectural watercolor renderings, and select interior design projects.",
    width: 2400,
    height: 1590,
    bg: "#F2EEEC",
    cta: {
      href: "/contact",
      label: "Reach out to commission Christi — get in touch",
      left: "9.8%",
      top: "88.5%",
      width: "25.3%",
      height: "9.2%",
    },
  },
  {
    slug: "interiors",
    src: "/design-services/interiors.jpg",
    alt: "Interiors designed by Christi Farley — coastal Texas interiors with built-in bunk nooks, layered textiles, and curated coastal details.",
    width: 2400,
    height: 2000,
    bg: "#FFFFFF",
  },
  {
    slug: "fine-art",
    src: "/design-services/fine-art.jpg",
    alt: "Fine art originals by Christi Farley — coastal watercolor paintings of shorebirds, pelicans, beach scenes, tarpon, and palms.",
    width: 2400,
    height: 2000,
    bg: "#DBD5CF",
  },
];
