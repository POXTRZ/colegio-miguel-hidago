import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Section from "@/components/ui/Section";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function HistorySummary() {
  const image = getHistoricalMedia("comunidad-escolar-religiosas");

  return (
    <Section id="presentacion">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            {image ? (
              <>
                <ResponsiveImage
                  alt={image.alt}
                  src={image.src}
                  width={image.width}
                  height={image.height}
                  ratio="portrait"
                  className="grayscale-[0.22]"
                  sizes="(min-width: 1024px) 520px, 90vw"
                />
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {image.caption}
                </p>
              </>
            ) : null}
          </div>

          <div>
            <Eyebrow>Presentación</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Educación integral con raíces en la vida de la comunidad.
            </h2>
            <div className="mt-7 grid gap-5 text-lg leading-8 text-[var(--color-muted)]">
              <p>
                El Colegio Miguel Hidalgo forma parte de la tradición educativa
                de las Hermanas Franciscanas de la Inmaculada Concepción.
              </p>
              <p>
                Su propuesta acompaña a cada estudiante en las dimensiones
                espiritual, humana y académica, con una mirada atenta a su
                realidad y a su responsabilidad con los demás.
              </p>
            </div>
            <Button className="mt-8" href="/historia" variant="secondary">
              Explorar la historia
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
