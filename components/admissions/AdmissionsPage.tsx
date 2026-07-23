import {
  Download,
  ExternalLink,
  FileText,
  MapPin,
  Phone,
} from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  Badge,
  Button,
  Container,
  Eyebrow,
  Section,
  SectionHeader,
} from "@/components/ui";
import { admissionsInfo } from "@/data/confirmed/admissions";
import { contactInfo, facebookUrl } from "@/data/confirmed/contact";

const levels = [
  { key: "preescolar", label: "Preescolar" },
  { key: "primaria", label: "Primaria" },
  { key: "secundaria", label: "Secundaria" },
] as const;

export default function AdmissionsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)]">
        <section className="bg-[var(--color-azul-marino)] pt-[var(--internal-hero-offset)] text-white">
          <Container size="2xl" className="grid min-h-[360px] gap-10 py-12 lg:grid-cols-[1fr_0.62fr] lg:items-end lg:py-14">
            <div>
              <Eyebrow tone="light">Inscripciones {admissionsInfo.cycle}</Eyebrow>
              <h1 className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.04] sm:text-5xl lg:text-6xl">
                Información clara para preparar el siguiente ciclo.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
                Fechas, requisitos, costos y políticas publicados en la
                circular institucional.
              </p>
            </div>
            <div className="border-l-2 border-[var(--color-dorado)] pl-7 lg:mb-3">
              <p className="text-sm font-bold">Atención en oficina</p>
              <p className="mt-2 leading-7 text-white/72">
                {contactInfo.officeHours}
                <br />
                {contactInfo.summerHours}
              </p>
            </div>
          </Container>
        </section>

        <Section tone="white" spacing="md">
          <Container size="2xl">
            <div className="grid gap-8 md:grid-cols-2">
              {admissionsInfo.periods.map((period, index) => (
                <article
                  key={period.label}
                  className="border-t-2 border-[var(--color-guinda)] pt-6"
                >
                  <div className="flex items-center justify-between gap-4">
                    <h2 className="text-2xl font-semibold">{period.label}</h2>
                    <span className="font-display text-3xl text-[var(--color-dorado-texto)]">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-4 text-lg font-bold text-[var(--color-guinda)]">
                    {period.dates}
                  </p>
                  <p className="mt-2 text-[var(--color-muted)]">{period.note}</p>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="2xl">
            <SectionHeader
              eyebrow="Documentación"
              title="Requisitos por nivel."
            />
            <div className="grid lg:grid-cols-3">
              {levels.map((level, index) => (
                <details
                  key={level.key}
                  open={index === 0}
                  className="group border-y border-[var(--color-bordes)] bg-transparent lg:border-r lg:border-t lg:px-5 lg:first:border-l lg:first:pl-0 lg:last:pr-0"
                >
                  <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 font-bold text-[var(--color-azul-marino)]">
                    {level.label}
                    <span
                      className="text-2xl text-[var(--color-guinda)] group-open:rotate-45"
                      aria-hidden="true"
                    >
                      +
                    </span>
                  </summary>
                  <ul className="border-t border-[var(--color-bordes)] px-5 py-5">
                    {admissionsInfo.requirements[level.key].map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 border-b border-[var(--color-bordes)] py-3 text-sm leading-6 last:border-b-0"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--color-dorado-texto)]"
                          aria-hidden="true"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
            <div className="mt-8 border-l-4 border-[var(--color-advertencia)] bg-white p-6">
              <Badge tone="warning">Preparatoria</Badge>
              <p className="mt-3 font-bold">{admissionsInfo.preparatoriaStatus}</p>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                No se publican requisitos ni costos hasta contar con
                confirmación institucional.
              </p>
            </div>
          </Container>
        </Section>

        <Section tone="white">
          <Container size="2xl">
            <SectionHeader
              eyebrow="Costos confirmados"
              title="Comparación por nivel."
              description="Importes correspondientes al ciclo 2026-2027. Preparatoria permanece pendiente de confirmación."
            />

            <div className="hidden overflow-x-auto md:block">
              <table className="w-full border-collapse text-left">
                <caption className="sr-only">
                  Costos de Preescolar, Primaria y Secundaria
                </caption>
                <thead>
                  <tr className="border-b-2 border-[var(--color-guinda)]">
                    <th className="p-4">Concepto</th>
                    {levels.map((level) => (
                      <th key={level.key} className="p-4">{level.label}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {admissionsInfo.costs.map((cost) => (
                    <tr
                      key={cost.concept}
                      className="border-b border-[var(--color-bordes)]"
                    >
                      <th scope="row" className="p-4 font-bold">{cost.concept}</th>
                      <td className="p-4">{cost.preescolar}</td>
                      <td className="p-4">{cost.primaria}</td>
                      <td className="p-4">{cost.secundaria}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="grid gap-6 md:hidden">
              {levels.map((level) => (
                <article key={level.key} className="border-t-2 border-[var(--color-guinda)] pt-5">
                  <h3 className="text-xl font-bold">{level.label}</h3>
                  <dl className="mt-3">
                    {admissionsInfo.costs.map((cost) => (
                      <div
                        key={cost.concept}
                        className="flex items-start justify-between gap-5 border-b border-[var(--color-bordes)] py-3"
                      >
                        <dt className="text-sm text-[var(--color-muted)]">{cost.concept}</dt>
                        <dd className="shrink-0 font-bold">{cost[level.key]}</dd>
                      </div>
                    ))}
                  </dl>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="2xl" className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHeader
                eyebrow="Pagos y beneficios"
                title="Políticas del ciclo."
                className="mb-6"
              />
              <ul className="grid gap-3">
                {admissionsInfo.paymentPolicies.map((policy) => (
                  <li key={policy} className="border-b border-[var(--color-bordes)] pb-3 text-sm leading-6">
                    {policy}
                  </li>
                ))}
              </ul>
              <h3 className="mt-8 text-lg font-bold">Becas</h3>
              <p className="mt-2 leading-7 text-[var(--color-muted)]">
                {admissionsInfo.scholarship}
              </p>
            </div>
            <div>
              <SectionHeader
                eyebrow="Devoluciones"
                title="Fechas que conviene tener presentes."
                className="mb-6"
              />
              <ol className="grid gap-5">
                {admissionsInfo.refunds.map((refund, index) => (
                  <li key={refund} className="grid grid-cols-[2rem_1fr] gap-4">
                    <span className="font-display text-xl text-[var(--color-dorado-texto)]">
                      {index + 1}
                    </span>
                    <p className="leading-7 text-[var(--color-muted)]">{refund}</p>
                  </li>
                ))}
              </ol>
            </div>
          </Container>
        </Section>

        <Section tone="navy" spacing="md">
          <Container size="2xl" className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="text-3xl font-semibold">Circular oficial 2026-2027</h2>
              <p className="mt-3 text-white/72">
                Consulta el documento fuente o comunícate directamente con la oficina.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                href={admissionsInfo.circularHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Descargar circular
              </Button>
              <Button href={contactInfo.phoneHref} variant="secondary" className="border-white/40 text-white hover:bg-white/10">
                <Phone className="h-4 w-4" aria-hidden="true" />
                Llamar
              </Button>
              <Button href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" variant="secondary" className="border-white/40 text-white hover:bg-white/10">
                <MapPin className="h-4 w-4" aria-hidden="true" />
                Ubicación
              </Button>
            </div>
            <div className="flex flex-wrap gap-5 text-sm text-white/72 lg:col-span-2">
              <a href="/documentos" className="inline-flex items-center gap-2 hover:text-white">
                <FileText className="h-4 w-4" aria-hidden="true" />
                Área de documentos
              </a>
              <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                Facebook
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
