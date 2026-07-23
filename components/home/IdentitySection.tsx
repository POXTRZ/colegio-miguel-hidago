import { ArrowRight } from "lucide-react";
import {
  Button,
  Container,
  Eyebrow,
  ResponsiveImage,
  Section,
} from "@/components/ui";

export default function IdentitySection() {
  return (
    <Section tone="white">
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

          <div className="lg:pt-20">
            <ResponsiveImage
              src="/images/home/alumnas-formacion-archivo.jpeg"
              alt="Generaciones de alumnas formadas en el Colegio Miguel Hidalgo"
              width={1487}
              height={1011}
              ratio="portrait"
              className="grayscale"
              sizes="(min-width: 1024px) 36vw, 100vw"
            />
            <p className="mt-3 text-xs leading-5 text-[var(--color-texto-secundario)]">
              Archivo histórico. La imagen documenta generaciones escolares;
              fecha y personas por identificar.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
