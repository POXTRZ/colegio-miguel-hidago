"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import Button from "@/components/ui/Button";
import ManagedImage from "@/components/ui/ManagedImage";
import { educationOffer } from "@/data/confirmed/education-offer";
import { educationLevelPhotography } from "@/data/confirmed/media";

export default function EducationLevelsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeLevel = educationOffer[activeIndex];
  const activeAsset = educationLevelPhotography[activeIndex];

  return (
    <MotionConfig reducedMotion="user">
      <div className="grid gap-9 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-start lg:gap-14 xl:gap-20">
        <div className="order-2 bg-[var(--color-fondo)] p-3 sm:p-4 lg:order-1">
          <div className="flex items-center justify-between border-b border-[var(--color-bordes)] px-3 pb-4 sm:px-5">
            <p className="text-xs font-bold uppercase text-[var(--color-guinda)]">
              Trayectoria educativa
            </p>
            <p className="font-display text-sm text-[var(--color-dorado-texto)]">
              01 - 04
            </p>
          </div>
          {educationOffer.map((level, index) => {
            const active = activeIndex === index;

            return (
              <div
                id={level.id}
                key={level.id}
                className="scroll-mt-[calc(var(--site-header-height-compact)+1rem)]"
              >
                <button
                  type="button"
                  aria-controls="education-level-visual"
                  aria-pressed={active}
                  className={`group relative grid w-full grid-cols-[2.75rem_minmax(0,1fr)_1.5rem] items-start gap-4 border-b border-[var(--color-bordes)] px-3 py-6 text-left transition-[background-color,box-shadow] duration-[var(--duration-base)] before:absolute before:inset-y-0 before:left-0 before:w-0.5 before:origin-center before:bg-[var(--color-guinda)] before:transition-transform motion-reduce:transition-none sm:px-5 lg:py-7 ${
                    active
                      ? "bg-white shadow-[var(--shadow-sm)] before:scale-y-100"
                      : "bg-transparent before:scale-y-0 hover:bg-white"
                  }`}
                  onClick={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onMouseEnter={() => setActiveIndex(index)}
                >
                  <span
                    className={`font-display text-2xl leading-none transition-colors ${
                      active
                        ? "text-[var(--color-dorado-texto)]"
                        : "text-[var(--color-muted)]"
                    }`}
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase text-[var(--color-guinda)]">
                      {level.duration}
                    </span>
                    <span className="mt-1 block break-words font-display text-2xl font-semibold leading-tight text-[var(--color-azul-marino)] sm:text-3xl">
                      {level.name}
                    </span>
                    <span className="mt-2 block max-w-xl text-sm leading-6 text-[var(--color-muted)] sm:text-base sm:leading-7">
                      {level.description}
                    </span>
                  </span>
                  <ArrowRight
                    className={`mt-7 h-5 w-5 justify-self-end text-[var(--color-guinda)] transition-[transform,opacity] motion-reduce:transition-none ${
                      active
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-1.5 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                    aria-hidden="true"
                  />
                </button>
              </div>
            );
          })}

          <Button
            href="/inscripciones"
            variant="secondary"
            className="mx-3 mt-6 sm:ml-[4.75rem] sm:mr-5"
          >
            Consultar inscripciones
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="order-1 lg:order-2 xl:sticky xl:top-24">
          <AnimatePresence mode="wait">
            <motion.div
              id="education-level-visual"
              key={activeLevel.id}
              aria-live="polite"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="editorial-frame z-0 overflow-hidden bg-[var(--color-crema)] p-2 sm:p-3">
                <ManagedImage
                  asset={activeAsset}
                  ratio="wide"
                  showCaption={false}
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
                <div className="absolute bottom-5 left-0 z-10 max-w-[72%] bg-[var(--color-azul-marino)] px-4 py-3 text-white shadow-[var(--shadow-lg)] sm:px-5 sm:py-4">
                  <span className="text-[10px] font-bold uppercase text-[var(--color-dorado-claro)] sm:text-xs">
                    Nivel {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <p className="mt-1 font-display text-xl font-semibold sm:text-2xl">
                    {activeLevel.name}
                  </p>
                </div>
              </div>
              <p className="mt-4 border-l-2 border-[var(--color-dorado)] pl-4 text-xs leading-5 text-[var(--color-muted)]">
                <span className="block font-bold uppercase text-[var(--color-guinda)]">
                  {activeAsset.status === "provisional"
                    ? "Recurso general"
                    : "Fotografía actual"}
                </span>
                {activeAsset.caption}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </MotionConfig>
  );
}
