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

import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { CASE_STUDIES } from "@/lib/case-studies";

export default function HomePage() {
  return (
    <main>
      <HeaderNav />

      {/* HERO — black backdrop, butter-yellow wordmark, restrained */}
      <section className="bg-warm-black text-cream min-h-[88vh] flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-3xl text-center">
          <p className="font-serif italic text-butter-yellow text-5xl md:text-7xl tracking-tight">
            farley
            <span className="font-sans not-italic font-bold text-cream">
              creative
            </span>
          </p>
          <p className="mt-10 text-sm md:text-base tracking-[0.25em] uppercase text-cream/80">
            Bridges the gap between creative and conversion
          </p>
        </div>
      </section>

      {/* MEET COLLIE — first-person founder-operator framing */}
      <section id="about" className="bg-cream text-warm-black px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
            Meet Collie
          </p>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
            A founder-operator marketing and branding agency translating
            creative vision into scalable systems.
          </h2>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            I&apos;ve built and led brands across physical and digital
            environments — developing multi-channel campaigns, retail
            experiences, and large-scale events that connect strategy with
            execution.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-6">
            Creating brand identities and storytelling that translates business
            values into emotional connections is my love language. My approach
            drives long-term loyalty and engagement.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            I connect brand, space, events, and marketing to drive growth,
            engagement, and long-term value.
          </p>
        </div>
      </section>

      {/* Stripe break */}
      <div className="h-3 stripe-motif"></div>

      {/* SELECTED WORK — 5 case studies per Collie's notes */}
      <section id="work" className="bg-cream text-warm-black px-6 py-24">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between flex-wrap gap-6 mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-4">
                Selected work
              </p>
              <h2 className="text-3xl md:text-4xl font-serif italic leading-tight max-w-2xl">
                Brand systems that live in physical spaces, on screens, and at
                events.
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((c) => (
              <Link
                key={c.slug}
                href={`/work/${c.slug}`}
                className="block border border-warm-black/15 bg-cream p-8 hover:border-forest-teal transition group"
              >
                <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-3">
                  {c.kind}
                </p>
                <h3 className="text-xl font-semibold mb-3">{c.title}</h3>
                <p className="text-sm leading-relaxed text-warm-black/75 mb-4">
                  {c.hook_short}
                </p>
                <p className="text-xs italic text-forest-teal opacity-60 group-hover:opacity-100 transition">
                  Read case study →
                </p>
              </Link>
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
          <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-12 max-w-2xl">
            Customized to the needs of the individual business — never
            one-size-fits-all.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            {PACKAGES.map((p, i) => (
              <div key={p.title} className="border-l-2 border-forest-teal pl-6">
                <p className="text-xs text-forest-teal mb-2">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed text-warm-black/80">
                  {p.body}
                </p>
              </div>
            ))}
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
 * Per Collie's IMG_3036:
 *   Packages: Social Media · Branding · Web · Full Marketing · Single Serve
 */
const PACKAGES = [
  {
    title: "Social Media",
    body: "Calendar, content, paid amplification, community management — managed end-to-end or in collaboration with your in-house team. Built to compound, not flame out.",
  },
  {
    title: "Branding",
    body: "Brand strategy, visual identity systems, brand book. The foundation a brand grows on for years — not a one-off rebrand.",
  },
  {
    title: "Web",
    body: "Sites that are extensions of the brand — not templates. Built on Next.js for speed, Vercel for stability, your CMS-of-choice for content control.",
  },
  {
    title: "Full Marketing",
    body: "The whole stack — brand, social, paid, content, email, web — coordinated across the channels that compound. Closest thing to having a CMO without the salary line.",
  },
  {
    title: "Single Serve",
    body: "One project, one outcome. Brand book refresh, a campaign launch, a website rebuild, an event execution. Scoped tight, delivered clean.",
  },
];

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
