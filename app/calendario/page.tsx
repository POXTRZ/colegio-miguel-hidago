import EventCalendar from "@/components/calendar/EventCalendar";
import { isEventDemoMode, visibleEvents } from "@/data/events";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Calendario y eventos",
  description:
    "Agenda y calendario del Colegio Miguel Hidalgo con filtros y detalles de eventos confirmados.",
  path: "/calendario",
});

export default function CalendarioPage() {
  return (
    <EventCalendar events={visibleEvents} demoMode={isEventDemoMode} />
  );
}
