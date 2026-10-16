import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, AboutHero, BookingBand } from "@/components/therapy";
import { AboutPractical, FirstSession, HowIWork, WhoIWorkWith } from "@/components/about-sections";
import { ExploreNext } from "@/components/explore";
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Me",
      "Meet Swaliha Khanam, Clinical Hypnotherapist and Mental Health Coach in Punjabi Bagh. See how she works, what a first session is like, and who she supports.",
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
      <AboutHero variant="full" />
      <HowIWork />
      <FirstSession />
      <WhoIWorkWith />
      <AboutPractical />
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
