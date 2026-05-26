/**
 * /about — full About page per Collie's mockup DAHKtwvOVBo.
 *
 *   1. Diagonal-stripe banner + wordmark
 *   2. ABOUT US — butter-yellow eyebrow + body copy
 *   3. MEET COLLIE — portrait + butter-yellow text box
 *   4. Pull quote on warm-black
 *   5. Let's Dive In — water banner
 *   6. THE TRACK RECORD — link to /experience
 *   7. 3-column quick links
 */

import Image from "next/image";
import Link from "next/link";
import { HeaderNav, SiteFooter } from "@/components/SiteChrome";

export const metadata = {
  title: "About",
  description:
    "Farley Creative bridges the gap between creative and conversion — founder-operator marketing and branding agency translating creative vision into scalable systems.",
};

export default function AboutPage() {
  return (
    <>
      <HeaderNav />
      <main className="bg-cream text-warm-black">
        {/* HERO — diagonal stripe banner + wordmark */}
        <section className="bg-cream">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/about/hero-stripe-banner.jpg"
              alt="Farley Creative diagonal stripe motif"
              width={1800}
              height={209}
              priority
              sizes="100vw"
              className="w-full h-auto block"
            />
          </div>
          <div className="px-6 py-12 md:py-16 text-center">
            <p className="font-serif italic text-warm-black text-6xl sm:text-7xl md:text-8xl lg:text-9xl leading-none tracking-tight">
              farley
              <span className="font-sans not-italic font-bold text-warm-black">
                creative
              </span>
            </p>
          </div>
        </section>

        {/* ABOUT US */}
        <section>
          <div className="bg-butter-yellow px-6 py-3">
            <div className="max-w-4xl mx-auto">
              <p className="text-xs uppercase tracking-[0.3em] text-warm-black">
                About Us
              </p>
            </div>
          </div>
          <div className="bg-soft-mint px-6 py-12 md:py-16">
            <div className="max-w-4xl mx-auto space-y-5">
              <p className="font-serif italic text-xl md:text-2xl leading-snug">
                Founder-operator marketing and branding agency. Texas-rooted,
                brand-meets-physical-space sweet spot.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Farley Creative bridges the gap between creative and conversion
                — translating creative vision into scalable systems that connect
                brand, space, events, and marketing.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Because we haven&apos;t just marketed businesses — we&apos;ve
                built and scaled them — we offer a founder-operator perspective
                that lends a deep understanding of the challenges presented in
                hiring and training in-house marketing employees.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                We don&apos;t look at marketing through a vacuum of clicks and
                vanity metrics, but through the lens of overall business health,
                lifetime value, and operational capacity while prioritizing
                revenue and ROI. We aren&apos;t here to pad the deck with
                flowery marketing pitches — we&apos;re here to accomplish your
                business objectives as strategic partners.
              </p>
              <p className="text-base md:text-lg leading-relaxed">
                Farley Creative blends the high-touch, fast-paced adaptability
                of a seasoned freelancer with the comprehensive power of a
                full-service agency. We&apos;ve mastered the art of moving
                fast, testing what works, and pivoting strategies at the rate
                of business.
              </p>
            </div>
          </div>
        </section>

        {/* MEET COLLIE — portrait on left, butter-yellow text box on right */}
        <section className="bg-cream px-6 py-10 md:py-14">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 items-center">
            <div className="md:col-span-5 flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden bg-warm-black/5 shrink-0">
                <Image
                  src="/about/meet-collie-portrait.jpg"
                  alt="Collie Farley — founder of Farley Creative"
                  fill
                  sizes="384px"
                  className="object-cover"
                />
              </div>
            </div>
            <div className="md:col-span-7">
              <p className="text-xs uppercase tracking-[0.3em] text-warm-black mb-6">
                Meet Collie
              </p>
              <div className="bg-butter-yellow p-8 md:p-10 space-y-5">
                <p className="text-base md:text-lg leading-relaxed">
                  Founded by Collie Farley, with experience spanning
                  hospitality, retail, real estate, non-profit, and lifestyle
                  brands.
                </p>
                <p className="text-base md:text-lg leading-relaxed">
                  After a decade of owning businesses, working with businesses
                  in freelance and hybrid capacities, and hiring agencies
                  ourselves — we built this agency to give businesses the
                  strategic marketing partners they need with zero fluff and
                  immediate execution.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PULL QUOTE */}
        <section className="bg-warm-black text-cream px-6 py-12 md:py-16">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="font-serif italic text-xl md:text-2xl lg:text-3xl leading-snug">
              We understand that great marketing isn&apos;t selling — it&apos;s
              a blend of storytelling, creative thinking, clear branding, clean
              design, technology, and high-level data analysis to drive
              measurable sales and brand loyalty.
            </blockquote>
          </div>
        </section>

        {/* LET'S DIVE IN — water banner */}
        <section className="bg-cream">
          <div className="relative w-full overflow-hidden">
            <Image
              src="/about/dive-in-banner.jpg"
              alt="Let's Dive In — Farley Creative Agency"
              width={1800}
              height={457}
              sizes="100vw"
              className="w-full h-auto block"
            />
          </div>
        </section>

        {/* THE TRACK RECORD */}
        <section className="bg-cream px-6 py-12 md:py-16 border-b border-warm-black/10">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-5">
              The Track Record
            </p>
            <p className="text-lg md:text-xl text-warm-black leading-relaxed mb-10 max-w-2xl mx-auto">
              Selected client engagements, in-house leadership, and product
              design across hospitality, retail, real estate, and heritage
              brands.
            </p>
            <Link
              href="/experience"
              className="inline-block text-xs uppercase tracking-[0.28em] text-warm-black border border-warm-black px-10 py-4 hover:bg-warm-black hover:text-cream transition"
            >
              See Full Experience →
            </Link>
          </div>
        </section>

        {/* 3-COLUMN QUICK LINKS */}
        <section className="bg-soft-mint px-6 py-16">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <Link href="/work" className="group">
              <p className="text-[10px] uppercase tracking-[0.3em] text-warm-black/70 mb-3">
                See the work
              </p>
              <p className="font-serif italic text-lg md:text-xl group-hover:text-forest-teal transition">
                Selected case studies →
              </p>
            </Link>
            <Link href="/packages" className="group">
              <p className="text-[10px] uppercase tracking-[0.3em] text-warm-black/70 mb-3">
                What we offer
              </p>
              <p className="font-serif italic text-lg md:text-xl group-hover:text-forest-teal transition">
                Packages →
              </p>
            </Link>
            <Link href="/contact" className="group">
              <p className="text-[10px] uppercase tracking-[0.3em] text-warm-black/70 mb-3">
                Get acquainted
              </p>
              <p className="font-serif italic text-lg md:text-xl group-hover:text-forest-teal transition">
                Start the conversation →
              </p>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
