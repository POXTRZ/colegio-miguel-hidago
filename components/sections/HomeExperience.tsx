import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Building2,
  CalendarDays,
  Cpu,
  Dumbbell,
  HeartHandshake,
  Mail,
  MapPin,
  Shield,
  Sparkles,
} from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  contactInfo,
  differentiators,
  levels,
  schoolMotto,
} from "@/data/site";

const featureIcons = [Sparkles, HeartHandshake, Dumbbell, Cpu];

export default function HomeExperience() {
  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <SiteHeader />

      <section className="relative overflow-hidden pt-28">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fffdf8_0%,#f4efe4_48%,#e8eeeb_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(251,250,246,0),var(--color-fondo))]" />

        <div className="relative mx-auto grid min-h-[84vh] max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-[var(--color-linea)] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--color-guinda)] shadow-sm">
              {schoolMotto}
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-[var(--color-tinta)] sm:text-6xl lg:text-7xl">
              Educación integral con raíz franciscana.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Desde 1907, el Colegio Miguel Hidalgo acompaña a la niñez y
              juventud ludovicense con formación académica, valores humanos y
              sentido de comunidad.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/quienes-somos"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-guinda)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(125,23,52,0.24)] transition hover:bg-[var(--color-guinda-oscuro)]"
              >
                Conocer la institución
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/calendario"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-6 py-3 text-sm font-bold text-[var(--color-tinta)] shadow-sm transition hover:bg-[var(--color-hueso)]"
              >
                Ver calendario
                <CalendarDays className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -left-6 top-8 h-36 w-36 rounded-full border border-[var(--color-dorado)] bg-white/40" />
            <div className="absolute -right-4 bottom-8 h-40 w-28 rounded-full bg-[var(--color-salvia)]/18" />
            <div className="relative overflow-hidden rounded-lg border border-white/80 bg-white shadow-[0_28px_90px_rgba(58,45,32,0.16)]">
              <div className="grid min-h-[520px] grid-rows-[1fr_auto]">
                <div className="relative bg-[linear-gradient(145deg,#ffffff_0%,#f2eadc_52%,#e8efed_100%)] p-8">
                  <div className="absolute right-0 top-0 h-full w-28 bg-[var(--color-guinda)]" />
                  <div className="relative flex h-full flex-col justify-between">
                    <div className="flex items-start gap-5 rounded-lg border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur">
                      <Image
                        src="/cmh-escudo.gif"
                        alt="Escudo del Colegio Miguel Hidalgo"
                        width={396}
                        height={508}
                        unoptimized
                        className="h-36 w-auto object-contain"
                      />
                      <div>
                        <p className="text-sm font-bold text-[var(--color-guinda)]">
                          Colegio Miguel Hidalgo
                        </p>
                        <p className="mt-2 text-2xl font-bold leading-tight">
                          Una comunidad que forma para servir.
                        </p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3">
                      {[
                        ["1907", "Trayectoria"],
                        ["HFIC", "Identidad"],
                        ["SEG", "Validez"],
                      ].map(([value, label]) => (
                        <div
                          key={value}
                          className="rounded-lg border border-white/80 bg-white/90 p-4 text-center shadow-sm"
                        >
                          <p className="text-2xl font-black text-[var(--color-guinda)]">
                            {value}
                          </p>
                          <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                            {label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="border-t border-[var(--color-linea)] bg-[var(--color-tinta)] p-6 text-white">
                  <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
                    Lema institucional
                  </p>
                  <p className="mt-2 text-2xl font-bold leading-tight">
                    {schoolMotto}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[var(--color-linea)] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-8 lg:grid-cols-3 lg:px-8">
          <div>
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Dirección
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {contactInfo.address}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Contacto
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              {contactInfo.email}
            </p>
          </div>
          <div>
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Identidad
            </p>
            <p className="mt-1 text-sm text-[var(--color-muted)]">
              Hermanas Franciscanas de la Inmaculada Concepción
            </p>
          </div>
        </div>
      </section>

      <section id="academico" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Propuesta educativa
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Lo esencial, ordenado para familias reales.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                El sitio ahora prioriza rutas claras: institución, calendario,
                admisiones y contacto. Menos ruido, más decisiones.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {differentiators.map((item, index) => {
                const Icon = featureIcons[index];
                return (
                  <article
                    key={item.title}
                    className="group rounded-lg border border-[var(--color-linea)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(58,45,32,0.1)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-hueso)] text-[var(--color-guinda)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Niveles escolares
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Un recorrido formativo completo.
              </h2>
            </div>
            <Link
              href="/quienes-somos#filosofia"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-5 py-3 text-sm font-bold transition hover:bg-[var(--color-hueso)]"
            >
              Ver filosofía
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
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

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <Link
            href="/quienes-somos"
            className="group min-h-80 rounded-lg border border-[var(--color-linea)] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(58,45,32,0.12)]"
          >
            <Shield className="h-10 w-10 text-[var(--color-guinda)]" />
            <p className="mt-10 text-sm font-bold text-[var(--color-guinda)]">
              Quiénes somos
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Historia, misión, valores, himno y organigrama.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
              Una vista editorial para conocer la identidad del colegio y su
              pertenencia al carisma HFIC.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-guinda)]">
              Abrir página
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>

          <Link
            href="/calendario"
            className="group min-h-80 rounded-lg border border-[var(--color-linea)] bg-[var(--color-guinda)] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(125,23,52,0.2)]"
          >
            <CalendarDays className="h-10 w-10 text-[var(--color-dorado-claro)]" />
            <p className="mt-10 text-sm font-bold text-[var(--color-dorado-claro)]">
              Calendario y eventos
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight">
              Vista mensual, semanal, filtros y detalles.
            </h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
              Un calendario interactivo para familias, alumnos y personal del
              colegio.
            </p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">
              Explorar eventos
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </section>

      <section id="admisiones" className="bg-[var(--color-tinta)] py-24 text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
          <div>
            <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
              Admisiones
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Una escuela cercana para crecer con propósito.
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
              Para el ciclo escolar 2025-2026, el colegio conserva su
              compromiso de ofrecer una educación integral con personal
              capacitado en cada sección.
            </p>
          </div>
          <div className="grid gap-3">
            <a
              href={`mailto:${contactInfo.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-guinda)]"
            >
              Escribir por correo
              <Mail className="h-4 w-4" aria-hidden="true" />
            </a>
            <a
              href={contactInfo.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white"
            >
              Ver ubicación
              <MapPin className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section id="instalaciones" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Nuestras instalaciones
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Espacios para aprender, convivir y crecer.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                El layout queda listo para reemplazar estos bloques por
                fotografías reales del Colegio Miguel Hidalgo.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {["Aulas", "Áreas deportivas", "Tecnología", "Convivencia"].map(
                (space) => (
                  <article
                    key={space}
                    className="flex min-h-40 items-end rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-5"
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

      <SiteFooter />
    </main>
  );
}
