import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, ShieldCheck } from "lucide-react";
import { BookingBand, PageIntro } from "@/components/therapy";
import { CaseArt } from "@/components/case-art";
import { ConcernChips, ReadingPaths } from "@/components/case-links";
import { caseStudies, compositeNote, libraryStats } from "@/lib/case-studies";
import { ExploreNext } from "@/components/explore";
import { pageHead } from "@/lib/clinic";

export const Route = createFileRoute("/blog/")({
  head: () =>
    pageHead(
      "Blog & Case Studies",
      "A researched case-study library covering stress and anxiety, sleep, confidence, relationships, habits, clinical hypnotherapy and elderly well-being, organised into reading paths. Illustrative composite cases, not real clients.",
    ),
  component: BlogIndex,
});

function BlogIndex() {
  const stats = libraryStats();
  const figures = [
    { value: stats.studies, label: "case studies" },
    { value: stats.minutes, label: "minutes of reading" },
    { value: stats.references, label: "cited sources" },
    { value: stats.paths, label: "reading paths" },
  ];

  return (
    <>
      <PageIntro eyebrow="BLOG · CASE STUDIES" title="Stories that help" accent="make sense of it.">
        A researched library with one case study for every area of support. Each follows a person
        through what brought them in, what helped, what didn’t, and what the evidence says. Use the
        shortcuts and reading paths below to find the story closest to yours.
      </PageIntro>

      <section className="section-inner hub-stats-wrap">
        <ul className="hub-stats reveal" aria-label="Library at a glance">
          {figures.map((f) => (
            <li key={f.label}>
              <strong>{f.value}</strong>
              <span>{f.label}</span>
            </li>
          ))}
        </ul>
        <div className="blog-note reveal">
          <ShieldCheck size={20} strokeWidth={1.6} />
          <p>{compositeNote}</p>
        </div>
      </section>

      <section className="section-inner hub-section" aria-labelledby="start-title">
        <div className="hub-head reveal">
          <span className="eyebrow">
            <span className="tiny-dot" />
            START HERE
          </span>
          <h2 id="start-title">
            Start with what <em>sounds like you</em>
          </h2>
          <p>
            You don’t need the right words for what you’re going through. Pick the sentence that
            feels closest and we’ll take you to the best first read.
          </p>
        </div>
        <div className="reveal reveal-d1">
          <ConcernChips />
        </div>
      </section>

      <section className="section-inner hub-section" id="paths" aria-labelledby="paths-title">
        <div className="hub-head reveal">
          <span className="eyebrow">
            <span className="tiny-dot" />
            READING PATHS
          </span>
          <h2 id="paths-title">
            Follow a thread, <em>one story at a time</em>
          </h2>
          <p>
            The case studies connect. These paths group them by theme, in a sensible order, so one
            story leads naturally into the next.
          </p>
        </div>
        <div className="reveal reveal-d1">
          <ReadingPaths />
        </div>
      </section>

      <section className="section-inner hub-section" id="all" aria-labelledby="all-title">
        <div className="hub-head reveal">
          <span className="eyebrow">
            <span className="tiny-dot" />
            THE FULL LIBRARY
          </span>
          <h2 id="all-title">
            All {stats.studies} case studies, <em>by area of support</em>
          </h2>
        </div>
        <div className="blog-grid reveal">
          {caseStudies.map((study, i) => (
            <Link
              key={study.slug}
              to="/blog/$slug"
              params={{ slug: study.slug }}
              className={i === 0 ? "blog-card blog-card-feature" : "blog-card"}
            >
              <div className="blog-card-art">
                <CaseArt kind={study.art} />
                <span className="blog-card-num">
                  {String(study.supportIndex + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="blog-card-body">
                <span className="blog-card-area">{study.area}</span>
                <h3>{study.title}</h3>
                <p>{study.dek}</p>
                <div className="blog-card-foot">
                  <span>
                    <Clock size={14} /> {study.readMinutes} min read
                  </span>
                  <span className="blog-card-cta">
                    Read the case study <ArrowRight size={15} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <p className="hub-next reveal">
          Not sure where you fit?{" "}
          <Link to="/support" hash="self-check" className="text-link">
            Try the gentle self-check <ArrowRight size={15} />
          </Link>
        </p>
      </section>

      <ExploreNext current="/blog" />
      <BookingBand />
    </>
  );
}
