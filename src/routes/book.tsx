import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, BookingBand, VisitClinic } from "@/components/therapy";
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/book")({
  head: () =>
    pageHead(
      "Book an Appointment",
      "Request a clinic visit in Punjabi Bagh or a video consultation with Dr Swaliha Khanam via WhatsApp. Each consultation is ₹2,000.",
    ),
  component: Book,
});
function Book() {
  return (
    <>
      <PageIntro eyebrow="BOOK AN APPOINTMENT" title="A first step towards" accent="feeling heard.">
        Choose a clinic visit or a video consultation. Send your appointment request on WhatsApp,
        and the clinic will help you with the next steps.
      </PageIntro>
      <BookingBand />
      <VisitClinic />
      <section className="faq-section section-inner">
        <span className="eyebrow">A FEW THINGS YOU MAY BE WONDERING</span>
        <h2>
          Before we <em>begin.</em>
        </h2>
        <details>
          <summary>How do I request an appointment?</summary>
          <p>
            Select your preferred consultation type. WhatsApp will open with a message that includes
            your choice and the ₹2,000 fee. Send the message to discuss availability and next steps
            directly with the clinic.
          </p>
        </details>
        <details>
          <summary>Is my appointment confirmed when I click the booking button?</summary>
          <p>
            No. The button opens an appointment request on WhatsApp. Your appointment is only
            confirmed after you have arranged it directly with the clinic.
          </p>
        </details>
        <details>
          <summary>Can I choose a video consultation?</summary>
          <p>
            Yes. Both clinic visits and video consultations are available, each priced at ₹2,000.
            Choose the option that works best for you.
          </p>
        </details>
        <details>
          <summary>Does chronic-pain support replace medical treatment?</summary>
          <p>
            No. Elderly well-being and chronic-pain support focuses on emotional and psychological
            well-being. It is complementary and does not replace medical care or pain treatment.
            Appropriate referral and collaborative care are encouraged when specialised support is
            needed.
          </p>
        </details>
      </section>
    </>
  );
}
