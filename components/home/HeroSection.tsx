"use client";

import Image from "next/image";
import { ArrowDownRight, ArrowRight } from "lucide-react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import {
  Button,
  Container,
  Eyebrow,
  ResponsiveImage,
} from "@/components/ui";
import { schoolMotto } from "@/config/site";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-hero-copy]", {
          autoAlpha: 0,
          y: 24,
          duration: 0.8,
          ease: "power2.out",
        });
        gsap.from("[data-hero-photo]", {
          autoAlpha: 0,
          y: 18,
          duration: 0.9,
          ease: "power2.out",
        });
      });

      media.add(
        "(min-width: 1024px) and (prefers-reduced-motion: no-preference)",
        () => {
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
            xPercent: 14,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 0.7,
            },
          });
        }
      );

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[var(--color-crema)] pt-20"
    >
      <div
        className="absolute inset-y-0 right-0 hidden w-[45%] bg-[var(--color-azul-marino)] lg:block lg:[clip-path:polygon(14%_0,100%_0,100%_100%,0_100%)]"
        aria-hidden="true"
      />
      <div
        data-hero-gold
        className="absolute bottom-20 right-[42%] hidden h-px w-72 rotate-[66deg] bg-[var(--color-dorado-decorativo)] lg:block"
        aria-hidden="true"
      />

      <Container
        size="2xl"
        className="relative grid items-center gap-6 py-6 sm:gap-10 sm:py-10 lg:min-h-[calc(100svh-10rem)] lg:grid-cols-[1.02fr_0.98fr] lg:gap-16 lg:py-12"
      >
        <div data-hero-copy className="max-w-3xl">
          <Eyebrow>{schoolMotto}</Eyebrow>
          <h1 className="mt-4 text-4xl font-semibold leading-[1.02] text-[var(--color-azul-marino)] sm:mt-6 sm:text-6xl lg:text-7xl">
            Formación integral para construir un futuro fraterno.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[var(--color-texto-secundario)] sm:mt-7 sm:text-lg sm:leading-8">
            Una comunidad educativa en San Luis de la Paz que acompaña desde
            Preescolar hasta Preparatoria, integrando aprendizaje, valores y
            espiritualidad franciscana.
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
              variant="ghost"
              className="w-full sm:w-fit"
            >
              Consultar inscripciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-12 hidden items-center gap-4 border-t border-[var(--color-bordes)] pt-6 sm:flex">
            <Image
              src="/brand/shield.webp"
              alt=""
              width={396}
              height={508}
              className="h-14 w-auto object-contain"
            />
            <div>
              <p className="text-sm font-bold text-[var(--color-azul-marino)]">
                Colegio Miguel Hidalgo
              </p>
              <p className="mt-1 text-xs text-[var(--color-texto-secundario)]">
                HFIC - Provincia de Cristo Rey
              </p>
            </div>
          </div>
        </div>

        <div data-hero-photo className="relative -mx-5 bg-[var(--color-azul-marino)] px-5 py-5 sm:mx-0 sm:px-8 sm:py-9 lg:bg-transparent lg:p-0">
          <div
            className="absolute left-2 top-4 h-px w-28 bg-[var(--color-dorado-decorativo)] sm:left-5 lg:-left-8 lg:top-10"
            aria-hidden="true"
          />
          <div className="relative">
            <ResponsiveImage
              src="/images/home/comunidad-educativa-archivo.jpeg"
              alt="Amplio grupo de estudiantes del Colegio Miguel Hidalgo en una fotografía histórica"
              width={1600}
              height={1238}
              ratio="auto"
              className="grayscale"
              containerClassName="h-36 border border-white/20 shadow-[var(--shadow-lg)] sm:h-[28rem] lg:h-[min(68vh,660px)]"
              sizes="(min-width: 1024px) 44vw, 100vw"
              priority
            />
            <span className="absolute bottom-3 left-3 bg-[var(--color-azul-marino)] px-3 py-1 text-xs font-bold uppercase tracking-normal text-white sm:hidden">
              Archivo histórico
            </span>
          </div>
          <p className="mt-3 hidden max-w-md text-xs leading-5 text-white/64 sm:block">
            Archivo histórico del Colegio Miguel Hidalgo. Fecha y personas
            por identificar.
          </p>
        </div>
      </Container>
    </section>
  );
}
