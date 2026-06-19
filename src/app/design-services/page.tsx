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

        {/* Hero — C's full composition, full-bleed; pictured CTA is a real link. */}
        <section
          className="pt-6 md:pt-10"
          style={{ backgroundColor: DS_HERO.bg }}
        >
          <div className="relative">
            <Image
              src={DS_HERO.src}
              alt={DS_HERO.alt}
              width={DS_HERO.width}
              height={DS_HERO.height}
              sizes="100vw"
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
            style={{ backgroundColor: s.bg }}
            className={
              s.tight
                ? "pt-2 md:pt-4 pb-8 md:pb-12"
                : "py-8 md:py-12 border-t border-warm-black/10"
            }
          >
            {s.eyebrow && (
              <p className="px-6 text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
                {s.eyebrow}
              </p>
            )}
            <div className={`relative${s.mobile ? " hidden md:block" : ""}`}>
              <Image
                src={s.src}
                alt={s.alt}
                width={s.width}
                height={s.height}
                sizes="100vw"
                className="w-full h-auto block"
              />
              {/* Real link sitting on a button pictured in the composition. */}
              {s.cta && (
                <Link
                  href={s.cta.href}
                  className="absolute z-10"
                  style={{
                    left: s.cta.left,
                    top: s.cta.top,
                    width: s.cta.width,
                    height: s.cta.height,
                  }}
                >
                  <span className="sr-only">{s.cta.label}</span>
                </Link>
              )}
            </div>

            {/* Mobile: the same section reflowed as real text — the baked
                composition's body copy is unreadable at phone width. */}
            {s.mobile && (
              <div className="md:hidden px-6">
                <Image
                  src={s.mobile.portrait.src}
                  alt={s.mobile.portrait.alt}
                  width={s.mobile.portrait.width}
                  height={s.mobile.portrait.height}
                  sizes="(max-width: 768px) 80vw, 300px"
                  className="w-full max-w-[300px] h-auto block mb-7"
                />
                <p className="font-serif italic text-3xl leading-tight text-warm-black mb-2">
                  {s.mobile.headline}
                </p>
                <p className="text-xs uppercase tracking-[0.28em] text-warm-black/55 mb-5">
                  {s.mobile.eyebrow}
                </p>
                <div className="space-y-4 bg-[#F8F4B9] px-5 py-6 text-[15px] leading-relaxed text-warm-black/90">
                  {s.mobile.body.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
                {s.cta && (
                  <Link
                    href={s.cta.href}
                    className="mt-7 inline-block bg-[#3C3628] text-cream px-10 py-3.5 text-sm uppercase tracking-[0.15em] hover:opacity-90 transition"
                  >
                    Reach Out
                  </Link>
                )}
              </div>
            )}
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
