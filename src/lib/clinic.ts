export const clinic = {
  name: "Swaliha Khanam",
  role: "Clinical Hypnotherapist & Mental Health Coach",
  phone: "918796142665",
  address:
    "Doctors Plaza Punjabi Bagh, 63, W Ave Rd, above Luxury Akhada, West Punjabi Bagh, New Delhi, Delhi, 110026",
};
export type ConsultationType = "Clinic visit" | "Video consultation";
/** Introductory-offer pricing: `original` is the usual fee (shown struck through), `price` is the live discounted fee. */
export const pricing: Record<ConsultationType, { original: number; price: number }> = {
  "Clinic visit": { original: 3000, price: 2000 },
  "Video consultation": { original: 2000, price: 1800 },
};
export function formatRupees(amount: number) {
  return `₹${amount.toLocaleString("en-IN")}`;
}
export function appointmentUrl(type: ConsultationType) {
  const { price } = pricing[type];
  const message = `Hello Swaliha Khanam, I would like to request a ${type.toLowerCase()} appointment (${formatRupees(price)}). Please let me know the next steps and availability.`;
  return whatsappUrl(message);
}
export function whatsappUrl(message: string) {
  return `https://wa.me/${clinic.phone}?text=${encodeURIComponent(message)}`;
}
export function selfCheckUrl(selected: string[]) {
  const intro =
    "Hello Swaliha Khanam, I went through the list of concerns on your website and would like to talk.";
  const body = selected.length
    ? `\n\nThe ones that felt familiar to me:\n${selected.map((s) => `• ${s}`).join("\n")}`
    : "";
  return whatsappUrl(intro + body);
}
export function aboutQuestionUrl() {
  return whatsappUrl(
    "Hello Swaliha Khanam, I read about how you work and have a question before booking an appointment.",
  );
}
export const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(clinic.address)}`;
export const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(clinic.address)}&z=14&output=embed`;
export function pageHead(title: string, description: string) {
  return {
    meta: [
      { title: `${title} | Swaliha Khanam` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Swaliha Khanam` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  };
}
