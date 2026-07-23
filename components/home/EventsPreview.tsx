import { ArrowRight, CalendarDays } from "lucide-react";
import {
  Badge,
  Button,
  Container,
  Section,
  SectionHeader,
} from "@/components/ui";
import { eventCategoryLabels } from "@/components/calendar/calendarUtils";
import { demoEvents } from "@/data/demo/events";

function getDateParts(dateValue: string) {
  const [year, month, day] = dateValue.split("-").map(Number);
  const date = new Date(Date.UTC(year, month - 1, day));

  return {
    day: new Intl.DateTimeFormat("es-MX", {
      day: "2-digit",
      timeZone: "UTC",
    }).format(date),
    month: new Intl.DateTimeFormat("es-MX", {
      month: "short",
      timeZone: "UTC",
    })
      .format(date)
      .replace(".", ""),
  };
}

export default function EventsPreview() {
  const isDevelopment = process.env.NODE_ENV === "development";
  const events = isDevelopment ? demoEvents.slice(-3) : [];

  return (
    <Section tone="white">
      <Container size="2xl">
        <SectionHeader
          eyebrow="Agenda"
          title="Próximos encuentros."
          description="La agenda reúne actividades académicas, formativas y de comunidad."
          actions={
            <Button href="/calendario" variant="secondary">
              Ver calendario
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          }
        />

        {events.length > 0 ? (
          <div className="border-t border-[var(--color-bordes)]">
            {events.map((event) => {
              const date = getDateParts(event.startDate);

              return (
                <article
                  key={event.id}
                  className="editorial-row grid gap-5 border-b border-[var(--color-bordes)] py-7 sm:grid-cols-[5rem_1fr_auto] sm:items-center"
                >
                  <time dateTime={event.startDate} className="flex items-baseline gap-2 sm:block">
                    <span className="font-display block text-4xl leading-none text-[var(--color-azul-marino)]">
                      {date.day}
                    </span>
                    <span className="mt-2 block text-xs font-bold uppercase tracking-normal text-[var(--color-guinda)]">
                      {date.month}
                    </span>
                  </time>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge>{eventCategoryLabels[event.category]}</Badge>
                      <Badge tone="warning">Demostración</Badge>
                    </div>
                    <h3 className="mt-3 text-xl font-bold text-[var(--color-azul-marino)]">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--color-texto-secundario)]">
                      {event.time} · {event.location}
                    </p>
                  </div>
                  <Button
                    href={`/eventos/${event.slug}`}
                    variant="ghost"
                    size="sm"
                    aria-label={`Ver ${event.title} en el calendario`}
                  >
                    Ver detalle
                  </Button>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="grid min-h-64 place-items-center border-y border-[var(--color-bordes)] py-12 text-center">
            <div className="max-w-md">
              <CalendarDays
                className="mx-auto h-8 w-8 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <h3 className="mt-5 text-xl font-bold text-[var(--color-azul-marino)]">
                Agenda en preparación
              </h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-texto-secundario)]">
                Publicaremos aquí los próximos eventos cuando el calendario
                oficial esté confirmado.
              </p>
            </div>
          </div>
        )}
      </Container>
    </Section>
  );
}
