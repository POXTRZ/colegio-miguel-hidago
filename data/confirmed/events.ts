export type CalendarEvent = {
  id: string;
  title: string;
  category: "Acad\u00e9mico" | "Eventos" | "Admisiones" | "Pastoral" | "Deportivo";
  date: string;
  endDate?: string;
  time: string;
  location: string;
  audience: string;
  summary: string;
  details: string[];
};

export const calendarEvents: CalendarEvent[] = [
  {
    id: "inicio-verano",
    title: "Curso de verano y regularizaciÃ³n",
    category: "Acad\u00e9mico",
    date: "2026-07-06",
    time: "09:00",
    location: "Aulas CMH",
    audience: "Primaria y Secundaria",
    summary:
      "Sesiones de apoyo acadÃ©mico y actividades formativas para reforzar aprendizajes clave.",
    details: [
      "Grupos por nivel y diagnÃ³stico inicial.",
      "Enfoque en matemÃ¡ticas, lectura, hÃ¡bitos de estudio y convivencia.",
      "Registro por correo institucional.",
    ],
  },
  {
    id: "junta-admisiones",
    title: "SesiÃ³n informativa de admisiones",
    category: "Admisiones",
    date: "2026-07-10",
    time: "17:00",
    location: "Auditorio",
    audience: "Familias aspirantes",
    summary:
      "PresentaciÃ³n del modelo educativo, secciones disponibles y pasos del proceso de inscripciÃ³n.",
    details: [
      "Recorrido guiado por instalaciones.",
      "Espacio para preguntas con coordinaciÃ³n acadÃ©mica.",
      "RevisiÃ³n de documentos requeridos por secciÃ³n.",
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
      "OraciÃ³n comunitaria.",
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
      "Actividad deportiva de convivencia con fÃºtbol, bÃ¡squetbol y voleibol.",
    details: [
      "Equipos mixtos por secciÃ³n.",
      "ParticipaciÃ³n familiar en juegos recreativos.",
      "PremiaciÃ³n simbÃ³lica por espÃ­ritu deportivo.",
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
      "Presentaciones artÃ­sticas.",
      "Muestras de danza y banda de guerra.",
      "Convivencia familiar y actividades por secciÃ³n.",
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
      "Bienvenida a estudiantes y familias para comenzar un nuevo ciclo de formaciÃ³n integral.",
    details: [
      "RecepciÃ³n por niveles.",
      "Mensaje institucional de bienvenida.",
      "Indicaciones de coordinaciÃ³n y servicios escolares.",
    ],
  },
];
