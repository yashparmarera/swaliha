import { Fragment } from "react";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Clock,
  FlaskConical,
  ListChecks,
  ShieldCheck,
} from "lucide-react";
import { BookingBand } from "@/components/therapy";
import { CaseArt } from "@/components/case-art";
import { PathChips, RelatedStudies } from "@/components/case-links";
import { compositeNote, getCaseStudy, neighbours } from "@/lib/case-studies";
import { pageHead } from "@/lib/clinic";

export const Route = createFileRoute("/blog/$slug")({
  loader: ({ params }) => {
    const study = getCaseStudy(params.slug);
    if (!study) throw notFound();
    return { study };
  },
  head: ({ loaderData }) =>
    loaderData
      ? pageHead(
          loaderData.study.title,
          `${loaderData.study.dek} (Illustrative composite case study.)`,
        )
      : {},
  component: CaseStudyPage,
});

function CaseStudyPage() {
  const { study } = Route.useLoaderData();
  const { prev, next } = neighbours(study.slug);
  // The pull quote sits after the third section, or at the end if the story is short.
  const quoteAfter = Math.min(2, study.sections.length - 1);

  return (
    <>
      <article className="case">
        <header className="case-hero section-inner">
          <nav className="case-crumbs" aria-label="Breadcrumb">
            <Link to="/blog">
              <ArrowLeft size={14} /> All case studies
            </Link>
            <span aria-hidden="true">/</span>
            <span>{study.area}</span>
          </nav>
          <div className="case-hero-grid">
            <div className="case-hero-copy">
              <span className="case-tag">
                <span className="tiny-dot" />
                CASE STUDY · {String(study.supportIndex + 1).padStart(2, "0")}
              </span>
              <h1>{study.title}</h1>
              <p className="case-dek">{study.dek}</p>
              <div className="case-meta">
                <span>
                  <Clock size={15} /> {study.readMinutes} min read
                </span>
                <span>
                  <BookOpen size={15} /> {study.area}
                </span>
              </div>
              <PathChips slug={study.slug} />
            </div>
            <div className="case-hero-art">
              <CaseArt kind={study.art} />
            </div>
          </div>
        </header>

        <div className="case-body section-inner">
          <aside className="case-aside" aria-label="Case at a glance">
            <div className="case-person">
              <span className="case-person-avatar" aria-hidden="true">
                {study.persona.name.replace(/^Mr\s+/, "").charAt(0)}
              </span>
              <div>
                <strong>
                  {study.persona.name}, {study.persona.age}
                </strong>
                <small>Composite character</small>
              </div>
            </div>
            <p className="case-person-line">{study.persona.line}</p>
            <dl className="case-snapshot">
              {study.snapshot.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.value}</dd>
                </div>
              ))}
            </dl>
            <nav className="case-toc" aria-label="In this story">
              <span>In this story</span>
              <ol>
                {study.sections.map((section, i) => (
                  <li key={section.heading}>
                    <a href={`#part-${i + 1}`}>{section.heading}</a>
                  </li>
                ))}
                <li>
                  <a href="#research">{study.research.heading}</a>
                </li>
              </ol>
            </nav>
          </aside>

          <div className="case-main">
            <div className="case-disclaimer reveal">
              <ShieldCheck size={20} strokeWidth={1.6} />
              <p>{compositeNote}</p>
            </div>

            {study.sections.map((section, i) => (
              <Fragment key={section.heading}>
                <section id={`part-${i + 1}`} className="case-section reveal">
                  <span className="case-section-num">{String(i + 1).padStart(2, "0")}</span>
                  <h2>{section.heading}</h2>
                  {section.body.map((paragraph) => (
                    <p key={paragraph.slice(0, 40)}>{paragraph}</p>
                  ))}
                </section>
                {i === quoteAfter && (
                  <blockquote className="case-pull reveal">{study.pull}</blockquote>
                )}
              </Fragment>
            ))}

            <section className="case-takeaways reveal" aria-labelledby="takeaways-title">
              <h2 id="takeaways-title">
                <ListChecks size={22} strokeWidth={1.6} /> What to take from this
              </h2>
              <ul>
                {study.takeaways.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <section id="research" className="case-research reveal">
              <h2>
                <FlaskConical size={22} strokeWidth={1.6} /> {study.research.heading}
              </h2>
              {study.research.body.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
              <p className="case-caveat">
                <strong>Please note:</strong> {study.research.caveat}
              </p>
            </section>

            <section className="case-refs reveal" aria-labelledby="refs-title">
              <h3 id="refs-title">References and further reading</h3>
              <ol>
                {study.references.map((ref) => (
                  <li key={ref.text}>
                    {ref.text}
                    {ref.href && (
                      <>
                        {" "}
                        <a href={ref.href} target="_blank" rel="noreferrer">
                          View source <ArrowUpRight size={13} />
                        </a>
                      </>
                    )}
                  </li>
                ))}
              </ol>
            </section>

            <section className="case-cta reveal" aria-labelledby="cta-title" data-wa-hide>
              <h3 id="cta-title">If this sounds familiar</h3>
              <p>
                You don’t need to be at breaking point to ask for support. Explore the area of
                support this story belongs to, try the gentle self-check, or start a conversation
                with the clinic whenever you’re ready.
              </p>
              <div className="case-cta-links">
                <Link to="/support" className="text-link">
                  All areas of support <ArrowRight size={15} />
                </Link>
                <Link to="/support" hash="self-check" className="text-link">
                  Try the self-check <ArrowRight size={15} />
                </Link>
                <Link to="/reviews" className="text-link">
                  What clients say <ArrowRight size={15} />
                </Link>
                <Link to="/book" className="text-link">
                  Book a conversation <ArrowRight size={15} />
                </Link>
              </div>
            </section>
          </div>
        </div>

        <div className="case-related section-inner">
          <RelatedStudies slug={study.slug} />
        </div>

        <nav className="case-pager section-inner" aria-label="More case studies">
          <Link to="/blog/$slug" params={{ slug: prev.slug }} className="case-pager-link">
            <span>
              <ArrowLeft size={15} /> Previous
            </span>
            <strong>{prev.title}</strong>
          </Link>
          <Link
            to="/blog/$slug"
            params={{ slug: next.slug }}
            className="case-pager-link case-pager-next"
          >
            <span>
              Next <ArrowRight size={15} />
            </span>
            <strong>{next.title}</strong>
          </Link>
        </nav>
      </article>
      <BookingBand />
    </>
  );
}
