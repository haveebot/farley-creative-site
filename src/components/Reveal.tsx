"use client";

/**
 * Reveal — wraps a section + adds an "in-view" class when it scrolls into
 * view. Pairs with the .reveal CSS utility in globals.css for the fade+translate
 * animation. Restrained on purpose (matches the brand kit's "light + airy"
 * tone, not flashy parallax).
 *
 * Reliability:
 *   1. Elements already in viewport at mount reveal immediately (no observer
 *      handoff delay — covers above-the-fold sections).
 *   2. IntersectionObserver triggers 100px BEFORE entering viewport so the
 *      fade-in is complete by the time the section is in reading position.
 *   3. 2-second safety net flips inView=true regardless, so content never
 *      stays hidden if the observer misses an edge case (instant scroll,
 *      hydration-timing race, etc.).
 */

import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
  as: Tag = "div",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  as?: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setInView(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px 100px 0px" },
    );
    obs.observe(el);

    const fallback = setTimeout(() => setInView(true), 2000);

    return () => {
      obs.disconnect();
      clearTimeout(fallback);
    };
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? "reveal-in" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
