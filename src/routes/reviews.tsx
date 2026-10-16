import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ClientReviews, BookingBand } from "@/components/therapy";
import { pageHead } from "@/lib/clinic";
export const Route = createFileRoute("/reviews")({
  head: () =>
    pageHead(
      "Reviews",
      "Heartfelt reflections shared with permission by clients of Swaliha Khanam, under complete anonymity to honour confidentiality.",
    ),
  component: Reviews,
});
function Reviews() {
  return (
    <>
      <PageIntro eyebrow="REVIEWS" title="Every journey is" accent="personal.">
        A thoughtful space for genuine experiences, shared with care and complete confidentiality.
      </PageIntro>
      <ClientReviews />
      <BookingBand />
    </>
  );
}
