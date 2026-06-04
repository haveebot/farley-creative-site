/**
 * /design-services — Design Services.
 *
 * Graphic design, fine art, and consultation services. Each section is a
 * single composition designed by C in Canva and exported as one image
 * (same pattern as /branding), so her layout stays pixel-intact.
 *
 * The hero ships as her full composition; the pictured "Let's Start
 * Designing" button is made real with an absolutely-positioned link that
 * tracks the button at every width (the image scales uniformly).
 */

import Image from "next/image";
import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";
import { DS_HERO, DS_SECTIONS } from "@/lib/design-services";

export const metadata = {
  title: "Design Services",
  description:
    "Graphic design, fine art, and consultation services from Farley Creative — logo packages, social templates, invitations, branded template bundles, websites, branding & identity, signage, product & packaging, event design, and interior design consultation. If it involves design, we can do it. No project too small.",
};

export default function DesignServicesPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        <h1 className="sr-only">
          Design Services — Farley Creative: graphic design, fine art, and
          consultation
        </h1>

        {/* Hero — C's full composition; the pictured CTA is a real link. */}
        <section className="px-6 pt-8 md:pt-12">
          <div className="max-w-6xl mx-auto relative">
            <Image
              src={DS_HERO.src}
              alt={DS_HERO.alt}
              width={DS_HERO.width}
              height={DS_HERO.height}
              sizes="(min-width: 1024px) 1100px, 100vw"
              priority
              className="w-full h-auto block"
            />
            {/* Sits on the pictured "Let's Start Designing" button. */}
            <Link
              href="/contact"
              className="absolute left-[5%] top-[71%] w-[32%] h-[9%] z-10"
            >
              <span className="sr-only">
                Let&apos;s start designing — get in touch
              </span>
            </Link>
          </div>
        </section>

        {/* Stacked composition sections. */}
        {DS_SECTIONS.map((s) => (
          <section
            key={s.slug}
            id={s.slug}
            className={
              s.tight
                ? "px-6 pt-3 md:pt-5 pb-14 md:pb-16"
                : "px-6 py-14 md:py-16 border-t border-warm-black/10"
            }
          >
            <div className="max-w-6xl mx-auto">
              {s.eyebrow && (
                <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-8">
                  {s.eyebrow}
                </p>
              )}
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="(min-width: 1024px) 1100px, 100vw"
                className="w-full h-auto block"
              />
            </div>
          </section>
        ))}

        {/* Closing CTA. */}
        <section className="bg-warm-black text-cream px-6 py-20 border-t border-cream/10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-butter-yellow mb-6">
              If it involves design, we can do it
            </p>
            <h2 className="text-3xl md:text-5xl font-serif italic leading-tight mb-10">
              Let&apos;s start designing.
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
