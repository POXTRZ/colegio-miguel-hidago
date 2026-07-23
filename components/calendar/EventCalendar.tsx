"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useMemo, useState } from "react";
import CalendarEmptyState from "@/components/calendar/CalendarEmptyState";
import CalendarFilters from "@/components/calendar/CalendarFilters";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import CalendarMonthView from "@/components/calendar/CalendarMonthView";
import EventAgenda from "@/components/calendar/EventAgenda";
import EventPopover from "@/components/calendar/EventPopover";
import {
  eventDate,
  filterEvents,
  formatMonth,
  getMonthDays,
  type CategoryFilter,
  type LevelFilter,
  type StatusFilter,
} from "@/components/calendar/calendarUtils";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import Container from "@/components/ui/Container";
import IconButton from "@/components/ui/IconButton";
import type { CalendarEvent } from "@/types/event";

type EventCalendarProps = {
  demoMode: boolean;
  events: CalendarEvent[];
};

export default function EventCalendar({
  demoMode,
  events,
}: EventCalendarProps) {
  const today = useMemo(() => new Date(), []);
  const initialDate = events[0] ? eventDate(events[0]) : today;
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(
    events[0]?.id
  );

  const filteredEvents = useMemo(
    () => filterEvents(events, category, status, level),
    [category, events, level, status]
  );
  const sortedEvents = useMemo(
    () =>
      filteredEvents
        .slice()
        .sort((a, b) => eventDate(a).getTime() - eventDate(b).getTime()),
    [filteredEvents]
  );
  const monthDays = useMemo(() => getMonthDays(currentDate), [currentDate]);
  const selectedEvent =
    filteredEvents.find((event) => event.id === selectedEventId) ??
    filteredEvents[0];
  function clearFilters() {
    setCategory("all");
    setStatus("all");
    setLevel("all");
  }

  function moveMonth(direction: -1 | 1) {
    setCurrentDate((current) => {
      const next = new Date(current);
      next.setMonth(current.getMonth() + direction);
      return next;
    });
  }

  function selectEvent(eventId: string) {
    const event = events.find((item) => item.id === eventId);
    setSelectedEventId(eventId);
    if (event) {
      setCurrentDate(eventDate(event));
    }
  }

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
        <CalendarHeader demoMode={demoMode} />
        <Container className="pb-24 lg:pb-32">
          <CalendarFilters
            category={category}
            level={level}
            status={status}
            onCategoryChange={setCategory}
            onClear={clearFilters}
            onLevelChange={setLevel}
            onStatusChange={setStatus}
          />

          {events.length === 0 ? (
            <div className="pt-8">
              <CalendarEmptyState />
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="pt-8">
              <CalendarEmptyState filtered onClear={clearFilters} />
            </div>
          ) : (
            <>
              <div className="pt-8 lg:hidden">
                <p className="mb-6 text-sm font-bold uppercase text-[var(--color-guinda)]">
                  Agenda
                </p>
                <EventAgenda events={sortedEvents} onSelectEvent={selectEvent} />
              </div>

              <div className="hidden gap-6 pt-8 lg:grid xl:grid-cols-[1fr_360px]">
                <section className="overflow-hidden border border-[var(--color-linea)] bg-white shadow-[var(--shadow-sm)]">
                  <div className="flex items-center justify-between gap-6 border-b border-[var(--color-linea)] p-5">
                    <div>
                      <p className="text-sm font-bold text-[var(--color-guinda)]">
                        Vista mensual
                      </p>
                      <h2 className="mt-1 text-3xl font-bold capitalize">
                        {formatMonth(currentDate)}
                      </h2>
                    </div>
                    <div className="flex items-center gap-2">
                      <IconButton
                        aria-label="Mes anterior"
                        onClick={() => moveMonth(-1)}
                      >
                        <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                      </IconButton>
                      <button
                        type="button"
                        onClick={() => setCurrentDate(today)}
                        className="min-h-11 px-3 text-sm font-bold text-[var(--color-guinda)]"
                      >
                        Hoy
                      </button>
                      <IconButton
                        aria-label="Mes siguiente"
                        onClick={() => moveMonth(1)}
                      >
                        <ChevronRight className="h-5 w-5" aria-hidden="true" />
                      </IconButton>
                    </div>
                  </div>

                  <div className="grid grid-cols-7 border-b border-[var(--color-linea)] bg-[var(--color-crema)] text-center text-xs font-bold uppercase text-[var(--color-muted)]">
                    {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(
                      (day) => (
                        <div key={day} className="px-2 py-3">
                          {day}
                        </div>
                      )
                    )}
                  </div>

                  <CalendarMonthView
                    currentDate={currentDate}
                    days={monthDays}
                    events={filteredEvents}
                    onSelectEvent={selectEvent}
                    selectedEventId={selectedEvent?.id}
                    today={today}
                  />
                </section>

                <div className="self-start xl:sticky xl:top-28">
                  <EventPopover event={selectedEvent} />
                </div>
              </div>
            </>
          )}
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
