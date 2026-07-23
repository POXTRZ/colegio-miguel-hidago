import {
  ArrowRight,
  BookOpen,
  Church,
  HeartHandshake,
} from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  Button,
  Container,
  Eyebrow,
  ManagedImage,
  Section,
  SectionHeader,
} from "@/components/ui";
import {
  confirmedActivities,
  educationOffer,
  formationAreas,
} from "@/data/confirmed/education-offer";
import { facilityGroups } from "@/data/confirmed/facilities";
import { getHistoricalMedia } from "@/data/confirmed/media";

const formationIcons = [BookOpen, HeartHandshake, Church] as const;

export default function EducationPage() {
  const heroImage = getHistoricalMedia("alumnas-formacion");

  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]"
      >
        <section className="overflow-hidden border-b border-[var(--color-bordes)] bg-white pt-28">
          <Container size="2xl" className="grid gap-12 py-16 lg:grid-cols-[1fr_0.72fr] lg:items-center lg:gap-20 lg:py-16">
            <div className="lg:py-6">
              <Eyebrow>Oferta educativa</Eyebrow>
              <h1 className="mt-5 max-w-4xl text-5xl font-semibold leading-[1.02] text-[var(--color-azul-marino)] sm:text-6xl">
                Un acompañamiento formativo desde los primeros años hasta la
                preparación universitaria.
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-[var(--color-muted)]">
                Cuatro etapas enlazadas por una misma visión académica, humana y
                franciscana.
              </p>
            </div>
            <div className="relative lg:translate-y-10">
              {heroImage ? (
                <ManagedImage
                  asset={heroImage}
                  ratio="auto"
                  imageClassName="grayscale-[0.2]"
                  sizes="(min-width: 1024px) 36vw, 100vw"
                  priority
                />
              ) : null}
            </div>
          </Container>
        </section>

        <Section tone="white">
          <Container size="2xl">
            <SectionHeader
              eyebrow="Trayecto académico"
              title="Cada etapa tiene su propio ritmo."
              description="Los grados y semestres mostrados corresponden a la oferta confirmada del Colegio."
            />
            <div className="border-t border-[var(--color-bordes)]">
              {educationOffer.map((level, index) => (
                <article
                  id={level.id}
                  key={level.id}
                  className={`grid scroll-mt-28 gap-6 border-b border-[var(--color-bordes)] py-10 md:grid-cols-[7rem_0.7fr_1.3fr] md:items-start lg:py-14 ${
                    index % 2 ? "lg:ml-20" : ""
                  }`}
                >
                  <span
                    aria-hidden="true"
                    className="font-display text-5xl text-[var(--color-dorado-texto)]"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-[var(--color-guinda)]">
                      {level.duration}
                    </p>
                    <h2 className="mt-2 text-3xl font-semibold text-[var(--color-azul-marino)]">
                      {level.name}
                    </h2>
                  </div>
                  <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
                    {level.description}
                  </p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section tone="navy">
          <Container size="2xl">
            <SectionHeader
              eyebrow="Formación integral"
              title="Conocimiento, persona y fraternidad."
              tone="light"
            />
            <div className="grid border-t border-white/20 lg:grid-cols-3">
              {formationAreas.map((area, index) => {
                const Icon = formationIcons[index];
                return (
                  <article
                    key={area.title}
                    className="border-b border-white/20 py-8 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0 lg:last:pr-0"
                  >
                    <Icon
                      className="h-7 w-7 text-[var(--color-dorado-claro)]"
                      aria-hidden="true"
                    />
                    <h3 className="mt-5 text-xl font-bold">{area.title}</h3>
                    <p className="mt-4 leading-7 text-white/72">
                      {area.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="2xl" className="grid gap-14 lg:grid-cols-2 lg:gap-24">
            <div>
              <SectionHeader
                eyebrow="Actividades confirmadas"
                title="Aprender también ocurre al participar."
                className="mb-8"
              />
              <ul className="grid grid-cols-2 gap-x-8 border-t border-[var(--color-bordes)]">
                {confirmedActivities.map((activity) => (
                  <li
                    key={activity}
                    className="border-b border-[var(--color-bordes)] py-4 text-sm font-bold"
                  >
                    {activity}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <SectionHeader
                eyebrow="Instalaciones"
                title="Espacios que apoyan la formación."
                className="mb-8"
              />
              <p className="text-lg leading-8 text-[var(--color-muted)]">
                Aulas equipadas, canchas, cómputo, laboratorio, salón de usos
                múltiples, capilla y un área propia para Preescolar.
              </p>
              <p className="mt-5 text-sm text-[var(--color-muted)]">
                {facilityGroups.length} grupos de espacios confirmados.
              </p>
              <Button href="/instalaciones" variant="secondary" className="mt-8">
                Conocer las instalaciones
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </Container>
        </Section>

        <Section tone="burgundy" spacing="md">
          <Container className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold text-white/72">
                Ciclo escolar 2026-2027
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Consulta fechas, requisitos y costos confirmados.
              </h2>
            </div>
            <Button href="/inscripciones" variant="light">
              Ver inscripciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
