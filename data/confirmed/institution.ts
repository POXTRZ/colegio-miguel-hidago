import type {
  Differentiator,
  EducationalPrinciple,
  InstitutionalItem,
  InstitutionalValue,
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
      "Misericordia, libertad, oración, pureza, fraternidad, minoridad, armonía con la naturaleza y paz.",
  },
  {
    title: "Instalaciones deportivas",
    description:
      "Espacios para movimiento, disciplina y convivencia que fortalecen la salud y el trabajo en equipo.",
  },
  {
    title: "Tecnología e innovación",
    description:
      "Herramientas digitales y experiencias de aprendizaje que fortalecen el criterio y la preparación de los alumnos.",
  },
];

export const institutionalItems: InstitutionalItem[] = [
  {
    id: "resena",
    title: "Presentación",
    body:
      "El Colegio Miguel Hidalgo forma parte de la tradición educativa de las Hermanas Franciscanas de la Inmaculada Concepción y acompaña a la comunidad de San Luis de la Paz desde una propuesta integral.",
    note:
      "Fuente: Reseña Colegio Miguel Hidalgo - Secundaria e Ideario de la Pastoral Educativa HFIC.",
  },
  {
    id: "filosofia",
    title: "Filosofía de la Institución",
    body:
      "La institución integra fe, cultura y vida, reconoce la dignidad de cada persona y promueve una comunidad fraterna, respetuosa y comprometida.",
    note: "Fuente: Ideario de la Pastoral Educativa HFIC.",
  },
  {
    id: "mision",
    title: "Misión",
    body:
      "Ofrecer a la comunidad educativa una formación de calidad en las dimensiones espiritual, humana y académica, inspirada en los valores evangélicos, marianos y franciscanos, que le lleve a la realización de su vocación, comprometiéndose a reparar la viña del Señor, siendo miembros constructivos de una sociedad más justa en armonía con su entorno.",
    note: "Fuente: Ideario de la Pastoral Educativa HFIC, p. 8.",
  },
  {
    id: "vision",
    title: "Visión",
    body:
      "Mantener un mismo nivel de calidad educativa y asegurar la continuidad de las instituciones para crecer en la Pastoral de la Educación.",
    note:
      "Síntesis editorial de la visión incluida en la Reseña Colegio Miguel Hidalgo - Secundaria.",
  },
  {
    id: "valores",
    title: "Valores",
    body:
      "La vida escolar se orienta por ocho valores que ponen en el centro la dignidad de la persona, la convivencia fraterna y el servicio.",
    note: "Fuente: Ideario de la Pastoral Educativa HFIC, pp. 7-8.",
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
      "La estructura se organiza desde Dirección General, con coordinaciones para Preescolar, Primaria, Secundaria y Preparatoria, y equipos de apoyo por sección.",
    note: "Fuente: Organigramas ciclo escolar 2024-2025.",
  },
];

export const values: InstitutionalValue[] = [
  {
    id: "misericordia",
    title: "Misericordia",
    description:
      "Escuchar y responder con amabilidad, generosidad, solidaridad, comprensión, perdón y reconciliación.",
  },
  {
    id: "libertad",
    title: "Libertad",
    description:
      "Tomar decisiones responsables, fundadas en la verdad y abiertas al bien.",
  },
  {
    id: "oracion",
    title: "Oración",
    description:
      "Encontrarse con Dios y traducir la fe, la esperanza y el amor en la vida cotidiana.",
  },
  {
    id: "pureza",
    title: "Pureza",
    description:
      "Vivir con transparencia, coherencia interior y un corazón orientado al bien.",
  },
  {
    id: "fraternidad",
    title: "Fraternidad",
    description:
      "Construir relaciones cercanas y alegres desde el reconocimiento de una misión común.",
  },
  {
    id: "minoridad",
    title: "Minoridad",
    description:
      "Servir con humildad y compartir con los demás los dones recibidos.",
  },
  {
    id: "naturaleza",
    title: "Armonía con la naturaleza",
    description:
      "Cuidar y defender la vida y la casa común con respeto y responsabilidad.",
  },
  {
    id: "paz",
    title: "Paz",
    description:
      "Establecer relaciones armónicas y trabajar por el bien y la prosperidad de los demás.",
  },
];

// Referencias internas que requieren conciliación editorial antes de publicarse.
export const valueTerminologyNotes = [
  {
    source: "Material institucional complementario",
    wording: "Paz y Amor",
    status: "pending",
  },
  {
    source: "Reseña institucional",
    wording: "Paz y Alegría",
    status: "pending",
  },
] as const;

