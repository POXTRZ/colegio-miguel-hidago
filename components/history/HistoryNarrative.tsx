import { MapPin } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Section from "@/components/ui/Section";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function HistoryNarrative() {
  const building = getHistoricalMedia("plantel-historico");

  return (
    <Section id="resena">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-32">
            <Eyebrow>Memoria institucional</Eyebrow>
            <h2 className="mt-4 max-w-xl text-4xl font-bold leading-tight lg:text-5xl">
              Una presencia educativa tejida con San Luis de la Paz.
            </h2>
            <div className="mt-8 flex items-center gap-3 border-t border-[var(--color-linea)] pt-5 text-sm font-bold text-[var(--color-guinda)]">
              <MapPin className="h-5 w-5" aria-hidden="true" />
              Guerrero 215, Centro
            </div>
          </div>

          <div>
            <div className="grid gap-6 text-lg leading-9 text-[var(--color-muted)]">
              <p className="font-display text-2xl leading-9 text-[var(--color-tinta)] md:text-3xl md:leading-10">
                La historia del Colegio se reconoce en las generaciones que han
                aprendido, convivido y crecido en comunidad.
              </p>
              <p>
                En el centro de San Luis de la Paz, el Colegio Miguel Hidalgo ha
                acompañado a niñas, niños y jóvenes mediante una formación
                académica, humana y espiritual vinculada con la vida de sus
                familias.
              </p>
              <p>
                Los documentos disponibles confirman distintos momentos de
                incorporación educativa. La fecha de origen institucional sigue
                en revisión archivística y por ello no se presenta aquí como un
                dato definitivo.
              </p>
            </div>

            {building ? (
              <div className="mt-10">
                <ResponsiveImage
                  alt={building.alt}
                  src={building.src}
                  width={building.width}
                  height={building.height}
                  ratio="wide"
                  className="grayscale-[0.2]"
                  containerClassName="rounded-none"
                />
                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--color-muted)]">
                  {building.caption}
                </p>
              </div>
            ) : null}
          </div>
        </div>
      </Container>
    </Section>
  );
}
