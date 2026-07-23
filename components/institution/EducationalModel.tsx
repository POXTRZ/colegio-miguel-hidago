import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { educationalPrinciples } from "@/data/confirmed/institution";

export default function EducationalModel() {
  return (
    <Section id="modelo-educativo">
      <Container>
        <SectionHeader
          eyebrow="Modelo educativo"
          title="Principios para acompañar a cada persona."
          description="Una síntesis del Ideario HFIC que orienta la enseñanza, la convivencia y la relación con las familias."
        />

        <ol className="grid border-t border-[var(--color-linea)] md:grid-cols-2 lg:grid-cols-3">
          {educationalPrinciples.map((principle, index) => (
            <li
              key={principle.id}
              className="border-b border-[var(--color-linea)] py-7 md:px-6 md:first:pl-0 lg:[&:nth-child(3n+1)]:pl-0 lg:[&:nth-child(3n)]:pr-0"
            >
              <span className="font-display text-2xl text-[var(--color-guinda)]">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-bold">{principle.title}</h3>
              <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                {principle.description}
              </p>
            </li>
          ))}
        </ol>
      </Container>
    </Section>
  );
}
