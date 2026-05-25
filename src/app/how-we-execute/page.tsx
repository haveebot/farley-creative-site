/**
 * /how-we-execute — the "How we execute" page Collie referenced in IMG_3035
 * (the cold-email landing). Walks through the firm's operating principles
 * so prospects know what they're signing on to.
 */

import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";

export const metadata = {
  title: "How we execute",
  description:
    "Founder-operator framing. Customized to your business. Operational efficiency over coverage. How Farley Creative actually works.",
};

export default function HowWeExecutePage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        <header className="px-6 pt-24 pb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              How we execute
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              We&apos;ve been on the other side of the table.
            </h1>
            <p className="text-base md:text-lg max-w-2xl text-warm-black/75 leading-relaxed">
              Farley Creative is founder-operator-led. We&apos;ve signed
              checks, hired teams, and owned P&amp;Ls — so when we recommend a
              direction, it&apos;s shaped by the cost of being wrong, not by
              what looks good in a deck.
            </p>
          </div>
        </header>

        <section className="px-6 pb-16">
          <div className="max-w-3xl mx-auto space-y-16">
            {PRINCIPLES.map((p, i) => (
              <article key={p.title} className="border-l-2 border-forest-teal pl-8">
                <p className="text-forest-teal text-xs font-medium tracking-widest mb-4">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="text-2xl md:text-3xl font-serif italic leading-tight mb-4">
                  {p.title}
                </h2>
                <p className="text-base md:text-lg leading-relaxed text-warm-black/85">
                  {p.body}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* The in-house vs. agency callout — per IMG_3034 #4 */}
        <section className="bg-soft-mint text-warm-black px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              In-house vs. partnership
            </p>
            <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-10 max-w-2xl">
              We aren&apos;t fractional. We&apos;re retained.
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-warm-black/15 bg-cream p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-warm-black/50 mb-3">
                  Hiring in-house
                </p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>Salary + benefits + training overhead</li>
                  <li>3–6 months to ramp on your business</li>
                  <li>One person&apos;s skill set</li>
                  <li>Hiring risk if the fit isn&apos;t right</li>
                </ul>
              </div>
              <div className="border-2 border-forest-teal bg-cream p-8">
                <p className="text-xs uppercase tracking-[0.25em] text-forest-teal mb-3">
                  Farley Creative
                </p>
                <ul className="space-y-2 text-sm leading-relaxed">
                  <li>Costs less than a senior salary</li>
                  <li>Plug in &amp; begin executing within 7–30 days</li>
                  <li>Strategy, design, copy, paid, social — one team</li>
                  <li>Scope-tight, retainer-clean, no hiring risk</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-warm-black text-cream px-6 py-24">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-6">
              Ready to start?
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
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}

const PRINCIPLES = [
  {
    title: "Customized — never one-size-fits-all.",
    body: "Every business gets shaped to its individual needs. We don't have a template engagement. We have a way of working — observe deeply, design for the actual problem, ship work that earns its space — that flexes to your stage, your team, and your constraints.",
  },
  {
    title: "Direct about trade-offs.",
    body: "We'll tell you when something's a bad fit, when a vendor's quoting you wrong, or when the problem you came to us with isn't actually the problem. Refusing to upsell is part of the service.",
  },
  {
    title: "Story first. Design serves the story.",
    body: "Founded on a journalism foundation — narrative is the through-line. Great marketing isn't selling, it's storytelling, and it begins with observation and deep understanding of how your customers actually behave.",
  },
  {
    title: "Specific, not vague. Numbers, not adjectives.",
    body: "Outcomes are measured. We come back with what worked, what didn't, and what we'd do differently — not with a deck full of impressions and vibes.",
  },
  {
    title: "Calm yet authoritative.",
    body: "Grounded confidence, not performative expertise. We don't ideate, leverage, pivot, or circle back. We do the work, ship the thing, and tell you the truth about how it went.",
  },
  {
    title: "Built to live in physical and digital environments.",
    body: "Storefronts, popups, events, websites, social — the same brand felt the same way wherever a customer meets it. We've designed the brand experiences across hospitality, retail, real estate, and lifestyle to do exactly that.",
  },
];
