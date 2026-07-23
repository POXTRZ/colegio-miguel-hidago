import {
  eventDate,
  eventStatusLabels,
  sameDay,
} from "@/components/calendar/calendarUtils";
import type { CalendarEvent } from "@/types/event";

type CalendarMonthViewProps = {
  currentDate: Date;
  days: Date[];
  events: CalendarEvent[];
  onSelectEvent: (eventId: string) => void;
  selectedEventId?: string;
  today: Date;
};

const statusBorder: Record<CalendarEvent["status"], string> = {
  upcoming: "border-l-[var(--color-informacion)]",
  completed: "border-l-[var(--color-exito)]",
  rescheduled: "border-l-[var(--color-advertencia)]",
  cancelled: "border-l-[var(--color-error)]",
};

export default function CalendarMonthView({
  currentDate,
  days,
  events,
  onSelectEvent,
  selectedEventId,
  today,
}: CalendarMonthViewProps) {
  return (
    <div className="grid grid-cols-7">
      {days.map((day) => {
        const dayEvents = events.filter((event) =>
          sameDay(eventDate(event), day)
        );
        const muted = day.getMonth() !== currentDate.getMonth();
        const isToday = sameDay(day, today);

        return (
          <div
            key={day.toISOString()}
            className={`min-h-36 border-b border-r border-[var(--color-linea)] p-2 ${
              muted ? "bg-[var(--color-fondo)]/65" : "bg-white"
            }`}
          >
            <div className="mb-2 flex justify-between">
              <span
                aria-current={isToday ? "date" : undefined}
                className={`flex h-7 min-w-7 items-center justify-center rounded-full px-1 text-sm font-bold ${
                  isToday
                    ? "bg-[var(--color-guinda)] text-white"
                    : muted
                      ? "text-[var(--color-muted)]/45"
                      : "text-[var(--color-tinta)]"
                }`}
              >
                {day.getDate()}
              </span>
            </div>
            <div className="grid gap-1.5">
              {dayEvents.slice(0, 2).map((event) => {
                const selected = selectedEventId === event.id;

                return (
                  <button
                    key={event.id}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => onSelectEvent(event.id)}
                    className={`border-l-4 px-2 py-1.5 text-left transition ${
                      statusBorder[event.status]
                    } ${
                      selected
                        ? "bg-[var(--color-hueso)]"
                        : "bg-[var(--color-crema)]/70 hover:bg-[var(--color-hueso)]"
                    }`}
                  >
                    <span className="block text-[11px] font-bold leading-4">
                      {event.title}
                    </span>
                    <span className="mt-0.5 block text-[9px] font-bold uppercase text-[var(--color-muted)]">
                      {eventStatusLabels[event.status]}
                    </span>
                  </button>
                );
              })}
              {dayEvents.length > 2 ? (
                <p className="text-[11px] font-bold text-[var(--color-guinda)]">
                  +{dayEvents.length - 2} más
                </p>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
