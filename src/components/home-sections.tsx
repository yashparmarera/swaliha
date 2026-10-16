import { useEffect, useState } from "react";
import type { MouseEvent } from "react";
import { ArrowDown } from "lucide-react";

/**
 * Home-page-only building blocks: an emotional "interlude" that opens the story,
 * and a small in-page navigator that shows where you are as you scroll.
 */

/** Smooth-scroll to a section, respecting reduced motion. Local only, so route navigation is unaffected. */
function scrollToId(event: MouseEvent<HTMLAnchorElement>, id: string) {
  const target = document.getElementById(id);
  if (!target) return;
  event.preventDefault();
  const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
  target.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
}

/** Opening permission statement, using the support page's own wording. */
export function Interlude() {
  return (
    <section className="interlude section-inner">
      <div className="interlude-inner reveal">
        <span className="eyebrow">
          <span className="tiny-dot" />A GENTLE BEGINNING
        </span>
        <h2>
          You can begin <em>where you are.</em>
        </h2>
        <p>
          You do not have to wait until things feel overwhelming to seek support. Whether you are
          going through a difficult phase, struggling with a concern that has been affecting you for
          some time, or simply want to understand yourself better, taking the first step can create
          an opportunity for meaningful change.
        </p>
        <div className="interlude-links">
          <a href="#support" onClick={(e) => scrollToId(e, "support")}>
            See what you can bring <ArrowDown size={15} />
          </a>
          <a href="#self-check" onClick={(e) => scrollToId(e, "self-check")}>
            Try the gentle self-check <ArrowDown size={15} />
          </a>
        </div>
      </div>
    </section>
  );
}

export type DotItem = { id: string; label: string };

/** Fixed side navigator (wide screens): one dot per section, the current one highlighted. */
export function SectionDots({ items }: { items: DotItem[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;
    const sections = items
      .map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);
    if (sections.length === 0) return;

    // A section counts as "current" while it crosses the middle band of the viewport.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav className="section-dots" aria-label="Sections on this page">
      <ol>
        {items.map(({ id, label }) => (
          <li key={id}>
            <a
              href={`#${id}`}
              className={active === id ? "active" : undefined}
              aria-current={active === id ? "true" : undefined}
              onClick={(e) => scrollToId(e, id)}
            >
              <span className="section-dot-label">{label}</span>
              <span className="section-dot" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
