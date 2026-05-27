/**
 * /packages — the full packages page.
 *
 * Two tier families per Collie's assets:
 *   - Brand & Marketing (project-based, 4 tiers)
 *   - Social Media (monthly retainer, 4 tiers)
 *
 * Plus a custom / single-serve callout for one-offs that don't fit.
 */

import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { PACKAGE_FAMILIES } from "@/lib/packages";

export const metadata = {
  title: "Packages",
  description:
    "Brand & Marketing project packages and Social Media monthly retainers. Tiered, transparent, customized to the needs of your business.",
};

export default function PackagesPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        <header className="px-6 pt-24 pb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              Packages
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              Customized to your business — never one-size-fits-all.
            </h1>
            <p className="text-base md:text-lg max-w-2xl text-warm-black/75 leading-relaxed">
              Brand &amp; Marketing packages for project-based engagements.
              Social Media packages for ongoing monthly retainers. All prices
              are starting points — scope shapes the final number, and
              we&apos;ll tell you if something&apos;s a bad fit.
            </p>
          </div>
        </header>

        {/* Beyond the tiers — open-scope block. Signals capability beyond
            the menu below: AI builds, custom back-end systems, complex
            multi-discipline projects with sourced talent. Whole block is
            a clickable link to /contact. */}
        <Link
          href="/contact"
          className="block bg-butter-yellow text-warm-black px-6 py-16 md:py-20 border-t border-warm-black/10 transition hover:bg-butter-yellow/90"
        >
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-warm-black/70 mb-6">
              Beyond the tiers
            </p>
            <p className="text-xl md:text-2xl leading-relaxed mb-8">
              Curious about AI? Need a complex back-end system built? Have an
              in-depth project in mind requiring high-tech nerds? Need a
              copywriter, editor, or someone to source the right photographer
              or PR partner?
            </p>
            <p className="text-2xl md:text-3xl font-serif italic">
              Let&apos;s talk. We do it. →
            </p>
          </div>
        </Link>

        {PACKAGE_FAMILIES.map((family) => (
          <section
            key={family.slug}
            className="px-6 py-16 border-t border-warm-black/10"
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-12 max-w-2xl">
                <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-3">
                  {family.cadence === "project" ? "Project-based" : "Monthly retainer"}
                </p>
                <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-4">
                  {family.name}
                </h2>
                <p className="text-base text-warm-black/75 leading-relaxed">
                  {family.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {family.tiers.map((tier) => (
                  <article
                    key={tier.slug}
                    className={`flex flex-col p-6 ${
                      tier.highlight
                        ? "bg-warm-black text-cream border-2 border-butter-yellow"
                        : "bg-cream border border-warm-black/15"
                    }`}
                  >
                    <header className="mb-5">
                      {tier.highlight && (
                        <p className="text-[10px] uppercase tracking-[0.25em] text-butter-yellow mb-2">
                          Most chosen
                        </p>
                      )}
                      <p
                        className={`text-[10px] uppercase tracking-[0.25em] ${
                          tier.highlight ? "text-butter-yellow" : "text-forest-teal"
                        } mb-2`}
                      >
                        {family.cadence === "project" ? "Project" : "Monthly"}
                      </p>
                      <h3 className="text-2xl font-serif italic mb-2">
                        {tier.name}
                      </h3>
                      <p
                        className={`text-3xl font-semibold ${
                          tier.highlight ? "text-butter-yellow" : "text-warm-black"
                        }`}
                      >
                        {tier.price}
                      </p>
                    </header>

                    <p
                      className={`text-sm italic mb-5 leading-relaxed ${
                        tier.highlight ? "text-cream/80" : "text-warm-black/70"
                      }`}
                    >
                      {tier.positioning}
                    </p>

                    <ul className="space-y-2 text-sm mb-6 flex-1">
                      {tier.deliverables.map((d, i) => (
                        <li
                          key={i}
                          className={`flex gap-2 ${
                            tier.highlight ? "text-cream/90" : "text-warm-black/85"
                          }`}
                        >
                          <span
                            className={`mt-1.5 shrink-0 w-1 h-1 rounded-full ${
                              tier.highlight ? "bg-butter-yellow" : "bg-forest-teal"
                            }`}
                          />
                          <span className="leading-relaxed">{d}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/contact?package=${family.slug}-${tier.slug}`}
                      className={`mt-auto text-xs uppercase tracking-[0.2em] py-3 text-center transition ${
                        tier.highlight
                          ? "bg-butter-yellow text-warm-black hover:opacity-90"
                          : "border border-warm-black/40 hover:border-forest-teal"
                      }`}
                    >
                      Start with {tier.name} →
                    </Link>
                  </article>
                ))}
              </div>

              {family.footnote && (
                <p className="mt-8 text-sm italic text-warm-black/65 max-w-2xl leading-relaxed">
                  {family.footnote}
                </p>
              )}
            </div>
          </section>
        ))}

        {/* Custom / single-serve */}
        <section className="bg-soft-mint px-6 py-20 border-t border-warm-black/10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-4">
              Don&apos;t fit a tier?
            </p>
            <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-6">
              Single serve.
            </h2>
            <p className="text-base md:text-lg leading-relaxed text-warm-black/80 mb-8 max-w-xl mx-auto">
              One project, one outcome. Brand book refresh, a campaign launch,
              an event execution, a website rebuild. Scoped tight, delivered
              clean. Tell us what you&apos;re building and we&apos;ll quote
              from there.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-warm-black text-cream px-10 py-4 font-medium tracking-wide hover:bg-warm-black/85 transition"
            >
              Start a conversation →
            </Link>
          </div>
        </section>

        {/* Transparency closer — replaces the previous generic "On pricing"
            disclaimer with C's sharper positioning copy. Same warm-black
            slot, same CTA, harder-hitting body. */}
        <section className="bg-warm-black text-cream px-6 py-20">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-4">
              On pricing
            </p>
            <p className="text-base md:text-lg leading-relaxed mb-10">
              Our pricing, time, and planning are always 100% transparent.
              There are agencies with hidden fees that pad the retainer — and
              then there&apos;s Farley Creative. Direct and ready.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-butter-yellow text-warm-black px-10 py-4 font-medium tracking-wide hover:opacity-90 transition"
            >
              Let&apos;s talk →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
