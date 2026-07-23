"use client";

import Image from "next/image";
import { type KeyboardEvent, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { shieldElements } from "@/data/confirmed/institution";
import { schoolShield } from "@/data/confirmed/media";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function ShieldMeaning() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedId, setSelectedId] = useState(shieldElements[0].id);
  const selected =
    shieldElements.find((element) => element.id === selectedId) ??
    shieldElements[0];

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-shield-reveal]", {
          autoAlpha: 0,
          y: 20,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            once: true,
          },
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % shieldElements.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex =
        (currentIndex - 1 + shieldElements.length) % shieldElements.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = shieldElements.length - 1;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    setSelectedId(shieldElements[nextIndex].id);
    event.currentTarget
      .parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [nextIndex]?.focus();
  }

  return (
    <div ref={sectionRef}>
    <Section id="escudo" tone="white">
      <Container>
        <SectionHeader
          eyebrow="Identidad gráfica"
          title="Un escudo, siete elementos."
          description="Selecciona cada elemento para conocer su significado dentro de la identidad educativa HFIC."
        />

        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          <div data-shield-reveal className="flex justify-center bg-[var(--color-crema)] px-8 py-12">
            <Image
              src={schoolShield.src}
              alt={schoolShield.alt}
              width={schoolShield.width}
              height={schoolShield.height}
              unoptimized
              className="h-auto w-56 object-contain md:w-72"
            />
          </div>

          <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr]">
            <div
              data-shield-reveal
              className="border-t border-[var(--color-linea)]"
              role="tablist"
              aria-label="Elementos del escudo"
            >
              {shieldElements.map((element, index) => {
                const isSelected = selected.id === element.id;

                return (
                  <button
                    key={element.id}
                    id={`shield-tab-${element.id}`}
                    type="button"
                    role="tab"
                    aria-controls={`shield-panel-${element.id}`}
                    aria-selected={isSelected}
                    className={`grid w-full grid-cols-[2.25rem_1fr] gap-3 border-b border-[var(--color-linea)] py-4 text-left transition ${
                      isSelected
                        ? "text-[var(--color-guinda)]"
                        : "text-[var(--color-muted)] hover:text-[var(--color-tinta)]"
                    }`}
                    onClick={() => setSelectedId(element.id)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                  >
                    <span className="font-display text-lg">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="font-bold">{element.title}</span>
                  </button>
                );
              })}
            </div>

            <div
              data-shield-reveal
              id={`shield-panel-${selected.id}`}
              role="tabpanel"
              aria-labelledby={`shield-tab-${selected.id}`}
              className="border-l-2 border-[var(--color-dorado)] pl-7"
            >
              <p className="font-display text-4xl font-bold leading-tight text-[var(--color-azul-marino)]">
                {selected.title}
              </p>
              <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
                {selected.text}
              </p>
              <p className="mt-8 text-xs font-bold uppercase text-[var(--color-guinda)]">
                Ideario de la Pastoral Educativa HFIC, pp. 25-26
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
    </div>
  );
}
