import { Download, FileText } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  Badge,
  Button,
  Container,
  Eyebrow,
  Section,
} from "@/components/ui";
import { publicDocuments } from "@/data/confirmed/documents";

export default function DocumentsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)]">
        <section className="border-b border-[var(--color-bordes)] bg-[var(--color-azul-marino)] pt-[var(--internal-hero-offset)] text-white">
          <Container size="2xl" className="grid min-h-[340px] gap-8 py-10 lg:grid-cols-[1fr_auto] lg:items-end lg:py-14">
            <div>
              <Eyebrow tone="gold">Documentos descargables</Eyebrow>
              <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.06] sm:text-5xl lg:text-6xl">
                Documentos institucionales para consultar y conservar.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                Los documentos de esta sección corresponden a archivos
                confirmados para publicación.
              </p>
            </div>
            <p className="hidden font-display text-8xl text-white/12 sm:block" aria-hidden="true">
              01
            </p>
          </Container>
        </section>

        <Section tone="white">
          <Container size="2xl">
            <div className="border-t border-[var(--color-bordes)]">
              {publicDocuments.map((document) => (
                <article
                  key={document.id}
                  className="editorial-row grid gap-6 border-b border-[var(--color-bordes)] py-10 md:grid-cols-[4rem_1fr_auto] md:items-center"
                >
                  <FileText className="h-10 w-10 text-[var(--color-dorado-texto)]" aria-hidden="true" />
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge tone="burgundy">{document.category}</Badge>
                      <span className="text-xs text-[var(--color-muted)]">
                        {document.dateLabel}
                      </span>
                    </div>
                    <h2 className="mt-3 text-2xl font-bold">{document.title}</h2>
                    <p className="mt-2 max-w-3xl leading-7 text-[var(--color-muted)]">
                      {document.description}
                    </p>
                    <p className="mt-3 text-xs font-bold text-[var(--color-muted)]">
                      {document.format} · {document.size}
                    </p>
                  </div>
                  <Button
                    href={document.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                  >
                    <Download className="h-4 w-4" aria-hidden="true" />
                    Descargar
                  </Button>
                </article>
              ))}
            </div>
          </Container>
        </Section>

        <Section spacing="md">
          <Container
            size="2xl"
            className="flex flex-col items-start justify-between gap-6 border-y border-[var(--color-bordes)] py-10 md:flex-row md:items-center"
          >
            <div>
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                ¿Necesitas orientación?
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-[var(--color-azul-marino)]">
                Confirma la información directamente con el Colegio.
              </h2>
            </div>
            <Button href="/contacto" variant="secondary">
              Ir a contacto
            </Button>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
