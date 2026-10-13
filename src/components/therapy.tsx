import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Leaf,
  Menu,
  X,
  MapPin,
  Video,
  Heart,
  Brain,
  Moon,
  Sprout,
  Users,
  Waves,
  ShieldCheck,
  Flower2,
  Sparkles,
  MessageCircle,
  Check,
  Plus,
  Star,
  Quote,
  BadgeCheck,
  Repeat,
  Phone,
  Clock,
  Lock,
  TramFront,
  SquareParking,
  Navigation,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  appointmentUrl,
  clinic,
  directionsUrl,
  mapEmbedUrl,
  selfCheckUrl,
  whatsappUrl,
  type ConsultationType,
} from "@/lib/clinic";
export const doctorPortrait = "/swaliha-pic.webp";
const navigation = [
  { to: "/", label: "Overview" },
  { to: "/about", label: "About me" },
  { to: "/support", label: "Areas of support" },
  { to: "/reviews", label: "Reviews" },
] as const;
export function Brand() {
  return (
    <Link to="/" className="brand">
      <span className="brand-symbol">
        <Flower2 strokeWidth={1.1} />
      </span>
      <span className="brand-text">
        <strong>Dr Swaliha Khanam</strong>
        <small>HEAL. GROW. THRIVE.</small>
      </span>
    </Link>
  );
}
export function WebsiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="site-header">
        <div className="header-inner">
          <Brand />
          <nav aria-label="Main navigation" className="desktop-nav">
            {navigation.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "nav-active" }}
                activeOptions={{ exact: true }}
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <Button asChild variant="therapy" className="header-book">
            <Link to="/book">
              Book an appointment <ArrowUpRight />
            </Link>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="menu-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close navigation" : "Open navigation"}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navigation.map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)}>
                {n.label}
              </Link>
            ))}
            <Link to="/book" onClick={() => setOpen(false)}>
              Book an appointment
            </Link>
          </nav>
        )}
      </header>
      <main>{children}</main>
      <SiteFooter />
      <WhatsAppFloat />
      <div className="mobile-appointment">
        <Button asChild variant="therapy">
          <Link to="/book">
            Book an appointment <ArrowUpRight />
          </Link>
        </Button>
      </div>
    </>
  );
}
function WhatsAppIcon({ size = 26 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.97L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 1.82c2.16 0 4.19.84 5.72 2.37a8.03 8.03 0 0 1 2.37 5.72c0 4.46-3.63 8.09-8.1 8.09a8.1 8.1 0 0 1-4.12-1.13l-.3-.17-3.11.82.83-3.04-.19-.31a8.03 8.03 0 0 1-1.24-4.3c0-4.46 3.63-8.08 8.09-8.08Zm-4.6 4.33c-.21 0-.56.08-.85.4-.29.32-1.11 1.08-1.11 2.64s1.14 3.06 1.3 3.27c.16.21 2.24 3.42 5.44 4.65 2.66 1.02 3.2.82 3.78.77.58-.05 1.86-.76 2.12-1.5.26-.74.26-1.37.18-1.5-.08-.14-.29-.21-.6-.37-.32-.16-1.86-.92-2.15-1.02-.29-.11-.5-.16-.71.16-.21.32-.82 1.02-1 1.23-.18.21-.37.24-.68.08-.32-.16-1.33-.49-2.53-1.56-.94-.83-1.57-1.86-1.75-2.18-.18-.32-.02-.49.14-.65.14-.14.32-.37.47-.56.16-.18.21-.32.32-.53.11-.21.05-.4-.03-.56-.08-.16-.69-1.72-.97-2.35-.25-.59-.5-.51-.69-.52l-.6-.01Z" />
    </svg>
  );
}
export function WhatsAppFloat() {
  const message = "Hello Dr Swaliha Khanam, I would like to ask about an appointment.";
  return (
    <a
      className="wa-float"
      href={whatsappUrl(message)}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon size={28} />
      <span className="wa-float-text">
        <small>Direct scheduling</small>
        <strong>Chat on WhatsApp</strong>
      </span>
    </a>
  );
}
const footerNav = [
  {
    heading: "Navigation",
    links: [
      { to: "/about", label: "About me" },
      { to: "/support", label: "Areas of support" },
      { to: "/reviews", label: "Client reflections" },
      { to: "/book", label: "Book a session" },
    ],
  },
] as const;
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Brand />
          <p>
            Clinical Hypnotherapist &amp; Mental Health Coach. Compassionate, confidential, and
            individual-centred support — a safe space to feel heard, heal, and grow.
          </p>
          <ul className="footer-assurances">
            <li>
              <Lock size={15} /> Confidential, one-on-one sessions
            </li>
            <li>
              <BadgeCheck size={15} /> Trauma-informed, ethical practice
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <span className="footer-heading">Consultations</span>
          <div className="footer-modes">
            <div className="footer-mode">
              <div>
                <strong>In-clinic consultation</strong>
                <small>In-person session in Punjabi Bagh</small>
              </div>
              <span className="footer-fee">₹2,000</span>
            </div>
            <div className="footer-mode">
              <div>
                <strong>Video consultation</strong>
                <small>Connect securely from your own space</small>
              </div>
              <span className="footer-fee">₹2,000</span>
            </div>
          </div>
        </div>
        <div className="footer-col">
          <span className="footer-heading">Practice &amp; location</span>
          <ul className="footer-contact">
            <li>
              <MapPin size={16} />
              <span>{clinic.address}</span>
            </li>
            <li>
              <Phone size={16} />
              <a href={whatsappUrl("Hello Dr Swaliha Khanam,")}>+91 8796142665</a>
            </li>
            <li>
              <Clock size={16} />
              <span>By prior appointment only</span>
            </li>
            <li>
              <a
                href={directionsUrl}
                target="_blank"
                rel="noreferrer"
                className="footer-directions"
              >
                Get directions <ArrowUpRight size={14} />
              </a>
            </li>
          </ul>
        </div>
        {footerNav.map((group) => (
          <div className="footer-col" key={group.heading}>
            <span className="footer-heading">{group.heading}</span>
            <ul className="footer-links">
              {group.links.map((l) => (
                <li key={l.to}>
                  <Link to={l.to}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Dr Swaliha Khanam · Clinical Hypnotherapist &amp; Mental
          Health Coach. Support offered here is complementary and does not replace emergency,
          psychiatric, or medical care. In a crisis, please contact Tele-MANAS (14416) or your local
          emergency services.
        </p>
        <div className="footer-legal">
          <Link to="/about">Confidentiality</Link>
          <Link to="/support">Ethical practice</Link>
        </div>
      </div>
    </footer>
  );
}
export function AppointmentButton({
  type = "Clinic visit",
  variant = "therapy",
}: {
  type?: ConsultationType;
  variant?: "therapy" | "amber" | "quiet";
}) {
  return (
    <Button asChild variant={variant}>
      <a href={appointmentUrl(type)} target="_blank" rel="noreferrer">
        {type === "Clinic visit" ? <MapPin /> : <Video />}{" "}
        {type === "Clinic visit" ? "Book clinic visit" : "Book video consultation"} <ArrowUpRight />
      </a>
    </Button>
  );
}
export function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg className={`botanical ${className}`} viewBox="0 0 180 280" fill="none" aria-hidden="true">
      <path
        d="M75 274C81 210 83 150 119 28M87 189C41 178 26 148 28 121C69 130 86 151 87 189ZM96 139C133 133 157 102 157 78C120 87 103 110 96 139ZM107 94C69 80 62 56 67 35C97 46 107 66 107 94ZM81 237C117 230 143 207 148 177C114 184 89 206 81 237ZM119 43C115 20 127 8 142 4C148 20 138 37 119 43Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
// Decorative background motifs — calming, therapy-relevant line art.
// All use currentColor (color set via the wrapping class) and are purely decorative.
export function BreathRings({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`deco deco-rings ${className}`}
      viewBox="0 0 240 240"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="120" cy="120" r="38" stroke="currentColor" strokeWidth="1" />
      <circle cx="120" cy="120" r="62" stroke="currentColor" strokeWidth="1" opacity=".75" />
      <circle cx="120" cy="120" r="86" stroke="currentColor" strokeWidth="1" opacity=".5" />
      <circle cx="120" cy="120" r="110" stroke="currentColor" strokeWidth="1" opacity=".28" />
    </svg>
  );
}
export function CalmWaves({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`deco deco-waves ${className}`}
      viewBox="0 0 320 120"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M0 28C40 10 80 10 120 28S200 46 240 28s80-18 120 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M0 58C40 40 80 40 120 58S200 76 240 58s80-18 120 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity=".7"
      />
      <path
        d="M0 88C40 70 80 70 120 88S200 106 240 88s80-18 120 0"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity=".45"
      />
    </svg>
  );
}
export function LeafSprig({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`deco deco-sprig ${className}`}
      viewBox="0 0 120 180"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M60 176C62 130 63 92 86 20"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M66 128C40 120 31 101 32 84 59 90 66 104 66 128Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M70 96C96 90 108 70 108 54 83 60 72 76 70 96Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M74 66C50 56 45 39 49 24 72 32 78 48 74 66Z"
        stroke="currentColor"
        strokeWidth="1.2"
      />
    </svg>
  );
}
export function SeedScatter({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`deco deco-seeds ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <g stroke="currentColor" strokeWidth="1.1">
        <path d="M30 40c10-6 16 0 10 10-10 6-16 0-10-10Z" />
        <path d="M150 30c10-6 16 0 10 10-10 6-16 0-10-10Z" opacity=".7" />
        <path d="M170 120c10-6 16 0 10 10-10 6-16 0-10-10Z" opacity=".55" />
        <path d="M60 150c10-6 16 0 10 10-10 6-16 0-10-10Z" opacity=".6" />
        <path d="M110 90c10-6 16 0 10 10-10 6-16 0-10-10Z" opacity=".45" />
      </g>
    </svg>
  );
}
export const supportAreas = [
  {
    icon: Heart,
    title: "Counselling & emotional well-being",
    text: "A space to understand your feelings and navigate life with greater self-awareness.",
  },
  {
    icon: Brain,
    title: "Stress & anxiety",
    text: "Explore what feels overwhelming and build healthier ways of coping.",
  },
  {
    icon: Moon,
    title: "Sleep & relaxation",
    text: "Support for sleep difficulties, a busy mind, and finding moments of calm.",
  },
  {
    icon: Sprout,
    title: "Confidence & personal growth",
    text: "Reconnect with your strengths and develop a kinder relationship with yourself.",
  },
  {
    icon: Users,
    title: "Relationships & life concerns",
    text: "Compassionate support through relationship challenges and life transitions.",
  },
  {
    icon: Waves,
    title: "Habits & behaviour",
    text: "Understand unhelpful patterns and explore more adaptive responses.",
  },
  {
    icon: Sparkles,
    title: "Clinical hypnotherapy",
    text: "A supportive approach to exploring patterns in thoughts, emotions, and behaviours.",
  },
  {
    icon: Flower2,
    title: "Elderly well-being & chronic pain",
    text: "Emotional coping, adjustment, and relaxation for ageing and long-term health concerns.",
  },
];
export function SupportGrid({ all = false }: { all?: boolean }) {
  return (
    <div className="support-grid">
      {supportAreas.slice(0, all ? 8 : 4).map(({ icon: Icon, title, text }, i) => (
        <Link to="/support" className="support-item" key={title}>
          <div className="support-top">
            <Icon strokeWidth={1.2} />
            <span>0{i + 1}</span>
          </div>
          <h3>{title}</h3>
          <p>{text}</p>
          <ArrowUpRight className="support-arrow" size={18} />
        </Link>
      ))}
    </div>
  );
}
export function BookingBand() {
  return (
    <section className="booking-band">
      <CalmWaves className="booking-waves" />
      <div className="section-inner booking-inner">
        <div>
          <span className="eyebrow">YOUR FIRST STEP, AT YOUR OWN PACE</span>
          <h2>
            You don’t have to
            <br />
            do it <em>all alone.</em>
          </h2>
          <p>
            In person or from the comfort of your own space.
            <br />
            Let’s begin with a conversation.
          </p>
        </div>
        <div className="booking-options">
          <div>
            <MapPin strokeWidth={1.5} />
            <span>
              Clinic visit<small>Punjabi Bagh, New Delhi</small>
            </span>
            <strong>₹2,000</strong>
            <AppointmentButton variant="amber" />
          </div>
          <div>
            <Video strokeWidth={1.5} />
            <span>
              Video consultation<small>Connect from your own space</small>
            </span>
            <strong>₹2,000</strong>
            <AppointmentButton type="Video consultation" variant="quiet" />
          </div>
          <p className="booking-note">
            Appointments are requested on WhatsApp and confirmed directly with the clinic.
          </p>
        </div>
      </div>
    </section>
  );
}
export function PageIntro({
  eyebrow,
  title,
  accent,
  children,
}: {
  eyebrow: string;
  title: string;
  accent?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="page-intro section-inner">
      <span className="eyebrow">
        <span className="tiny-dot" />
        {eyebrow}
      </span>
      <h1>
        {title} {accent && <em>{accent}</em>}
      </h1>
      {children && <p>{children}</p>}
      <Botanical />
    </section>
  );
}
export function Location() {
  return (
    <section className="location section-inner">
      <LeafSprig className="location-sprig" />
      <div>
        <span className="eyebrow">A WELCOMING SPACE IN WEST DELHI</span>
        <h2>
          Find us in <em>Punjabi Bagh.</em>
        </h2>
      </div>
      <div className="location-address">
        <MapPin strokeWidth={1.3} />
        <div>
          <h3>Doctors Plaza Punjabi Bagh</h3>
          <p>{clinic.address}</p>
          <a href={directionsUrl} target="_blank" rel="noreferrer" className="text-link">
            Get directions <ArrowUpRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
export function CareNote() {
  return (
    <p className="care-note">
      <ShieldCheck size={21} /> Elderly well-being and chronic-pain support is complementary and
      does not replace medical care or pain treatment.
    </p>
  );
}
export const selfCheckPrompts = [
  "Stress, anxiety & emotional overwhelm",
  "Sleep difficulties & trouble relaxing",
  "Low self-confidence or self-esteem",
  "Relationship & life difficulties",
  "Unhelpful habits & patterns",
  "Adjusting to difficult life experiences",
  "The emotional side of a chronic health condition",
  "Well-being concerns associated with ageing",
  "Wanting personal growth & self-understanding",
];
export function SelfCheck() {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (prompt: string) =>
    setSelected((prev) =>
      prev.includes(prompt) ? prev.filter((p) => p !== prompt) : [...prev, prompt],
    );
  const count = selected.length;
  const message =
    count === 0
      ? "Nothing has to feel “bad enough” to deserve care."
      : count < 3
        ? "Even one of these is reason enough to talk to someone."
        : "That sounds like a lot to carry alone — and you don’t have to.";
  return (
    <section className="selfcheck section-inner">
      <BreathRings className="selfcheck-rings" />
      <div className="selfcheck-head">
        <span className="eyebrow">
          <span className="tiny-dot" />
          WHO CAN SEEK SUPPORT
        </span>
        <h2>
          Do any of these feel <em>familiar?</em>
        </h2>
        <p>
          Select whatever resonates. There are no right answers — this is just a gentle way to
          notice what you might like to talk about.
        </p>
      </div>
      <div className="selfcheck-pills" role="group" aria-label="Concerns that feel familiar">
        {selfCheckPrompts.map((prompt) => {
          const on = selected.includes(prompt);
          return (
            <button
              key={prompt}
              type="button"
              className={on ? "selfcheck-pill on" : "selfcheck-pill"}
              aria-pressed={on}
              onClick={() => toggle(prompt)}
            >
              {on ? <Check size={15} /> : <Plus size={15} />}
              {prompt}
            </button>
          );
        })}
      </div>
      <div className="selfcheck-result">
        <span className="selfcheck-count">{count} selected</span>
        <p>{message}</p>
        <Button asChild variant="therapy">
          <a href={selfCheckUrl(selected)} target="_blank" rel="noreferrer">
            <MessageCircle size={16} /> Start a confidential chat <ArrowUpRight size={16} />
          </a>
        </Button>
      </div>
    </section>
  );
}
export const clientReviews = [
  {
    initials: "P.S.",
    quote:
      "My anxiety had made peaceful sleep impossible for two years. Through her calming voice and hypnotherapy, I finally regained natural rest.",
    detail:
      "Dr Swaliha took time to listen to my roots without any rush. I left the Punjabi Bagh clinic feeling lighter than I had in years.",
    name: "Corporate Lead, New Delhi",
    mode: "In-person sessions",
  },
  {
    initials: "A.M.",
    quote:
      "I was sceptical of online hypnotherapy, but the video sessions were deeply impactful. She is remarkably gentle and perceptive.",
    detail:
      "The tools she provided helped me dissolve imposter syndrome before major presentations and untangle long-standing family dynamics.",
    name: "Senior Academic, Bengaluru",
    mode: "Virtual video sessions",
  },
  {
    initials: "R.K.",
    quote:
      "Trauma-informed in the truest sense. Her patience and respectful boundaries made me feel completely safe.",
    detail:
      "I never felt forced to recall painful events before I was ready. The grounding exercises have become second nature in handling panic.",
    name: "Client, Delhi NCR",
    mode: "Trauma-informed care",
  },
];
export function ClientReviews() {
  return (
    <section className="reviews-section">
      <SeedScatter className="reviews-seeds" />
      <div className="section-inner">
        <div className="reviews-heading">
          <span className="eyebrow">
            <span className="tiny-dot" />
            CLIENT REFLECTIONS
          </span>
          <h2>
            Heartfelt <em>Journeys of Healing</em>
          </h2>
          <p>Shared with permission under complete client anonymity to honour confidentiality.</p>
        </div>
        <div className="reviews-grid">
          {clientReviews.map((r, i) => (
            <article
              className="review-card"
              key={r.initials}
              style={{ animationDelay: `${i * 0.14}s` }}
            >
              <Quote className="review-quote-mark" aria-hidden="true" />
              <div className="review-stars" aria-label="Five out of five stars">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={15}
                    fill="currentColor"
                    strokeWidth={0}
                    style={{ animationDelay: `${i * 0.14 + s * 0.08}s` }}
                  />
                ))}
              </div>
              <blockquote>“{r.quote}”</blockquote>
              <p className="review-detail">{r.detail}</p>
              <div className="review-person">
                <span className="review-avatar">{r.initials}</span>
                <div>
                  <strong>{r.name}</strong>
                  <small>{r.mode}</small>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
export const hypnoFeatures = [
  {
    icon: BadgeCheck,
    title: "You are in 100% control, always",
    text: "You cannot be made to do, say, or accept anything that conflicts with your core values, morals, or personal desire.",
  },
  {
    icon: Leaf,
    title: "A natural, focused state",
    text: "Similar to the absorption you feel when engrossed in a gripping book, driving a familiar road, or just before deep sleep.",
  },
  {
    icon: Repeat,
    title: "Gently reworking old patterns",
    text: "A supportive way to explore patterns where willpower alone has felt exhausting or ineffective, and build healthier responses.",
  },
];
export const hypnoStages = [
  {
    n: "01",
    title: "Conscious exploration & grounding",
    text: "We begin with a conversational exploration of your immediate concerns, uncovering triggers and defining your therapeutic goals in a space that feels safe.",
  },
  {
    n: "02",
    title: "Gentle induction & relaxation",
    text: "Guided, voice-led progressive relaxation calms the nervous system, allowing access to deeper subconscious resources and associations.",
  },
  {
    n: "03",
    title: "Integration & practical coping",
    text: "Re-orienting with tangible psychological anchors, breathing resets, and self-guided strategies you can carry into daily life.",
  },
];
export function WhatIsHypnotherapy() {
  return (
    <section className="hypno-section">
      <CalmWaves className="hypno-waves" />
      <div className="section-inner hypno-grid">
        <div className="hypno-copy">
          <span className="eyebrow">
            <span className="tiny-dot" />
            THE SCIENCE OF TRANCE
          </span>
          <h2>
            What is <em>Clinical Hypnotherapy?</em>
          </h2>
          <p className="hypno-lead">
            “As a Clinical Hypnotherapist, I use hypnotherapy as a supportive approach to help
            individuals explore patterns in thoughts, emotions, and behaviours and develop more
            adaptive responses. My approach is individual-centred, compassionate, and
            goal-oriented.”
          </p>
          <p>
            Unlike theatrical entertainment depictions, clinical hypnotherapy is a recognised
            therapeutic state of focused attention, heightened receptivity, and calm physical
            relaxation. You remain completely in control, fully aware of your surroundings, and in
            full partnership with your therapist throughout.
          </p>
          <div className="hypno-features">
            {hypnoFeatures.map(({ icon: Icon, title, text }) => (
              <div className="hypno-feature" key={title}>
                <span className="hypno-feature-ico">
                  <Icon strokeWidth={1.4} />
                </span>
                <div>
                  <strong>{title}</strong>
                  <p>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <aside className="hypno-card">
          <div className="hypno-card-head">
            <h3>How sessions flow</h3>
            <span className="hypno-badge">3-stage approach</span>
          </div>
          <ol className="hypno-stages">
            {hypnoStages.map((s) => (
              <li className="hypno-stage" key={s.n}>
                <span className="hypno-stage-num">{s.n}</span>
                <div>
                  <strong>{s.title}</strong>
                  <p>{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="hypno-ethics">
            <ShieldCheck strokeWidth={1.5} />
            <p>
              <strong>Ethics note:</strong> Grounded in the ethical standards of clinical practice.
              Where a concern needs specialised psychiatric, medical, or multidisciplinary care,
              appropriate referral and collaboration are encouraged.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
export const traumaAssurances = [
  "Strict identity & record confidentiality",
  "Gentle, non-retraumatizing pacing",
  "Collaborative legal & care coordination",
  "Emotional stabilization & grounding",
];
export function TraumaCare() {
  const message =
    "Hello Dr Swaliha Khanam, I would like to make a confidential enquiry about sensitive, trauma-informed support.";
  return (
    <section className="trauma-care section-inner">
      <div className="trauma-card">
        <div className="trauma-copy">
          <span className="trauma-badge">
            <ShieldCheck size={13} strokeWidth={2} />
            SPECIALIZED CLINICAL DOMAIN
          </span>
          <h2>
            Trauma-Informed Care &amp; <em>POCSO Case Experience</em>
          </h2>
          <p>
            Experience supporting POCSO-related cases with the highest sensitivity — strict
            confidentiality, emotional safety, supportive communication, coping strategies, and
            trauma-informed care. Where required, appropriate referral and collaborative,
            multidisciplinary care are encouraged.
          </p>
          <ul className="trauma-points">
            {traumaAssurances.map((a) => (
              <li key={a}>
                <Check size={14} strokeWidth={2.5} />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <aside className="trauma-inquiry">
          <span className="trauma-lock">
            <Lock size={22} strokeWidth={1.6} />
          </span>
          <strong>Confidential enquiry</strong>
          <p>Reach out directly on WhatsApp for discreet assistance.</p>
          <a className="trauma-cta" href={whatsappUrl(message)} target="_blank" rel="noreferrer">
            <WhatsAppIcon size={17} /> Direct confidential chat
          </a>
        </aside>
      </div>
    </section>
  );
}
export function VisitClinic() {
  const directionsMessage = `Hello Dr Swaliha Khanam, I would like directions to the clinic for my appointment. Could you please confirm the location?\n\n${directionsUrl}`;
  return (
    <section className="visit-clinic section-inner">
      <div className="visit-copy">
        <span className="eyebrow">
          <span className="tiny-dot" />
          NEW DELHI PRACTICE
        </span>
        <h2>
          Visit the clinic in <em>Punjabi Bagh</em>
        </h2>
        <p>
          Located in a calm, reputable medical plaza in West Delhi, with full privacy and lift
          accessibility.
        </p>
        <div className="visit-card">
          <div className="visit-address">
            <MapPin size={18} strokeWidth={1.6} />
            <div>
              <strong>Doctors Plaza Punjabi Bagh</strong>
              <span>{clinic.address}</span>
            </div>
          </div>
          <ul className="visit-details">
            <li>
              <TramFront size={16} />
              Punjabi Bagh West Metro (Pink Line)
            </li>
            <li>
              <SquareParking size={16} />
              Valet &amp; reserved parking
            </li>
            <li>
              <Clock size={16} />
              By prior appointment
            </li>
            <li>
              <Phone size={16} />
              +91 8796142665
            </li>
          </ul>
        </div>
        <a
          className="visit-cta therapy-button"
          href={whatsappUrl(directionsMessage)}
          target="_blank"
          rel="noreferrer"
        >
          <Navigation size={16} /> Get clinic directions via WhatsApp
        </a>
      </div>
      <a
        className="visit-map"
        href={directionsUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Open the clinic location in Google Maps"
      >
        <iframe
          className="visit-map-frame"
          src={mapEmbedUrl}
          title="Map showing Doctors Plaza Punjabi Bagh, New Delhi"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <span className="visit-map-bar">
          <span>
            <strong>Doctors Plaza Punjabi Bagh</strong>
            <small>New Delhi, Delhi 110026</small>
          </span>
          <MapPin size={18} />
        </span>
      </a>
    </section>
  );
}
