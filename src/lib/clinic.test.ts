import { describe, expect, it } from "vitest";
import { appointmentUrl, pricing } from "./clinic";
describe("Supplied consultation rules", () => {
  it("offers clinic visits at a discounted ₹2,000 (from ₹3,000) and includes the fee in the request", () => {
    expect(pricing["Clinic visit"]).toEqual({ original: 3000, price: 2000 });
    const url = new URL(appointmentUrl("Clinic visit"));
    expect(url.searchParams.get("text")).toContain("clinic visit appointment (₹2,000)");
  });
  it("offers video consultations at a discounted ₹1,800 (from ₹2,000) and includes the fee in the request", () => {
    expect(pricing["Video consultation"]).toEqual({ original: 2000, price: 1800 });
    expect(new URL(appointmentUrl("Video consultation")).searchParams.get("text")).toContain(
      "video consultation appointment (₹1,800)",
    );
  });
  it("sends both appointment requests to +91 8796142665 on WhatsApp", () => {
    for (const type of ["Clinic visit", "Video consultation"] as const) {
      const url = new URL(appointmentUrl(type));
      expect(url.origin).toBe("https://wa.me");
      expect(url.pathname).toBe("/918796142665");
    }
  });
});
