import { ArrowRight } from "lucide-react";
import {
  Button,
  Container,
  Eyebrow,
  ManagedImage,
  Section,
} from "@/components/ui";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function HistoryPreview() {
  const image = getHistoricalMedia("plantel-historico");

  return (
    <Section tone="white">
      <Container size="2xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            {image ? (
              <ManagedImage
                asset={image}
                ratio="auto"
                imageClassName="grayscale-[0.2]"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ) : null}
          </div>

          <div className="lg:pl-8">
            <Eyebrow>Historia y memoria</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-azul-marino)] sm:text-5xl">
              Generaciones que han dado forma a una comunidad educativa.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-texto-secundario)]">
              Fotografías, documentos y testimonios conservan la memoria de
              generaciones que han dado forma al colegio. La cronología
              definitiva continúa en revisión con las fuentes institucionales.
            </p>
            <div className="mt-8 h-px w-24 bg-[var(--color-dorado-decorativo)]" />
            <Button
              href="/historia"
              variant="secondary"
              className="mt-8"
            >
              Explorar la historia
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </Container>
    </Section>
  );
}
