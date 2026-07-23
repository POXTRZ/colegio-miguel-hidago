import { Camera, CheckCircle2 } from "lucide-react";
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
import { facilityGroups } from "@/data/confirmed/facilities";
import {
  currentFacilitiesPhotography,
  getHistoricalMedia,
} from "@/data/confirmed/media";

export default function FacilitiesPage() {
  const historicalBuilding = getHistoricalMedia("plantel-historico");

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)]">
        <section className="border-b border-[var(--color-bordes)] pt-28">
          <Container size="2xl" className="grid gap-12 py-16 lg:grid-cols-[1fr_0.8fr] lg:items-end lg:py-24">
            <div>
              <Eyebrow>Instalaciones</Eyebrow>
              <h1 className="mt-5 max-w-3xl font-semibold text-[var(--color-azul-marino)]">
                Espacios para aprender, convivir y crecer.
              </h1>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[var(--color-muted)]">
              Infraestructura confirmada para el trabajo académico, deportivo,
              tecnológico, pastoral y comunitario.
            </p>
          </Container>
        </section>

        <Section tone="white">
          <Container size="2xl">
            <SectionHeader
              eyebrow="Espacios actuales"
              title="Una infraestructura con propósitos distintos."
              description="Este inventario describe instalaciones vigentes confirmadas por el Colegio."
            />
            <div className="grid border-t border-[var(--color-bordes)] md:grid-cols-2">
              {facilityGroups.map((facility, index) => (
                <article
                  key={facility.id}
                  className={`grid grid-cols-[2.5rem_1fr] gap-5 border-b border-[var(--color-bordes)] py-7 md:px-8 ${
                    index % 2 === 0 ? "md:border-r md:pl-0" : "md:pr-0"
                  }`}
                >
                  <span className="font-display text-2xl text-[var(--color-dorado-texto)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="text-xs font-bold uppercase text-[var(--color-guinda)]">
                      {facility.context}
                    </p>
                    <h2 className="mt-2 text-xl font-bold">{facility.title}</h2>
                    <p className="mt-3 leading-7 text-[var(--color-muted)]">
                      {facility.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="2xl" className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-center lg:gap-20">
            <div>
              <Camera
                className="h-8 w-8 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <Eyebrow className="mt-6">Registro fotográfico actual</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold">
                Fotografías actuales pendientes.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                El inventario de espacios está confirmado; el material
                fotográfico contemporáneo aún no ha sido entregado para
                publicación. Esta sección evita presentar imágenes históricas
                como evidencia del estado actual.
              </p>
              <ul className="mt-7 grid gap-3 text-sm">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-exito)]" aria-hidden="true" />
                  Información de espacios confirmada.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-exito)]" aria-hidden="true" />
                  Fotografías actuales por documentar.
                </li>
              </ul>
            </div>

            <div className="grid gap-8">
              <ManagedImage
                asset={currentFacilitiesPhotography}
                ratio="wide"
                sizes="(min-width: 1024px) 55vw, 100vw"
              />
              {historicalBuilding ? (
                <div className="bg-[var(--color-azul-marino)] p-5 sm:p-8">
                  <ManagedImage
                    asset={historicalBuilding}
                    ratio="wide"
                    imageClassName="grayscale"
                    captionTone="light"
                    sizes="(min-width: 1024px) 55vw, 100vw"
                  />
                </div>
              ) : null}
            </div>
          </Container>
        </Section>

        <Section tone="burgundy" spacing="md">
          <Container className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold text-white/72">Visita y contacto</p>
              <h2 className="mt-2 text-3xl font-semibold">
                Consulta directamente con la oficina.
              </h2>
            </div>
            <Button href="/contacto" variant="light">Ver ubicación y horario</Button>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
