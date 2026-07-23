import { ArrowRight } from "lucide-react";
import {
  Button,
  Container,
  Section,
  SectionHeader,
} from "@/components/ui";
import { levels } from "@/data/confirmed/education-levels";

const levelPeriods = ["3 grados", "6 grados", "3 grados", "6 semestres"] as const;

export default function EducationalLevelsPreview() {
  return (
    <Section id="academico">
      <Container size="2xl">
        <div className="grid gap-14 lg:grid-cols-[0.72fr_1.28fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeader
              eyebrow="Oferta educativa"
              title="Un recorrido formativo completo."
              description="Cada nivel acompaña una etapa distinta con formación académica, humana y espiritual."
              className="mb-0"
            />
          </div>

          <div className="border-t border-[var(--color-bordes)]">
            {levels.map((level, index) => (
              <article
                key={level.name}
                className={`grid gap-5 border-b border-[var(--color-bordes)] py-8 sm:grid-cols-[4rem_1fr_auto] sm:items-start ${
                  index % 2 === 1 ? "lg:ml-12" : ""
                }`}
              >
                <p
                  className="font-display text-4xl text-[var(--color-dorado-texto)]"
                  aria-hidden="true"
                >
                  0{index + 1}
                </p>
                <div>
                  <p className="text-xs font-bold uppercase tracking-normal text-[var(--color-guinda)]">
                    {levelPeriods[index]}
                  </p>
                  <h3 className="mt-2 text-2xl font-bold text-[var(--color-azul-marino)]">
                    {level.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-[var(--color-texto-secundario)]">
                    {level.detail}
                  </p>
                </div>
                <Button
                  href={`/oferta-educativa#${level.name.toLowerCase()}`}
                  variant="secondary"
                  size="sm"
                  className="sm:mt-5"
                  aria-label={`Consultar ingreso a ${level.name}`}
                >
                  Consultar ingreso
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
