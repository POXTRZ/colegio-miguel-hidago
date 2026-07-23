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
        <section className="border-b border-[var(--color-bordes)] pt-28">
          <Container size="2xl" className="py-16 lg:py-24">
            <Eyebrow>Documentos descargables</Eyebrow>
            <h1 className="mt-5 max-w-4xl font-semibold text-[var(--color-azul-marino)]">
              Información institucional para consultar y conservar.
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Los documentos de esta sección corresponden a archivos
              confirmados para publicación.
            </p>
          </Container>
        </section>

        <Section tone="white">
          <Container size="2xl">
            <div className="border-t border-[var(--color-bordes)]">
              {publicDocuments.map((document) => (
                <article
                  key={document.id}
                  className="grid gap-6 border-b border-[var(--color-bordes)] py-8 md:grid-cols-[3rem_1fr_auto] md:items-center"
                >
                  <FileText className="h-8 w-8 text-[var(--color-guinda)]" aria-hidden="true" />
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
      </main>
      <SiteFooter />
    </>
  );
}
