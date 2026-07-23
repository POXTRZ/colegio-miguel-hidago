import { ArrowRight } from "lucide-react";
import {
  Button,
  Container,
  ManagedImage,
  Section,
  SectionHeader,
} from "@/components/ui";
import { currentFacilitiesPhotography } from "@/data/confirmed/media";

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

        <div className="grid gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:items-start lg:gap-20">
          <div>
            <ManagedImage
              asset={currentFacilitiesPhotography}
              ratio="portrait"
              sizes="(min-width: 1024px) 52vw, 100vw"
            />
          </div>

          <div className="lg:pt-12">
            <div className="border-t border-[var(--color-bordes)]">
              {facilities.map((facility, index) => (
                <div
                  key={facility}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-[var(--color-bordes)] py-4"
                >
                  <span className="font-display text-lg text-[var(--color-dorado-texto)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm leading-6 text-[var(--color-texto-secundario)]">
                    {facility}
                  </p>
                </div>
              ))}
            </div>
            <Button href="/instalaciones" variant="secondary" className="mt-8">
              Explorar instalaciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
