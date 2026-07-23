import { ArrowRight } from "lucide-react";
import {
  Button,
  Container,
  Eyebrow,
  ManagedImage,
  Section,
} from "@/components/ui";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function IdentitySection() {
  const image = getHistoricalMedia("alumnas-formacion");

  return (
    <Section>
      <Container size="2xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-20">
          <div>
            <Eyebrow>Una comunidad con identidad</Eyebrow>
            <p className="font-display mt-6 max-w-4xl text-4xl leading-tight text-[var(--color-azul-marino)] sm:text-5xl">
              Educar es reconocer la dignidad de cada persona y acompañarla a
              descubrir cómo puede servir, crear y transformar su entorno.
            </p>

            <div className="mt-10 grid gap-8 border-t border-[var(--color-bordes)] pt-8 sm:grid-cols-2">
              <p className="text-base leading-7 text-[var(--color-texto-secundario)]">
                El Colegio Miguel Hidalgo forma parte de la obra educativa de
                las Hermanas Franciscanas de la Inmaculada Concepción. Su
                propuesta integra las dimensiones humana, espiritual y
                académica.
              </p>
              <div>
                <p className="text-sm font-bold text-[var(--color-guinda)]">
                  Trayecto educativo
                </p>
                <p className="mt-3 text-base leading-7 text-[var(--color-texto-secundario)]">
                  Preescolar, Primaria, Secundaria y Preparatoria en una misma
                  comunidad formativa.
                </p>
                <Button
                  href="/quienes-somos"
                  variant="secondary"
                  size="sm"
                  className="mt-6"
                >
                  Conocer nuestra identidad
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>

          <div className="editorial-frame z-0 lg:mb-10 lg:mt-20">
            {image ? (
              <ManagedImage
                asset={image}
                ratio="portrait"
                imageClassName="grayscale"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
