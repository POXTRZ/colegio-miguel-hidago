import type {
  Differentiator,
  InstitutionalItem,
  OrganizationGroup,
  ShieldElement,
} from "@/types/institution";

export const differentiators: Differentiator[] = [
  {
    title: "EducaciÃ³n integral",
    description:
      "FormaciÃ³n de calidad en las dimensiones espiritual, humana y acadÃ©mica, inspirada en valores evangÃ©licos, marianos y franciscanos.",
  },
  {
    title: "FormaciÃ³n en valores",
    description:
      "Misericordia, libertad, oraciÃ³n, pureza, fraternidad, minoridad, armonÃ­a con la naturaleza, paz y alegrÃ­a.",
  },
  {
    title: "Instalaciones deportivas",
    description:
      "Espacios para movimiento, disciplina y convivencia, pensados para fortalecer la salud y el trabajo en equipo.",
  },
  {
    title: "TecnologÃ­a e innovaciÃ³n",
    description:
      "ComputaciÃ³n, herramientas digitales y experiencias de aprendizaje que fortalecen el criterio y la preparaciÃ³n de los alumnos.",
  },
];

export const institutionalItems: InstitutionalItem[] = [
  {
    id: "resena",
    title: "ReseÃ±a histÃ³rica",
    body:
      "El Colegio Miguel Hidalgo iniciÃ³ labores ininterrumpidamente desde 1907, ofreciendo a la comunidad ludovicense una educaciÃ³n integral para la niÃ±ez y juventud. Se ubica en Guerrero No. 215, Colonia Centro, y forma parte de la tradiciÃ³n educativa de las Hermanas Franciscanas de la Inmaculada ConcepciÃ³n.",
    note: "Fuente: ReseÃ±a Colegio Miguel Hidalgo - Secundaria.",
  },
  {
    id: "filosofia",
    title: "FilosofÃ­a de la InstituciÃ³n",
    body:
      "La instituciÃ³n se fundamenta en el Ideario de la Pastoral Educativa HFIC: una educaciÃ³n que integra fe, cultura y vida, reconoce la dignidad de la persona y promueve una comunidad fraterna, alegre, respetuosa y comprometida.",
    note: "Fuente: Ideario de la Pastoral Educativa HFIC.",
  },
  {
    id: "mision",
    title: "MisiÃ³n",
    body:
      "Ofrecer a la comunidad educativa una formaciÃ³n de calidad en las dimensiones espiritual, humana y acadÃ©mica, inspirada en los valores evangÃ©licos, marianos y franciscanos, que le lleve a la realizaciÃ³n de su vocaciÃ³n, comprometiÃ©ndose a reparar la viÃ±a del SeÃ±or, siendo miembros constructivos de una sociedad mÃ¡s justa en armonÃ­a con su entorno.",
    note: "Fuente: ReseÃ±a Colegio Miguel Hidalgo - Secundaria.",
  },
  {
    id: "vision",
    title: "VisiÃ³n",
    body:
      "Garantizar que nuestras instituciones mantengan el mismo nivel de calidad educativa, y lograr la autosuficiencia y rentabilidad necesaria para crecer en la Pastoral de la EducaciÃ³n.",
    note: "Fuente: ReseÃ±a Colegio Miguel Hidalgo - Secundaria.",
  },
  {
    id: "valores",
    title: "Valores",
    body:
      "En la prÃ¡ctica de las obras de misericordia y los valores franciscanos, el colegio promueve una vida escolar centrada en la dignidad de la persona, la convivencia fraterna y el servicio.",
    note: "Fuente: ReseÃ±a e Ideario HFIC.",
  },
  {
    id: "himno",
    title: "Himno Institucional Franciscano",
    body: "Himno Colegios HFIC. Letra y mÃºsica: CÃ©sar Miranda BarragÃ¡n.",
    note: "Fuente: Ideario de la Pastoral Educativa HFIC.",
  },
  {
    id: "organigrama",
    title: "Organigrama",
    body:
      "La estructura general se organiza desde DirecciÃ³n General y coordinaciones por secciÃ³n: preescolar, primaria, secundaria y preparatoria, con apoyo administrativo, docente, intendencia, prefectura y mesa directiva segÃºn corresponda.",
    note: "Fuente: Organigramas ciclo escolar 2024-2025.",
  },
];

export const values = [
  "Misericordia",
  "Libertad",
  "OraciÃ³n",
  "Pureza",
  "Fraternidad",
  "Minoridad",
  "ArmonÃ­a con la naturaleza",
  "Paz",
  "AlegrÃ­a",
];

export const hymnStanzas = [
  [
    "EducaciÃ³n para crecer,",
    "valores que desarrollar,",
    "Francisco inspira con su Paz y Bien,",
    "la forma alegre de estudiar.",
    "Colegios en fraternidad,",
    "pioneros de un mundo mejor,",
    "la santidad serÃ¡ nuestro ideal,",
    "forjamos el Reino de Amor.",
  ],
  [
    "Ir reparando sin cesar",
    "la viÃ±a del SeÃ±or,",
    "el amor nos moverÃ¡",
    "en nuestra gran misiÃ³n.",
  ],
  [
    "Un mundo entero que cuidar,",
    "en armonÃ­a interior,",
    "todos en fraternidad,",
    "un solo corazÃ³n.",
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
      "DirecciÃ³n General",
      "CoordinaciÃ³n Preescolar",
      "CoordinaciÃ³n Primaria",
      "CoordinaciÃ³n Secundaria",
      "CoordinaciÃ³n Preparatoria",
      "Personal administrativo, docente, auxiliar e intendencia",
      "Sociedad de padres de familia",
    ],
  },
  {
    title: "Preescolar y Primaria",
    items: [
      "Coordinadora de secciÃ³n",
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
      "Representa la misiÃ³n de iluminar la viÃ±a del SeÃ±or mediante una formaciÃ³n de calidad desde los valores del Evangelio.",
  },
  {
    title: "Libro y surcos",
    text:
      "El libro simboliza ciencia, conocimiento y sabidurÃ­a; los surcos recuerdan el campo donde se cultivan los valores del Reino.",
  },
  {
    title: "CordÃ³n franciscano",
    text:
      "Sus tres nudos evocan los valores evangÃ©licos, marianos y franciscanos de la comunidad educativa HFIC.",
  },
  {
    title: "Guinda, azul y dorado",
    text:
      "El guinda alude a la interioridad forjada; el azul, a la espiritualidad mariana; el dorado, al honor, la lealtad y la dignidad humana.",
  },
];
