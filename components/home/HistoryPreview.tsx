import { ArrowRight } from "lucide-react";
import {
  Button,
  Container,
  Eyebrow,
  ResponsiveImage,
  Section,
} from "@/components/ui";

export default function HistoryPreview() {
  return (
    <Section tone="white">
      <Container size="2xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
          <div>
            <ResponsiveImage
              src="/images/home/plantel-historico-san-luis-de-la-paz.jpeg"
              alt="Documento fotográfico histórico del plantel en San Luis de la Paz"
              width={1600}
              height={1270}
              ratio="portrait"
              className="object-contain p-2"
              containerClassName="border border-[var(--color-bordes)] bg-[var(--color-crema)]"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
            <p className="mt-3 text-xs leading-5 text-[var(--color-texto-secundario)]">
              Vista histórica del plantel en San Luis de la Paz. Archivo
              institucional; fecha por confirmar.
            </p>
          </div>

          <div className="lg:pl-8">
            <Eyebrow>Historia y memoria</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-azul-marino)] sm:text-5xl">
              Más de un siglo acompañando a la comunidad educativa de San Luis
              de la Paz.
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
