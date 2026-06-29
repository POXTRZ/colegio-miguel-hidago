"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import {
  BookOpen,
  Building2,
  ChevronDown,
  Cpu,
  Download,
  Dumbbell,
  ExternalLink,
  Eye,
  GraduationCap,
  HeartHandshake,
  Landmark,
  Mail,
  MapPin,
  Menu,
  Music,
  Network,
  Phone,
  Shield,
  Sparkles,
  Target,
  X,
} from "lucide-react";

const facebookUrl =
  "https://www.facebook.com/Miguel.Hidalgo.HFIC?mibextid=ZbWKwL";

const aboutLinks = [
  { label: "Reseña histórica", href: "#resena" },
  { label: "Filosofía", href: "#filosofia" },
  { label: "Misión", href: "#mision" },
  { label: "Visión", href: "#vision" },
  { label: "Valores", href: "#valores" },
  { label: "Himno", href: "#himno" },
  { label: "Organigrama", href: "#organigrama" },
];

const navLinks = [
  { label: "Académico", href: "#academico" },
  { label: "Eventos", href: "#eventos" },
  { label: "Admisiones", href: "#admisiones" },
  { label: "Instalaciones", href: "#instalaciones" },
  { label: "Ubicación", href: "#ubicacion" },
  { label: "Contacto", href: "#contacto" },
];

const differentiators = [
  {
    title: "Educación integral",
    description:
      "Acompañamiento académico, humano, espiritual y social para formar estudiantes seguros, capaces y sensibles a su entorno.",
    icon: Sparkles,
  },
  {
    title: "Formación en valores",
    description:
      "Una vida escolar inspirada en el carisma franciscano: fraternidad, sencillez, servicio, respeto y paz.",
    icon: HeartHandshake,
  },
  {
    title: "Instalaciones deportivas",
    description:
      "Espacios para movimiento, disciplina y convivencia, pensados para fortalecer la salud y el trabajo en equipo.",
    icon: Dumbbell,
  },
  {
    title: "Tecnología e innovación",
    description:
      "Herramientas digitales y experiencias de aprendizaje que preparan a los alumnos para los retos actuales.",
    icon: Cpu,
  },
];

const levels = [
  {
    name: "Kínder",
    detail: "Primeros aprendizajes con juego, afecto y hábitos.",
  },
  {
    name: "Primaria",
    detail: "Bases académicas sólidas y desarrollo de valores.",
  },
  {
    name: "Secundaria",
    detail:
      "Acompañamiento para identidad, pensamiento crítico y proyecto de vida.",
  },
  {
    name: "Preparatoria",
    detail:
      "Formación para la universidad y participación responsable en la sociedad.",
  },
];

const institutionalItems = [
  {
    id: "resena",
    title: "Reseña histórica",
    icon: Landmark,
    body:
      "El Colegio Miguel Hidalgo forma parte de la presencia educativa de las Hermanas Franciscanas de la Inmaculada Concepción, Provincia Cristo Rey. Aquí se integrará la historia local del plantel, sus fechas clave y los momentos que han marcado a su comunidad.",
    note: "Falta texto histórico oficial.",
  },
  {
    id: "filosofia",
    title: "Filosofía de la Institución",
    icon: Shield,
    body:
      "La propuesta educativa se sostiene en una formación integral con espíritu franciscano, donde el conocimiento, la fe, la convivencia y el servicio se viven como parte de una misma experiencia escolar.",
    note: "Conviene validar redacción institucional.",
  },
  {
    id: "mision",
    title: "Misión",
    icon: Target,
    body:
      "Pendiente de integrar la misión oficial del Colegio Miguel Hidalgo para conservar fidelidad al documento institucional.",
    note: "Necesito la misión oficial.",
  },
  {
    id: "vision",
    title: "Visión",
    icon: Eye,
    body:
      "Pendiente de integrar la visión oficial del Colegio Miguel Hidalgo y su proyección educativa para los próximos años.",
    note: "Necesito la visión oficial.",
  },
  {
    id: "valores",
    title: "Valores",
    icon: HeartHandshake,
    body:
      "Fraternidad, respeto, servicio, responsabilidad, sencillez y paz se presentan como base inicial del perfil franciscano. La lista final debe ajustarse a los valores oficiales del colegio.",
    note: "Falta lista oficial.",
  },
  {
    id: "himno",
    title: "Himno Institucional Franciscano",
    icon: Music,
    body:
      "Este espacio queda preparado para mostrar la letra del himno, una versión descargable o un audio institucional cuando el colegio comparta el material autorizado.",
    note: "Falta letra o archivo.",
  },
  {
    id: "organigrama",
    title: "Organigrama",
    icon: Network,
    body:
      "Se puede presentar como estructura visual por áreas: dirección, coordinación académica, administración, pastoral, docentes y servicios escolares.",
    note: "Faltan cargos y nombres.",
  },
];

