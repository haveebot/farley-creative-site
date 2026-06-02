/**
 * LogoTicker — "Brands I've worked with" seamless marquee on a dark band.
 *
 * Per-logo heights are hand-tuned for balanced optical weight (wide wordmarks
 * like Stetson sit shorter; compact emblems like the Palm Republic + Port A
 * Local marks sit taller) so nothing dominates the row.
 *
 * Pure-CSS scroll (see .ticker-* in globals.css) — no client JS. Plain <img>
 * because the set mixes SVG + PNG and vectors need no next/image optimization.
 */

type Logo = { src: string; alt: string; h: number };

// Order interleaves emblems / wordmarks and studio brands / national brands
// so similar shapes don't clump as the row scrolls.
const LOGOS: Logo[] = [
  { src: "/brand/ticker/palm-republic.png", alt: "Palm Republic", h: 50 },
  { src: "/brand/ticker/stetson.svg", alt: "Stetson", h: 28 },
  { src: "/brand/ticker/cinnamon-shore.png", alt: "Cinnamon Shore", h: 42 },
  { src: "/brand/ticker/wrangler.svg", alt: "Wrangler", h: 38 },
  { src: "/brand/ticker/rk.png", alt: "RK Projects", h: 48 },
  { src: "/brand/ticker/whole-foods.svg", alt: "Whole Foods Market", h: 48 },
  { src: "/brand/ticker/the-cibolo.png", alt: "The Cibolo", h: 34 },
  { src: "/brand/ticker/cabelas.svg", alt: "Cabela's", h: 41 },
  { src: "/brand/ticker/port-a-local.png", alt: "Port A Local", h: 52 },
  { src: "/brand/ticker/jack-daniels.png", alt: "Jack Daniel's", h: 40 },
  { src: "/brand/ticker/palm-social-club.png", alt: "Palm Social Club", h: 40 },
  { src: "/brand/ticker/brons.png", alt: "Bron's Beach", h: 40 },
];

export function LogoTicker() {
  // Two copies back-to-back; the CSS translates -50% for a seamless loop.
  const loop = [...LOGOS, ...LOGOS];
  return (
    <section
      aria-label="Brands I've worked with"
      className="bg-warm-black py-12 md:py-16 overflow-hidden"
    >
      <p className="text-center text-[10px] uppercase tracking-[0.3em] text-cream/40 mb-9">
        Brands I&apos;ve worked with
      </p>
      <div className="ticker-viewport ticker-fade">
        <div className="ticker-track">
          {loop.map((l, i) => (
            <span
              key={i}
              className="shrink-0 flex items-center justify-center px-8 md:px-12"
              aria-hidden={i >= LOGOS.length}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={l.src}
                alt={l.alt}
                style={{ height: l.h }}
                className="w-auto opacity-80 hover:opacity-100 transition-opacity duration-300"
              />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
