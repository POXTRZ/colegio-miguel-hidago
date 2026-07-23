import { ChevronDown, Music2 } from "lucide-react";
import { schoolMotto } from "@/config/site";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import Section from "@/components/ui/Section";
import { hymnStanzas } from "@/data/confirmed/institution";

export default function HymnSection() {
  return (
    <Section id="lema-himno">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <Eyebrow>Lema institucional</Eyebrow>
            <p className="mt-5 font-display text-5xl font-bold leading-tight text-[var(--color-azul-marino)] lg:text-6xl">
              {schoolMotto}
            </p>
            <p className="mt-6 max-w-lg text-lg leading-8 text-[var(--color-muted)]">
              Una síntesis de la vocación educativa y del compromiso con la
              fraternidad.
            </p>
          </div>

          <div id="himno" className="scroll-mt-28 border-t-4 border-[var(--color-guinda)] pt-7">
            <div className="flex items-center gap-3">
              <Music2
                className="h-6 w-6 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <Eyebrow>Himno institucional franciscano</Eyebrow>
            </div>
            <p className="mt-5 font-display text-3xl leading-tight">
              Educación para crecer, valores que desarrollar.
            </p>

            <details className="group mt-8 border-y border-[var(--color-linea)]">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-bold text-[var(--color-guinda)]">
                Leer letra completa
                <ChevronDown
                  className="h-5 w-5 transition group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <div className="grid gap-8 border-t border-[var(--color-linea)] py-7 text-sm leading-7 text-[var(--color-muted)] sm:grid-cols-2">
                {hymnStanzas.map((stanza, index) => (
                  <p key={index}>
                    {stanza.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                ))}
              </div>
            </details>
            <p className="mt-4 text-xs leading-5 text-[var(--color-muted)]">
              Letra y música: César Miranda Barragán. Fuente: Ideario de la
              Pastoral Educativa HFIC.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
