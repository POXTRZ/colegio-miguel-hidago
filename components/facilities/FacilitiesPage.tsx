import { CheckCircle2 } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  Button,
  Container,
  Eyebrow,
  Gallery,
  ManagedImage,
  Section,
} from "@/components/ui";
import { facilityGroups } from "@/data/confirmed/facilities";
import {
  currentChapelPhotography,
  currentFacilitiesGallery,
  currentFacilitiesPhotography,
  currentMultipurposeRoomPhotography,
} from "@/data/confirmed/media";

export default function FacilitiesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)]">
        <section className="overflow-hidden border-b border-[var(--color-bordes)] bg-white pt-[var(--internal-hero-offset)]">
          <Container
            size="2xl"
            className="grid gap-9 py-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-14 lg:py-14 xl:gap-16"
          >
            <div className="relative z-10">
              <Eyebrow>Instalaciones</Eyebrow>
              <h1 className="mt-4 max-w-2xl text-4xl font-semibold leading-[1.04] text-[var(--color-azul-marino)] sm:text-5xl lg:text-[3.25rem] xl:text-6xl">
                Espacios para aprender, convivir y crecer.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-[var(--color-muted)] sm:text-lg sm:leading-8">
                Infraestructura confirmada para el trabajo académico,
                deportivo, tecnológico, pastoral y comunitario.
              </p>
            </div>
            <div className="relative bg-[var(--color-crema)] p-2 sm:p-3">
              <ManagedImage
                asset={currentFacilitiesPhotography}
                priority
                ratio="auto"
                showCaption={false}
                imageClassName="aspect-[4/3] object-cover object-[center_58%] md:aspect-[2/1] lg:aspect-[4/3]"
                sizes="(min-width: 768px) 62vw, 100vw"
              />
              <p className="mt-3 border-l-2 border-[var(--color-dorado)] px-3 text-xs leading-5 text-[var(--color-muted)]">
                {currentFacilitiesPhotography.caption}
              </p>
            </div>
          </Container>
        </section>

        <Section tone="white" spacing="md">
          <Container size="2xl">
            <div className="grid gap-6 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
              <div>
                <Eyebrow>Inventario de espacios</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                  Una infraestructura con propósitos distintos.
                </h2>
              </div>
              <p className="max-w-2xl text-base leading-7 text-[var(--color-muted)] lg:justify-self-end">
                El inventario describe instalaciones vigentes confirmadas por
                el Colegio. Las aulas se presentan como espacios generales, sin
                atribuirlas a un nivel educativo específico.
              </p>
            </div>

            <div className="grid border-b border-[var(--color-bordes)] sm:grid-cols-2 lg:grid-cols-4">
              {facilityGroups.map((facility, index) => (
                <article
                  key={facility.id}
                  className="border-t border-[var(--color-bordes)] py-7 sm:px-6 sm:odd:border-r lg:min-h-64 lg:border-r lg:px-7 lg:last:border-r-0"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <span className="font-display text-3xl text-[var(--color-dorado-texto)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] font-bold uppercase text-[var(--color-guinda)]">
                      {facility.context}
                    </span>
                  </div>
                  <h3 className="mt-7 text-xl font-bold text-[var(--color-azul-marino)] sm:text-2xl">
                    {facility.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                    {facility.description}
                  </p>
                </article>
              ))}
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-12">
              <article className="lg:col-span-5">
                <ManagedImage
                  asset={currentMultipurposeRoomPhotography}
                  ratio="video"
                  sizes="(min-width: 1024px) 42vw, (min-width: 768px) 50vw, 100vw"
                />
              </article>
              <article className="lg:col-span-4">
                <ManagedImage
                  asset={currentChapelPhotography}
                  ratio="video"
                  imageClassName="object-cover object-center"
                  sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
                />
              </article>
              <article className="md:col-span-2 lg:col-span-3">
                <div
                  className="relative flex aspect-[16/9] min-w-0 flex-col justify-between overflow-hidden bg-[var(--color-azul-marino)] p-6 text-white lg:aspect-auto lg:min-h-[18rem]"
                >
                  <span
                    className="font-display text-5xl text-[var(--color-dorado-claro)]/65"
                    aria-hidden="true"
                  >
                    05
                  </span>
                  <div>
                    <span className="text-xs font-bold uppercase text-[var(--color-dorado-claro)]">
                      Imagen pendiente
                    </span>
                    <h3 className="mt-2 font-display text-2xl font-semibold">
                      Laboratorio
                    </h3>
                    <p className="mt-3 text-sm leading-6 text-white/68">
                      Imagen pendiente de documentación.
                    </p>
                  </div>
                  <span
                    className="absolute inset-y-8 right-8 w-px rotate-12 bg-[var(--color-dorado)]/50"
                    aria-hidden="true"
                  />
                </div>
              </article>
            </div>
          </Container>
        </Section>

        <Section spacing="md">
          <Container size="2xl">
            <div className="grid gap-6 pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
              <div>
                <Eyebrow>Registro fotográfico actual</Eyebrow>
                <h2 className="mt-4 max-w-2xl text-3xl font-semibold leading-tight sm:text-4xl">
                  El plantel, visto desde sus espacios cotidianos.
                </h2>
              </div>
              <div className="max-w-2xl lg:justify-self-end">
                <p className="text-base leading-7 text-[var(--color-muted)]">
                  Fotografías actuales de patios, aulas, canchas, sala de
                  cómputo, accesos y áreas generales.
                </p>
                <p className="mt-3 flex gap-3 text-sm leading-6 text-[var(--color-muted)]">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 shrink-0 text-[var(--color-exito)]"
                    aria-hidden="true"
                  />
                  Las aulas se muestran sin atribución de nivel educativo.
                </p>
              </div>
            </div>

            <Gallery
              items={[...currentFacilitiesGallery]}
              label="Galería de instalaciones actuales"
              variant="editorial"
            />
          </Container>
        </Section>

        <Section tone="burgundy" spacing="md">
          <Container className="flex flex-col items-start justify-between gap-7 md:flex-row md:items-center">
            <div>
              <p className="text-sm font-bold text-white/72">
                Visita y contacto
              </p>
              <h2 className="mt-2 text-3xl font-semibold">
                Consulta directamente con la oficina.
              </h2>
            </div>
            <Button href="/contacto" variant="light">
              Ver ubicación y horario
            </Button>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
