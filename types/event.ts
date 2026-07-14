export type EventCategory =
  | "Acad\u00e9mico"
  | "Eventos"
  | "Admisiones"
  | "Pastoral"
  | "Deportivo";

export type CalendarEvent = {
  id: string;
  title: string;
  category: EventCategory;
  date: string;
  endDate?: string;
  time: string;
  location: string;
  audience: string;
  summary: string;
  details: string[];
};