export const educationalPrinciples: EducationalPrinciple[] = [
  {
    id: "pedagogia-jesus",
    title: "Pedagogía de Jesús",
    description:
      "Educar desde el amor misericordioso, la realidad concreta y el testimonio personal.",
  },
  {
    id: "dignidad",
    title: "Dignidad de la persona",
    description:
      "Atender a todos en igualdad, con paciencia, sencillez, cercanía y respeto.",
  },
  {
    id: "diversidad",
    title: "Atención a la diversidad",
    description:
      "Adaptar medios y procesos a los ritmos, condiciones y talentos de cada estudiante.",
  },
  {
    id: "fe-cultura-vida",
    title: "Fe, cultura y vida",
    description:
      "Relacionar el Evangelio, las disciplinas académicas y la realidad social.",
  },
  {
    id: "vocacion",
    title: "Educación con vocación",
    description:
      "Vivir la tarea educativa como una oportunidad de servicio generoso.",
  },
  {
    id: "ejemplo",
    title: "Educación con el ejemplo",
    description:
      "Hacer del testimonio y de las obras una forma congruente de enseñar.",
  },
  {
    id: "fraternidad-educativa",
    title: "Fraternidad educativa",
    description:
      "Integrar la comunidad en un clima de alegría, respeto, amor, fe y participación.",
  },
  {
    id: "naturaleza",
    title: "Naturaleza",
    description:
      "Promover una cultura de amor, cuidado y conservación de la casa común.",
  },
  {
    id: "familia-sociedad",
    title: "Familia y sociedad",
    description:
      "Formar ciudadanos responsables y fortalecer a la familia como primera comunidad educativa.",
  },
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
    id: "preescolar",
    title: "Preescolar",
    items: [
      "Coordinación de sección",
      "Auxiliar",
      "Personal administrativo",
      "Personal docente",
      "Mesa directiva",
      "Personal de intendencia",
    ],
  },
  {
    id: "primaria",
    title: "Primaria",
    items: [
      "Coordinación de sección",
      "Auxiliar",
      "Personal administrativo",
      "Personal docente",
      "Mesa directiva",
      "Personal de intendencia",
    ],
  },
  {
    id: "secundaria",
    title: "Secundaria",
    items: [
      "Coordinación de sección",
      "Prefectura",
      "Personal administrativo",
      "Personal docente",
      "Mesa directiva",
      "Personal de intendencia",
    ],
  },
  {
    id: "preparatoria",
    title: "Preparatoria",
    items: [
      "Coordinación de sección",
      "Administrativo",
      "Prefectura",
      "Personal docente",
      "Mesa directiva",
      "Personal de intendencia",
    ],
  },
];

export const organizationSupport = [
  "Personal administrativo",
  "Personal docente",
  "Sociedad de padres de familia",
  "Personal auxiliar",
  "Personal de intendencia",
] as const;

export const shieldElements: ShieldElement[] = [
  {
    id: "sol",
    title: "Sol naciente",
    text:
      "Su luz expresa la misión de iluminar la viña del Señor mediante una formación de calidad y una vocación puesta al servicio de la familia y el entorno.",
  },
  {
    id: "libro",
    title: "Libro",
    text:
      "Representa ciencia, conocimiento y sabiduría. Sus hojas aluden a las dimensiones humana, espiritual y académica de la formación integral.",
  },
  {
    id: "vina",
    title: "Viña o surcos",
    text:
      "Los surcos son el campo de formación y acción donde se cultivan los valores del Reino y el carisma HFIC, con la dignidad de la persona en el centro.",
  },
  {
    id: "guinda",
    title: "Fondo guinda",
    text:
      "Evoca la fragua donde se purifica y forja el ser humano, y destaca la formación de su interioridad.",
  },
  {
    id: "cordon",
    title: "Cordón franciscano",
    text:
      "Simboliza la comunión fraterna. Sus tres nudos representan los valores evangélicos, marianos y franciscanos.",
  },
  {
    id: "azul",
    title: "Fondo azul",
    text:
      "Representa la espiritualidad mariana y virtudes como pureza, obediencia, humildad y sensibilidad ante las necesidades del otro.",
  },
  {
    id: "dorado",
    title: "Marco dorado",
    text:
      "Se asocia con los grandes ideales, el honor y la lealtad, y recuerda que educar enaltece la dignidad de la persona.",
  },
];
