import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  organizationGroups,
  organizationSupport,
} from "@/data/confirmed/institution";

export default function OrganizationChart() {
  return (
    <Section id="organigrama" tone="white">
      <Container>
        <SectionHeader
          eyebrow="Organización"
          title="Una estructura al servicio de cada sección."
          description="La Dirección General articula las coordinaciones académicas y sus equipos de apoyo."
        />

        <div className="mx-auto max-w-5xl">
          <div className="mx-auto w-fit border border-[var(--color-guinda)] bg-[var(--color-guinda)] px-8 py-5 text-center text-white">
            <p className="text-xs font-bold uppercase text-white/72">
              Coordinación institucional
            </p>
            <p className="mt-1 text-xl font-bold">Dirección General</p>
          </div>
          <div aria-hidden="true" className="mx-auto h-10 w-px bg-[var(--color-dorado)]" />
          <div aria-hidden="true" className="mx-[12.5%] hidden h-px bg-[var(--color-dorado)] lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {organizationGroups.map((group) => (
              <section
                key={group.id}
                className="relative border-t-4 border-[var(--color-azul-marino)] pt-5"
                aria-labelledby={`organization-${group.id}`}
              >
                <span
                  aria-hidden="true"
                  className="absolute -top-10 left-1/2 hidden h-10 w-px bg-[var(--color-dorado)] lg:block"
                />
                <h3
                  id={`organization-${group.id}`}
                  className="text-xl font-bold text-[var(--color-azul-marino)]"
                >
                  {group.title}
                </h3>
                <ul className="mt-5 grid gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="border-b border-[var(--color-linea)] py-2 text-sm leading-6 text-[var(--color-muted)]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div className="mt-12 border-t border-[var(--color-linea)] pt-6">
            <p className="text-xs font-bold uppercase text-[var(--color-guinda)]">
              Apoyo transversal
            </p>
            <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[var(--color-muted)]">
              {organizationSupport.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <p className="mt-10 border-l-2 border-[var(--color-dorado)] pl-4 text-sm font-bold leading-6 text-[var(--color-guinda)]">
            Estructura organizacional de referencia basada en el ciclo
            2024-2025. Actualización pendiente.
          </p>
        </div>
      </Container>
    </Section>
  );
}
