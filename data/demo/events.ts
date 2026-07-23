import type { CalendarEvent } from "@/types/event";

export const demoEvents: CalendarEvent[] = [
  {
    id: "inicio-verano",
    slug: "curso-verano-regularizacion-demo",
    title: "Curso de verano y regularización",
    summary:
      "Sesiones de apoyo académico y actividades formativas para reforzar aprendizajes clave.",
    description:
      "Programa demostrativo con grupos por nivel, diagnóstico inicial y actividades enfocadas en matemáticas, lectura, hábitos de estudio y convivencia.",
    startDate: "2026-07-06",
    time: "09:00",
    location: "Aulas CMH",
    category: "academic",
    status: "completed",
    educationLevel: ["primaria", "secundaria"],
    media: [],
    documents: [],
    isDemo: true,
  },
  {
    id: "junta-admisiones",
    slug: "sesion-informativa-admisiones-demo",
    title: "Sesión informativa de admisiones",
    summary:
      "Presentación del modelo educativo, secciones disponibles y pasos del proceso de inscripción.",
    description:
      "Ejemplo de sesión con recorrido por instalaciones, espacio de preguntas y revisión general de documentos requeridos por sección.",
    startDate: "2026-07-10",
    time: "17:00",
    location: "Auditorio",
    category: "administrative",
    status: "completed",
    educationLevel: ["todos"],
    media: [],
    documents: [],
    isDemo: true,
  },
  {
    id: "encuentro-pastoral",
    slug: "encuentro-pastoral-educativa-demo",
    title: "Encuentro de pastoral educativa",
    summary:
      "Jornada para fortalecer la identidad franciscana y el lema institucional.",
    description:
      "Ejemplo de jornada con oración comunitaria, trabajo por equipos sobre valores HFIC y un cierre orientado al compromiso de servicio.",
    startDate: "2026-07-17",
    time: "08:30",
    location: "Capilla y patio central",
    category: "pastoral",
    status: "completed",
    educationLevel: ["todos"],
    media: [],
    documents: [],
    isDemo: true,
  },
  {
    id: "torneo-fraternidad",
    slug: "torneo-fraternidad-demo",
    title: "Torneo de fraternidad",
    summary:
      "Actividad deportiva de convivencia con fútbol, básquetbol y voleibol.",
    description:
      "Ejemplo de encuentro con equipos por sección, participación familiar en juegos recreativos y reconocimiento al espíritu deportivo.",
    startDate: "2026-07-24",
    time: "16:00",
    location: "Canchas deportivas",
    category: "sports",
    status: "upcoming",
    educationLevel: ["todos"],
    media: [],
    documents: [],
    isDemo: true,
  },
  {
    id: "festival-comunidad",
    slug: "festival-comunidad-cmh-demo",
    title: "Festival de comunidad CMH",
    summary:
      "Encuentro cultural y familiar para celebrar la vida escolar del Colegio Miguel Hidalgo.",
    description:
      "Ejemplo de festival con presentaciones artísticas, muestras de danza, banda de guerra y actividades de convivencia por sección.",
    startDate: "2026-08-07",
    time: "18:00",
    location: "Patio principal",
    category: "cultural",
    status: "upcoming",
    educationLevel: ["todos"],
    media: [],
    documents: [],
    isDemo: true,
  },
  {
    id: "inicio-ciclo",
    slug: "inicio-ciclo-escolar-2026-2027-demo",
    title: "Inicio de ciclo escolar 2026-2027",
    summary:
      "Bienvenida a estudiantes y familias para comenzar un nuevo ciclo de formación integral.",
    description:
      "Ejemplo de jornada de recepción por niveles, mensaje institucional e indicaciones generales de coordinación y servicios escolares.",
    startDate: "2026-08-24",
    time: "07:30",
    location: "Colegio Miguel Hidalgo",
    category: "academic",
    status: "upcoming",
    educationLevel: ["todos"],
    media: [],
    documents: [],
    isDemo: true,
  },
];
