"use client";

import { type KeyboardEvent, useState } from "react";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { values } from "@/data/confirmed/institution";

export default function ValuesSection() {
  const [selectedId, setSelectedId] = useState(values[0].id);
  const selected = values.find((value) => value.id === selectedId) ?? values[0];

  function handleKeyDown(
    event: KeyboardEvent<HTMLButtonElement>,
    currentIndex: number
  ) {
    let nextIndex: number | null = null;

    if (event.key === "ArrowDown" || event.key === "ArrowRight") {
      nextIndex = (currentIndex + 1) % values.length;
    } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
      nextIndex = (currentIndex - 1 + values.length) % values.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = values.length - 1;
    }

    if (nextIndex === null) {
      return;
    }

    event.preventDefault();
    setSelectedId(values[nextIndex].id);
    event.currentTarget
      .parentElement?.querySelectorAll<HTMLButtonElement>('[role="tab"]')
      [nextIndex]?.focus();
  }

  return (
    <Section id="valores" tone="navy">
      <Container>
        <SectionHeader
          eyebrow="Valores"
          title="Una forma de estar con los demás."
          description="Ocho valores orientan la convivencia, las decisiones y el servicio dentro de la comunidad educativa."
          tone="light"
        />

        <div className="grid min-w-0 gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div
            className="grid w-full min-w-0 border-t border-white/18"
            role="tablist"
            aria-label="Valores institucionales"
          >
            {values.map((value, index) => {
              const isSelected = value.id === selected.id;

              return (
                <button
                  key={value.id}
                  id={`value-tab-${value.id}`}
                  type="button"
                  role="tab"
                  aria-controls={`value-panel-${value.id}`}
                  aria-selected={isSelected}
                  className={`grid w-full min-w-0 grid-cols-[2.5rem_minmax(0,1fr)_auto] items-center gap-3 border-b border-white/18 py-4 text-left transition ${
                    isSelected ? "text-white" : "text-white/58 hover:text-white"
                  }`}
                  onClick={() => setSelectedId(value.id)}
                  onKeyDown={(event) => handleKeyDown(event, index)}
                >
                  <span className="font-display text-lg text-[var(--color-dorado-claro)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="min-w-0 text-base font-bold sm:text-lg">
                    {value.title}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-2.5 w-2.5 rounded-full bg-[var(--color-dorado)] transition ${
                      isSelected ? "scale-100 opacity-100" : "scale-50 opacity-0"
                    }`}
                  />
                </button>
              );
            })}
          </div>

          <div
            id={`value-panel-${selected.id}`}
            role="tabpanel"
            aria-labelledby={`value-tab-${selected.id}`}
            className="flex min-h-72 min-w-0 flex-col justify-end border-l border-[var(--color-dorado)] pl-7 sm:pl-10 lg:min-h-[480px]"
          >
            <p className="font-display text-5xl font-bold leading-none text-white sm:text-6xl lg:text-7xl">
              {selected.title}
            </p>
            <p className="mt-7 max-w-xl text-lg leading-8 text-white/74 md:text-xl md:leading-9">
              {selected.description}
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
