import Link from "next/link";
import { ArrowRight, Clock, MapPin } from "lucide-react";
import { eventDate } from "@/components/calendar/calendarUtils";
import {
  DemoBadge,
  EventCategoryBadge,
  EventStatusBadge,
} from "@/components/calendar/EventLabels";
import type { CalendarEvent } from "@/types/event";

type EventAgendaProps = {
  events: CalendarEvent[];
  onSelectEvent?: (eventId: string) => void;
  selectedEventId?: string;
};

export default function EventAgenda({
  events,
  onSelectEvent,
  selectedEventId,
}: EventAgendaProps) {
  const grouped = events.reduce<Map<string, CalendarEvent[]>>((groups, event) => {
    const key = event.startDate;
    const group = groups.get(key) ?? [];
    group.push(event);
    groups.set(key, group);
    return groups;
  }, new Map());

  return (
    <div className="grid gap-12">
      {Array.from(grouped.entries()).map(([date, dateEvents]) => {
        const parsedDate = eventDate(dateEvents[0]);
        const month = new Intl.DateTimeFormat("es-MX", {
          month: "short",
        })
          .format(parsedDate)
          .replace(".", "");
        const year = parsedDate.getFullYear();

        return (
          <section
            key={date}
            aria-labelledby={`agenda-${date}`}
            className="grid gap-5 border-t border-[var(--color-linea)] pt-6 sm:grid-cols-[6.5rem_1fr] sm:gap-8"
          >
            <header className="flex items-baseline gap-3 sm:block">
              <time dateTime={date}>
                <span className="font-display text-5xl font-semibold leading-none text-[var(--color-azul-marino)] sm:text-6xl">
                  {parsedDate.getDate()}
                </span>
                <span className="ml-2 text-sm font-bold uppercase text-[var(--color-guinda)] sm:ml-0 sm:mt-2 sm:block">
                  {month}
                </span>
                <span className="ml-2 text-xs text-[var(--color-muted)] sm:ml-0 sm:mt-1 sm:block">
                  {year}
                </span>
              </time>
              <h2 id={`agenda-${date}`} className="sr-only">
                Actividades del {parsedDate.toLocaleDateString("es-MX")}
              </h2>
            </header>

            <div className="divide-y divide-[var(--color-linea)]">
              {dateEvents.map((event) => {
                const selected = selectedEventId === event.id;

                return (
                  <article
                    key={event.id}
                    className={`editorial-row py-1 first:pt-0 ${
                      selected ? "bg-[var(--color-crema)]/65" : ""
                    }`}
                  >
                    <button
                      type="button"
                      aria-pressed={selected}
                      className="block w-full px-0 py-4 text-left sm:px-4"
                      onClick={() => onSelectEvent?.(event.id)}
                    >
                      <div className="flex flex-wrap gap-2">
                        <EventStatusBadge status={event.status} compact />
                        <EventCategoryBadge category={event.category} compact />
                        {event.isDemo ? <DemoBadge /> : null}
                      </div>
                      <h3 className="mt-3 text-xl font-bold leading-tight text-[var(--color-azul-marino)] sm:text-2xl">
                        {event.title}
                      </h3>
                      <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--color-muted)]">
                        {event.summary}
                      </p>
                    </button>

                    <div className="flex flex-wrap items-center gap-x-6 gap-y-2 px-0 pb-4 text-sm text-[var(--color-muted)] sm:px-4">
                      <p className="flex items-center gap-2">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {event.time}
                      </p>
                      <p className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {event.location}
                      </p>
                      <Link
                        href={`/eventos/${event.slug}`}
                        className="ml-auto inline-flex min-h-11 items-center gap-2 font-bold text-[var(--color-guinda)]"
                      >
                        Ver evento
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
}
