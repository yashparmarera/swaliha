import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, SupportGrid, CareNote, SelfCheck, BookingBand } from "@/components/therapy";
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/support")({
  head: () =>
    pageHead(
      "Areas of Support",
      "Support for emotional well-being, stress, anxiety, sleep, confidence, relationships, habits, elderly well-being, and chronic-pain emotional coping.",
    ),
  component: Support,
});
function Support() {
  return (
    <>
      <PageIntro eyebrow="AREAS OF SUPPORT" title="Your experiences matter." accent="All of them.">
        Whether you’re navigating a difficult phase or seeking greater self-understanding, there is
        space for your individual story.
      </PageIntro>
      <section className="support-page">
        <div className="section-inner">
          <SupportGrid all />
          <CareNote />
        </div>
      </section>
      <SelfCheck />
      <section className="section-inner faq-section">
        <span className="eyebrow">A SAFE SPACE TO HEAL & GROW</span>
        <h2>
          You can begin <em>where you are.</em>
        </h2>
        <div className="prose">
          <p>
            You do not have to wait until things feel overwhelming to seek support. Whether you are
            going through a difficult phase, struggling with a concern that has been affecting you
            for some time, or simply want to understand yourself better, taking the first step can
            create an opportunity for meaningful change.
          </p>
          <p>
            Elderly well-being and chronic-pain support focuses on the emotional and psychological
            aspects of living with long-term health concerns. Support may include relaxation,
            emotional coping, adjustment, stress management, and improving overall psychological
            well-being.
          </p>
        </div>
      </section>
      <BookingBand />
    </>
  );
}
