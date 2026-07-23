"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import {
  Button,
  Container,
  Eyebrow,
} from "@/components/ui";
import { getHistoricalMedia } from "@/data/confirmed/media";
import {
  gsap,
  gsapEases,
  motionDurations,
  motionQueries,
  useGSAP,
} from "@/lib/motion";

const heroImage = getHistoricalMedia("comunidad-educativa");

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(motionQueries.noPreference, () => {
        gsap.from("[data-hero-copy]", {
          autoAlpha: 0,
          y: 16,
          duration: motionDurations.enter,
          ease: gsapEases.enter,
        });
        gsap.from("[data-hero-photo-reveal]", {
          autoAlpha: 0,
          y: 12,
          duration: 0.82,
          ease: gsapEases.enter,
        });
      });

      media.add(motionQueries.desktop, () => {
          gsap.to("[data-hero-photo]", {
            yPercent: 5,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
          gsap.to("[data-hero-gold]", {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        });

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[calc(100svh-5rem)] overflow-hidden bg-[var(--color-crema)] pt-20 lg:min-h-[min(840px,calc(100svh-5rem))]"
    >
      <div
        data-hero-photo-reveal
        className="absolute -inset-y-[6%] inset-x-0 lg:left-[42%]"
      >
        <div data-hero-photo className="absolute inset-0">
          {heroImage ? (
            <Image
              src={heroImage.src}
              alt={heroImage.alt}
              fill
              priority
              sizes="(min-width: 1024px) 58vw, 100vw"
              className="object-cover object-center grayscale-[0.16]"
            />
          ) : null}
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-20 top-0 bg-[rgba(11,37,69,0.78)] lg:right-auto lg:w-[59%] lg:bg-[var(--color-azul-marino)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-20 bg-[var(--color-crema)]"
        aria-hidden="true"
      />
      <div
        data-hero-gold
        className="absolute bottom-[18%] left-[54%] hidden h-px w-72 rotate-[72deg] bg-[var(--color-dorado-decorativo)] lg:block"
        aria-hidden="true"
      />

      <Container
        size="2xl"
        className="relative flex min-h-[calc(100svh-10rem)] items-end pb-24 pt-16 text-white lg:min-h-[min(760px,calc(100svh-10rem))] lg:pb-28"
      >
        <div data-hero-copy className="max-w-4xl">
          <Eyebrow tone="gold">Colegio Miguel Hidalgo</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl font-semibold leading-[0.98] sm:mt-7 sm:text-6xl lg:text-[5rem]">
            Educación integral de Preescolar a Preparatoria.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-white/76 sm:mt-8 sm:text-lg sm:leading-8">
            Aprendizaje, formación humana y espiritualidad franciscana en una
            comunidad cercana de San Luis de la Paz.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-9 sm:flex-row">
            <Button
              href="/oferta-educativa"
              className="w-full !bg-[var(--color-guinda)] !text-white hover:!bg-[var(--color-guinda-oscuro)] sm:w-fit"
            >
              Conocer la oferta educativa
              <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href="/inscripciones"
              variant="secondary"
              className="w-full border-white/45 text-white hover:bg-white/10 sm:w-fit"
            >
              Consultar inscripciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

        </div>
      </Container>
      <div className="absolute bottom-4 right-5 hidden max-w-sm text-right text-[11px] leading-5 text-[var(--color-muted)] sm:block lg:right-8">
        <span className="block font-bold uppercase text-[var(--color-guinda)]">
          Archivo histórico
        </span>
        {heroImage?.caption}
      </div>
      <ul className="absolute bottom-0 left-5 hidden h-20 items-center gap-5 text-[0.6875rem] font-bold uppercase text-[var(--color-azul-marino)] sm:flex lg:left-8">
        {["Preescolar", "Primaria", "Secundaria", "Preparatoria"].map(
          (level, index) => (
            <li key={level} className="flex items-center gap-5">
              {index > 0 ? (
                <span
                  className="h-px w-5 bg-[var(--color-dorado-decorativo)]"
                  aria-hidden="true"
                />
              ) : null}
              {level}
            </li>
          ),
        )}
      </ul>
    </section>
  );
}
