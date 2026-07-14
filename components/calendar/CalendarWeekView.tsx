import type { CalendarEvent } from "@/types/event";
import {
  eventDate,
  parseDate,
  sameDay,
} from "@/components/calendar/calendarUtils";

type CalendarWeekViewProps = {
  days: Date[];
  events: CalendarEvent[];
  onSelectEvent: (event: CalendarEvent) => void;
};

export default function CalendarWeekView({
  days,
  events,
  onSelectEvent,
}: CalendarWeekViewProps) {
  return (
    <div className="grid grid-cols-7">
      {days.map((day) => {
        const dayEvents = events.filter((event) => sameDay(eventDate(event), day));

        return (
          <div
            key={day.toISOString()}
            className="min-h-32 border-b border-r border-[var(--color-linea)] bg-white p-2"
          >
            <div className="mb-2 flex justify-between">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
                  sameDay(day, parseDate("2026-07-01"))
                    ? "bg-[var(--color-guinda)] text-white"
                    : "text-[var(--color-tinta)]"
                }`}
              >
                {day.getDate()}
              </span>
            </div>
            <div className="grid gap-1.5">
              {dayEvents.slice(0, 4).map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => onSelectEvent(event)}
                  className="rounded-md border border-[var(--color-linea)] bg-[var(--color-fondo)] px-2 py-1.5 text-left text-[11px] font-bold leading-4 transition hover:border-[var(--color-guinda)] hover:bg-[var(--color-hueso)]"
                >
                  {event.title}
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
