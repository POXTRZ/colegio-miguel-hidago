import { confirmedEvents } from "@/data/confirmed/events";
import { demoEvents } from "@/data/demo/events";

export const isEventDemoMode = process.env.NODE_ENV === "development";

export const visibleEvents = isEventDemoMode
  ? [...confirmedEvents, ...demoEvents]
  : confirmedEvents;

export function getVisibleEvent(slug: string) {
  return visibleEvents.find((event) => event.slug === slug);
}
