"use client";

import { ArrowLeft, ArrowRight, Expand } from "lucide-react";
import {
  type MouseEvent,
  useCallback,
  useRef,
  useState,
} from "react";
import Modal from "@/components/ui/Modal";
import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import IconButton from "@/components/ui/IconButton";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { confirmedTimeline } from "@/data/confirmed/timeline";
import {
  gsap,
  gsapEases,
  motionDurations,
  motionQueries,
  useGSAP,
} from "@/lib/motion";

export default function HistoricalTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const modalTriggerRef = useRef<HTMLButtonElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const selectedEvent =
    modalIndex === null ? null : confirmedTimeline[modalIndex];

  const closeModal = useCallback(() => {
    setModalIndex(null);
    window.setTimeout(() => modalTriggerRef.current?.focus(), 0);
  }, []);

  function openModal(
    index: number,
    event: MouseEvent<HTMLButtonElement>
  ) {
    modalTriggerRef.current = event.currentTarget;
    setModalIndex(index);
  }

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add(motionQueries.timelineDesktop, () => {
        const path =
          sectionRef.current?.querySelector<SVGPathElement>(
            "[data-timeline-path]",
          );

        if (path) {
          const pathLength = path.getTotalLength();
          gsap.set(path, {
            strokeDasharray: pathLength,
            strokeDashoffset: pathLength,
          });
          gsap.to(path, {
            strokeDashoffset: 0,
            ease: "none",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 72%",
              end: "bottom 72%",
              scrub: 0.55,
            },
          });
        }

        gsap.utils
          .toArray<HTMLElement>(
            "[data-timeline-desktop] [data-timeline-event]",
          )
          .forEach((item) => {
            gsap.from(item, {
              autoAlpha: 0,
              y: 18,
              duration: motionDurations.reveal,
              ease: gsapEases.reveal,
              scrollTrigger: {
                trigger: item,
                start: "top 88%",
                once: true,
              },
            });
          });
      });

      media.add(motionQueries.timelineMobile, () => {
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

        gsap.utils
          .toArray<HTMLElement>("[data-timeline-mobile] [data-timeline-event]")
          .forEach((item) => {
            gsap.from(item, {
              autoAlpha: 0,
              y: 12,
              duration: motionDurations.reveal,
              ease: gsapEases.reveal,
              scrollTrigger: {
                trigger: item,
                start: "top 90%",
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
              <div className="flex items-center gap-2">
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

          <div
            data-timeline-desktop
            className="relative hidden pb-8 pt-2 md:block"
          >
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-[4.25rem] h-14 w-[66.667%] overflow-visible lg:top-20"
              preserveAspectRatio="none"
              viewBox="0 0 1200 56"
            >
              <path
                d="M0 32 C180 24 320 40 480 32 S800 24 960 32 S1120 40 1200 32"
                fill="none"
                stroke="rgba(255,255,255,0.13)"
                strokeWidth="1"
                vectorEffect="non-scaling-stroke"
              />
              <path
                data-timeline-path
                d="M0 26 C180 18 320 34 480 26 S800 18 960 26 S1120 34 1200 26"
                fill="none"
                stroke="var(--color-dorado)"
                strokeLinecap="round"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="grid grid-cols-3 gap-8 lg:gap-12">
              {confirmedTimeline.map((event, index) => {
                const image = event.media[0];
                const isActive = activeIndex === index;

                return (
                  <article
                    data-timeline-event
                    key={event.id}
                    className="relative"
                  >
                    <p className="text-center font-display text-6xl font-semibold leading-none text-[var(--color-dorado-claro)] lg:text-7xl">
                      {event.year}
                    </p>
                    <button
                      data-timeline-node
                      type="button"
                      aria-label={`Seleccionar ${event.title}, ${event.year}`}
                      aria-pressed={isActive}
                      className="relative z-10 mx-auto mt-3 flex h-11 w-11 items-center justify-center rounded-full"
                      onClick={() => setActiveIndex(index)}
                    >
                      <span
                        className={`block h-4 w-4 rounded-full border-4 border-[var(--color-azul-marino)] bg-[var(--color-dorado)] transition ${
                        isActive
                          ? "scale-125 shadow-[0_0_0_7px_rgba(214,167,53,0.18)]"
                          : "scale-100"
                      }`}
                      />
                    </button>
                    <div
                      className={`border p-4 transition duration-300 ${
                        index === 1 ? "mt-5 lg:mt-14" : "mt-5"
                      } ${
                        isActive
                          ? "border-[var(--color-dorado)]/70 bg-white/10 opacity-100"
                          : "border-white/12 bg-white/[0.035] opacity-72 hover:border-white/28 hover:opacity-100"
                      }`}
                    >
                      {image ? (
                        <div className="relative">
                          <ResponsiveImage
                            alt={image.alt}
                            src={image.src}
                            width={image.width}
                            height={image.height}
                            ratio={index === 1 ? "portrait" : "video"}
                            className="grayscale-[0.35]"
                            containerClassName="rounded-none"
                            sizes="(min-width: 1024px) 340px, 30vw"
                          />
                          <span className="absolute bottom-0 left-0 bg-[var(--color-azul-marino)] px-3 py-2 text-[10px] font-bold uppercase text-white">
                            Archivo histórico
                          </span>
                        </div>
                      ) : null}
                      <div className="border-t border-white/20 px-1 pt-5">
                        <p className="text-xs font-bold uppercase text-white/58">
                          {event.stage}
                        </p>
                        <h3 className="mt-3 text-xl font-bold text-white">{event.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/66">
                          {event.summary}
                        </p>
                        <Button
                          className="mt-5"
                          onClick={(event) => openModal(index, event)}
                          size="sm"
                          variant="light"
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

          <div data-timeline-mobile className="relative pl-8 md:hidden">
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
                      data-timeline-node
                      aria-hidden="true"
                      className="absolute -left-[31px] top-2 h-3.5 w-3.5 rounded-full border-4 border-[var(--color-azul-marino)] bg-[var(--color-dorado)] shadow-[0_0_0_5px_rgba(214,167,53,0.12)]"
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
                      onClick={(event) => openModal(index, event)}
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
            {selectedEvent.media.length > 0 ? (
              <div
                className="grid gap-5 bg-[var(--color-hueso)] p-5 md:p-8"
                role="group"
                aria-label={`Galería de ${selectedEvent.title}`}
              >
                {selectedEvent.media.map((image, index) => (
                  <div key={image.id}>
                    <ResponsiveImage
                      alt={image.alt}
                      src={image.src}
                      width={image.width}
                      height={image.height}
                      ratio={index === 0 ? "portrait" : "video"}
                      className="grayscale-[0.28]"
                      containerClassName="rounded-none"
                      sizes="(min-width: 1024px) 420px, 90vw"
                    />
                    <p className="mt-3 text-xs leading-5 text-[var(--color-muted)]">
                      {image.caption}
                    </p>
                  </div>
                ))}
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
