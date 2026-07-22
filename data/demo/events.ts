import type { CalendarEvent } from "@/types/event";

export const calendarEvents: CalendarEvent[] = [
  {
    id: "inicio-verano",
    title: "Curso de verano y regularización",
    category: "Acad\u00e9mico",
    date: "2026-07-06",
    time: "09:00",
    location: "Aulas CMH",
    audience: "Primaria y Secundaria",
    summary:
      "Sesiones de apoyo académico y actividades formativas para reforzar aprendizajes clave.",
    details: [
      "Grupos por nivel y diagnóstico inicial.",
      "Enfoque en matemáticas, lectura, hábitos de estudio y convivencia.",
      "Registro por correo institucional.",
    ],
  },
  {
    id: "junta-admisiones",
    title: "Sesión informativa de admisiones",
    category: "Admisiones",
    date: "2026-07-10",
    time: "17:00",
    location: "Auditorio",
    audience: "Familias aspirantes",
    summary:
      "Presentación del modelo educativo, secciones disponibles y pasos del proceso de inscripción.",
    details: [
      "Recorrido guiado por instalaciones.",
      "Espacio para preguntas con coordinación académica.",
      "Revisión de documentos requeridos por sección.",
    ],
  },
  {
    id: "encuentro-pastoral",
    title: "Encuentro de pastoral educativa",
    category: "Pastoral",
    date: "2026-07-17",
    time: "08:30",
    location: "Capilla y patio central",
    audience: "Comunidad educativa",
    summary:
      "Jornada para fortalecer la identidad franciscana y el lema institucional.",
    details: [
      "Oración comunitaria.",
      "Trabajo por equipos sobre valores HFIC.",
      "Cierre con compromiso de servicio.",
    ],
  },
  {
    id: "torneo-fraternidad",
    title: "Torneo de fraternidad",
    category: "Deportivo",
    date: "2026-07-24",
    time: "16:00",
    location: "Canchas deportivas",
    audience: "Alumnos y familias",
    summary:
      "Actividad deportiva de convivencia con fútbol, básquetbol y voleibol.",
    details: [
      "Equipos mixtos por sección.",
      "Participación familiar en juegos recreativos.",
      "Premiación simbólica por espíritu deportivo.",
    ],
  },
  {
    id: "festival-comunidad",
    title: "Festival de comunidad CMH",
    category: "Eventos",
    date: "2026-08-07",
    time: "18:00",
    location: "Patio principal",
    audience: "Comunidad CMH",
    summary:
      "Encuentro cultural y familiar para celebrar la vida escolar del Colegio Miguel Hidalgo.",
    details: [
      "Presentaciones artísticas.",
      "Muestras de danza y banda de guerra.",
      "Convivencia familiar y actividades por sección.",
    ],
  },
  {
    id: "inicio-ciclo",
    title: "Inicio de ciclo escolar 2026-2027",
    category: "Acad\u00e9mico",
    date: "2026-08-24",
    time: "07:30",
    location: "Colegio Miguel Hidalgo",
    audience: "Todos los niveles",
    summary:
      "Bienvenida a estudiantes y familias para comenzar un nuevo ciclo de formación integral.",
    details: [
      "Recepción por niveles.",
      "Mensaje institucional de bienvenida.",
      "Indicaciones de coordinación y servicios escolares.",
    ],
  },
];
