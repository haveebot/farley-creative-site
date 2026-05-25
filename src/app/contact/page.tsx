import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "Contact",
  description:
    "Tell us what you're building. Brand strategy, identity, multi-channel marketing, event design, retail/hospitality brand development.",
};

export default function ContactPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        <header className="px-6 pt-24 pb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              Let&apos;s get acquainted
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              Tell us what you&apos;re building.
            </h1>
            <p className="text-base md:text-lg max-w-xl text-warm-black/75 leading-relaxed">
              Brand identity. Multi-channel marketing. Brand experiences across
              physical and digital. Event design. The whole stack or a single
              project — we&apos;ll tell you what&apos;s a fit and what isn&apos;t.
            </p>
          </div>
        </header>

        <section className="px-6 pb-24">
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </section>

        <section className="bg-warm-black text-cream/80 px-6 py-12 border-t border-cream/10">
          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-3">
                Email
              </p>
              <a
                href="mailto:collie@farleycreative.com"
                className="text-base hover:text-butter-yellow transition"
              >
                collie@farleycreative.com
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-3">
                Phone
              </p>
              <a
                href="tel:+12107095771"
                className="text-base hover:text-butter-yellow transition"
              >
                210.709.5771
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
