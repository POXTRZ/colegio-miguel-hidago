import type {
  Differentiator,
  InstitutionalItem,
  OrganizationGroup,
  ShieldElement,
} from "@/types/institution";

export const differentiators: Differentiator[] = [
  {
    title: "Educación integral",
    description:
      "Formación de calidad en las dimensiones espiritual, humana y académica, inspirada en valores evangélicos, marianos y franciscanos.",
  },
  {
    title: "Formación en valores",
    description:
      "Misericordia, libertad, oración, pureza, fraternidad, minoridad, armonía con la naturaleza, paz y alegría.",
  },
  {
    title: "Instalaciones deportivas",
    description:
      "Espacios para movimiento, disciplina y convivencia, pensados para fortalecer la salud y el trabajo en equipo.",
  },
  {
    title: "Tecnología e innovación",
    description:
      "Computación, herramientas digitales y experiencias de aprendizaje que fortalecen el criterio y la preparación de los alumnos.",
  },
];

export const institutionalItems: InstitutionalItem[] = [
  {
    id: "resena",
    title: "Reseña histórica",
    body:
      "El Colegio Miguel Hidalgo inició labores ininterrumpidamente desde 1907, ofreciendo a la comunidad ludovicense una educación integral para la niñez y juventud. Se ubica en Guerrero No. 215, Colonia Centro, y forma parte de la tradición educativa de las Hermanas Franciscanas de la Inmaculada Concepción.",
    note: "Fuente: Reseña Colegio Miguel Hidalgo - Secundaria.",
  },
  {
    id: "filosofia",
    title: "Filosofía de la Institución",
    body:
      "La institución se fundamenta en el Ideario de la Pastoral Educativa HFIC: una educación que integra fe, cultura y vida, reconoce la dignidad de la persona y promueve una comunidad fraterna, alegre, respetuosa y comprometida.",
    note: "Fuente: Ideario de la Pastoral Educativa HFIC.",
  },
  {
    id: "mision",
    title: "Misión",
    body:
      "Ofrecer a la comunidad educativa una formación de calidad en las dimensiones espiritual, humana y académica, inspirada en los valores evangélicos, marianos y franciscanos, que le lleve a la realización de su vocación, comprometiéndose a reparar la viña del Señor, siendo miembros constructivos de una sociedad más justa en armonía con su entorno.",
    note: "Fuente: Reseña Colegio Miguel Hidalgo - Secundaria.",
  },
  {
    id: "vision",
    title: "Visión",
    body:
      "Garantizar que nuestras instituciones mantengan el mismo nivel de calidad educativa, y lograr la autosuficiencia y rentabilidad necesaria para crecer en la Pastoral de la Educación.",
    note: "Fuente: Reseña Colegio Miguel Hidalgo - Secundaria.",
  },
  {
    id: "valores",
    title: "Valores",
    body:
      "En la práctica de las obras de misericordia y los valores franciscanos, el colegio promueve una vida escolar centrada en la dignidad de la persona, la convivencia fraterna y el servicio.",
    note: "Fuente: Reseña e Ideario HFIC.",
  },
  {
    id: "himno",
    title: "Himno Institucional Franciscano",
    body: "Himno Colegios HFIC. Letra y música: César Miranda Barragán.",
    note: "Fuente: Ideario de la Pastoral Educativa HFIC.",
  },
  {
    id: "organigrama",
    title: "Organigrama",
    body:
      "La estructura general se organiza desde Dirección General y coordinaciones por sección: preescolar, primaria, secundaria y preparatoria, con apoyo administrativo, docente, intendencia, prefectura y mesa directiva según corresponda.",
    note: "Fuente: Organigramas ciclo escolar 2024-2025.",
  },
];

export const values = [
  "Misericordia",
  "Libertad",
  "Oración",
  "Pureza",
  "Fraternidad",
  "Minoridad",
  "Armonía con la naturaleza",
  "Paz",
  "Alegría",
];

export const hymnStanzas = [
  [
    "Educación para crecer,",
    "valores que desarrollar,",
    "Francisco inspira con su Paz y Bien,",
    "la forma alegre de estudiar.",
    "Colegios en fraternidad,",
    "pioneros de un mundo mejor,",
    "la santidad será nuestro ideal,",
    "forjamos el Reino de Amor.",
  ],
  [
    "Ir reparando sin cesar",
    "la viña del Señor,",
    "el amor nos moverá",
    "en nuestra gran misión.",
  ],
  [
    "Un mundo entero que cuidar,",
    "en armonía interior,",
    "todos en fraternidad,",
    "un solo corazón.",
  ],
  [
    "Que todo hombre busque el bien,",
    "con plena libertad,",
    "el compromiso es formar,",
    "la nueva humanidad.",
  ],
];

export const organizationGroups: OrganizationGroup[] = [
  {
    title: "General",
    items: [
      "Dirección General",
      "Coordinación Preescolar",
      "Coordinación Primaria",
      "Coordinación Secundaria",
      "Coordinación Preparatoria",
      "Personal administrativo, docente, auxiliar e intendencia",
      "Sociedad de padres de familia",
    ],
  },
  {
    title: "Preescolar y Primaria",
    items: [
      "Coordinadora de sección",
      "Auxiliar",
      "Personal administrativo",
      "Personal docente",
      "Mesa directiva",
      "Personal de intendencia",
    ],
  },
  {
    title: "Secundaria",
    items: [
      "Coordinadora Secundaria",
      "Prefectura",
      "Personal administrativo",
      "Personal docente",
      "Mesa directiva",
      "Personal de intendencia",
    ],
  },
  {
    title: "Preparatoria",
    items: [
      "Coordinadora Preparatoria",
      "Administrativo",
      "Prefectura",
      "Personal docente",
      "Mesa directiva",
      "Personal de intendencia",
    ],
  },
];

export const shieldElements: ShieldElement[] = [
  {
    title: "Sol naciente",
    text:
      "Representa la misión de iluminar la viña del Señor mediante una formación de calidad desde los valores del Evangelio.",
  },
  {
    title: "Libro y surcos",
    text:
      "El libro simboliza ciencia, conocimiento y sabiduría; los surcos recuerdan el campo donde se cultivan los valores del Reino.",
  },
  {
    title: "Cordón franciscano",
    text:
      "Sus tres nudos evocan los valores evangélicos, marianos y franciscanos de la comunidad educativa HFIC.",
  },
  {
    title: "Guinda, azul y dorado",
    text:
      "El guinda alude a la interioridad forjada; el azul, a la espiritualidad mariana; el dorado, al honor, la lealtad y la dignidad humana.",
  },
];
