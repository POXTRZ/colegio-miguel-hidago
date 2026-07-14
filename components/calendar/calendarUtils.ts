import type { CalendarEvent, EventCategory } from "@/types/event";

export type ViewMode = "month" | "week";
export type CategoryFilter = "Todos" | EventCategory;

export const categories: CategoryFilter[] = [
  "Todos",
  "Acad\u00e9mico",
  "Eventos",
  "Admisiones",
  "Pastoral",
  "Deportivo",
];

export const categoryStyles: Record<EventCategory, string> = {
  "Acad\u00e9mico": "bg-[var(--color-guinda)] text-white",
  Eventos: "bg-[var(--color-salvia)] text-white",
  Admisiones: "bg-[var(--color-dorado)] text-white",
  Pastoral: "bg-[var(--color-tinta)] text-white",
  Deportivo: "bg-[var(--color-marino)] text-white",
};

export function parseDate(date: string) {
  const [year, month, day] = date.split("-").map(Number);
  return new Date(year, month - 1, day);
}

export function sameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

export function startOfWeek(date: Date) {
  const copy = new Date(date);
  const day = copy.getDay();
  const diff = day === 0 ? -6 : 1 - day;
  copy.setDate(copy.getDate() + diff);
  copy.setHours(0, 0, 0, 0);
  return copy;
}

export function getMonthDays(date: Date) {
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

export function formatMonth(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatFullDate(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function eventDate(event: CalendarEvent) {
  return parseDate(event.date);
}
