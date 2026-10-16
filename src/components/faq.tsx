import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { formatRupees, pricing } from "@/lib/clinic";

/**
 * One shared FAQ for the whole site (Home and Book), so answers never drift apart.
 * Prices are read from the pricing data rather than typed in.
 * Imports no page components, to avoid import cycles.
 */
export type FaqId = "request" | "confirmed" | "video" | "control" | "chronic" | "notsure";

function offerText() {
  const clinic = pricing["Clinic visit"];
  const video = pricing["Video consultation"];
  return {
    clinic: `${formatRupees(clinic.price)} (usually ${formatRupees(clinic.original)})`,
    video: `${formatRupees(video.price)} (usually ${formatRupees(video.original)})`,
  };
}

function faqItems(): Record<FaqId, { question: string; answer: ReactNode }> {
  const offer = offerText();
  return {
    request: {
      question: "How do I request an appointment?",
      answer: (
        <p>
          Select your preferred consultation type. WhatsApp will open with a message that includes
          your choice and the current offer fee. Send the message to discuss availability and next
          steps directly with the clinic.
        </p>
      ),
    },
    confirmed: {
      question: "Is my appointment confirmed when I click the booking button?",
      answer: (
        <p>
          No. The button opens an appointment request on WhatsApp. Your appointment is only
          confirmed after you have arranged it directly with the clinic.
        </p>
      ),
    },
    video: {
      question: "Can I choose a video consultation?",
      answer: (
        <p>
          Yes. Both clinic visits and video consultations are available. As an introductory offer, a
          clinic visit is {offer.clinic} and a video consultation is {offer.video}. Choose the
          option that works best for you.
        </p>
      ),
    },
    control: {
      question: "Will I lose control during hypnotherapy?",
      answer: (
        <p>
          No. Clinical hypnotherapy is a state of focused attention and calm physical relaxation.
          You remain completely in control, fully aware of your surroundings, and in full
          partnership with your therapist throughout. You cannot be made to do, say, or accept
          anything that conflicts with your core values, morals, or personal desire.
        </p>
      ),
    },
    chronic: {
      question: "Does chronic-pain support replace medical treatment?",
      answer: (
        <p>
          No. Elderly well-being and chronic-pain support focuses on emotional and psychological
          well-being. It is complementary and does not replace medical care or pain treatment.
          Appropriate referral and collaborative care are encouraged when specialised support is
          needed.
        </p>
      ),
    },
    notsure: {
      question: "Not sure whether this is right for me?",
      answer: (
        <p>
          That’s completely normal. You can try the gentle{" "}
          <Link to="/support" hash="self-check">
            self-check
          </Link>{" "}
          to notice what you might want to talk about, read a{" "}
          <Link to="/blog">researched case study</Link> to see what sessions are like, or browse{" "}
          <Link to="/reviews">what clients say</Link>. If you’d like to know more about who you
          would be speaking with, <Link to="/about">meet Swaliha</Link>.
        </p>
      ),
    },
  };
}

export function FaqSection({
  ids,
  eyebrow = "A FEW THINGS YOU MAY BE WONDERING",
  title,
  footer,
}: {
  ids: FaqId[];
  eyebrow?: string;
  title?: ReactNode;
  footer?: ReactNode;
}) {
  const items = faqItems();
  return (
    <section className="faq-section section-inner reveal">
      <span className="eyebrow">{eyebrow}</span>
      <h2>
        {title ?? (
          <>
            Before we <em>begin.</em>
          </>
        )}
      </h2>
      {ids.map((id) => (
        <details key={id}>
          <summary>{items[id].question}</summary>
          {items[id].answer}
        </details>
      ))}
      {footer && <div className="faq-footer">{footer}</div>}
    </section>
  );
}
