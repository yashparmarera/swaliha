import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, BookingBand, VisitClinic } from "@/components/therapy";
import { ExploreNext } from "@/components/explore";
import { FaqSection } from "@/components/faq";
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/book")({
  head: () =>
    pageHead(
      "Book an Appointment",
      "Request a clinic visit in Punjabi Bagh or a video consultation with Swaliha Khanam via WhatsApp. Introductory offer: clinic visit ₹2,000, video consultation ₹1,800.",
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
      <FaqSection ids={["request", "confirmed", "video", "control", "chronic", "notsure"]} />
      <ExploreNext current="/book" />
    </>
  );
}
