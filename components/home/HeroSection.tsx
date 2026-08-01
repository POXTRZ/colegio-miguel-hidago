"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import {
  Button,
  Container,
  Eyebrow,
} from "@/components/ui";
import { currentHeroPhotography } from "@/data/confirmed/media";
import {
  gsap,
  gsapEases,
  motionDurations,
  motionQueries,
  useGSAP,
} from "@/lib/motion";

const heroImage = currentHeroPhotography;

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
      className="relative min-h-[calc(100svh-4rem)] overflow-hidden bg-[var(--color-crema)] pt-20 lg:min-h-[min(780px,calc(100svh-4rem))]"
    >
      <div
        data-hero-photo-reveal
        className="absolute -inset-y-[6%] inset-x-0 lg:left-[42%]"
      >
        <div data-hero-photo className="absolute inset-0">
          <Image
            src={heroImage.src}
            alt={heroImage.alt}
            fill
            priority
            sizes="(min-width: 1024px) 58vw, 100vw"
            className="object-cover object-[62%_center]"
          />
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-13 top-0 bg-[rgba(11,37,69,0.78)] lg:right-auto lg:w-[59%] lg:bg-[var(--color-azul-marino)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 h-13 bg-[var(--color-crema)]"
        aria-hidden="true"
      />
      <div
        data-hero-gold
        className="absolute bottom-36 left-[55%] hidden h-px w-48 rotate-[72deg] bg-[var(--color-dorado-decorativo)] lg:block"
        aria-hidden="true"
      />

      <Container
        size="2xl"
        className="relative flex min-h-[calc(100svh-9rem)] items-end pb-24 pt-16 text-white lg:min-h-[min(700px,calc(100svh-9rem))] lg:items-center lg:pb-12 lg:pt-28 2xl:pb-20"
      >
        <div
          data-hero-copy
          className="min-w-0 max-w-3xl lg:max-w-[50vw] xl:max-w-[min(50vw,48rem)]"
        >
          <Eyebrow tone="gold">Colegio Miguel Hidalgo</Eyebrow>
          <h1 className="mt-5 max-w-full hyphens-none text-[clamp(2.5rem,8vw,4.5rem)] font-semibold leading-[0.98] sm:mt-7 lg:text-[clamp(3.25rem,4.45vw,5rem)]">
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
      <div className="absolute bottom-2 right-8 hidden max-w-52 text-right text-[8px] leading-3.5 text-[var(--color-muted)] xl:block">
        <span className="block font-bold uppercase text-[var(--color-guinda)]">
          Fotografía actual
        </span>
        {heroImage?.caption}
      </div>
      <ul className="absolute inset-x-0 bottom-0 hidden h-13 items-center justify-center gap-3 px-4 text-[0.6875rem] font-bold uppercase text-[var(--color-azul-marino)] sm:flex md:gap-4">
        {["Preescolar", "Primaria", "Secundaria", "Preparatoria"].map(
          (level, index) => (
            <li key={level} className="flex items-center gap-3 md:gap-4">
              {index > 0 ? (
                <span
                  className="h-px w-3 bg-[var(--color-dorado-decorativo)] md:w-4"
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
