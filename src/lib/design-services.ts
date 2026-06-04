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
  /** Small forest-teal eyebrow rendered above the image (optional). */
  eyebrow?: string;
  /** When true, the section flows under the previous one (no divider / tight top). */
  tight?: boolean;
};

export const DS_HERO: DesignImage = {
  slug: "hero",
  src: "/design-services/hero.jpg",
  alt: "Farley Creative — graphic design, fine art, and consultation services. If it involves design, we can do it. No project too small.",
  width: 2400,
  height: 2000,
};

export const DS_SECTIONS: DesignImage[] = [
  {
    slug: "selected-work",
    src: "/design-services/portfolio-1.jpg",
    alt: "Selected Farley Creative design work — brand moodboards, luxury identity systems, real-estate marketing for RK Projects, product packaging, and event invitation suites.",
    width: 2400,
    height: 2000,
    eyebrow: "Selected Work",
  },
  {
    slug: "product-and-print",
    src: "/design-services/portfolio-2.jpg",
    alt: "More Farley Creative work — Palm Republic apparel and patches, custom-printed shipping boxes, posters, and invitation designs.",
    width: 2400,
    height: 2000,
    tight: true,
  },
  {
    slug: "meet-christi",
    src: "/design-services/meet-christi.jpg",
    alt: "Fine art and design consultation — meet Christi Farley, Art and Interior Design Consultant for Farley Creative, available for commissions and interior design consultation.",
    width: 2400,
    height: 2000,
  },
  {
    slug: "interiors",
    src: "/design-services/interiors.jpg",
    alt: "Interiors designed by Christi Farley — coastal Texas interiors with built-in bunk nooks, layered textiles, and curated coastal details.",
    width: 2400,
    height: 2000,
  },
  {
    slug: "fine-art",
    src: "/design-services/fine-art.jpg",
    alt: "Fine art originals by Christi Farley — coastal watercolor paintings of shorebirds, pelicans, beach scenes, tarpon, and palms.",
    width: 2400,
    height: 2000,
  },
];
