"use client";

import { MotionConfig, motion } from "framer-motion";
import { useRef } from "react";
import { Container, Eyebrow, ResponsiveImage, Section } from "@/components/ui";
import { getHistoricalMedia } from "@/data/confirmed/media";
import {
  gsap,
  gsapEases,
  motionDurations,
  motionQueries,
  useGSAP,
} from "@/lib/motion";

const formationDimensions = [
  {
    title: "Humana",
    text: "Dignidad, libertad, responsabilidad y cercanía en cada etapa.",
  },
  {
    title: "Académica",
    text: "Conocimiento, criterio y herramientas para seguir aprendiendo.",
  },
  {
    title: "Espiritual",
    text: "Fe, interioridad y vocación vividas con respeto y sentido.",
  },
  {
    title: "Fraterna",
    text: "Comunidad, servicio y armonía con las personas y el entorno.",
  },
] as const;

export default function FormationSection() {
  const image = getHistoricalMedia("comunidad-franciscana");
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(motionQueries.desktop, () => {
        gsap.to("[data-formation-photo] figure", {
          yPercent: 4,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.7,
          },
        });

        gsap.from("[data-formation-line]", {
          scaleY: 0,
          transformOrigin: "center top",
          duration: motionDurations.reveal,
          ease: gsapEases.reveal,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 68%",
            once: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef },
  );

  return (
    <MotionConfig reducedMotion="user">
    <div ref={sectionRef}>
    <Section tone="navy" className="overflow-hidden !py-0">
      <Container size="2xl" className="px-0 lg:px-8">
        <div className="grid lg:min-h-[820px] lg:grid-cols-[1.06fr_0.94fr]">
          <div
            data-formation-photo
            className="relative min-h-[420px] overflow-hidden lg:min-h-0"
          >
            <div
              data-formation-line
              className="absolute bottom-0 right-0 top-0 z-10 hidden w-px bg-[var(--color-dorado-decorativo)] lg:block"
              aria-hidden="true"
            />
            {image ? (
              <>
                <ResponsiveImage
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  ratio="auto"
                  className="grayscale-[0.35]"
                  containerClassName="absolute inset-0 h-full rounded-none"
                  sizes="(min-width: 1024px) 52vw, 100vw"
                />
                <p className="absolute bottom-5 left-5 right-5 z-10 max-w-sm bg-[rgba(11,37,69,0.86)] px-4 py-3 text-xs leading-5 text-white/72">
                  <span className="block font-bold uppercase text-white">
                    Archivo histórico
                  </span>
                  {image.caption}
                </p>
              </>
            ) : null}
          </div>

          <motion.div
            className="px-5 py-16 sm:px-10 lg:flex lg:flex-col lg:justify-center lg:px-16 lg:py-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.18 }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            <Eyebrow tone="light">Formación integral</Eyebrow>
            <motion.h2
              className="mt-5 max-w-3xl text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Educar es acompañar a la persona completa.
            </motion.h2>
            <motion.p
              className="mt-6 max-w-2xl text-lg leading-8 text-white/72"
              variants={{
                hidden: { opacity: 0, y: 18 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              La propuesta educativa HFIC integra fe, cultura y vida. El
              aprendizaje académico convive con la formación humana, la
              espiritualidad franciscana y el compromiso con una comunidad
              más justa y fraterna.
            </motion.p>

            <div className="mt-12 border-t border-white/18">
              {formationDimensions.map((dimension, index) => (
                <motion.div
                  key={dimension.title}
                  className="grid grid-cols-[2.5rem_1fr] gap-4 border-b border-white/18 py-5 sm:grid-cols-[2.5rem_8rem_1fr]"
                  variants={{
                    hidden: { opacity: 0, x: 10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <span className="font-display text-lg text-[var(--color-dorado-claro)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <p className="text-sm font-bold text-white">
                    {dimension.title}
                  </p>
                  <p className="col-start-2 text-sm leading-6 text-white/64 sm:col-start-3">
                    {dimension.text}
                  </p>
                </motion.div>
              ))}
            </div>

            <p className="font-display mt-10 max-w-xl text-2xl leading-snug text-white">
              “Formar para construir un mundo fraterno”.
            </p>
          </motion.div>
        </div>
      </Container>
    </Section>
    </div>
    </MotionConfig>
  );
}
