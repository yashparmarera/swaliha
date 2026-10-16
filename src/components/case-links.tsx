import { Link } from "@tanstack/react-router";
import { ArrowRight, Clock } from "lucide-react";
import { CaseArt } from "@/components/case-art";
import {
  concernShortcuts,
  featuredSlugs,
  libraryStats,
  pathsFor,
  readingPaths,
  relatedFor,
  studiesFromSlugs,
  type CaseStudy,
} from "@/lib/case-studies";

/**
 * Small building blocks that connect the case-study library to the rest of the site.
 * Imports only the data module and the illustrations, never therapy.tsx, to avoid import cycles.
 */

/** Compact card: illustration, area, title, optional note, read time. */
export function CaseMiniCard({ study, note }: { study: CaseStudy; note?: string }) {
  return (
    <Link to="/blog/$slug" params={{ slug: study.slug }} className="mini-card">
      <div className="mini-card-art">
        <CaseArt kind={study.art} />
      </div>
      <div className="mini-card-body">
        <span className="mini-card-area">{study.area}</span>
        <strong>{study.title}</strong>
        {note && <p className="mini-card-note">{note}</p>}
        <span className="mini-card-foot">
          <Clock size={13} /> {study.readMinutes} min read
          <ArrowRight size={14} />
        </span>
      </div>
    </Link>
  );
}

/** "Keep reading" block for the end of a case study, with the reason each link is relevant. */
export function RelatedStudies({ slug }: { slug: string }) {
  const items = relatedFor(slug);
  if (items.length === 0) return null;
  return (
    <section className="related reveal" aria-labelledby="related-title">
      <h2 id="related-title">Keep reading</h2>
      <p className="related-lede">These stories connect to this one, and here is why.</p>
      <div className="related-grid">
        {items.map(({ study, why }) => (
          <CaseMiniCard key={study.slug} study={study} note={why} />
        ))}
      </div>
    </section>
  );
}

/** Chips naming the reading paths a study belongs to, each jumping to that path on the hub. */
export function PathChips({ slug }: { slug: string }) {
  const paths = pathsFor(slug);
  if (paths.length === 0) return null;
  return (
    <div className="path-chips">
      <span>Part of</span>
      {paths.map((p) => (
        <Link
          key={p.id}
          to="/blog"
          hash={`path-${p.id}`}
          className="path-chip"
          activeOptions={{ exact: true, includeHash: true }}
        >
          {p.title}
        </Link>
      ))}
    </div>
  );
}

/** The four curated reading paths, each an ordered list of linked studies. */
export function ReadingPaths() {
  return (
    <div className="paths-grid">
      {readingPaths.map((path, i) => (
        <article key={path.id} id={`path-${path.id}`} className="path-card">
          <span className="path-num">Path {i + 1}</span>
          <h3>{path.title}</h3>
          <p>{path.blurb}</p>
          <ol>
            {studiesFromSlugs(path.slugs).map((study) => (
              <li key={study.slug}>
                <Link to="/blog/$slug" params={{ slug: study.slug }}>
                  {study.title}
                </Link>
                <small>{study.readMinutes} min</small>
              </li>
            ))}
          </ol>
        </article>
      ))}
    </div>
  );
}

/** "Start with what sounds like you": plain-language worries, each linking to the best first read. */
export function ConcernChips() {
  return (
    <ul className="concern-chips">
      {concernShortcuts.map((concern) => (
        <li key={concern.slug}>
          <Link to="/blog/$slug" params={{ slug: concern.slug }}>
            {concern.label} <ArrowRight size={14} />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/** Home / support page section that surfaces the library with real, data-derived totals. */
export function CaseTeaser() {
  const studies = studiesFromSlugs(featuredSlugs);
  const stats = libraryStats();
  return (
    <section className="case-teaser section-inner">
      <div className="case-teaser-head reveal">
        <span className="eyebrow">
          <span className="tiny-dot" />
          FROM THE BLOG
        </span>
        <h2>
          See how support works <em>in practice</em>
        </h2>
        <p>
          A researched case study for every area of support, following one person from the first
          conversation to what changed, with an honest look at the evidence.
        </p>
      </div>
      <div className="case-teaser-grid reveal">
        {studies.map((study) => (
          <CaseMiniCard key={study.slug} study={study} />
        ))}
      </div>
      <div className="case-teaser-chips reveal">
        <span>Start with what sounds like you</span>
        <ConcernChips />
      </div>
      <div className="case-teaser-foot reveal">
        <Link to="/blog" className="text-link">
          Browse all {stats.studies} case studies <ArrowRight size={16} />
        </Link>
        <span>
          {stats.minutes} minutes of reading · {stats.references} cited sources · {stats.paths}{" "}
          reading paths
        </span>
      </div>
    </section>
  );
}
