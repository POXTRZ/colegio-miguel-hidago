import type { CalendarEvent } from "@/data/confirmed/events";
import {
  eventDate,
  parseDate,
  sameDay,
} from "@/components/calendar/calendarUtils";

type CalendarMonthViewProps = {
  currentDate: Date;
  days: Date[];
  events: CalendarEvent[];
  onSelectEvent: (event: CalendarEvent) => void;
};

export default function CalendarMonthView({
  currentDate,
  days,
  events,
  onSelectEvent,
}: CalendarMonthViewProps) {
  return (
    <div className="grid grid-cols-7">
      {days.map((day) => {
        const dayEvents = events.filter((event) => sameDay(eventDate(event), day));
        const muted = day.getMonth() !== currentDate.getMonth();

        return (
          <div
            key={day.toISOString()}
            className={`min-h-32 border-b border-r border-[var(--color-linea)] p-2 ${
              muted ? "bg-[var(--color-fondo)]" : "bg-white"
            }`}
          >
            <div className="mb-2 flex justify-between">
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full text-sm font-bold ${
                  sameDay(day, parseDate("2026-07-01"))
                    ? "bg-[var(--color-guinda)] text-white"
                    : muted
                      ? "text-[var(--color-muted)]/50"
                      : "text-[var(--color-tinta)]"
                }`}
              >
                {day.getDate()}
              </span>
            </div>
            <div className="grid gap-1.5">
              {dayEvents.slice(0, 2).map((event) => (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => onSelectEvent(event)}
                  className="rounded-md border border-[var(--color-linea)] bg-[var(--color-fondo)] px-2 py-1.5 text-left text-[11px] font-bold leading-4 transition hover:border-[var(--color-guinda)] hover:bg-[var(--color-hueso)]"
                >
                  {event.title}
                </button>
              ))}
              {dayEvents.length > 2 ? (
                <p className="text-[11px] font-bold text-[var(--color-guinda)]">
                  +{dayEvents.length - 2} mÃ¡s
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
