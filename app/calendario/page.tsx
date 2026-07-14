import type { Metadata } from "next";
import EventCalendar from "@/components/calendar/EventCalendar";

export const metadata: Metadata = {
  title: "Calendario y eventos | Colegio Miguel Hidalgo",
  description:
    "Calendario interactivo del Colegio Miguel Hidalgo con vista mensual, semanal, filtros por categoría y detalles de eventos.",
};

export default function CalendarioPage() {
  return <EventCalendar />;
}
