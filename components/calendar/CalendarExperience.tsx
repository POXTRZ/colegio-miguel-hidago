"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Clock,
  Filter,
  MapPin,
  Users,
} from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import { calendarEvents, type CalendarEvent } from "@/data/site";

type ViewMode = "month" | "week";
type EventCategory = CalendarEvent["category"];
type CategoryFilter = "Todos" | EventCategory;

const categories: CategoryFilter[] = [
  "Todos",
  "Académico",
  "Eventos",
  "Admisiones",
  "Pastoral",
  "Deportivo",
];

const categoryStyles: Record<EventCategory, string> = {
  Académico: "bg-[var(--color-guinda)] text-white",
  Eventos: "bg-[var(--color-salvia)] text-white",
  Admisiones: "bg-[var(--color-dorado)] text-white",
  Pastoral: "bg-[var(--color-tinta)] text-white",
  Deportivo: "bg-[var(--color-marino)] text-white",
};

function parseDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function startOfWeek(date: Date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  copy.setDate(copy.getDate() + diff);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

function getMonthDays(date: Date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const first = new Date(year, month, 1);
  const offset = first.getDay() === 0 ? 6 : first.getDay() - 1;
  const start = new Date(first);
  start.setDate(first.getDate() - offset);

  return Array.from({ length: 42 }, (_, index) => {
    const day = new Date(start);
    day.setDate(start.getDate() + index);
    return day;
  });
}

function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatFullDate(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

function eventDate(event: CalendarEvent) {
  return parseDate(event.date);
}

export default function CalendarExperience() {
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

  const visibleDays = viewMode === "month" ? monthDays : weekDays;
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

  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <SiteHeader />

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fffdf8_0%,#f4efe4_52%,#e8efed_100%)]" />
        <div className="absolute right-0 top-28 h-72 w-28 bg-[var(--color-guinda)]" />
        <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
            <div>
              <p className="inline-flex rounded-full border border-[var(--color-linea)] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--color-guinda)] shadow-sm">
                Calendario y eventos
              </p>
              <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
                Todo lo importante, en una vista clara.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                Explora actividades académicas, pastorales, deportivas,
                admisiones y eventos de comunidad. Cambia entre mes y semana,
                filtra por categoría y abre cada evento para ver detalles.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-3 rounded-lg border border-white/80 bg-white/90 p-5 shadow-[0_24px_70px_rgba(58,45,32,0.12)]">
              {[
                [String(calendarEvents.length), "Eventos"],
                [String(categories.length - 1), "Categorías"],
                ["2", "Vistas"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="rounded-md border border-[var(--color-linea)] bg-[var(--color-fondo)] px-3 py-5 text-center"
                >
                  <p className="text-3xl font-black text-[var(--color-guinda)]">
                    {value}
                  </p>
                  <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-24 lg:pb-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-muted)]">
                <Filter className="h-4 w-4" aria-hidden="true" />
                Filtrar
              </span>
              {categories.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    category === item
                      ? "bg-[var(--color-guinda)] text-white shadow-sm"
                      : "border border-[var(--color-linea)] bg-white text-[var(--color-tinta)] hover:bg-[var(--color-hueso)]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex rounded-full border border-[var(--color-linea)] bg-white p-1">
              {(["month", "week"] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  type="button"
                  onClick={() => setViewMode(mode)}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition ${
                    viewMode === mode
                      ? "bg-[var(--color-tinta)] text-white"
                      : "text-[var(--color-muted)] hover:bg-[var(--color-hueso)]"
                  }`}
                >
                  {mode === "month" ? "Mes" : "Semana"}
                </button>
              ))}
            </div>
          </div>

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
                {["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"].map(
                  (day) => (
                    <div key={day} className="px-2 py-3">
                      {day}
                    </div>
                  )
                )}
              </div>

              <div className="grid grid-cols-7">
                {visibleDays.map((day) => {
                  const dayEvents = filteredEvents.filter((event) =>
                    sameDay(eventDate(event), day)
                  );
                  const muted =
                    viewMode === "month" && day.getMonth() !== currentDate.getMonth();

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
                        {dayEvents.slice(0, viewMode === "month" ? 2 : 4).map((event) => (
                          <button
                            key={event.id}
                            type="button"
                            onClick={() => setSelectedEvent(event)}
                            className="rounded-md border border-[var(--color-linea)] bg-[var(--color-fondo)] px-2 py-1.5 text-left text-[11px] font-bold leading-4 transition hover:border-[var(--color-guinda)] hover:bg-[var(--color-hueso)]"
                          >
                            {event.title}
                          </button>
                        ))}
                        {dayEvents.length > 2 && viewMode === "month" ? (
                          <p className="text-[11px] font-bold text-[var(--color-guinda)]">
                            +{dayEvents.length - 2} más
                          </p>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <aside className="grid gap-5">
              <div className="rounded-lg border border-[var(--color-linea)] bg-white p-6 shadow-sm">
                <span
                  className={`inline-flex rounded-full px-3 py-1 text-xs font-bold ${
                    categoryStyles[selectedEvent.category]
                  }`}
                >
                  {selectedEvent.category}
                </span>
                <h3 className="mt-4 text-3xl font-bold leading-tight">
                  {selectedEvent.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {selectedEvent.summary}
                </p>
                <div className="mt-6 grid gap-3 text-sm text-[var(--color-muted)]">
                  <p className="flex gap-3">
                    <CalendarDays className="h-5 w-5 text-[var(--color-guinda)]" />
                    {formatFullDate(eventDate(selectedEvent))}
                  </p>
                  <p className="flex gap-3">
                    <Clock className="h-5 w-5 text-[var(--color-guinda)]" />
                    {selectedEvent.time}
                  </p>
                  <p className="flex gap-3">
                    <MapPin className="h-5 w-5 text-[var(--color-guinda)]" />
                    {selectedEvent.location}
                  </p>
                  <p className="flex gap-3">
                    <Users className="h-5 w-5 text-[var(--color-guinda)]" />
                    {selectedEvent.audience}
                  </p>
                </div>
                <div className="mt-6 rounded-lg bg-[var(--color-fondo)] p-4">
                  <p className="text-sm font-bold text-[var(--color-tinta)]">
                    Detalles
                  </p>
                  <ul className="mt-3 grid gap-2 text-sm leading-6 text-[var(--color-muted)]">
                    {selectedEvent.details.map((detail) => (
                      <li key={detail} className="border-l-2 border-[var(--color-linea)] pl-3">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="rounded-lg border border-[var(--color-linea)] bg-white p-6 shadow-sm">
                <p className="text-sm font-bold text-[var(--color-guinda)]">
                  Próximos eventos
                </p>
                <div className="mt-4 grid gap-3">
                  {upcomingEvents.map((event) => (
                    <button
                      key={event.id}
                      type="button"
                      onClick={() => {
                        setSelectedEvent(event);
                        setCurrentDate(eventDate(event));
                      }}
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
            </aside>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
