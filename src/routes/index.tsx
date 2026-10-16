import { createFileRoute, Link } from "@tanstack/react-router";
import { Leaf, MapPin, Flower2 } from "lucide-react";
import {
  AboutHero,
  AppointmentButton,
  Botanical,
  BreathRings,
  CalmWaves,
  CareNote,
  KeywordMarquee,
  SeedScatter,
  SupportGrid,
  SelfCheck,
  WhatIsHypnotherapy,
  TraumaCare,
  ClientReviews,
  BookingBand,
  VisitClinic,
  doctorPortrait,
} from "@/components/therapy";
import { CaseTeaser } from "@/components/case-links";
import { ExploreNext } from "@/components/explore";
import { FaqSection } from "@/components/faq";
import { Interlude, SectionDots, type DotItem } from "@/components/home-sections";
import { pageHead } from "@/lib/clinic";

/** The home page as a story: welcome, recognise, trust, understand, proof, doubts, act. */
const homeSections: DotItem[] = [
  { id: "welcome", label: "Welcome" },
  { id: "begin", label: "Begin where you are" },
  { id: "support", label: "Areas of support" },
  { id: "self-check", label: "Self-check" },
  { id: "meet", label: "Meet Swaliha" },
  { id: "voices", label: "Client reflections" },
  { id: "hypnotherapy", label: "How hypnotherapy works" },
  { id: "stories", label: "Case studies" },
  { id: "sensitive-care", label: "Sensitive care" },
  { id: "questions", label: "Questions" },
  { id: "book", label: "Book a conversation" },
  { id: "visit", label: "Visit the clinic" },
];

export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Clinical Hypnotherapy & Mental Well-being",
      "Compassionate, individual-centred support with Swaliha Khanam, Clinical Hypnotherapist and Mental Health Coach in Punjabi Bagh, New Delhi.",
    ),
  component: Index,
});
function Index() {
  return (
    <>
      <section id="welcome" className="home-hero">
        <BreathRings className="hero-rings" />
        <SeedScatter className="hero-seeds" />
        <div className="hero-copy">
          <span className="eyebrow">
            <span className="tiny-dot" />
            PUNJABI BAGH, NEW DELHI · IN-CLINIC & ONLINE
          </span>
          <h1>
            A safe space to <em>breathe</em>, heal &amp; grow.
          </h1>
          <svg
            className="hero-squiggle squiggle-draw in"
            viewBox="0 0 115 12"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M2 9C27 1 70 2 112 6M10 11C40 5 79 5 104 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="hero-role">
            Swaliha Khanam · Clinical Hypnotherapist & Mental Health Coach
          </div>
          <p>
            Compassionate, confidential support for stress, anxiety, sleep difficulties,
            self-confidence, and the patterns that hold you back.
          </p>
          <div className="hero-actions">
            <AppointmentButton />
            <AppointmentButton type="Video consultation" variant="quiet" />
          </div>
          <div className="hero-fee">
            Introductory offer — consultations from ₹1,800 · Book via WhatsApp, appointment subject
            to slot confirmation.
          </div>
          <div className="hero-location">
            <MapPin size={14} />
            Punjabi Bagh, New Delhi
          </div>
        </div>
        <div className="hero-portrait">
          <svg className="portrait-clip-defs" width="0" height="0" aria-hidden="true">
            <defs>
              <clipPath id="portraitBlob" clipPathUnits="objectBoundingBox">
                <path d="M0.10,0.04 C0.42,-0.03 0.70,0.00 0.86,0.07 C0.97,0.12 1,0.22 1,0.40 L1,0.80 C1,0.90 0.95,0.95 0.80,0.965 C0.60,0.985 0.30,0.99 0.14,0.98 C0.03,0.972 0,0.90 0,0.74 L0,0.26 C0,0.14 0.02,0.06 0.10,0.04 Z" />
              </clipPath>
            </defs>
          </svg>
          <div className="portrait-stack portrait-shaped">
            <div className="portrait-frame">
              <img
                src={doctorPortrait}
                alt="Swaliha Khanam, Clinical Hypnotherapist and Mental Health Coach"
                width={1066}
                height={1280}
                fetchPriority="high"
                decoding="async"
              />
            </div>
            <div className="portrait-mark">
              <Flower2 strokeWidth={1} />
            </div>
          </div>
          <div className="portrait-caption">
            <Leaf size={22} strokeWidth={1.1} />
            <div>
              <strong>Swaliha Khanam</strong>
              <small>Clinical Hypnotherapist · Mental Health Coach</small>
            </div>
          </div>
        </div>
        <Botanical className="hero-botanical" />
      </section>
      <KeywordMarquee />
      <div id="begin" className="home-anchor">
        <Interlude />
      </div>
      <section id="support" className="support-section home-anchor">
        <CalmWaves className="support-waves" />
        <div className="section-inner">
          <div className="section-heading reveal">
            <div>
              <span className="eyebrow">AREAS OF SUPPORT</span>
              <h2>
                Whatever you’re carrying,
                <br />
                <em>there is space for it here.</em>
              </h2>
            </div>
            <p>
              Life can feel complex. Support can help you understand your experiences and find a way
              forward that feels right for you.
            </p>
          </div>
          <SupportGrid all />
          <CareNote />
        </div>
      </section>
      <SelfCheck />
      <div id="meet" className="home-anchor">
        <AboutHero />
      </div>
      <div id="voices" className="home-anchor">
        <ClientReviews />
      </div>
      <div id="hypnotherapy" className="home-anchor">
        <WhatIsHypnotherapy />
      </div>
      <div id="stories" className="home-anchor">
        <CaseTeaser />
      </div>
      <div id="sensitive-care" className="home-anchor">
        <TraumaCare />
      </div>
      <div id="questions" className="home-anchor">
        <FaqSection
          ids={["control", "notsure", "confirmed", "video", "chronic"]}
          eyebrow="BEFORE YOU DECIDE"
          title={
            <>
              Questions people ask <em>first.</em>
            </>
          }
          footer={
            <>
              More questions? Visit the <Link to="/book">booking page</Link> or{" "}
              <Link to="/about">meet Swaliha</Link>.
            </>
          }
        />
      </div>
      <div id="book" className="home-anchor">
        <BookingBand />
      </div>
      <div id="visit" className="home-anchor">
        <VisitClinic />
      </div>
      <ExploreNext current="/" />
      <SectionDots items={homeSections} />
    </>
  );
}
