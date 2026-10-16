import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, AboutHero, BookingBand } from "@/components/therapy";
import { ExploreNext } from "@/components/explore";
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Me",
      "Meet Swaliha Khanam and learn about her compassionate, individual-centred clinical hypnotherapy and trauma-informed approach.",
    ),
  component: About,
});
function About() {
  return (
    <>
      <PageIntro
        eyebrow="MEET YOUR THERAPIST"
        title="Swaliha Khanam"
        accent="A space to be yourself."
      >
        Clinical Hypnotherapist & Mental Health Coach · Punjabi Bagh, New Delhi
      </PageIntro>
      <AboutHero />
      <section className="trauma-band">
        <div className="section-inner reveal">
          <span className="eyebrow">EMOTIONAL SAFETY COMES FIRST</span>
          <h2>
            Sensitive, <em>trauma-informed support.</em>
          </h2>
          <p>
            I have experience working with POCSO-related cases and approach such work with
            sensitivity, confidentiality, and trauma-informed care. The focus is on emotional
            safety, supportive communication, coping, and the individual’s overall well-being.
          </p>
          <p>
            Where a concern requires specialised psychological, psychiatric, medical, or
            multidisciplinary intervention, appropriate referral and collaborative care are
            encouraged.
          </p>
        </div>
      </section>
      <ExploreNext current="/about" />
      <BookingBand />
    </>
  );
}
