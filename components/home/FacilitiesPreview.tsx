import { ArrowRight } from "lucide-react";
import {
  Button,
  Container,
  ManagedImage,
  Section,
  SectionHeader,
} from "@/components/ui";
import { homeFacilitiesPhotography } from "@/data/confirmed/media";

const facilities = [
  "Aulas equipadas con proyector, bocinas y computadora",
  "Dos canchas techadas",
  "Una cancha con pasto sintético",
  "Salón de cómputo con 40 equipos",
  "Laboratorio de química",
  "Salón de usos múltiples",
  "Capilla",
  "Espacio exclusivo de Preescolar",
] as const;

export default function FacilitiesPreview() {
  return (
    <Section id="instalaciones">
      <Container size="2xl">
        <SectionHeader
          eyebrow="Espacios para aprender"
          title="Instalaciones pensadas para estudiar, convivir y crecer."
          description="La infraestructura acompaña las actividades académicas, deportivas, tecnológicas y pastorales de cada sección."
        />

        <div className="grid min-w-0 gap-10">
          <div className="editorial-frame z-0 min-w-0">
            <div className="grid min-w-0 gap-4 lg:grid-cols-[1.45fr_0.55fr]">
              <ManagedImage
                asset={homeFacilitiesPhotography[0]}
                ratio="wide"
                showCaption={false}
                sizes="(min-width: 1024px) 64vw, 100vw"
              />
              <div className="grid min-w-0 grid-cols-2 gap-4 lg:grid-cols-1">
                {homeFacilitiesPhotography.slice(1).map((asset) => (
                  <ManagedImage
                    key={asset.id}
                    asset={asset}
                    ratio="video"
                    showCaption={false}
                    sizes="(min-width: 1024px) 26vw, 50vw"
                  />
                ))}
              </div>
            </div>
            <p className="mt-3 border-l-2 border-[var(--color-dorado)] pl-4 text-xs leading-5 text-[var(--color-muted)]">
              Espacios generales e instalaciones actuales del Colegio.
            </p>
          </div>

          <div className="grid min-w-0 gap-8 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
            <div className="grid min-w-0 border-t border-[var(--color-bordes)] md:grid-cols-2">
              {facilities.map((facility, index) => (
                <div
                  key={facility}
                  className="editorial-row grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] gap-4 border-b border-[var(--color-bordes)] py-4 md:odd:border-r md:odd:pr-6 md:even:pl-6"
                >
                  <span className="font-display text-lg text-[var(--color-dorado-texto)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="min-w-0 break-words text-sm leading-6 text-[var(--color-texto-secundario)]">
                    {facility}
                  </p>
                </div>
              ))}
            </div>
            <Button
              href="/instalaciones"
              variant="secondary"
              className="w-full sm:w-fit"
            >
              Explorar instalaciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
