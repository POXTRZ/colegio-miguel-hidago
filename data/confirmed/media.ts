import type {
  HistoricalMediaAsset,
  ManagedImageAsset,
} from "@/types/media";

const historicalMediaSource: Omit<
  HistoricalMediaAsset,
  "replaceLater" | "status"
>[] = [
  {
    id: "comunidad-educativa",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.51 AM (3).jpeg",
    newName: "comunidad-educativa-archivo.jpeg",
    src: "/images/home/comunidad-educativa-archivo.jpeg",
    width: 1600,
    height: 1238,
    description: "Grupo amplio de la comunidad escolar en una fotografía de archivo.",
    type: "generaciones",
    archiveCategory: "Generaciones",
    context: "Memoria colectiva del Colegio Miguel Hidalgo.",
    dateStatus: "pending",
    alt: "Grupo amplio de la comunidad escolar reunido para una fotografía de archivo",
    caption: "Comunidad educativa. Fecha y generación pendientes de identificación documental.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "alumnas-formacion",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.52 AM (1).jpeg",
    newName: "alumnas-formacion-archivo.jpeg",
    src: "/images/home/alumnas-formacion-archivo.jpeg",
    width: 1487,
    height: 1011,
    description: "Grupo de estudiantes formado en el patio escolar.",
    type: "grupos-escolares",
    archiveCategory: "Formación",
    context: "Vida escolar y formación comunitaria.",
    dateStatus: "pending",
    alt: "Grupo de estudiantes formado en un patio escolar",
    caption: "Vida escolar. Fecha y actividad pendientes de validación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "comunidad-franciscana",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.53 AM.jpeg",
    newName: "comunidad-franciscana-archivo.jpeg",
    src: "/images/home/comunidad-franciscana-archivo.jpeg",
    width: 1462,
    height: 993,
    description: "Reunión comunitaria al aire libre con presencia de religiosas.",
    type: "acontecimientos",
    archiveCategory: "Comunidad HFIC",
    context: "Identidad comunitaria y presencia franciscana.",
    dateStatus: "pending",
    alt: "Comunidad escolar y religiosas reunidas al aire libre",
    caption: "Encuentro comunitario. Fecha y motivo pendientes de identificación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "plantel-historico",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.52 AM.jpeg",
    newName: "plantel-historico-san-luis-de-la-paz.jpeg",
    src: "/images/home/plantel-historico-san-luis-de-la-paz.jpeg",
    width: 1600,
    height: 1270,
    description: "Documento fotográfico de un inmueble histórico en San Luis de la Paz.",
    type: "edificios",
    archiveCategory: "Archivo documental",
    context: "Registro documental asociado al plantel.",
    dateStatus: "pending",
    alt: "Fachada de un inmueble histórico en San Luis de la Paz",
    caption: "Registro del plantel histórico. Fecha y relación exacta pendientes de validación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: true,
  },
  {
    id: "comunidad-escolar-religiosas",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.43 AM (1).jpeg",
    newName: "comunidad-escolar-religiosas-archivo.jpeg",
    src: "/images/history/comunidad-escolar-religiosas-archivo.jpeg",
    width: 1285,
    height: 1009,
    description: "Grupo escolar acompañado por religiosas en una fotografía histórica.",
    type: "grupos-escolares",
    archiveCategory: "Comunidad HFIC",
    context: "Presencia educativa de la comunidad religiosa.",
    dateStatus: "pending",
    alt: "Grupo escolar acompañado por religiosas en una fotografía histórica",
    caption: "Comunidad escolar y religiosa. Fecha pendiente de identificación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "hermanas-franciscanas",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.43 AM.jpeg",
    newName: "hermanas-franciscanas-grupo-archivo.jpeg",
    src: "/images/history/hermanas-franciscanas-grupo-archivo.jpeg",
    width: 1463,
    height: 965,
    description: "Grupo de religiosas reunidas para una fotografía de archivo.",
    type: "religiosas",
    archiveCategory: "Comunidad HFIC",
    context: "Memoria de la comunidad HFIC.",
    dateStatus: "pending",
    alt: "Grupo de religiosas reunidas para una fotografía de archivo",
    caption: "Comunidad HFIC. Fecha y contexto pendientes de identificación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "generacion-escolar",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.51 AM (4).jpeg",
    newName: "generacion-escolar-grupo-archivo.jpeg",
    src: "/images/history/generacion-escolar-grupo-archivo.jpeg",
    width: 1463,
    height: 1140,
    description: "Grupo numeroso de estudiantes y personal en una fotografía de generación.",
    type: "generaciones",
    archiveCategory: "Generaciones",
    context: "Registro de una generación escolar.",
    dateStatus: "pending",
    alt: "Grupo numeroso de estudiantes y personal en una fotografía de generación",
    caption: "Generación escolar. Año y sección pendientes de identificación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "grupo-escolar-aula",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.52 AM (3).jpeg",
    newName: "grupo-escolar-aula-archivo.jpeg",
    src: "/images/history/grupo-escolar-aula-archivo.jpeg",
    width: 1600,
    height: 1110,
    description: "Grupo escolar reunido en un espacio de clase.",
    type: "grupos-escolares",
    archiveCategory: "Vida escolar",
    context: "Vida cotidiana en el aula.",
    dateStatus: "pending",
    alt: "Grupo de estudiantes reunido en un espacio de clase",
    caption: "Grupo escolar. Fecha y grado pendientes de identificación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "entrega-reconocimientos",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.53 AM (2).jpeg",
    newName: "entrega-reconocimientos-archivo.jpeg",
    src: "/images/history/entrega-reconocimientos-archivo.jpeg",
    width: 1513,
    height: 1033,
    description: "Estudiantes y una religiosa durante una entrega de reconocimientos.",
    type: "acontecimientos",
    archiveCategory: "Celebraciones",
    context: "Actividad escolar de reconocimiento académico.",
    dateStatus: "pending",
    alt: "Estudiantes durante una entrega de reconocimientos escolares",
    caption: "Entrega de reconocimientos. Fecha y participantes pendientes de identificación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "capilla-historica",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.53 AM (3).jpeg",
    newName: "capilla-historica-archivo.jpeg",
    src: "/images/history/capilla-historica-archivo.jpeg",
    width: 1196,
    height: 1530,
    description: "Vista interior de una capilla o espacio de oración.",
    type: "capilla",
    archiveCategory: "Espacios históricos",
    context: "Dimensión espiritual de la vida institucional.",
    dateStatus: "pending",
    alt: "Interior de una capilla con altar",
    caption: "Espacio de oración. Fecha y ubicación exacta pendientes de validación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
  {
    id: "actividad-escolar",
    originalName: "WhatsApp Image 2026-07-14 at 9.38.53 AM (4).jpeg",
    newName: "actividad-escolar-archivo.jpeg",
    src: "/images/history/actividad-escolar-archivo.jpeg",
    width: 1599,
    height: 1243,
    description: "Grupo de estudiantes participando en una actividad física escolar.",
    type: "acontecimientos",
    archiveCategory: "Formación",
    context: "Formación física y convivencia escolar.",
    dateStatus: "pending",
    alt: "Grupo de estudiantes durante una actividad física escolar",
    caption: "Actividad escolar. Fecha y programa pendientes de identificación.",
    source: "Archivo fotográfico proporcionado por el Colegio Miguel Hidalgo.",
    embeddedText: false,
  },
];

export const historicalMedia: HistoricalMediaAsset[] =
  historicalMediaSource.map((asset) => ({
    ...asset,
    status: "historical",
    replaceLater: false,
  }));

export const schoolShield = {
  id: "school-shield",
  src: "/brand/shield.webp",
  alt: "Escudo oficial del Colegio Miguel Hidalgo",
  caption: "Escudo oficial del Colegio Miguel Hidalgo.",
  status: "final",
  context: "Identidad institucional.",
  source: "Archivo institucional proporcionado por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 396,
  height: 508,
} as const satisfies ManagedImageAsset;

export const currentHeroPhotography = {
  id: "current-hero-photography",
  src: "/images/current/acceso-colegio-actual.webp",
  alt: "Fachada y acceso actual del Colegio Miguel Hidalgo",
  caption: "Fachada y acceso actual del Colegio Miguel Hidalgo.",
  status: "final",
  context: "Presentación institucional del plantel actual.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentContactPhotography = {
  id: "current-contact-photography",
  src: "/images/current/fachada-colegio-actual.webp",
  alt: "Vista actual de la fachada del Colegio Miguel Hidalgo",
  caption: "Fachada actual del Colegio Miguel Hidalgo en San Luis de la Paz.",
  status: "final",
  context: "Referencia visual del acceso al plantel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1440,
  height: 888,
} as const satisfies ManagedImageAsset;

export const currentFacilitiesPhotography = {
  id: "current-facilities-photography",
  src: "/images/current/patio-central-colegio-actual.webp",
  alt: "Vista actual del patio central y edificios del Colegio Miguel Hidalgo",
  caption: "Patio central e instalaciones actuales del Colegio.",
  status: "final",
  context: "Vista general de las instalaciones actuales.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentCourtyardDetailPhotography = {
  id: "current-courtyard-detail-photography",
  src: "/images/current/patio-escudo-colegio-actual.webp",
  alt: "Patio actual con tablero que muestra el escudo del Colegio Miguel Hidalgo",
  caption: "Vista actual de uno de los patios del plantel.",
  status: "final",
  context: "Espacio general actual del plantel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentSyntheticFieldPhotography = {
  id: "current-synthetic-field-photography",
  src: "/images/current/cancha-pasto-sintetico-actual.webp",
  alt: "Cancha cubierta de pasto sintético del Colegio Miguel Hidalgo",
  caption: "Cancha cubierta de pasto sintético en las instalaciones actuales.",
  status: "final",
  context: "Espacio deportivo actual del plantel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 583,
} as const satisfies ManagedImageAsset;

export const currentCoveredCourtPhotography = {
  id: "current-covered-court-photography",
  src: "/images/current/cancha-techada-colegio-actual.webp",
  alt: "Cancha techada actual del Colegio Miguel Hidalgo",
  caption: "Cancha techada en las instalaciones actuales del plantel.",
  status: "final",
  context: "Espacio deportivo general actual del plantel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentComputerRoomPhotography = {
  id: "current-computer-room-photography",
  src: "/images/current/sala-computo-actual.webp",
  alt: "Sala de cómputo actual del Colegio Miguel Hidalgo",
  caption: "Sala de cómputo en las instalaciones actuales.",
  status: "final",
  context: "Espacio tecnológico actual del plantel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentPreschoolPhotography = {
  id: "current-preschool-photography",
  src: "/images/current/patio-preescolar-actual.webp",
  alt: "Patio actual del área de Preescolar",
  caption: "Patio y área de juego actuales de Preescolar.",
  status: "final",
  context: "Espacio actual identificado como Preescolar.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentEducationPhotography = {
  id: "current-education-photography",
  src: "/images/current/aula-equipada-actual.webp",
  alt: "Aula equipada actual del Colegio Miguel Hidalgo",
  caption: "Aula equipada actual del plantel; nivel educativo no identificado.",
  status: "final",
  context: "Recurso educativo general sin atribución de nivel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentPrimaryEntrancePhotography = {
  id: "current-primary-entrance-photography",
  src: "/images/current/entrada-primaria-escudo-actual.webp",
  alt: "Entrada actual de Primaria con el escudo del Colegio Miguel Hidalgo",
  caption: "Entrada actual de Primaria y escudo institucional.",
  status: "final",
  context: "Acceso actual identificado como Primaria.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1288,
  height: 896,
} as const satisfies ManagedImageAsset;

export const currentMultipurposeRoomPhotography = {
  id: "current-multipurpose-room-photography",
  src: "/images/current/salon-usos-multiples-actual.webp",
  alt: "Interior actual del salón de usos múltiples con mesas y sillas",
  caption:
    "Espacio para actividades formativas, reuniones y vida comunitaria.",
  status: "final",
  context: "Salón de usos múltiples actual del plantel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const currentChapelPhotography = {
  id: "current-chapel-photography",
  src: "/images/current/capilla-nicho-actual.webp",
  alt: "Nicho actual de la capilla con crucifijo y retrato",
  caption:
    "Espacio destinado a la oración y a la dimensión espiritual de la comunidad.",
  status: "final",
  context: "Detalle actual de la capilla del plantel.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: false,
  width: 1448,
  height: 440,
} as const satisfies ManagedImageAsset;

export const provisionalClassroomPhotography = {
  id: "provisional-classroom-photography",
  src: "/images/current/aula-recurso-general-actual.webp",
  alt: "Aula actual del Colegio Miguel Hidalgo",
  caption: "Aula actual del plantel; nivel educativo no identificado.",
  status: "provisional",
  context: "Recurso general temporal para un nivel sin fotografía identificada.",
  source: "Fotografía actual proporcionada por el Colegio Miguel Hidalgo.",
  replaceLater: true,
  width: 1600,
  height: 1200,
} as const satisfies ManagedImageAsset;

export const provisionalSportsLevelPhotography = {
  ...currentCoveredCourtPhotography,
  id: "provisional-sports-level-photography",
  caption: "Recurso deportivo actual del plantel; nivel educativo no identificado.",
  status: "provisional",
  context: "Recurso general temporal para un nivel sin fotografía identificada.",
  replaceLater: true,
} as const satisfies ManagedImageAsset;

export const provisionalTechnologyLevelPhotography = {
  ...currentComputerRoomPhotography,
  id: "provisional-technology-level-photography",
  caption: "Recurso tecnológico actual del plantel; nivel educativo no identificado.",
  status: "provisional",
  context: "Recurso general temporal para un nivel sin fotografía identificada.",
  replaceLater: true,
} as const satisfies ManagedImageAsset;

export const currentFacilitiesHighlights = [
  currentCoveredCourtPhotography,
  currentComputerRoomPhotography,
  currentCourtyardDetailPhotography,
] as const;

export const currentFacilitiesGallery = [
  currentContactPhotography,
  currentHeroPhotography,
  currentCoveredCourtPhotography,
  currentEducationPhotography,
  currentComputerRoomPhotography,
  currentPreschoolPhotography,
  currentCourtyardDetailPhotography,
  currentSyntheticFieldPhotography,
] as const;

export const homeFacilitiesPhotography = [
  currentFacilitiesPhotography,
  currentCourtyardDetailPhotography,
  currentCoveredCourtPhotography,
] as const;

export const educationLevelPhotography = [
  currentPreschoolPhotography,
  provisionalClassroomPhotography,
  provisionalSportsLevelPhotography,
  provisionalTechnologyLevelPhotography,
] as const;

export const managedMedia: ManagedImageAsset[] = [
  schoolShield,
  currentHeroPhotography,
  currentContactPhotography,
  currentFacilitiesPhotography,
  currentCourtyardDetailPhotography,
  currentSyntheticFieldPhotography,
  currentCoveredCourtPhotography,
  currentComputerRoomPhotography,
  currentPreschoolPhotography,
  currentEducationPhotography,
  currentPrimaryEntrancePhotography,
  currentMultipurposeRoomPhotography,
  currentChapelPhotography,
  provisionalClassroomPhotography,
  provisionalSportsLevelPhotography,
  provisionalTechnologyLevelPhotography,
  ...historicalMedia,
];

export function getHistoricalMedia(id: string) {
  return historicalMedia.find((asset) => asset.id === id);
}

export function getManagedMedia(id: string) {
  return managedMedia.find((asset) => asset.id === id);
}
