import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import {
  eventDate,
  formatFullDate,
} from "@/components/calendar/calendarUtils";
import {
  DemoBadge,
  EventCategoryBadge,
  EventStatusBadge,
} from "@/components/calendar/EventLabels";
import type { CalendarEvent } from "@/types/event";

type EventAgendaProps = {
  events: CalendarEvent[];
  onSelectEvent?: (eventId: string) => void;
};

export default function EventAgenda({
  events,
  onSelectEvent,
}: EventAgendaProps) {
  const grouped = events.reduce<Map<string, CalendarEvent[]>>((groups, event) => {
    const key = event.startDate;
    const group = groups.get(key) ?? [];
    group.push(event);
    groups.set(key, group);
    return groups;
  }, new Map());

  return (
    <div className="grid gap-10">
      {Array.from(grouped.entries()).map(([date, dateEvents]) => (
        <section key={date} aria-labelledby={`agenda-${date}`}>
          <h2
            id={`agenda-${date}`}
            className="border-b border-[var(--color-linea)] pb-3 font-display text-2xl font-bold capitalize text-[var(--color-azul-marino)]"
          >
            {formatFullDate(eventDate(dateEvents[0]))}
          </h2>
          <div className="grid gap-4 pt-4">
            {dateEvents.map((event) => (
              <article
                key={event.id}
                className="border-l-4 border-[var(--color-guinda)] bg-white p-5 shadow-[var(--shadow-sm)]"
              >
                <div className="flex flex-wrap gap-2">
                  <EventStatusBadge status={event.status} />
                  <EventCategoryBadge category={event.category} />
                  {event.isDemo ? <DemoBadge /> : null}
                </div>
                <button
                  type="button"
                  className="mt-4 block text-left"
                  onClick={() => onSelectEvent?.(event.id)}
                >
                  <h3 className="text-2xl font-bold leading-tight">
                    {event.title}
                  </h3>
                  <p className="mt-3 leading-7 text-[var(--color-muted)]">
                    {event.summary}
                  </p>
                </button>
                <div className="mt-5 grid gap-2 text-sm text-[var(--color-muted)] sm:grid-cols-2">
                  <p className="flex items-center gap-2">
                    <Clock className="h-4 w-4" aria-hidden="true" />
                    {event.time}
                  </p>
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    {event.location}
                  </p>
                </div>
                <Link
                  href={`/eventos/${event.slug}`}
                  className="mt-5 inline-flex min-h-11 items-center gap-2 font-bold text-[var(--color-guinda)]"
                >
                  Ver evento
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
