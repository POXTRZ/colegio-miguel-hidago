import type {
  CalendarEvent,
  EventCategory,
  EventEducationLevel,
  EventStatus,
} from "@/types/event";

export type CategoryFilter = "all" | EventCategory;
export type StatusFilter = "all" | EventStatus;
export type LevelFilter = "all" | EventEducationLevel;

export const eventCategoryLabels: Record<EventCategory, string> = {
  academic: "Académico",
  cultural: "Cultural",
  sports: "Deportivo",
  pastoral: "Pastoral",
  administrative: "Administrativo",
  celebration: "Celebración",
  community: "Comunidad",
};

export const eventStatusLabels: Record<EventStatus, string> = {
  upcoming: "Próximo",
  completed: "Finalizado",
  rescheduled: "Reprogramado",
  cancelled: "Cancelado",
};

export const educationLevelLabels: Record<EventEducationLevel, string> = {
  preescolar: "Preescolar",
  primaria: "Primaria",
  secundaria: "Secundaria",
  preparatoria: "Preparatoria",
  todos: "Todos los niveles",
};

export const categories = Object.keys(eventCategoryLabels) as EventCategory[];
export const statuses = Object.keys(eventStatusLabels) as EventStatus[];
export const educationLevels = Object.keys(
  educationLevelLabels
) as EventEducationLevel[];

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

export function formatShortDate(date: Date) {
  return new Intl.DateTimeFormat("es-MX", {
    day: "numeric",
    month: "short",
  }).format(date);
}

export function eventDate(event: CalendarEvent) {
  return parseDate(event.startDate);
}

export function filterEvents(
  events: CalendarEvent[],
  category: CategoryFilter,
  status: StatusFilter,
  level: LevelFilter
) {
  return events.filter((event) => {
    const categoryMatches = category === "all" || event.category === category;
    const statusMatches = status === "all" || event.status === status;
    const levelMatches =
      level === "all" ||
      event.educationLevel.includes("todos") ||
      event.educationLevel.includes(level);

    return categoryMatches && statusMatches && levelMatches;
  });
}
