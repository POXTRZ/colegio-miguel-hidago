import { ArrowRight, Download, Phone } from "lucide-react";
import { Button, Container, Eyebrow, Section } from "@/components/ui";
import { admissionsInfo } from "@/data/confirmed/admissions";
import { contactInfo } from "@/data/confirmed/contact";

export default function AdmissionsSection() {
  return (
    <Section id="admisiones" tone="navy" className="relative overflow-hidden">
      <div
        className="absolute inset-y-0 right-[12%] hidden w-px rotate-12 bg-[var(--color-dorado-decorativo)]/60 lg:block"
        aria-hidden="true"
      />
      <Container size="2xl" className="relative">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          <div>
            <Eyebrow tone="light">Inscripciones {admissionsInfo.cycle}</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-tight sm:text-5xl">
              El siguiente paso comienza en comunidad.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/72">
              Consulta las fechas principales y descarga la circular oficial
              para conocer información por nivel.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button
                href={admissionsInfo.circularHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                className="w-full sm:w-fit"
              >
                Descargar circular
                <Download className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={contactInfo.phoneHref}
                variant="secondary"
                className="w-full border-white/40 text-white hover:bg-white/10 sm:w-fit"
              >
                Llamar a oficina
                <Phone className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="grid content-start gap-8">
            {admissionsInfo.periods.map((period, index) => (
              <div
                key={period.label}
                className="grid gap-4 border-t border-white/20 pt-6 sm:grid-cols-[4rem_1fr]"
              >
                <p
                  className="font-display text-4xl text-[var(--color-dorado-claro)]"
                  aria-hidden="true"
                >
                  0{index + 1}
                </p>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {period.label}
                  </h3>
                  <p className="mt-2 text-lg text-white">
                    {period.dates}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/64">
                    {period.note}
                  </p>
                </div>
              </div>
            ))}

            <div className="border-t border-white/20 pt-6">
              <p className="text-sm font-bold text-white">
                Atención en oficina
              </p>
              <p className="mt-2 text-sm leading-6 text-white/64">
                {contactInfo.officeHours}
                <br />
                {contactInfo.summerHours}
              </p>
              <a
                href="/contacto"
                className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-white hover:text-[var(--color-dorado-claro)]"
              >
                Ver datos de contacto
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
