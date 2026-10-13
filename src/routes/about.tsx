import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, BookingBand, doctorPortrait } from "@/components/therapy";
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/about")({
  head: () =>
    pageHead(
      "About Me",
      "Meet Dr Swaliha Khanam and learn about her compassionate, individual-centred clinical hypnotherapy and trauma-informed approach.",
    ),
  component: About,
});
function About() {
  return (
    <>
      <PageIntro
        eyebrow="MEET YOUR THERAPIST"
        title="Dr Swaliha Khanam"
        accent="A space to be yourself."
      >
        Clinical Hypnotherapist & Mental Health Coach · Punjabi Bagh, New Delhi
      </PageIntro>
      <section className="section-inner about-content">
        <img
          className="about-image"
          src={doctorPortrait}
          alt="Dr Swaliha Khanam"
          width={1066}
          height={1280}
          loading="lazy"
          decoding="async"
        />
        <div className="prose">
          <h2>
            Feeling heard is <em>a beginning.</em>
          </h2>
          <p>
            Swaliha Khanam, Clinical Hypnotherapist, is committed to creating a safe, supportive,
            and non-judgmental space where individuals can express themselves openly, understand
            their experiences, and work towards greater emotional well-being and personal growth.
          </p>
          <p>
            Every individual experiences life differently. Stress, anxiety, emotional difficulties,
            relationship concerns, low self-confidence, sleep difficulties, unhealthy habits, and
            challenging life experiences can affect the way we think, feel, behave, and connect with
            others. The right support can help individuals develop greater self-awareness, healthier
            coping strategies, and practical ways of moving forward.
          </p>
          <h2>My approach</h2>
          <p>
            As a Clinical Hypnotherapist, I use hypnotherapy as a supportive approach to help
            individuals explore patterns in thoughts, emotions, and behaviours and develop more
            adaptive responses.
          </p>
          <p>
            My approach is individual-centred, compassionate, and goal-oriented. Rather than
            focusing only on a presenting concern, I aim to understand the individual’s experiences,
            needs, strengths, and circumstances.
          </p>
          <p>
            I believe that meaningful change begins with feeling heard, understood, and respected.
          </p>
        </div>
      </section>
      <section className="trauma-band">
        <div className="section-inner">
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
      <BookingBand />
    </>
  );
}
