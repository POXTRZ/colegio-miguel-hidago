import { ArrowRight } from "lucide-react";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";

export default function HistoryContinuity() {
  return (
    <Section>
      <Container>
        <div className="grid gap-8 border-y border-[var(--color-linea)] py-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <Eyebrow>Continuidad</Eyebrow>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              La historia continúa en cada comunidad que aprende.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              Hoy el Colegio articula Preescolar, Primaria, Secundaria y
              Preparatoria dentro de una misma vocación formativa.
            </p>
          </div>
          <Button href="/quienes-somos" variant="secondary">
            Conocer nuestra identidad
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>
      </Container>
    </Section>
  );
}
