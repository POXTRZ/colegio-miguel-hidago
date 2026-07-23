import { ArrowRight, CalendarDays } from "lucide-react";
import {
  eventDate,
  formatFullDate,
} from "@/components/calendar/calendarUtils";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import type { CalendarEvent } from "@/types/event";

type CalendarHeaderProps = {
  demoMode: boolean;
  featuredEvent?: CalendarEvent;
};

export default function CalendarHeader({
  demoMode,
  featuredEvent,
}: CalendarHeaderProps) {
  const featuredDate = featuredEvent ? eventDate(featuredEvent) : null;
  const month = featuredDate
    ? new Intl.DateTimeFormat("es-MX", { month: "short" })
        .format(featuredDate)
        .replace(".", "")
    : null;

  return (
    <section className="border-b border-[var(--color-linea)] bg-[var(--color-crema)] pt-[var(--internal-hero-offset)]">
      <Container
        size="2xl"
        className="relative grid min-h-[260px] gap-6 py-8 lg:grid-cols-[minmax(0,1fr)_minmax(320px,0.62fr)] lg:items-center lg:gap-14 lg:py-10"
      >
        <span
          className="absolute bottom-0 left-[var(--container-padding)] h-px w-24 bg-[var(--color-dorado)]"
          aria-hidden="true"
        />
        <div className="max-w-3xl">
          <Eyebrow>Calendario institucional</Eyebrow>
          <h1 className="mt-4 max-w-3xl text-3xl font-semibold leading-[1.06] text-[var(--color-azul-marino)] sm:text-5xl lg:text-[3.35rem]">
            Fechas para encontrarnos, celebrar y participar.
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            Actividades académicas, culturales, deportivas y comunitarias en
            una agenda clara para las familias.
          </p>
        </div>

        {featuredEvent && featuredDate ? (
          <article className="grid grid-cols-[4.5rem_1fr] gap-5 border-l-2 border-[var(--color-dorado)] pl-5">
            <time
              dateTime={featuredEvent.startDate}
              className="text-center text-[var(--color-azul-marino)]"
            >
              <span className="font-display block text-5xl font-semibold leading-none">
                {featuredDate.getDate()}
              </span>
              <span className="mt-1 block text-xs font-bold uppercase text-[var(--color-guinda)]">
                {month}
              </span>
            </time>
            <div className="min-w-0">
              <p className="text-xs font-bold uppercase text-[var(--color-dorado-texto)]">
                Próximo evento
              </p>
              <h2 className="mt-1 text-xl font-semibold leading-tight text-[var(--color-azul-marino)]">
                {featuredEvent.title}
              </h2>
              <p className="sr-only">{formatFullDate(featuredDate)}</p>
              <Button
                href={`/eventos/${featuredEvent.slug}`}
                variant="ghost"
                size="sm"
                className="mt-3 !min-h-9 !px-0 text-[var(--color-guinda)]"
              >
                Ver evento
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </article>
        ) : (
          <div className="flex items-start gap-4 border-l-2 border-[var(--color-dorado)] pl-5 text-sm leading-6 text-[var(--color-muted)]">
            <CalendarDays
              className="h-6 w-6 shrink-0 text-[var(--color-guinda)]"
              aria-hidden="true"
            />
            <span>
              Las actividades aparecerán al ser revisadas y autorizadas.
            </span>
          </div>
        )}

        {demoMode ? (
          <p className="absolute bottom-2 right-[var(--container-padding)] text-[10px] font-bold uppercase text-[var(--color-advertencia-texto)]">
            Vista de desarrollo · contenido demo
          </p>
        ) : null}
      </Container>
    </section>
  );
}
