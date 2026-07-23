"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import {
  ArrowRight,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  List,
  X,
} from "lucide-react";
import { useMemo, useState, useSyncExternalStore } from "react";
import CalendarEmptyState from "@/components/calendar/CalendarEmptyState";
import CalendarFilters from "@/components/calendar/CalendarFilters";
import CalendarHeader from "@/components/calendar/CalendarHeader";
import CalendarMonthView from "@/components/calendar/CalendarMonthView";
import EventAgenda from "@/components/calendar/EventAgenda";
import EventPopover from "@/components/calendar/EventPopover";
import {
  eventDate,
  filterEvents,
  formatFullDate,
  formatMonth,
  getMonthDays,
  sameDay,
  type CategoryFilter,
  type LevelFilter,
  type StatusFilter,
} from "@/components/calendar/calendarUtils";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import IconButton from "@/components/ui/IconButton";
import type { CalendarEvent } from "@/types/event";

type EventCalendarProps = {
  demoMode: boolean;
  events: CalendarEvent[];
};

type CalendarView = "month" | "agenda";

function subscribeToDesktop(callback: () => void) {
  const media = window.matchMedia("(min-width: 1024px)");
  media.addEventListener("change", callback);
  return () => media.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function getServerSnapshot() {
  return false;
}

export default function EventCalendar({
  demoMode,
  events,
}: EventCalendarProps) {
  const today = useMemo(() => new Date(), []);
  const featuredEvent = useMemo(() => {
    const startOfToday = new Date(today);
    startOfToday.setHours(0, 0, 0, 0);

    return (
      events.find(
        (event) =>
          event.status === "upcoming" &&
          eventDate(event).getTime() >= startOfToday.getTime(),
      ) ??
      events.find((event) => event.status === "upcoming") ??
      events[0]
    );
  }, [events, today]);
  const initialDate = featuredEvent ? eventDate(featuredEvent) : today;
  const isDesktop = useSyncExternalStore(
    subscribeToDesktop,
    getDesktopSnapshot,
    getServerSnapshot,
  );

  const [currentDate, setCurrentDate] = useState(initialDate);
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [status, setStatus] = useState<StatusFilter>("all");
  const [level, setLevel] = useState<LevelFilter>("all");
  const [selectedEventId, setSelectedEventId] = useState<string | undefined>(
    featuredEvent?.id,
  );
  const [viewPreference, setViewPreference] = useState<CalendarView | null>(
    null,
  );
  const [agendaDay, setAgendaDay] = useState<Date | null>(null);
  const view = viewPreference ?? (isDesktop ? "month" : "agenda");

  const filteredEvents = useMemo(
    () => filterEvents(events, category, status, level),
    [category, events, level, status],
  );
  const sortedEvents = useMemo(
    () =>
      filteredEvents
        .slice()
        .sort((a, b) => eventDate(a).getTime() - eventDate(b).getTime()),
    [filteredEvents],
  );
  const agendaEvents = useMemo(
    () =>
      agendaDay
        ? sortedEvents.filter((event) => sameDay(eventDate(event), agendaDay))
        : sortedEvents,
    [agendaDay, sortedEvents],
  );
  const monthDays = useMemo(() => getMonthDays(currentDate), [currentDate]);
  const selectedEvent =
    filteredEvents.find((event) => event.id === selectedEventId) ??
    filteredEvents[0];

  function clearFilters() {
    setCategory("all");
    setStatus("all");
    setLevel("all");
    setAgendaDay(null);
  }

  function changeCategory(nextCategory: CategoryFilter) {
    setCategory(nextCategory);
    setAgendaDay(null);
  }

  function changeLevel(nextLevel: LevelFilter) {
    setLevel(nextLevel);
    setAgendaDay(null);
  }

  function changeStatus(nextStatus: StatusFilter) {
    setStatus(nextStatus);
    setAgendaDay(null);
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

  function chooseView(nextView: CalendarView) {
    setViewPreference(nextView);
    if (nextView === "month") {
      setAgendaDay(null);
    }
  }

  function showDay(day: Date) {
    setAgendaDay(day);
    setViewPreference("agenda");
  }

  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]"
      >
        <CalendarHeader
          demoMode={demoMode}
          featuredEvent={featuredEvent}
        />

        <Container size="2xl" className="pb-24 lg:pb-32">
          {events.length > 0 ? (
            <>
              <CalendarFilters
                category={category}
                level={level}
                resultCount={filteredEvents.length}
                status={status}
                onCategoryChange={changeCategory}
                onClear={clearFilters}
                onLevelChange={changeLevel}
                onStatusChange={changeStatus}
              />

              <div className="flex flex-col gap-4 border-b border-[var(--color-linea)] py-5 sm:flex-row sm:items-center sm:justify-between">
            <div
              className="inline-flex w-fit border border-[var(--color-linea)] bg-white p-1"
              role="group"
              aria-label="Vista del calendario"
            >
              <button
                type="button"
                aria-pressed={view === "month"}
                onClick={() => chooseView("month")}
                className={`inline-flex min-h-10 items-center gap-2 px-4 text-sm font-bold transition-colors ${
                  view === "month"
                    ? "bg-[var(--color-azul-marino)] text-white"
                    : "text-[var(--color-muted)] hover:text-[var(--color-guinda)]"
                }`}
              >
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
                Mes
              </button>
              <button
                type="button"
                aria-pressed={view === "agenda"}
                onClick={() => {
                  setAgendaDay(null);
                  chooseView("agenda");
                }}
                className={`inline-flex min-h-10 items-center gap-2 px-4 text-sm font-bold transition-colors ${
                  view === "agenda"
                    ? "bg-[var(--color-azul-marino)] text-white"
                    : "text-[var(--color-muted)] hover:text-[var(--color-guinda)]"
                }`}
              >
                <List className="h-4 w-4" aria-hidden="true" />
                Agenda
              </button>
            </div>

            {view === "month" ? (
              <div className="flex items-center justify-between gap-2 sm:justify-end">
                <IconButton
                  aria-label="Mes anterior"
                  onClick={() => moveMonth(-1)}
                  size="sm"
                >
                  <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                </IconButton>
                <div className="min-w-36 text-center">
                  <p className="text-xs font-bold uppercase text-[var(--color-guinda)]">
                    Vista mensual
                  </p>
                  <p className="mt-0.5 font-display text-xl font-semibold text-[var(--color-azul-marino)]">
                    {formatMonth(currentDate)}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => setCurrentDate(today)}
                  className="min-h-10 px-2 text-sm font-bold text-[var(--color-guinda)]"
                >
                  Hoy
                </button>
                <IconButton
                  aria-label="Mes siguiente"
                  onClick={() => moveMonth(1)}
                  size="sm"
                >
                  <ChevronRight className="h-5 w-5" aria-hidden="true" />
                </IconButton>
              </div>
            ) : agendaDay ? (
              <div className="flex items-center gap-3 text-sm">
                <p className="font-bold capitalize text-[var(--color-azul-marino)]">
                  {formatFullDate(agendaDay)}
                </p>
                <button
                  type="button"
                  aria-label="Mostrar toda la agenda"
                  onClick={() => setAgendaDay(null)}
                  className="flex h-10 w-10 items-center justify-center text-[var(--color-guinda)]"
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            ) : (
              <p className="text-sm text-[var(--color-muted)]">
                Orden cronológico · {sortedEvents.length} actividades
              </p>
            )}
              </div>
            </>
          ) : null}

          {events.length === 0 ? (
            <div className="pt-8">
              <CalendarEmptyState />
            </div>
          ) : filteredEvents.length === 0 ? (
            <div className="pt-8">
              <CalendarEmptyState filtered onClear={clearFilters} />
            </div>
          ) : (
            <MotionConfig reducedMotion="user">
              <AnimatePresence mode="wait" initial={false}>
                {view === "month" ? (
                  <motion.div
                    key="month"
                    className="grid gap-6 pt-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <section
                      className="overflow-hidden border-y border-[var(--color-linea)] bg-white"
                      aria-label={`Calendario de ${formatMonth(currentDate)}`}
                    >
                      <div className="grid grid-cols-7 border-b border-[var(--color-linea)] bg-[var(--color-crema)] text-center text-xs font-bold uppercase text-[var(--color-muted)]">
                        {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(
                          (day) => (
                            <div key={day} className="px-1 py-3 md:px-2">
                              {day}
                            </div>
                          ),
                        )}
                      </div>

                      <CalendarMonthView
                        currentDate={currentDate}
                        days={monthDays}
                        events={filteredEvents}
                        onSelectEvent={selectEvent}
                        onShowDay={showDay}
                        selectedEventId={selectedEvent?.id}
                        today={today}
                      />
                    </section>

                    <div className="hidden self-start md:block lg:sticky lg:top-[calc(var(--site-header-height-compact)+1rem)]">
                      <EventPopover event={selectedEvent} />
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="agenda"
                    className="grid gap-10 pt-8 lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                  >
                    <EventAgenda
                      events={agendaEvents}
                      onSelectEvent={selectEvent}
                      selectedEventId={selectedEvent?.id}
                    />
                    <div className="hidden self-start lg:sticky lg:top-[calc(var(--site-header-height-compact)+1rem)] lg:block">
                      <EventPopover event={selectedEvent} />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </MotionConfig>
          )}
        </Container>

        <section className="bg-[var(--color-azul-marino)] py-12 text-white">
          <Container
            size="2xl"
            className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          >
            <div>
              <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
                Información institucional
              </p>
              <h2 className="mt-2 max-w-2xl text-3xl font-semibold">
                ¿Necesitas confirmar una fecha o actividad?
              </h2>
            </div>
            <Button href="/contacto" variant="light">
              Contactar al Colegio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
