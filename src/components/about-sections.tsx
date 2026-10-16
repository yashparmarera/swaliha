import { Link } from "@tanstack/react-router";
import { Clock, Heart, Leaf, MapPin, MessageCircle, ShieldCheck, Video } from "lucide-react";
import { CaseMiniCard } from "@/components/case-links";
import { PriceTag, supportAreas } from "@/components/therapy";
import {
  aboutPrinciples,
  aboutStudySlugs,
  compositeLine,
  firstSessionNote,
  firstSessionSteps,
  howIWork,
} from "@/lib/about-content";
import { slugForSupportIndex, studiesFromSlugs } from "@/lib/case-studies";
import { aboutQuestionUrl, clinic, directionsUrl } from "@/lib/clinic";

const approachIcons = [MessageCircle, Clock, Heart, Leaf];

/** How Swaliha works, plus a short strip of the principles behind it. */
export function HowIWork() {
  return (
    <section className="about-section">
      <div className="section-inner">
        <div className="about-section-head reveal">
          <span className="eyebrow">
            <span className="tiny-dot" />
            HOW I WORK
          </span>
          <h2>
            Listening first, <em>at your pace.</em>
          </h2>
          <p>
            Hypnotherapy is one supportive tool. It sits alongside conversation, goal setting, and
            practical coaching, always shaped around you.
          </p>
        </div>
        <ul className="about-approach reveal">
          {howIWork.map((item, i) => {
            const Icon = approachIcons[i % approachIcons.length] as (typeof approachIcons)[number];
            return (
              <li key={item.title}>
                <span className="about-approach-icon">
                  <Icon size={20} strokeWidth={1.4} aria-hidden="true" />
                </span>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="about-values reveal" aria-label="Principles">
          {aboutPrinciples.map((item) => (
            <li className="about-value" key={item.title}>
              <strong>{item.title}</strong>
              <p>{item.text}</p>
            </li>
          ))}
        </ul>
        <p className="about-note">
          <ShieldCheck size={18} aria-hidden="true" />
          Support here is complementary and does not replace medical or psychiatric care. Referral
          is encouraged where needed.
        </p>
      </div>
    </section>
  );
}

/** A plain-language outline of a first session, so nothing about it is a surprise. */
export function FirstSession() {
  return (
    <section className="about-section about-band">
      <div className="section-inner">
        <div className="about-section-head reveal">
          <span className="eyebrow">
            <span className="tiny-dot" />
            WHAT TO EXPECT
          </span>
          <h2>
            What a first session <em>can look like.</em>
          </h2>
          <p>A gentle outline, so you know what to expect before you decide to begin.</p>
        </div>
        <ol className="about-steps reveal">
          {firstSessionSteps.map((step, i) => (
            <li className="about-step" key={step.title}>
              <span className="about-step-num" aria-hidden="true">
                {i + 1}
              </span>
              <strong>{step.title}</strong>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
        <p className="about-note">{firstSessionNote}</p>
        <p className="about-links">
          See{" "}
          <Link to="/" hash="hypnotherapy">
            how hypnotherapy works
          </Link>
          , or read the <Link to="/book">common questions</Link> on the booking page.
        </p>
      </div>
    </section>
  );
}

/** Ties the About page to the areas of support and a few case studies. */
export function WhoIWorkWith() {
  const studies = studiesFromSlugs(aboutStudySlugs);
  return (
    <section className="about-section">
      <div className="section-inner">
        <div className="about-section-head reveal">
          <span className="eyebrow">
            <span className="tiny-dot" />
            WHO I WORK WITH
          </span>
          <h2>
            Many concerns, <em>one calm space.</em>
          </h2>
          <p>
            Each area below opens a case study that follows one person from the first conversation
            to what changed.
          </p>
        </div>
        <ul className="about-areas reveal">
          {supportAreas.map((area, i) => (
            <li key={area.title}>
              <Link to="/blog/$slug" params={{ slug: slugForSupportIndex(i) }}>
                {area.title}
              </Link>
            </li>
          ))}
        </ul>
        <div className="about-studies reveal">
          {studies.map((study) => (
            <CaseMiniCard key={study.slug} study={study} />
          ))}
        </div>
        <p className="about-note">{compositeLine}</p>
        <p className="about-links">
          <Link to="/support">See all areas of support</Link> or{" "}
          <Link to="/blog">browse the case studies</Link>.
        </p>
      </div>
    </section>
  );
}

/** Where, how and what it costs. Prices come from the shared pricing data. */
export function AboutPractical() {
  return (
    <section className="about-section about-band">
      <div className="section-inner">
        <div className="about-section-head reveal">
          <span className="eyebrow">
            <span className="tiny-dot" />
            PRACTICAL DETAILS
          </span>
          <h2>
            Where, how, and <em>what it costs.</em>
          </h2>
        </div>
        <div className="about-facts reveal">
          <div className="about-fact">
            <MapPin strokeWidth={1.4} aria-hidden="true" />
            <h3>Doctors Plaza Punjabi Bagh</h3>
            <p>{clinic.address}</p>
            <p>By prior appointment only.</p>
            <a href={directionsUrl} target="_blank" rel="noreferrer">
              Get directions
            </a>
          </div>
          <div className="about-fact">
            <Video strokeWidth={1.4} aria-hidden="true" />
            <h3>In the clinic or on video</h3>
            <p>Choose the option that works best for you.</p>
          </div>
          <div className="about-fact">
            <Clock strokeWidth={1.4} aria-hidden="true" />
            <h3>Introductory offer</h3>
            <div className="about-fact-row">
              <span>Clinic visit</span>
              <PriceTag type="Clinic visit" />
            </div>
            <div className="about-fact-row">
              <span>Video consultation</span>
              <PriceTag type="Video consultation" />
            </div>
          </div>
        </div>
        <p className="about-note">
          Appointments are requested on WhatsApp and confirmed directly with the clinic.
        </p>
        <p className="about-links">
          Have a question first?{" "}
          <a href={aboutQuestionUrl()} target="_blank" rel="noreferrer">
            Message on WhatsApp
          </a>
          . You can also see the <Link to="/support">areas of support</Link>, read the{" "}
          <Link to="/blog">case studies</Link>, hear <Link to="/reviews">what clients say</Link>, or{" "}
          <Link to="/book">book a conversation</Link>.
        </p>
      </div>
    </section>
  );
}
