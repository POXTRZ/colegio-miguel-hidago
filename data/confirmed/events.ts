import type { CalendarEvent } from "@/types/event";
import { currentHeroPhotography } from "@/data/confirmed/media";

// Agregar aquí únicamente eventos revisados y autorizados para publicación.
export const confirmedEvents: CalendarEvent[] = [
  {
    id: "inicio-ciclo-escolar-2026-2027",
    slug: "inicio-ciclo-escolar-2026-2027",
    title: "Inicio del ciclo escolar",
    summary:
      "La comunidad educativa comienza el ciclo escolar 2026-2027 el 31 de agosto.",
    description:
      "El Colegio Miguel Hidalgo inicia el ciclo escolar 2026-2027 el lunes 31 de agosto. Las familias deberán atender las indicaciones específicas que cada sección comunique para la organización del ingreso y las actividades de bienvenida.",
    startDate: "2026-08-31",
    time: "Horario habitual de entrada",
    location: "Colegio Miguel Hidalgo",
    category: "academic",
    status: "confirmed",
    educationLevel: ["todos"],
    cover: currentHeroPhotography,
    media: [],
    documents: [],
  },
];
