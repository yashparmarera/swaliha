/**
 * Copy for the About page sections. Plain strings only, so it stays browser-safe and testable.
 * Every line restates something the site already says elsewhere (Home, FAQ, case studies).
 */
export type AboutPoint = { title: string; text: string };

export const howIWork: AboutPoint[] = [
  {
    title: "Listening first",
    text: "Meaningful change begins with feeling heard, understood, and respected, so we start by listening.",
  },
  {
    title: "Your pace",
    text: "You share what you want to share. There is no pressure to say more than feels comfortable.",
  },
  {
    title: "The whole person",
    text: "Your experiences, needs, strengths, and circumstances all matter, not only the concern that brought you in.",
  },
  {
    title: "Tools you can keep",
    text: "Hypnotherapy sits alongside conversation, goal setting, and practical tools such as breathing resets and self-guided strategies you can use in daily life.",
  },
];

export const aboutPrinciples: AboutPoint[] = [
  {
    title: "Calm",
    text: "Sessions are meant to feel steady and calm, in the clinic or on video.",
  },
  {
    title: "Non-judgmental",
    text: "Nothing you share is too much.",
  },
  {
    title: "Evidence-aware",
    text: "The case studies here cite their sources and are open about where the evidence is mixed. Outcomes cannot be promised.",
  },
  {
    title: "Respectful of pace",
    text: "You set how fast we go, and you stay aware and in control.",
  },
];

export const firstSessionSteps: AboutPoint[] = [
  {
    title: "A conversation",
    text: "We talk through what brought you in. Share as much or as little as you like.",
  },
  {
    title: "Agree your goals",
    text: "Together we name what you would like to change or understand, in your own words.",
  },
  {
    title: "Guided relaxation, if you are comfortable",
    text: "We may try voice-led relaxation or hypnotherapy. You stay aware and in control throughout.",
  },
  {
    title: "A simple practice to take home",
    text: "You leave with something small, such as a breathing reset, to use in daily life.",
  },
];

export const firstSessionNote = "Every person is different, so the order and pace can change.";

/** Three of the featured case studies, shown as examples of the areas Swaliha supports. */
export const aboutStudySlugs = [
  "the-month-end-panic",
  "awake-at-3-am",
  "the-quiet-promotion-decline",
];

export const compositeLine =
  "The case studies are fictional composites written for education, not real clients.";
