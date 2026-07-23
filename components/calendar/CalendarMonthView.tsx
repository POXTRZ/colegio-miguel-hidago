import {
  eventDate,
  eventStatusLabels,
  formatFullDate,
  sameDay,
} from "@/components/calendar/calendarUtils";
import type { CalendarEvent } from "@/types/event";

type CalendarMonthViewProps = {
  currentDate: Date;
  days: Date[];
  events: CalendarEvent[];
  onSelectEvent: (eventId: string) => void;
  onShowDay: (day: Date) => void;
  selectedEventId?: string;
  today: Date;
};

const statusMarker: Record<CalendarEvent["status"], string> = {
  upcoming: "bg-[var(--color-informacion)]",
  completed: "bg-[var(--color-exito)]",
  rescheduled: "bg-[var(--color-advertencia)]",
  cancelled: "bg-[var(--color-error)]",
};

export default function CalendarMonthView({
  currentDate,
  days,
  events,
  onSelectEvent,
  onShowDay,
  selectedEventId,
  today,
}: CalendarMonthViewProps) {
  return (
    <div className="grid grid-cols-7">
      {days.map((day) => {
        const dayEvents = events.filter((event) =>
          sameDay(eventDate(event), day),
        );
        const muted = day.getMonth() !== currentDate.getMonth();
        const isToday = sameDay(day, today);
        const isSelectedDay = dayEvents.some(
          (event) => event.id === selectedEventId,
        );

        return (
          <div
            key={day.toISOString()}
            className={`relative min-h-16 border-b border-r border-[var(--color-linea)]/55 p-1.5 md:min-h-32 md:p-2.5 xl:min-h-36 ${
              muted ? "bg-[var(--color-fondo)]/55" : "bg-white"
            } ${isSelectedDay ? "shadow-[inset_0_0_0_2px_var(--color-dorado)]" : ""}`}
          >
            <div className="mb-1.5 flex justify-between md:mb-3">
              <span
                aria-current={isToday ? "date" : undefined}
                className={`flex h-7 min-w-7 items-center justify-center rounded-full px-1 text-sm font-bold ${
                  isToday
                    ? "bg-[var(--color-guinda)] text-white"
                    : muted
                      ? "text-[var(--color-muted)]/45"
                      : "text-[var(--color-azul-marino)]"
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
                    aria-label={`${event.title}. ${eventStatusLabels[event.status]}. ${formatFullDate(day)}`}
                    aria-pressed={selected}
                    onClick={() => onSelectEvent(event.id)}
                    className={`group flex min-h-7 items-center gap-1.5 text-left transition-colors md:min-h-9 md:border-l-2 md:px-2 ${
                      selected
                        ? "text-[var(--color-guinda)] md:bg-[var(--color-crema)]"
                        : "text-[var(--color-tinta)] hover:text-[var(--color-guinda)] md:hover:bg-[var(--color-crema)]/70"
                    }`}
                  >
                    <span
                      className={`h-2.5 w-2.5 shrink-0 rounded-full md:h-2 md:w-2 ${statusMarker[event.status]}`}
                      aria-hidden="true"
                    />
                    <span className="hidden line-clamp-2 text-xs font-bold leading-4 md:block">
                      {event.title}
                    </span>
                  </button>
                );
              })}

              {dayEvents.length > 2 ? (
                <button
                  type="button"
                  onClick={() => onShowDay(day)}
                  className="min-h-7 text-left text-[10px] font-bold text-[var(--color-guinda)] md:text-xs"
                  aria-label={`Consultar las ${dayEvents.length} actividades del ${formatFullDate(day)}`}
                >
                  +{dayEvents.length - 2}
                  <span className="hidden md:inline"> actividades</span>
                </button>
              ) : null}
            </div>
          </div>
        );
      })}
    </div>
  );
}
