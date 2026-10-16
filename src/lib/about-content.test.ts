import { describe, expect, it } from "vitest";
import { studiesFromSlugs } from "./case-studies";
import {
  aboutPrinciples,
  aboutStudySlugs,
  compositeLine,
  firstSessionNote,
  firstSessionSteps,
  howIWork,
} from "./about-content";

const allCopy = [
  ...howIWork,
  ...aboutPrinciples,
  ...firstSessionSteps,
  { title: "", text: firstSessionNote },
  { title: "", text: compositeLine },
]
  .map((p) => `${p.title} ${p.text}`)
  .join("\n");

describe("About page content", () => {
  it("links only to case studies that exist", () => {
    expect(studiesFromSlugs(aboutStudySlugs)).toHaveLength(aboutStudySlugs.length);
    expect(aboutStudySlugs).toHaveLength(3);
  });

  it("has four principles, four approach points and four first-session steps", () => {
    expect(howIWork).toHaveLength(4);
    expect(aboutPrinciples).toHaveLength(4);
    expect(firstSessionSteps).toHaveLength(4);
  });

  it("avoids titles, promises and punctuation the site does not use", () => {
    expect(allCopy).not.toMatch(/\bDr\b/);
    expect(allCopy).not.toMatch(/strictly/i);
    expect(allCopy).not.toMatch(/guarantee/i);
    expect(allCopy).not.toMatch(/\bcures?\b/i);
    expect(allCopy).not.toMatch(/POCSO/i);
    expect(allCopy).not.toContain("!");
    expect(allCopy).not.toContain("\u2014");
  });
});
