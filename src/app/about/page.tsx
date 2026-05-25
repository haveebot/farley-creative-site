/**
 * /about — full About page, copy lifted verbatim from Collie's
 * "Farley Creative About Us" asset (Hub asset ID 14, 2026-05-25 PM).
 */

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
        <header className="px-6 pt-24 pb-12">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-forest-teal mb-6">
              About
            </p>
            <h1 className="text-4xl md:text-6xl font-serif italic leading-tight mb-8">
              We bridge the gap between creative and conversion.
            </h1>
            <p className="text-lg md:text-xl text-warm-black/80 leading-relaxed max-w-2xl">
              Founder-operator marketing and branding agency. Texas-rooted,
              brand-meets-physical-space sweet spot.
            </p>
          </div>
        </header>

        <article className="px-6 pb-24">
          <div className="max-w-3xl mx-auto space-y-8 text-base md:text-lg leading-relaxed">
            <p>
              Farley Creative bridges the gap between creative and conversion —
              translating creative vision into scalable systems that connect
              brand, space, events, and marketing. Founded by Collie Farley,
              with experience spanning hospitality, retail, real estate,
              non-profit, and lifestyle brands.
            </p>

            <p>
              Farley Creative brings a unique blend of business ownership,
              in-house leadership, and hands-on creative expertise which allows
              us to tailor marketing packages and strategies to meet the needs
              of businesses and brands head-on.
            </p>

            <p>
              After a decade of owning businesses, working with businesses in
              freelance and hybrid capacities, and hiring agencies ourselves —
              we&apos;ve experienced how marketing is approached from every
              angle. We built this agency to give businesses the strategic
              marketing partners they need with zero fluff and immediate
              execution.
            </p>

            <p>
              Because we haven&apos;t just marketed businesses — we&apos;ve built
              and scaled them — we offer a founder-operator perspective that
              lends a deep understanding of the challenges presented in hiring
              and training in-house marketing employees. We don&apos;t look at
              marketing through a vacuum of clicks and vanity metrics, but
              through the lens of overall business health, lifetime value, and
              operational capacity while prioritizing revenue and ROI.
              We aren&apos;t here to pad the deck with flowery marketing
              pitches — we&apos;re here to accomplish your business objectives
              as strategic partners.
            </p>

            <p>
              Farley Creative blends the high-touch, fast-paced adaptability of
              a seasoned freelancer with the founder-first perspective and
              comprehensive power of a full-service agency. We&apos;ve mastered
              the art of moving fast, testing what works, and pivoting
              strategies at the rate of business.
            </p>

            <p>
              We understand that great marketing isn&apos;t selling —
              it&apos;s a blend of storytelling, creative thinking, clear
              branding, clean design, technology, and high-level data analysis
              to drive measurable sales and brand loyalty.
            </p>

            <p className="font-serif italic text-xl md:text-2xl pt-4">
              Where creative meets conversion. Let&apos;s get started.
            </p>
          </div>
        </article>

        {/* Quick links */}
        <section className="bg-soft-mint px-6 py-16 border-t border-warm-black/10">
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-8 text-center">
            <Link href="/work" className="group">
              <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-2">
                See the work
              </p>
              <p className="text-lg font-serif italic group-hover:text-forest-teal transition">
                Selected case studies →
              </p>
            </Link>
            <Link href="/#packages" className="group">
              <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-2">
                What we offer
              </p>
              <p className="text-lg font-serif italic group-hover:text-forest-teal transition">
                Packages →
              </p>
            </Link>
            <Link href="/contact" className="group">
              <p className="text-[10px] uppercase tracking-[0.25em] text-forest-teal mb-2">
                Get acquainted
              </p>
              <p className="text-lg font-serif italic group-hover:text-forest-teal transition">
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
