import { CalendarDays, Clock, MapPin, Users } from "lucide-react";
import type { CalendarEvent } from "@/data/site";
import {
  categoryStyles,
  eventDate,
  formatFullDate,
} from "@/components/calendar/calendarUtils";

type EventPopoverProps = {
  event: CalendarEvent;
};

export default function EventPopover({ event }: EventPopoverProps) {
  return (
    <div className="rounded-lg border border-[var(--color-linea)] bg-white p-6 shadow-sm">
      <span
        className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
          categoryStyles[event.category]
        }`}
      >
        {event.category}
      </span>
      <h3 className="mt-4 text-3xl font-bold leading-tight">{event.title}</h3>
      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
        {event.summary}
      </p>
      <div className="mt-6 grid gap-3 text-sm text-[var(--color-muted)]">
        <p className="flex gap-3">
          <CalendarDays className="h-5 w-5 text-[var(--color-guinda)]" />
          {formatFullDate(eventDate(event))}
        </p>
        <p className="flex gap-3">
          <Clock className="h-5 w-5 text-[var(--color-guinda)]" />
          {event.time}
        </p>
        <p className="flex gap-3">
          <MapPin className="h-5 w-5 text-[var(--color-guinda)]" />
          {event.location}
        </p>
        <p className="flex gap-3">
          <Users className="h-5 w-5 text-[var(--color-guinda)]" />
          {event.audience}
        </p>
      </div>
      <div className="mt-6 rounded-lg bg-[var(--color-fondo)] p-4">
        <p className="text-sm font-bold text-[var(--color-tinta)]">
          Detalles
        </p>
        <ul className="mt-3 grid gap-2 text-sm leading-6 text-[var(--color-muted)]">
          {event.details.map((detail) => (
            <li key={detail} className="border-l-2 border-[var(--color-linea)] pl-3">
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
