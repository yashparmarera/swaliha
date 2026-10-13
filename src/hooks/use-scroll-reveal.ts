import { useEffect } from "react";

/**
 * Scroll-reveal system — IntersectionObserver decides WHEN, CSS decides HOW.
 *
 * Any element with the `reveal` class starts hidden (opacity 0, nudged down) and
 * gets the `in` class added once ~12% of it enters the viewport, which triggers a
 * GPU-friendly opacity/transform transition defined in styles.css. The observer
 * then stops watching it, so each element animates once and never re-hides.
 *
 * Call this hook once near the root of a page/shell. It re-scans on route changes
 * via the `deps` argument so freshly mounted sections are picked up.
 */
export function useScrollReveal(deps: ReadonlyArray<unknown> = []) {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduceMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const elements = Array.from(document.querySelectorAll<HTMLElement>(".reveal:not(.in)"));
    if (elements.length === 0) return;

    // Reduced motion (or no observer support): show everything immediately.
    if (reduceMotion || typeof IntersectionObserver === "undefined") {
      elements.forEach((el) => el.classList.add("in"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px" },
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
