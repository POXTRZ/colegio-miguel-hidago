import { CalendarDays, Clock, MapPin, School } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  educationLevelLabels,
  eventDate,
  formatFullDate,
} from "@/components/calendar/calendarUtils";
import {
  DemoBadge,
  EventCategoryBadge,
  EventStatusBadge,
} from "@/components/calendar/EventLabels";
import type { CalendarEvent } from "@/types/event";

type EventPopoverProps = {
  event?: CalendarEvent;
};

export default function EventPopover({ event }: EventPopoverProps) {
  if (!event) {
    return (
      <aside className="border border-[var(--color-linea)] bg-white p-6">
        <p className="text-sm font-bold text-[var(--color-guinda)]">
          Resumen del evento
        </p>
        <p className="mt-4 leading-7 text-[var(--color-muted)]">
          Selecciona una actividad del calendario para consultar su información.
        </p>
      </aside>
    );
  }

  return (
    <aside className="border-t-2 border-[var(--color-guinda)] bg-white p-7">
      <div className="flex flex-wrap gap-2">
        <EventStatusBadge status={event.status} />
        <EventCategoryBadge category={event.category} />
        {event.isDemo ? <DemoBadge /> : null}
      </div>
      <h2 className="mt-5 text-3xl font-bold leading-tight">{event.title}</h2>
      <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
        {event.summary}
      </p>
      <div className="mt-6 grid gap-3 text-sm text-[var(--color-muted)]">
        <p className="flex gap-3">
          <CalendarDays
            className="h-5 w-5 shrink-0 text-[var(--color-guinda)]"
            aria-hidden="true"
          />
          <span className="capitalize">{formatFullDate(eventDate(event))}</span>
        </p>
        <p className="flex gap-3">
          <Clock
            className="h-5 w-5 shrink-0 text-[var(--color-guinda)]"
            aria-hidden="true"
          />
          {event.time}
        </p>
        <p className="flex gap-3">
          <MapPin
            className="h-5 w-5 shrink-0 text-[var(--color-guinda)]"
            aria-hidden="true"
          />
          {event.location}
        </p>
        <p className="flex gap-3">
          <School
            className="h-5 w-5 shrink-0 text-[var(--color-guinda)]"
            aria-hidden="true"
          />
          {event.educationLevel.map((level) => educationLevelLabels[level]).join(", ")}
        </p>
      </div>
      <Button
        className="mt-7 w-full"
        href={`/eventos/${event.slug}`}
        variant="secondary"
      >
        Abrir página del evento
      </Button>
    </aside>
  );
}
