import {
  ArrowRight,
  BookOpen,
  Church,
  HeartHandshake,
} from "lucide-react";
import EducationLevelsShowcase from "@/components/education/EducationLevelsShowcase";
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
  formationAreas,
} from "@/data/confirmed/education-offer";
import { facilityGroups } from "@/data/confirmed/facilities";
import {
  currentChapelPhotography,
  currentHeroPhotography,
  currentMultipurposeRoomPhotography,
  currentPrimaryEntrancePhotography,
} from "@/data/confirmed/media";

const formationIcons = [BookOpen, HeartHandshake, Church] as const;

export default function EducationPage() {
  const heroImage = currentHeroPhotography;

  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]"
      >
        <section className="relative overflow-hidden bg-[var(--color-azul-marino)] pt-[var(--internal-hero-offset)] text-white">
          <span
            className="absolute inset-y-0 left-[7%] hidden w-px bg-white/10 lg:block"
            aria-hidden="true"
          />
          <Container
            size="2xl"
            className="grid gap-8 py-10 md:py-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-12 lg:py-14 xl:gap-20 xl:py-16"
          >
            <div className="relative z-10 max-w-2xl lg:py-8">
              <Eyebrow className="text-[var(--color-dorado-claro)]">
                Oferta educativa
              </Eyebrow>
              <h1 className="mt-5 text-4xl font-semibold leading-[1.04] text-white sm:text-5xl lg:text-[3.4rem] xl:text-[4.25rem]">
                Una trayectoria educativa de Preescolar a Preparatoria.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                Un acompañamiento formativo desde los primeros años hasta la
                preparación universitaria, con una misma visión académica,
                humana y franciscana.
              </p>
              <div
                className="mt-8 h-px w-20 bg-[var(--color-dorado)]"
                aria-hidden="true"
              />
            </div>
            <div className="relative z-0 lg:py-3">
              <div
                className="absolute -bottom-4 -left-4 hidden h-24 w-24 border-b border-l border-[var(--color-dorado)]/70 sm:block"
                aria-hidden="true"
              />
              <div className="bg-[var(--color-crema)] p-2 sm:p-3">
                <ManagedImage
                  asset={heroImage}
                  ratio="auto"
                  showCaption={false}
                  imageClassName="aspect-[4/3] object-cover object-[50%_54%] md:aspect-[2/1] lg:aspect-[4/3]"
                  sizes="(min-width: 1280px) 54vw, (min-width: 1024px) 52vw, 100vw"
                  priority
                />
              </div>
              <p className="mt-4 max-w-lg border-l-2 border-[var(--color-dorado)] pl-4 text-xs leading-5 text-white/68">
                {heroImage.caption}
              </p>
            </div>
          </Container>
        </section>

        <Section tone="white" spacing="md">
          <Container size="2xl">
            <div className="grid gap-9 border-b border-[var(--color-bordes)] pb-10 md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-8 lg:gap-16 xl:gap-20">
              <div className="max-w-3xl">
                <Eyebrow>Trayecto académico</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-4xl font-semibold leading-tight text-[var(--color-azul-marino)] sm:text-5xl">
                  Cada etapa tiene su propio ritmo.
                </h2>
                <p className="mt-6 max-w-2xl text-base leading-7 text-[var(--color-muted)] lg:text-lg lg:leading-8">
                  Los grados y semestres mostrados corresponden a la oferta
                  confirmada del Colegio. Cada nivel conserva una identidad
                  propia dentro del mismo trayecto formativo.
                </p>
              </div>
              <div className="relative bg-[var(--color-crema)] p-2 sm:p-3">
                <ManagedImage
                  asset={currentPrimaryEntrancePhotography}
                  ratio="video"
                  showCaption={false}
                  imageClassName="object-cover object-center"
                  sizes="(min-width: 1024px) 42vw, 100vw"
                />
                <p className="mt-3 border-l-2 border-[var(--color-dorado)] px-3 text-xs leading-5 text-[var(--color-muted)]">
                  {currentPrimaryEntrancePhotography.caption}
                </p>
              </div>
            </div>
            <div className="mt-10 lg:mt-14">
              <EducationLevelsShowcase />
            </div>
          </Container>
        </Section>

        <Section tone="navy" spacing="md">
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

        <Section tone="white" spacing="md">
          <Container size="2xl" className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
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
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <ManagedImage
                  asset={currentMultipurposeRoomPhotography}
                  ratio="video"
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                />
                <ManagedImage
                  asset={currentChapelPhotography}
                  ratio="wide"
                  sizes="(min-width: 1024px) 28vw, (min-width: 640px) 50vw, 100vw"
                />
              </div>
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
