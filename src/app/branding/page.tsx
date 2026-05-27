/**
 * /branding — Branding Beyond the Book.
 *
 * A visual showcase of selected branding identities that translated beyond
 * the design book — across industries, products, events, and lived experiences.
 *
 * Each brand example is a single pre-laid composition designed by C in Canva,
 * exported as one image so her design intent stays intact end-to-end. The
 * page renders: header → per-brand (name + location + composition) → CTA.
 */

import Image from "next/image";
import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { BRANDING_EXAMPLES } from "@/lib/branding";

export const metadata = {
  title: "Branding Beyond the Book",
  description:
    "Selected branding identities that translated beyond the design book — spanning industries, products, events, and lived experiences.",
};

export default function BrandingPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        <header className="px-6 pt-24 pb-16">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              Branding
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              Branding Beyond the Book.
            </h1>
            <p className="text-base md:text-lg max-w-2xl text-warm-black/75 leading-relaxed">
              Selected branding identities that translated beyond the design
              book — spanning industries, products, events, and lived
              experiences.
            </p>
          </div>
        </header>

        {BRANDING_EXAMPLES.map((example) => (
          <section
            key={example.slug}
            id={example.slug}
            className="px-6 py-16 border-t border-warm-black/10"
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-serif italic leading-tight mb-2">
                  {example.name}
                </h2>
                <p className="text-xs uppercase tracking-[0.3em] text-forest-teal">
                  {example.location}
                </p>
              </div>
              <Image
                src={example.composition.src}
                alt={example.composition.alt}
                width={example.composition.width}
                height={example.composition.height}
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="w-full h-auto block"
                priority={example.slug === BRANDING_EXAMPLES[0].slug}
              />
            </div>
          </section>
        ))}

        {/* CTA */}
        <section className="bg-warm-black text-cream px-6 py-20 border-t border-cream/10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-6">
              Brand identity, built to live in the world
            </p>
            <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
              Let&apos;s build yours.
            </h2>
            <Link
              href="/contact"
              className="inline-block bg-butter-yellow text-warm-black px-10 py-4 font-medium tracking-wide hover:opacity-90 transition"
            >
              Start a conversation →
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
