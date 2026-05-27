/**
 * Branding page data — selected branding identities that translated beyond
 * the design book across industries, products, events and lived experiences.
 *
 * Each entry uses ONE pre-laid composition image (designed by C in Canva,
 * exported as a single composition) — this preserves her design control
 * end-to-end. The page just renders name + location + image per brand.
 */

export type BrandingExample = {
  slug: string;
  name: string;
  location: string;
  composition: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
};

export const BRANDING_EXAMPLES: BrandingExample[] = [
  {
    slug: "palm-social-club",
    name: "The Palm Social Club",
    location: "Port Aransas, Texas",
    composition: {
      src: "/branding/psc.jpg",
      alt: "The Palm Social Club brand identity translated across moodboard, interior, exterior, signage, brand-mark variations, cocktails, social presence, and live programming",
      width: 2400,
      height: 2000,
    },
  },
  {
    slug: "palm-republic",
    name: "The Palm Republic",
    location: "Port Aransas, Texas",
    composition: {
      src: "/branding/palm-republic.jpg",
      alt: "The Palm Republic brand identity translated across the full brand book (primary flag logo, secondary marks, yacht club + university lockups, color palette, pattern), apparel (flag tee, hats, duffels), retail interior, in-store merchandising, and lived community use on the beach and the water",
      width: 2400,
      height: 2000,
    },
  },
  {
    slug: "palmfest",
    name: "PALMFEST",
    location: "Port Aransas, Texas",
    composition: {
      src: "/branding/palmfest.jpg",
      alt: "PALMFEST event brand translated across festival signage, crowd-scale activations, performer stages, multi-year poster series, merch, social presence, and beach-side programming",
      width: 2400,
      height: 2000,
    },
  },
];
