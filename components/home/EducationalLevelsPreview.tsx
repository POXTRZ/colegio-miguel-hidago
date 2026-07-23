"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import {
  Button,
  Container,
  Eyebrow,
  ManagedImage,
  Section,
} from "@/components/ui";
import { levels } from "@/data/confirmed/education-levels";
import { getHistoricalMedia } from "@/data/confirmed/media";

const levelVisuals = [
  {
    period: "3 grados",
    asset: getHistoricalMedia("grupo-escolar-aula"),
  },
  {
    period: "6 grados",
    asset: getHistoricalMedia("actividad-escolar"),
  },
  {
    period: "3 grados",
    asset: getHistoricalMedia("generacion-escolar"),
  },
  {
    period: "6 semestres",
    asset: getHistoricalMedia("entrega-reconocimientos"),
  },
] as const;

export default function EducationalLevelsPreview() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLevel = levels[activeIndex];
  const activeVisual = levelVisuals[activeIndex];

  return (
    <Section id="academico" tone="white">
      <Container size="2xl">
        <div className="grid gap-8 border-b border-[var(--color-bordes)] pb-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <Eyebrow>Oferta educativa</Eyebrow>
            <h2 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.05] text-[var(--color-azul-marino)] sm:text-5xl">
              Un recorrido formativo completo.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)] lg:justify-self-end">
            Cada nivel acompaña una etapa distinta con formación académica,
            humana y espiritual.
          </p>
        </div>

        <MotionConfig reducedMotion="user">
          <div className="mt-12 grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16">
            <div className="order-2 border-t border-[var(--color-bordes)] lg:order-1">
              {levels.map((level, index) => {
                const active = activeIndex === index;

                return (
                  <button
                    key={level.name}
                    type="button"
                    aria-pressed={active}
                    className={`grid w-full grid-cols-[3.25rem_1fr_auto] items-start gap-4 border-b border-[var(--color-bordes)] py-6 text-left transition ${
                      active
                        ? "text-[var(--color-azul-marino)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-tinta)]"
                    }`}
                    onClick={() => setActiveIndex(index)}
                    onFocus={() => setActiveIndex(index)}
                  >
                    <span
                      className={`font-display text-2xl ${
                        active
                          ? "text-[var(--color-dorado-texto)]"
                          : "text-[var(--color-muted)]"
                      }`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block text-xs font-bold uppercase text-[var(--color-guinda)]">
                        {levelVisuals[index].period}
                      </span>
                      <span className="mt-2 block text-2xl font-bold">
                        {level.name}
                      </span>
                      <span className="mt-2 block max-w-xl text-sm leading-6 text-[var(--color-muted)]">
                        {level.detail}
                      </span>
                    </span>
                    <ArrowRight
                      className={`mt-6 h-5 w-5 transition ${
                        active ? "translate-x-0 opacity-100" : "-translate-x-2 opacity-0"
                      }`}
                      aria-hidden="true"
                    />
                  </button>
                );
              })}

              <Button
                href={`/oferta-educativa#${activeLevel.name.toLowerCase()}`}
                variant="secondary"
                className="mt-8"
              >
                Ver {activeLevel.name}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>

            <div className="order-1 lg:order-2 lg:sticky lg:top-28 lg:self-start">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeLevel.name}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                >
                  {activeVisual.asset ? (
                    <ManagedImage
                      asset={activeVisual.asset}
                      ratio="portrait"
                      imageClassName="grayscale-[0.2]"
                      sizes="(min-width: 1024px) 54vw, 100vw"
                    />
                  ) : null}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </MotionConfig>
      </Container>
    </Section>
  );
}
