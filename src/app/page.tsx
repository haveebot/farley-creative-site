/**
 * Home — Phase 1, restructured to match Collie's IA notes (2026-05-25):
 *
 *   Hero → Meet Collie → Selected work → Packages → Who we've worked with
 *   → Contact CTA → Footer
 *
 * Brand-kit foundation: Warm Black on Cream, Butter Yellow CTA, Times italic
 * pull-quote treatment. Sections are deliberately parallelable (per IMG_3037)
 * so each one can be a deeper page later.
 */

import Image from "next/image";
import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { Reveal } from "@/components/Reveal";
import { CASE_STUDIES } from "@/lib/case-studies";

export default function HomePage() {
  return (
    <main>
      <HeaderNav />

      {/* HERO — black band, centered wordmark + spaced-caps tagline. */}
      <section className="bg-warm-black text-cream flex flex-col items-center justify-center px-6 py-24 md:py-32">
        <div className="text-center">
          <p className="font-serif italic text-butter-yellow text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight animate-fade-in">
            farley<span className="font-sans not-italic font-bold text-cream">creative</span>
          </p>
          <p className="mt-8 md:mt-10 text-[11px] sm:text-xs md:text-sm tracking-[0.32em] uppercase text-cream/85 animate-fade-in-delayed">
            Bridging the gap between creative and conversion
          </p>
        </div>
      </section>

      {/* ABOUT — full-bleed two-column: butter-yellow body on left, vertical
          cream+butter stripe panel on right, soft-mint pill CTA overlaid. */}
      <section id="about" className="text-warm-black">
        <div className="grid grid-cols-1 md:grid-cols-12 items-stretch">
          <Reveal className="md:col-span-8 bg-butter-yellow px-6 md:px-16 py-20 md:py-24">
            <div className="max-w-2xl ml-auto">
              <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-10">
                Strategic marketing partners — zero fluff, immediate execution.
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-6">
                Farley Creative bridges the gap between creative and conversion —
                translating creative vision into scalable systems that connect
                brand, space, events, and marketing. Founded by Collie Farley, with
                experience spanning hospitality, retail, real estate, non-profit,
                and lifestyle brands.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We blend the high-touch, fast-paced adaptability of a seasoned
                freelancer with the founder-first perspective and comprehensive
                power of a full-service agency. We&apos;ve mastered the art of
                moving fast, testing what works, and pivoting strategies at the
                rate of business.
              </p>
            </div>
          </Reveal>
          <div className="md:col-span-4 relative stripe-panel-butter min-h-[220px] md:min-h-0 flex items-center justify-center py-12 md:py-0">
            <Link
              href="/about"
              className="inline-block bg-soft-mint text-forest-teal text-xs md:text-sm uppercase tracking-[0.28em] px-10 py-5 hover:bg-forest-teal hover:text-cream transition shadow-sm"
            >
              About →
            </Link>
          </div>
        </div>
      </section>

      {/* SELECTED WORK — 6 case studies per Collie's mockup (PAL, PSC, Palm Republic, PALMFEST, Sage Em, Cinnamon Shore) */}
      <section id="work" className="bg-cream text-warm-black px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <Reveal className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-4">
                Selected work
              </p>
              <h2 className="text-3xl md:text-4xl font-serif italic leading-tight max-w-2xl">
                Brand systems that live in physical spaces, on screens, and at
                events.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
            {CASE_STUDIES.map((c, i) => (
              <Reveal key={c.slug} delay={i * 80}>
              <Link
                href={`/work/${c.slug}`}
                className="block group h-full flex flex-col"
              >
                {c.hero ? (
                  <div className="relative aspect-[16/9] bg-warm-black/5 overflow-hidden">
                    <Image
                      src={c.hero.src}
                      alt={c.hero.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className={`${c.hero.shape === "tall" ? "object-contain" : "object-cover"} group-hover:scale-105 transition-transform duration-500`}
                    />
                  </div>
                ) : c.feature_quote ? (
                  <div className="aspect-[16/9] bg-forest-teal text-butter-yellow flex items-center px-8 md:px-10">
                    <blockquote className="font-serif italic text-lg md:text-2xl leading-snug whitespace-pre-line">
                      {c.feature_quote}
                    </blockquote>
                  </div>
                ) : (
                  <div className="aspect-[16/9] bg-warm-black/5"></div>
                )}
                {c.card_minimal ? (
                  <div className="pt-6 pb-2">
                    <h3 className="text-xl md:text-2xl font-semibold">{c.title}</h3>
                  </div>
                ) : (
                  <div className="pt-6 flex flex-col flex-1">
                    <div className="flex items-baseline justify-between mb-3 gap-2">
                      <p className="text-[10px] uppercase tracking-[0.25em] text-warm-black/70">
                        {c.kind}
                      </p>
                      {c.live_url && (
                        <span className="text-[9px] uppercase tracking-[0.2em] text-butter-yellow bg-warm-black px-2 py-1 rounded-sm shrink-0">
                          ● Live
                        </span>
                      )}
                    </div>
                    <h3 className="text-xl md:text-2xl font-semibold mb-3">{c.title}</h3>
                    <p className="text-sm md:text-base leading-relaxed text-warm-black/80 mb-5 flex-1">
                      {c.hook_short}
                    </p>
                    <div className="flex items-baseline justify-between gap-3 mt-auto">
                      <p className="text-xs italic text-warm-black/60 group-hover:text-forest-teal transition">
                        Read case study →
                      </p>
                      {c.live_url && (
                        <span className="text-[10px] uppercase tracking-[0.2em] text-warm-black/60">
                          {c.live_url_label}
                        </span>
                      )}
                    </div>
                  </div>
                )}
              </Link>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link
              href="/work"
              className="text-xs uppercase tracking-[0.25em] text-forest-teal border border-forest-teal px-6 py-3 hover:bg-forest-teal hover:text-cream transition"
            >
              View all work →
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE'VE WORKED WITH — logo strip placeholder */}
      <section className="bg-soft-mint text-warm-black px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-8 text-center">
            Who we&apos;ve worked with
          </p>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4 items-center justify-items-center">
            {CLIENT_LOGOS.map((name) => (
              <div
                key={name}
                className="text-xs md:text-sm font-medium text-warm-black/60 tracking-wider uppercase text-center"
                title={name}
              >
                {name}
              </div>
            ))}
          </div>
          <p className="text-[11px] text-warm-black/40 text-center mt-8 italic">
            (Logos to follow — placeholder names while client marks are sourced.)
          </p>
        </div>
      </section>

      {/* PACKAGES — 5 productized offerings per Collie's notes */}
      <section id="packages" className="bg-cream text-warm-black px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-4">
            Packages
          </p>
          <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-4 max-w-2xl">
            Tiered, transparent, customized to your business.
          </h2>
          <p className="text-base text-warm-black/75 leading-relaxed max-w-2xl mb-12">
            Project-based brand work and monthly social media retainers, with
            clear deliverables and starting prices. Every engagement gets
            shaped to scope.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link
              href="/packages#brand-marketing"
              className="block border border-warm-black/15 p-8 hover:border-forest-teal transition group"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-3">
                Project-based · 4 tiers
              </p>
              <h3 className="text-2xl font-serif italic mb-3">
                Brand &amp; Marketing
              </h3>
              <p className="text-sm leading-relaxed text-warm-black/75 mb-4">
                Identity · Branding · Brand Launch · Enterprise Rebrand. From
                logo systems to full rebrands and launches.
              </p>
              <p className="text-sm font-semibold mb-1">From $500</p>
              <p className="text-xs italic text-forest-teal opacity-60 group-hover:opacity-100 transition mt-4">
                See all tiers →
              </p>
            </Link>
            <Link
              href="/packages#social-media"
              className="block border border-warm-black/15 p-8 hover:border-forest-teal transition group"
            >
              <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-3">
                Monthly retainer · 4 tiers
              </p>
              <h3 className="text-2xl font-serif italic mb-3">
                Social Media
              </h3>
              <p className="text-sm leading-relaxed text-warm-black/75 mb-4">
                Seed · Foundation · Growth · Enterprise. Strategy, content,
                paid amplification — built to compound.
              </p>
              <p className="text-sm font-semibold mb-1">From $500/mo</p>
              <p className="text-xs italic text-forest-teal opacity-60 group-hover:opacity-100 transition mt-4">
                See all tiers →
              </p>
            </Link>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/packages"
              className="text-xs uppercase tracking-[0.25em] text-forest-teal border border-forest-teal px-6 py-3 hover:bg-forest-teal hover:text-cream transition"
            >
              View all packages →
            </Link>
          </div>
        </div>
      </section>

      {/* PULL QUOTE — editorial moment */}
      <section className="bg-warm-black text-cream px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <blockquote className="pull-quote text-2xl md:text-3xl leading-snug text-cream">
            Creating brand identities and storytelling that translates business
            values into emotional connections is our love language.
          </blockquote>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section id="contact" className="bg-cream text-warm-black px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
            Let&apos;s get acquainted
          </p>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
            Tell us what you&apos;re building.
          </h2>
          <Link
            href="/contact"
            className="inline-block bg-butter-yellow text-warm-black px-10 py-4 font-medium tracking-wide hover:opacity-90 transition"
          >
            Start the conversation →
          </Link>
          <p className="mt-8 text-sm text-warm-black/60">
            collie@farleycreative.com · 210.709.5771
          </p>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

/**
 * Per Collie's IMG_3037 logo strip — using working names while client marks
 * are sourced from her assets.
 */
const CLIENT_LOGOS = [
  "PSL",
  "PSC",
  "Sage",
  "Cinnamon Shore",
  "Crystal",
  "White Pony",
  "Watermark",
  "Pattern",
  "Daniel's",
  "Brownsville",
  "PALMFEST",
  "Port A Local",
];
