/**
 * Home — Phase 1 scaffold.
 *
 * Brand-kit foundation: Warm Black on Cream, Butter Yellow CTA, Times italic
 * pull-quote treatment, restrained motion. Content lifted from the Hub's
 * studio brand kit verbatim.
 */

export default function HomePage() {
  return (
    <main>
      {/* Hero — black backdrop, butter-yellow wordmark, restrained */}
      <section className="bg-warm-black text-cream min-h-[80vh] flex flex-col items-center justify-center px-6 py-20">
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

      {/* Studio intro — first-person founder-operator framing */}
      <section className="bg-cream text-warm-black px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
            The studio
          </p>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
            A founder-operator marketing and branding agency translating creative
            vision into scalable systems.
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

      {/* What we do — six services, restrained list */}
      <section className="bg-cream text-warm-black px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
            What we do
          </p>
          <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-12 max-w-2xl">
            Customized to the needs of the individual business — never
            one-size-fits-all.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {SERVICES.map((s) => (
              <div key={s.title}>
                <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
                <p className="text-sm leading-relaxed text-warm-black/80">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull quote — refined editorial moment */}
      <section className="bg-soft-mint text-warm-black px-6 py-24">
        <div className="max-w-3xl mx-auto">
          <blockquote className="pull-quote text-2xl md:text-3xl leading-snug">
            Creating brand identities and storytelling that translates business
            values into emotional connections is our love language.
          </blockquote>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-warm-black text-cream px-6 py-24">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-6">
            Let&apos;s get acquainted
          </p>
          <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
            Tell us what you&apos;re building.
          </h2>
          <a
            href="mailto:collie@farleycreative.com"
            className="inline-block bg-butter-yellow text-warm-black px-10 py-4 font-medium tracking-wide hover:opacity-90 transition"
          >
            Start the conversation →
          </a>
          <p className="mt-8 text-sm text-cream/60">
            collie@farleycreative.com · 210.709.5771
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-warm-black text-cream/60 border-t border-cream/10 px-6 py-10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {new Date().getFullYear()} Farley Creative</p>
          <p className="font-serif italic">Where creative meets conversion.</p>
        </div>
      </footer>
    </main>
  );
}

const SERVICES = [
  {
    title: "Brand strategy + visual identity systems",
    body: "From positioning to logo system to brand book — the strategic and visual foundation a brand grows on for years, not a one-off rebrand exercise.",
  },
  {
    title: "Multi-channel marketing",
    body: "Social, paid, content, email, web. Coordinated execution across the channels that compound, not one-off campaigns that don't.",
  },
  {
    title: "Brand experiences across physical + digital environments",
    body: "Storefronts, popups, events, websites, social — the same brand felt the same way wherever a customer meets it.",
  },
  {
    title: "Event design + execution",
    body: "Brand-aligned events from concept to fruition. The kind of weekend a customer talks about for a year.",
  },
  {
    title: "Retail, hospitality, lifestyle brand development",
    body: "Industries where the brand IS the product. We build the brand systems that make the rest possible.",
  },
  {
    title: "AI + technology integration",
    body: "Operational systems that scale a small team. AI is a tool we use — not the brand position.",
  },
];
