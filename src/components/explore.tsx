import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  BookOpen,
  CalendarCheck,
  Compass,
  HeartHandshake,
  Star,
  UserRound,
} from "lucide-react";
import type { ComponentType } from "react";
import { formatRupees, pricing } from "@/lib/clinic";
import { libraryStats } from "@/lib/case-studies";

/**
 * "Where to go next" block shown at the end of every page.
 * It links to the other navigation pages with short, accurate blurbs, so the
 * whole site reads as one connected body of content. Numbers come from the data.
 * Imports no page components, to avoid import cycles.
 */
export type NavPath = "/" | "/about" | "/support" | "/blog" | "/reviews" | "/book";

type Destination = {
  to: NavPath;
  title: string;
  blurb: string;
  icon: ComponentType<{ size?: number; strokeWidth?: number }>;
};

function destinations(): Destination[] {
  const stats = libraryStats();
  const lowest = Math.min(...Object.values(pricing).map((p) => p.price));
  return [
    {
      to: "/",
      title: "Home",
      blurb: "Start from the beginning: how sessions work, what to expect and where the clinic is.",
      icon: Compass,
    },
    {
      to: "/about",
      title: "About Swaliha",
      blurb: "Meet Swaliha, the values behind her work and how she approaches every session.",
      icon: UserRound,
    },
    {
      to: "/support",
      title: "Areas of support",
      blurb:
        "Eight areas of support, from stress and sleep to confidence and pain, plus a gentle self-check.",
      icon: HeartHandshake,
    },
    {
      to: "/blog",
      title: "Blog & case studies",
      blurb: `${stats.studies} researched case studies and ${stats.paths} reading paths, one story for every area of support.`,
      icon: BookOpen,
    },
    {
      to: "/reviews",
      title: "Client reflections",
      blurb:
        "Heartfelt words shared with permission, always anonymous, each linked to a related story.",
      icon: Star,
    },
    {
      to: "/book",
      title: "Book a conversation",
      blurb: `Request a clinic visit or video consultation on WhatsApp. Offer prices from ${formatRupees(lowest)}.`,
      icon: CalendarCheck,
    },
  ];
}

const ledes: Record<NavPath, string> = {
  "/": "You’re at the start. Here is where each part of the site can take you.",
  "/about": "Now you know a little about Swaliha. Here is where to go next.",
  "/support": "Found something that sounds familiar? These pages go deeper.",
  "/blog": "Case studies make more sense alongside the rest of the picture.",
  "/reviews": "Words from clients are one view. These pages show the rest.",
  "/book": "Still deciding? These pages answer most of what people ask before booking.",
};

export function ExploreNext({ current }: { current: NavPath }) {
  const items = destinations().filter((d) => d.to !== current);
  return (
    <section className="explore section-inner" aria-labelledby="explore-title">
      <div className="explore-head reveal">
        <span className="eyebrow">
          <span className="tiny-dot" />
          KEEP EXPLORING
        </span>
        <h2 id="explore-title">
          Where would you like to <em>go next?</em>
        </h2>
        <p>{ledes[current]}</p>
      </div>
      <ul className="explore-grid reveal reveal-d1">
        {items.map(({ to, title, blurb, icon: Icon }) => (
          <li key={to}>
            <Link to={to} className="explore-card">
              <span className="explore-icon">
                <Icon size={22} strokeWidth={1.5} />
              </span>
              <strong>{title}</strong>
              <p>{blurb}</p>
              <span className="explore-go">
                Visit <ArrowRight size={14} />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
