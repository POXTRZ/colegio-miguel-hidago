"use client";

import Image from "next/image";
import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { ArrowRight, Clock, MapPin, School } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  educationLevelLabels,
  eventDate,
} from "@/components/calendar/calendarUtils";
import {
  DemoBadge,
  EventCategoryBadge,
  EventStatusBadge,
} from "@/components/calendar/EventLabels";
import type { CalendarEvent } from "@/types/event";

type EventPopoverProps = {
  event?: CalendarEvent;
};

export default function EventPopover({ event }: EventPopoverProps) {
  if (!event) {
    return (
      <aside className="bg-[var(--color-azul-marino)] p-7 text-white">
        <p className="text-xs font-bold uppercase text-[var(--color-dorado-claro)]">
          Detalle de actividad
        </p>
        <p className="mt-4 font-display text-3xl leading-tight">
          Selecciona una fecha para conocer su historia.
        </p>
      </aside>
    );
  }

  const date = eventDate(event);
  const month = new Intl.DateTimeFormat("es-MX", { month: "long" }).format(
    date,
  );

  return (
    <MotionConfig reducedMotion="user">
      <aside
        className="overflow-hidden bg-[var(--color-azul-marino)] text-white shadow-[var(--shadow-md)]"
        aria-live="polite"
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={event.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {event.cover ? (
              <figure>
                <div className="relative aspect-[16/9]">
                  <Image
                    src={event.cover.src}
                    alt={event.cover.alt}
                    fill
                    sizes="(min-width: 1024px) 340px, 100vw"
                    className="object-cover"
                  />
                </div>
                {event.cover.caption ? (
                  <figcaption className="border-b border-white/14 px-6 py-2 text-[10px] leading-4 text-white/58">
                    {event.cover.status === "historical"
                      ? "Archivo histórico. "
                      : ""}
                    {event.cover.caption}
                  </figcaption>
                ) : null}
              </figure>
            ) : (
              <div className="relative flex min-h-36 items-end overflow-hidden border-b border-white/14 bg-white/[0.035] px-7 py-6">
                <span
                  className="absolute -right-3 -top-8 font-display text-[9rem] leading-none text-white/[0.035]"
                  aria-hidden="true"
                >
                  CMH
                </span>
                <time
                  dateTime={event.startDate}
                  className="relative flex items-end gap-3"
                >
                  <span className="font-display text-7xl font-semibold leading-[0.8] text-white">
                    {date.getDate()}
                  </span>
                  <span className="pb-1 text-sm font-bold capitalize text-[var(--color-dorado-claro)]">
                    {month}
                    <span className="block text-xs font-normal text-white/58">
                      {date.getFullYear()}
                    </span>
                  </span>
                </time>
              </div>
            )}

            <div className="p-6 lg:p-7">
              <div className="flex flex-wrap gap-2">
                <EventStatusBadge status={event.status} compact />
                <EventCategoryBadge category={event.category} compact />
                {event.isDemo ? <DemoBadge /> : null}
              </div>

              <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">
                {event.title}
              </h2>
              <p className="mt-4 text-sm leading-6 text-white/68">
                {event.summary}
              </p>

              <div className="mt-6 grid gap-3 border-t border-white/14 pt-5 text-sm text-white/72">
                <p className="flex gap-3">
                  <Clock
                    className="h-5 w-5 shrink-0 text-[var(--color-dorado-claro)]"
                    aria-hidden="true"
                  />
                  {event.time}
                </p>
                <p className="flex gap-3">
                  <MapPin
                    className="h-5 w-5 shrink-0 text-[var(--color-dorado-claro)]"
                    aria-hidden="true"
                  />
                  {event.location}
                </p>
                <p className="flex gap-3">
                  <School
                    className="h-5 w-5 shrink-0 text-[var(--color-dorado-claro)]"
                    aria-hidden="true"
                  />
                  {event.educationLevel
                    .map((level) => educationLevelLabels[level])
                    .join(", ")}
                </p>
              </div>

              <Button
                className="mt-7 w-full"
                href={`/eventos/${event.slug}`}
                variant="light"
              >
                Abrir página del evento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </motion.div>
        </AnimatePresence>
      </aside>
    </MotionConfig>
  );
}
