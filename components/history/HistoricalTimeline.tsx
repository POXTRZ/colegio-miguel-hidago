"use client";

import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import { useCallback, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import IconButton from "@/components/ui/IconButton";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { confirmedTimeline } from "@/data/confirmed/timeline";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function HistoricalTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const selectedEvent =
    modalIndex === null ? null : confirmedTimeline[modalIndex];

  const closeModal = useCallback(() => setModalIndex(null), []);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from("[data-timeline-line-horizontal]", {
          scaleX: 0,
          transformOrigin: "left center",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            end: "bottom 72%",
            scrub: 0.5,
          },
        });
        gsap.from("[data-timeline-line-vertical]", {
          scaleY: 0,
          transformOrigin: "center top",
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 72%",
            end: "bottom 72%",
            scrub: 0.5,
          },
        });

        gsap.utils.toArray<HTMLElement>("[data-timeline-event]").forEach((item) => {
          gsap.from(item, {
            autoAlpha: 0,
            y: 22,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 88%",
              once: true,
            },
          });
        });
      });

      return () => media.revert();
    },
    { scope: sectionRef }
  );

  function moveActive(direction: -1 | 1) {
    setActiveIndex((current) => {
      const next = current + direction;
      return (next + confirmedTimeline.length) % confirmedTimeline.length;
    });
  }

  function moveModal(direction: -1 | 1) {
    setModalIndex((current) => {
      if (current === null) {
        return null;
      }
      return (current + direction + confirmedTimeline.length) %
        confirmedTimeline.length;
    });
  }

  return (
    <>
      <div ref={sectionRef}>
      <Section id="linea-del-tiempo" tone="navy" className="overflow-hidden">
        <Container>
          <SectionHeader
            eyebrow="Cronología documentada"
            title="Hitos que sí cuentan con respaldo."
            description="Las fechas mostradas corresponden a registros administrativos. No se presentan como fechas de fundación o apertura."
            tone="light"
            actions={
              <div className="hidden items-center gap-2 md:flex">
                <IconButton
                  aria-label="Ver hito anterior"
                  onClick={() => moveActive(-1)}
                  variant="light"
                >
                  <ArrowLeft className="h-5 w-5" aria-hidden="true" />
                </IconButton>
                <IconButton
                  aria-label="Ver hito siguiente"
                  onClick={() => moveActive(1)}
                  variant="light"
                >
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </IconButton>
              </div>
            }
          />

          <div className="relative hidden min-h-[580px] md:block">
            <div
              data-timeline-line-horizontal
              aria-hidden="true"
              className="absolute left-[8%] right-[8%] top-1/2 h-12 -translate-y-1/2 border-t-2 border-[var(--color-dorado)]/70 [border-radius:50%]"
            />
            <div className="grid grid-cols-3 gap-5">
              {confirmedTimeline.map((event, index) => {
                const image = event.media[0];
                const isActive = activeIndex === index;

                return (
                  <article
                    data-timeline-event
                    key={event.id}
                    className={`relative ${
                      index % 2 === 0 ? "pt-4" : "pt-52"
                    }`}
                  >
                    <button
                      type="button"
                      aria-label={`Seleccionar ${event.title}, ${event.year}`}
                      aria-pressed={isActive}
                      className={`absolute left-1/2 z-10 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-[var(--color-azul-marino)] bg-[var(--color-dorado)] transition ${
                        index % 2 === 0 ? "top-[276px]" : "top-[276px]"
                      } ${isActive ? "scale-150" : ""}`}
                      onClick={() => setActiveIndex(index)}
                    />
                    <div
                      className={`overflow-hidden rounded-[var(--radius-md)] border bg-white text-[var(--color-tinta)] shadow-[var(--shadow-md)] transition ${
                        isActive
                          ? "border-[var(--color-dorado)]"
                          : "border-white/10 opacity-82"
                      }`}
                    >
                      {image ? (
                        <div className="relative">
                          <ResponsiveImage
                            alt={image.alt}
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            ratio="video"
                            className="grayscale-[0.35]"
                            containerClassName="rounded-none"
                            sizes="(min-width: 1024px) 340px, 30vw"
                          />
                          <span className="absolute bottom-2 left-2 bg-[var(--color-azul-marino)]/88 px-2 py-1 text-[10px] font-bold text-white">
                            Imagen de contexto · fecha pendiente
                          </span>
                        </div>
                      ) : null}
                      <div className="p-5">
                        <p className="font-display text-4xl font-bold text-[var(--color-guinda)]">
                          {event.year}
                        </p>
                        <p className="mt-1 text-xs font-bold uppercase text-[var(--color-muted)]">
                          {event.stage}
                        </p>
                        <h3 className="mt-4 text-xl font-bold">{event.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                          {event.summary}
                        </p>
                        <Button
                          className="mt-5"
                          onClick={() => setModalIndex(index)}
                          size="sm"
                          variant="secondary"
                        >
                          <Expand className="h-4 w-4" aria-hidden="true" />
                          Ampliar
                        </Button>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="relative pl-8 md:hidden">
            <div
              data-timeline-line-vertical
              aria-hidden="true"
              className="absolute bottom-3 left-[7px] top-3 w-px bg-[var(--color-dorado)]"
            />
            <div className="grid gap-10">
              {confirmedTimeline.map((event, index) => {
                const image = event.media[0];

                return (
                  <article key={event.id} data-timeline-event className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full border-4 border-[var(--color-azul-marino)] bg-[var(--color-dorado)]"
                    />
                    <p className="font-display text-4xl font-bold text-[var(--color-dorado-claro)]">
                      {event.year}
                    </p>
                    {image ? (
                      <ResponsiveImage
                        alt={image.alt}
                        src={image.src}
                        width={image.width}
                        height={image.height}
                        ratio="video"
                        className="grayscale-[0.3]"
                        containerClassName="mt-4"
                      />
                    ) : null}
                    <p className="mt-4 text-xs font-bold uppercase text-white/62">
                      {event.stage}
                    </p>
                    <h3 className="mt-2 text-2xl font-bold">{event.title}</h3>
                    <p className="mt-3 leading-7 text-white/72">
                      {event.summary}
                    </p>
                    <Button
                      className="mt-5"
                      onClick={() => setModalIndex(index)}
                      size="sm"
                      variant="light"
                    >
                      <Expand className="h-4 w-4" aria-hidden="true" />
                      Ampliar
                    </Button>
                  </article>
                );
              })}
            </div>
          </div>
        </Container>
      </Section>
      </div>

      <Modal
        isOpen={selectedEvent !== null}
        onClose={closeModal}
        title={selectedEvent?.title ?? "Detalle histórico"}
        footer={
          <div className="flex items-center justify-between gap-4">
            <IconButton
              aria-label="Hito anterior"
              onClick={() => moveModal(-1)}
            >
              <ArrowLeft className="h-5 w-5" aria-hidden="true" />
            </IconButton>
            <span className="text-center text-xs font-bold text-[var(--color-muted)]">
              {modalIndex === null ? 0 : modalIndex + 1} de{" "}
              {confirmedTimeline.length}
            </span>
            <IconButton
              aria-label="Hito siguiente"
              onClick={() => moveModal(1)}
            >
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </IconButton>
          </div>
        }
      >
        {selectedEvent ? (
          <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
            {selectedEvent.media[0] ? (
              <div className="bg-[var(--color-hueso)] p-5 md:p-8">
                <ResponsiveImage
                  alt={selectedEvent.media[0].alt}
                  src={selectedEvent.media[0].src}
                  width={selectedEvent.media[0].width}
                  height={selectedEvent.media[0].height}
                  ratio="portrait"
                  className="grayscale-[0.28]"
                  sizes="(min-width: 1024px) 420px, 90vw"
                />
                <p className="mt-3 text-xs leading-5 text-[var(--color-muted)]">
                  {selectedEvent.media[0].caption}
                </p>
              </div>
            ) : null}
            <div className="p-6 md:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-display text-5xl font-bold text-[var(--color-guinda)]">
                  {selectedEvent.year}
                </span>
                <Badge>{selectedEvent.stage}</Badge>
              </div>
              {selectedEvent.date ? (
                <p className="mt-4 text-sm font-bold text-[var(--color-guinda)]">
                  {selectedEvent.date}
                </p>
              ) : null}
              <p className="mt-6 text-lg leading-8 text-[var(--color-muted)]">
                {selectedEvent.description}
              </p>
              <div className="mt-8 border-t border-[var(--color-linea)] pt-5">
                <p className="text-xs font-bold uppercase text-[var(--color-guinda)]">
                  Fuente
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {selectedEvent.source}
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </Modal>
    </>
  );
}
