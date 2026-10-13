import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Heart, ShieldCheck, Sprout, MapPin, Flower2 } from "lucide-react";
import {
  AppointmentButton,
  Botanical,
  BreathRings,
  CalmWaves,
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
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/")({
  head: () =>
    pageHead(
      "Clinical Hypnotherapy & Mental Well-being",
      "Compassionate, individual-centred support with Dr Swaliha Khanam, Clinical Hypnotherapist and Mental Health Coach in Punjabi Bagh, New Delhi.",
    ),
  component: Index,
});
function Index() {
  return (
    <>
      <section className="home-hero">
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
          <svg className="hero-squiggle" viewBox="0 0 115 12" fill="none" aria-hidden="true">
            <path
              d="M2 9C27 1 70 2 112 6M10 11C40 5 79 5 104 8"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
          <div className="hero-role">
            Dr Swaliha Khanam · Clinical Hypnotherapist & Mental Health Coach
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
            ₹2,000 per consultation · Book via WhatsApp — appointment subject to slot confirmation.
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
                alt="Dr Swaliha Khanam, Clinical Hypnotherapist and Mental Health Coach"
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
              <strong>Dr Swaliha Khanam</strong>
              <small>Clinical Hypnotherapist · Mental Health Coach</small>
            </div>
          </div>
        </div>
        <Botanical className="hero-botanical" />
      </section>
      <div className="values-strip">
        <span>
          <ShieldCheck />A safe, non-judgmental space
        </span>
        <span>
          <Heart />
          Compassionate, individual-centred care
        </span>
        <span>
          <Sprout />
          Your pace. Your journey.
        </span>
        <span>
          <Leaf />
          Trauma-informed support
        </span>
      </div>
      <section className="support-section">
        <CalmWaves className="support-waves" />
        <div className="section-inner">
          <div className="section-heading">
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
        </div>
      </section>
      <SelfCheck />
      <section className="approach-section section-inner">
        <div className="approach-visual">
          <img
            src={doctorPortrait}
            alt="Dr Swaliha Khanam in her clinic"
            className="approach-photo"
            width={1066}
            height={1280}
            loading="lazy"
            decoding="async"
          />
          <span>ROOTED IN COMPASSION</span>
        </div>
        <div className="approach-copy">
          <span className="eyebrow">MY APPROACH</span>
          <h2>
            Not just your concerns.
            <br />
            <em>You, as a whole person.</em>
          </h2>
          <p>
            Rather than focusing only on a single concern, I take time to understand you as a whole
            person — your experiences, needs, strengths, and the circumstances you are navigating.
          </p>
          <p>
            There is no rush and nothing you share is ever “too much”. We move at your pace, in a
            space built on being heard, understood, and respected.
          </p>
          <Link to="/about" className="text-link">
            A little more about me <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <WhatIsHypnotherapy />
      <TraumaCare />
      <ClientReviews />
      <BookingBand />
      <VisitClinic />
    </>
  );
}
