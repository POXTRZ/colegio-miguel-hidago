import type { CalendarEvent } from "@/types/event";
import { eventDate, formatFullDate } from "@/components/calendar/calendarUtils";

type EventAgendaProps = {
  events: CalendarEvent[];
  onSelectEvent: (event: CalendarEvent) => void;
};

export default function EventAgenda({ events, onSelectEvent }: EventAgendaProps) {
  return (
    <div className="rounded-lg border border-[var(--color-linea)] bg-white p-6 shadow-sm">
      <p className="text-sm font-bold text-[var(--color-guinda)]">
        Próximos eventos
      </p>
      <div className="mt-4 grid gap-3">
        {events.map((event) => (
          <button
            key={event.id}
            type="button"
            onClick={() => onSelectEvent(event)}
            className="rounded-md border border-[var(--color-linea)] p-3 text-left transition hover:border-[var(--color-guinda)] hover:bg-[var(--color-hueso)]"
          >
            <p className="text-sm font-bold">{event.title}</p>
            <p className="mt-1 text-xs text-[var(--color-muted)]">
              {formatFullDate(eventDate(event))}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