const eventCards = [
  {
    tag: "Académico",
    title: "Calendario de evaluaciones",
    text:
      "Avisos, periodos de evaluación y actividades escolares se podrán consultar desde este espacio.",
  },
  {
    tag: "Eventos",
    title: "Vida escolar",
    text:
      "Festivales, celebraciones, actividades franciscanas y encuentros de comunidad.",
  },
  {
    tag: "Admisiones",
    title: "Proceso de inscripción",
    text:
      "Información para familias interesadas en formar parte del Colegio Miguel Hidalgo.",
  },
];

function closeMenu(setMenuOpen: (value: boolean) => void) {
  setMenuOpen(false);
}

export default function HomeExperience() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 18);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <header
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-colors duration-300 ${
          scrolled
            ? "border-[var(--color-linea)] bg-white/90 shadow-sm backdrop-blur-xl"
            : "border-transparent bg-white/70 backdrop-blur-lg"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
          <Link
            href="/"
            className="flex min-w-0 items-center gap-3"
            aria-label="Colegio Miguel Hidalgo - Inicio"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--color-guinda)] text-[var(--color-hueso)] shadow-sm">
              <GraduationCap className="h-6 w-6" aria-hidden="true" />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="block text-sm font-semibold">
                Colegio Miguel Hidalgo
              </span>
              <span className="block text-xs text-[var(--color-muted)]">
                HFIC - Provincia Cristo Rey
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className="flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium text-[var(--color-tinta)] transition hover:bg-[var(--color-hueso)]"
                onClick={() => setAboutOpen((open) => !open)}
                aria-expanded={aboutOpen}
                aria-haspopup="menu"
              >
                Quiénes somos
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
              <div
                className={`absolute left-0 top-12 w-64 rounded-lg border border-[var(--color-linea)] bg-white p-2 shadow-xl transition ${
                  aboutOpen
                    ? "visible translate-y-0 opacity-100"
                    : "invisible -translate-y-2 opacity-0"
                }`}
              >
                <a
                  href="#quienes-somos"
                  className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-[var(--color-hueso)]"
                >
                  Vista general
                </a>
                {aboutLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block rounded-md px-3 py-2 text-sm text-[var(--color-muted)] hover:bg-[var(--color-hueso)] hover:text-[var(--color-tinta)]"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-sm font-medium text-[var(--color-tinta)] transition hover:bg-[var(--color-hueso)]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href={facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-[var(--color-guinda)] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-guinda-oscuro)] xl:flex"
          >
            Facebook
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-linea)] bg-white text-[var(--color-tinta)] lg:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Menu className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </nav>

        <div
          className={`overflow-hidden border-t border-[var(--color-linea)] bg-white transition-[max-height] duration-300 lg:hidden ${
            menuOpen ? "max-h-[760px]" : "max-h-0"
          }`}
        >
          <div className="mx-auto max-w-7xl px-5 py-4">
            <a
              href="#quienes-somos"
              onClick={() => closeMenu(setMenuOpen)}
              className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-[var(--color-hueso)]"
            >
              Quiénes somos
            </a>
            <div className="grid grid-cols-1 gap-1 border-l border-[var(--color-linea)] pl-3">
              {aboutLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => closeMenu(setMenuOpen)}
                  className="rounded-md px-3 py-2 text-sm text-[var(--color-muted)] hover:bg-[var(--color-hueso)]"
                >
                  {link.label}
                </a>
              ))}
            </div>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => closeMenu(setMenuOpen)}
                className="block rounded-md px-3 py-3 text-sm font-semibold hover:bg-[var(--color-hueso)]"
              >
                {link.label}
              </a>
            ))}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[var(--color-guinda)] px-4 py-3 text-sm font-semibold text-white"
            >
              Facebook
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      <section id="inicio" className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fffdf8_0%,#f4efe4_46%,#eaf0ef_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-[linear-gradient(180deg,rgba(255,255,255,0),var(--color-fondo))]" />
        <div className="relative mx-auto grid min-h-[82vh] max-w-7xl grid-cols-1 items-center gap-12 px-5 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-[var(--color-linea)] bg-white/80 px-4 py-2 text-sm font-medium text-[var(--color-guinda)] shadow-sm">
              Educación integral con espíritu franciscano
            </p>
            <h1 className="max-w-3xl text-5xl font-bold leading-none text-[var(--color-tinta)] sm:text-6xl lg:text-7xl">
              Colegio Miguel Hidalgo
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Formamos estudiantes con preparación académica, valores y sentido
              humano, en una comunidad cercana inspirada por el carisma
              franciscano.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#quienes-somos"
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-[var(--color-guinda)] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-[var(--color-guinda-oscuro)]"
              >
                Conoce el colegio
              </a>
              <a
                href="#calendario"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-linea)] bg-white px-6 py-3 text-sm font-semibold text-[var(--color-tinta)] shadow-sm transition hover:bg-[var(--color-hueso)]"
              >
                Calendario escolar
              </a>
            </div>
          </div>

          <div className="relative min-h-[420px] overflow-hidden rounded-lg border border-white/80 bg-white shadow-[0_24px_70px_rgba(58,45,32,0.14)]">
            <div className="absolute inset-0 bg-[linear-gradient(160deg,#ffffff_0%,#f3eadb_48%,#dfe9e7_100%)]" />
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-[var(--color-dorado)] bg-white/70" />
            <div className="absolute right-0 top-0 h-full w-28 bg-[var(--color-guinda)]" />
            <div className="absolute bottom-0 left-0 right-0 h-28 bg-[var(--color-salvia)]" />
            <div className="absolute left-8 right-8 top-32 rounded-lg border border-white/80 bg-white/80 p-8 shadow-sm backdrop-blur">
              <div className="flex items-start gap-4">
                <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--color-guinda)] text-white">
                  <Shield className="h-7 w-7" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-[var(--color-guinda)]">
                    Identidad institucional
                  </p>
                  <p className="mt-2 text-2xl font-bold leading-tight text-[var(--color-tinta)]">
                    Hermanas Franciscanas de la Inmaculada Concepción
                  </p>
                </div>
              </div>
              <div className="mt-8 grid grid-cols-3 gap-3">
                {["Fe", "Servicio", "Paz"].map((item) => (
                  <div
                    key={item}
                    className="rounded-md border border-[var(--color-linea)] bg-white px-3 py-4 text-center text-sm font-semibold text-[var(--color-tinta)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-linea)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-8 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[var(--color-guinda)]">
              Provincia Cristo Rey
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Red educativa HFIC con enfoque franciscano.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-guinda)]">
              Dirección
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Guerrero No. 215, Col. Centro, CP 37900
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-[var(--color-guinda)]">
              Contacto
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              contacto@cristoreyhfic.com.mx
            </p>
          </div>
        </div>
      </section>

      <section
        id="quienes-somos"
        className="bg-[var(--color-fondo)] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-sm font-semibold text-[var(--color-guinda)]">
                Quiénes somos
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-[var(--color-tinta)] lg:text-5xl">
                Una comunidad educativa con raíz franciscana.
              </h2>
            </div>
            <p className="text-lg leading-8 text-[var(--color-muted)]">
              El Colegio Miguel Hidalgo acompaña a sus alumnos con una visión
              integral: aprende la mente, se fortalece el corazón y se cultiva
              una forma de vivir con respeto, servicio y responsabilidad.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.title}
                  className="min-h-64 rounded-lg border border-[var(--color-linea)] bg-white p-6 shadow-sm"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-hueso)] text-[var(--color-guinda)]">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-[var(--color-tinta)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {item.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="academico" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--color-guinda)]">
              Académico
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Un camino formativo completo.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              La estructura académica queda lista para detallar niveles,
              requisitos, horarios y enfoque pedagógico cuando tengamos la
              información final del plantel.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {levels.map((level) => (
              <article
                key={level.name}
                className="rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-6"
              >
                <BookOpen
                  className="h-7 w-7 text-[var(--color-guinda)]"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-2xl font-bold">{level.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {level.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--color-fondo)] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[var(--color-guinda)]">
              Identidad institucional
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              La información clave del colegio en un solo recorrido.
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">
            {institutionalItems.map((item) => {
              const Icon = item.icon;
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="scroll-mt-28 rounded-lg border border-[var(--color-linea)] bg-white p-7 shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-hueso)] text-[var(--color-guinda)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="text-2xl font-bold">{item.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                        {item.body}
                      </p>
                      <p className="mt-5 rounded-md bg-[var(--color-hueso)] px-3 py-2 text-xs font-semibold text-[var(--color-guinda)]">
                        {item.note}
                      </p>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section id="calendario" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[var(--color-guinda)]">
              Calendario escolar
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Visible para familias y listo para PDF.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              Lo pondría aquí como sección propia y también como acceso rápido
              en Académico, Admisiones y footer. Cuando me pases el PDF, el
              botón queda listo para descargarlo.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-6">
            <div className="grid grid-cols-7 gap-2 text-center text-xs font-semibold text-[var(--color-muted)]">
              {["L", "M", "M", "J", "V", "S", "D"].map((day, index) => (
                <span key={`${day}-${index}`} className="py-2">
                  {day}
                </span>
              ))}
              {Array.from({ length: 35 }, (_, index) => (
                <span
                  key={index}
                  className={`flex aspect-square items-center justify-center rounded-md border text-sm ${
                    [5, 12, 19, 26].includes(index)
                      ? "border-[var(--color-guinda)] bg-white text-[var(--color-guinda)]"
                      : "border-[var(--color-linea)] bg-white text-[var(--color-tinta)]"
                  }`}
                >
                  {index + 1}
                </span>
              ))}
            </div>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                disabled
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-guinda)] px-5 py-3 text-sm font-semibold text-white opacity-70"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                PDF por confirmar
              </button>
              <a
                href="#contacto"
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-[var(--color-linea)] bg-white px-5 py-3 text-sm font-semibold"
              >
                Solicitar información
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        id="instalaciones"
        className="bg-[var(--color-fondo)] py-24 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-semibold text-[var(--color-guinda)]">
                Nuestras instalaciones
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Espacios para aprender, convivir y crecer.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                Esta sección queda pensada para sustituir el bloque visual por
                fotografías reales del Colegio Miguel Hidalgo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {["Aulas", "Áreas deportivas", "Tecnología", "Convivencia"].map(
                (space) => (
                  <article
                    key={space}
                    className="flex min-h-40 items-end rounded-lg border border-[var(--color-linea)] bg-white p-5 shadow-sm"
                  >
                    <div>
                      <Building2
                        className="mb-4 h-7 w-7 text-[var(--color-guinda)]"
                        aria-hidden="true"
                      />
                      <h3 className="text-xl font-bold">{space}</h3>
                    </div>
                  </article>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section id="eventos" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold text-[var(--color-guinda)]">
                Eventos
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Comunidad en movimiento.
              </h2>
            </div>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-5 py-3 text-sm font-semibold transition hover:bg-[var(--color-hueso)]"
            >
              Ver Facebook
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-3">
            {eventCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-6"
              >
                <p className="text-sm font-semibold text-[var(--color-guinda)]">
                  {card.tag}
                </p>
                <h3 className="mt-4 text-2xl font-bold">{card.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="admisiones"
        className="bg-[var(--color-guinda)] py-24 text-white lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[var(--color-dorado-claro)]">
              Admisiones
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Una escuela cercana para crecer con propósito.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              El proceso de admisión queda enlazado al contacto institucional
              mientras se define el WhatsApp oficial y los requisitos por nivel.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <a
              href="mailto:contacto@cristoreyhfic.com.mx"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--color-guinda)]"
            >
              Escribir por correo
            </a>
            <a
              href="#calendario"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
            >
              Consultar calendario
            </a>
          </div>
        </div>
      </section>

      <section id="ubicacion" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-[0.85fr_1.15fr] lg:px-8">
          <div>
            <p className="text-sm font-semibold text-[var(--color-guinda)]">
              Ubicación
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Estamos en el centro de la comunidad.
            </h2>
            <div className="mt-7 space-y-4 text-[var(--color-muted)]">
              <p className="flex gap-3">
                <MapPin
                  className="mt-1 h-5 w-5 shrink-0 text-[var(--color-guinda)]"
                  aria-hidden="true"
                />
                Guerrero No. 215, Col. Centro, CP 37900
              </p>
              <p className="flex gap-3">
                <Mail
                  className="mt-1 h-5 w-5 shrink-0 text-[var(--color-guinda)]"
                  aria-hidden="true"
                />
                contacto@cristoreyhfic.com.mx
              </p>
              <p className="flex gap-3">
                <Phone
                  className="mt-1 h-5 w-5 shrink-0 text-[var(--color-guinda)]"
                  aria-hidden="true"
                />
                WhatsApp por definir
              </p>
            </div>
          </div>
          <div className="min-h-80 rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-6">
            <div className="flex h-full min-h-72 flex-col justify-between rounded-lg border border-dashed border-[var(--color-dorado)] bg-white p-6">
              <MapPin className="h-10 w-10 text-[var(--color-guinda)]" />
              <div>
                <h3 className="text-2xl font-bold">Mapa del colegio</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  Cuando confirmes ciudad/estado o coordenadas exactas, puedo
                  dejar listo el enlace directo a Google Maps.
                </p>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Guerrero%20215%20Col.%20Centro%20CP%2037900"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-[var(--color-guinda)] px-5 py-3 text-sm font-semibold text-white"
              >
                Abrir mapa
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contacto"
        className="border-t border-[var(--color-linea)] bg-[var(--color-tinta)] text-white"
      >
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-guinda)]">
                <GraduationCap className="h-6 w-6" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Colegio Miguel Hidalgo</p>
                <p className="text-sm text-white/60">HFIC</p>
              </div>
            </div>
            <p className="mt-5 text-sm leading-6 text-white/60">
              Educación integral con valores franciscanos para acompañar la
              vida académica y humana de cada estudiante.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">Menú</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/60">
              <a href="#quienes-somos" className="hover:text-white">
                Quiénes somos
              </a>
              <a href="#academico" className="hover:text-white">
                Académico
              </a>
              <a href="#eventos" className="hover:text-white">
                Eventos
              </a>
              <a href="#admisiones" className="hover:text-white">
                Admisiones
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Enlaces</h3>
            <div className="mt-4 grid gap-2 text-sm text-white/60">
              <a href="#calendario" className="hover:text-white">
                Calendario escolar
              </a>
              <a href="#instalaciones" className="hover:text-white">
                Nuestras instalaciones
              </a>
              <a
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Facebook
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold">Contacto</h3>
            <div className="mt-4 grid gap-3 text-sm text-white/60">
              <p>Guerrero No. 215, Col. Centro, CP 37900</p>
              <a
                href="mailto:contacto@cristoreyhfic.com.mx"
                className="hover:text-white"
              >
                contacto@cristoreyhfic.com.mx
              </a>
              <p>WhatsApp por definir</p>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
          © {new Date().getFullYear()} Colegio Miguel Hidalgo. Todos los
          derechos reservados.
        </div>
      </footer>
    </main>
  );
}
