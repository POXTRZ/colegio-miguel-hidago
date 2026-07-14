"use client";

import { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import CalendarFilters from "@/components/calendar/CalendarFilters";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import CalendarMonthView from "@/components/calendar/CalendarMonthView";
import CalendarWeekView from "@/components/calendar/CalendarWeekView";
import EventAgenda from "@/components/calendar/EventAgenda";
import EventPopover from "@/components/calendar/EventPopover";
import { calendarEvents } from "@/data/confirmed/events";
import type { CalendarEvent } from "@/types/event";
import {
  eventDate,
  formatFullDate,
  formatMonth,
  getMonthDays,
  parseDate,
  startOfWeek,
  type CategoryFilter,
  type ViewMode,
} from "@/components/calendar/calendarUtils";

export default function EventCalendar() {
  const [viewMode, setViewMode] = useState<ViewMode>("month");
  const [currentDate, setCurrentDate] = useState(() => parseDate("2026-07-01"));
  const [category, setCategory] = useState<CategoryFilter>("Todos");
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent>(
    calendarEvents[0]
  );

  const filteredEvents = useMemo(() => {
    return calendarEvents.filter((event) =>
      category === "Todos" ? true : event.category === category
    );
  }, [category]);

  const monthDays = useMemo(() => getMonthDays(currentDate), [currentDate]);
  const weekDays = useMemo(() => {
    const start = startOfWeek(currentDate);
    return Array.from({ length: 7 }, (_, index) => {
      const day = new Date(start);
      day.setDate(start.getDate() + index);
      return day;
    });
  }, [currentDate]);

  const upcomingEvents = filteredEvents
    .slice()
    .sort((a, b) => eventDate(a).getTime() - eventDate(b).getTime());

  function move(direction: -1 | 1) {
    const next = new Date(currentDate);
    if (viewMode === "month") {
      next.setMonth(next.getMonth() + direction);
    } else {
      next.setDate(next.getDate() + direction * 7);
    }
    setCurrentDate(next);
  }

  function selectAgendaEvent(event: CalendarEvent) {
    setSelectedEvent(event);
    setCurrentDate(eventDate(event));
  }

  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <SiteHeader />
      <CalendarHeader />

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <CalendarFilters
            category={category}
            viewMode={viewMode}
            onCategoryChange={setCategory}
            onViewModeChange={setViewMode}
          />

          <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1fr_360px]">
            <div className="overflow-hidden rounded-lg border border-[var(--color-linea)] bg-white shadow-sm">
              <div className="flex flex-col justify-between gap-4 border-b border-[var(--color-linea)] p-5 md:flex-row md:items-center">
                <div>
                  <p className="text-sm font-bold text-[var(--color-guinda)]">
                    {viewMode === "month" ? "Vista mensual" : "Vista semanal"}
                  </p>
                  <h2 className="mt-1 text-3xl font-bold capitalize">
                    {viewMode === "month"
                      ? formatMonth(currentDate)
                      : `${formatFullDate(weekDays[0])} - ${formatFullDate(
                          weekDays[6]
                        )}`}
                  </h2>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => move(-1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-linea)] hover:bg-[var(--color-hueso)]"
                    aria-label="Periodo anterior"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setCurrentDate(parseDate("2026-07-01"))}
                    className="rounded-full border border-[var(--color-linea)] px-4 py-2 text-sm font-bold hover:bg-[var(--color-hueso)]"
                  >
                    Mes base
                  </button>
                  <button
                    type="button"
                    onClick={() => move(1)}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-linea)] hover:bg-[var(--color-hueso)]"
                    aria-label="Periodo siguiente"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-7 border-b border-[var(--color-linea)] bg-[var(--color-fondo)] text-center text-xs font-black uppercase tracking-wide text-[var(--color-muted)]">
                {["Lun", "Mar", "MiÃ©", "Jue", "Vie", "SÃ¡b", "Dom"].map(
                  (day) => (
                    <div key={day} className="px-2 py-3">
                      {day}
                    </div>
                  )
                )}
              </div>

              {viewMode === "month" ? (
                <CalendarMonthView
                  currentDate={currentDate}
                  days={monthDays}
                  events={filteredEvents}
                  onSelectEvent={setSelectedEvent}
                />
              ) : (
                <CalendarWeekView
                  days={weekDays}
                  events={filteredEvents}
                  onSelectEvent={setSelectedEvent}
                />
              )}
            </div>

            <aside className="grid gap-5">
              <EventPopover event={selectedEvent} />
              <EventAgenda
                events={upcomingEvents}
                onSelectEvent={selectAgendaEvent}
              />
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
