import {
  currentCoveredCourtPhotography,
  currentCourtyardDetailPhotography,
} from "@/data/confirmed/media";
import type { CalendarEvent } from "@/types/event";
import type { MediaAsset } from "@/types/media";

const mothersDayCover = {
  ...currentCourtyardDetailPhotography,
  caption: "Imagen provisional de un espacio actual del Colegio.",
  status: "provisional",
  context: "Recurso visual general para un evento demostrativo.",
  replaceLater: true,
} as const satisfies MediaAsset;

const fathersDayCover = {
  ...currentCoveredCourtPhotography,
  caption: "Imagen provisional de una cancha actual del Colegio.",
  status: "provisional",
  context: "Recurso visual general para un evento demostrativo.",
  replaceLater: true,
} as const satisfies MediaAsset;

export const demoEvents: CalendarEvent[] = [
  {
    id: "dia-de-la-madre-demo",
    slug: "dia-de-la-madre-demo",
    title: "Día de la Madre",
    summary:
      "Propuesta demostrativa de un encuentro de convivencia para reconocer a las madres de la comunidad educativa.",
    description:
      "Contenido provisional para probar la experiencia del calendario y la página individual. La propuesta contempla un momento de bienvenida, una presentación cultural y un espacio de convivencia familiar. La fecha, el programa y los detalles operativos requieren confirmación institucional antes de publicarse como oficiales.",
    startDate: "2027-05-10",
    time: "09:00 · horario provisional",
    location: "Patio principal · por confirmar",
    category: "cultural-sports",
    status: "upcoming",
    educationLevel: ["todos"],
    cover: mothersDayCover,
    media: [],
    documents: [],
    isDemo: true,
  },
  {
    id: "dia-del-padre-demo",
    slug: "dia-del-padre-demo",
    title: "Día del Padre",
    summary:
      "Propuesta demostrativa de una jornada recreativa para las familias de la comunidad educativa.",
    description:
      "Contenido provisional para probar agenda, filtros y navegación entre eventos. La propuesta considera actividades recreativas de convivencia y un cierre comunitario. La fecha, el horario, el lugar y el programa deberán validarse antes de cualquier publicación oficial.",
    startDate: "2027-06-20",
    time: "09:00 · horario provisional",
    location: "Canchas del Colegio · por confirmar",
    category: "cultural-sports",
    status: "upcoming",
    educationLevel: ["todos"],
    cover: fathersDayCover,
    media: [],
    documents: [],
    isDemo: true,
  },
];
