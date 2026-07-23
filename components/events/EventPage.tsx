import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CalendarDays,
  Clock,
  Download,
  MapPin,
  School,
} from "lucide-react";
import EventVideos from "@/components/events/EventVideos";
import ShareEventButton from "@/components/events/ShareEventButton";
import {
  DemoBadge,
  EventCategoryBadge,
  EventStatusBadge,
} from "@/components/calendar/EventLabels";
import {
  educationLevelLabels,
  eventDate,
  formatFullDate,
  parseDate,
} from "@/components/calendar/calendarUtils";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import Gallery from "@/components/ui/Gallery";
import Section from "@/components/ui/Section";
import type {
  CalendarEvent,
  EventImage,
  EventVideo,
} from "@/types/event";

type EventPageProps = {
  event: CalendarEvent;
  relatedEvents: CalendarEvent[];
};

export default function EventPage({
  event,
  relatedEvents,
}: EventPageProps) {
  const images = event.media.filter(
    (item): item is EventImage => item.type === "image"
  );
  const videos = event.media.filter(
    (item): item is EventVideo => item.type === "video"
  );
  const completed = event.status === "completed";

  const gallery = images.length > 0 ? (
    <Section id="galeria" tone="white">
      <Container>
        <p className="text-sm font-bold uppercase text-[var(--color-guinda)]">
          {completed ? "Memoria del evento" : "Galería"}
        </p>
        <h2 className="mt-4 text-4xl font-bold">
          {completed ? "Imágenes para volver a este encuentro." : "Material visual."}
        </h2>
        <Gallery
          className="mt-10"
          items={images}
          label={`Galería de ${event.title}`}
        />
      </Container>
    </Section>
  ) : null;

  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
        <section className="relative min-h-[650px] overflow-hidden bg-[var(--color-azul-marino)] pt-28 text-white">
          {event.cover ? (
            <Image
              alt=""
              aria-hidden="true"
              className="object-cover opacity-38"
              fill
              priority
              sizes="100vw"
              src={event.cover.src}
            />
          ) : (
            <div className="absolute inset-y-0 right-0 flex w-1/2 items-center justify-center opacity-12">
              <Image
                alt=""
                aria-hidden="true"
                src="/brand/shield.webp"
                width={396}
                height={508}
                unoptimized
                className="h-[70%] w-auto object-contain"
              />
            </div>
          )}
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,1)_0%,rgba(11,37,69,0.9)_58%,rgba(11,37,69,0.4)_100%)]" />

          <Container className="relative flex min-h-[522px] flex-col justify-end pb-16 pt-14">
            <Button
              href="/calendario"
              variant="light"
              size="sm"
              className="mb-10"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Volver al calendario
            </Button>
            <div className="flex flex-wrap gap-2">
              <EventStatusBadge status={event.status} />
              <EventCategoryBadge category={event.category} />
              {event.isDemo ? <DemoBadge /> : null}
            </div>
            <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              {event.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/76">
              {event.summary}
            </p>
          </Container>
        </section>

        <section className="bg-white">
          <Container className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex gap-3">
              <CalendarDays
                className="h-6 w-6 shrink-0 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-bold uppercase text-[var(--color-muted)]">
                  Fecha
                </p>
                <p className="mt-1 font-bold capitalize">
                  {formatFullDate(eventDate(event))}
                  {event.endDate
                    ? ` al ${formatFullDate(parseDate(event.endDate))}`
                    : null}
                </p>
              </div>
            </div>
            <div className="flex gap-3">
              <Clock
                className="h-6 w-6 shrink-0 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-bold uppercase text-[var(--color-muted)]">
                  Hora
                </p>
                <p className="mt-1 font-bold">{event.time}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <MapPin
                className="h-6 w-6 shrink-0 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-bold uppercase text-[var(--color-muted)]">
                  Lugar
                </p>
                <p className="mt-1 font-bold">{event.location}</p>
              </div>
            </div>
            <div className="flex gap-3">
              <School
                className="h-6 w-6 shrink-0 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <div>
                <p className="text-xs font-bold uppercase text-[var(--color-muted)]">
                  Nivel
                </p>
                <p className="mt-1 font-bold">
                  {event.educationLevel
                    .map((level) => educationLevelLabels[level])
                    .join(", ")}
                </p>
              </div>
            </div>
          </Container>
        </section>

        {completed ? gallery : null}

        <Section>
          <Container>
            <div className="grid gap-12 lg:grid-cols-[1fr_320px] lg:gap-20">
              <article>
                <p className="text-sm font-bold uppercase text-[var(--color-guinda)]">
                  {completed ? "Crónica" : "Información del evento"}
                </p>
                <h2 className="mt-4 text-4xl font-bold">
                  {completed ? "Lo que dejó este encuentro." : "Antes de asistir."}
                </h2>
                <p className="mt-7 text-lg leading-9 text-[var(--color-muted)]">
                  {event.description}
                </p>
              </article>
              <aside className="border-t-4 border-[var(--color-dorado)] pt-6">
                <p className="text-sm font-bold text-[var(--color-guinda)]">
                  Compartir información
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  Comparte la URL estable de este evento.
                </p>
                <ShareEventButton title={event.title} summary={event.summary} />
              </aside>
            </div>
          </Container>
        </Section>

        {!completed ? gallery : null}

        {(videos.length > 0 || event.documents.length > 0) ? (
          <Section tone="white">
            <Container className="grid gap-14">
              <EventVideos videos={videos} />
              {event.documents.length > 0 ? (
                <section aria-labelledby="event-documents">
                  <h2 id="event-documents" className="text-3xl font-bold">
                    Documentos
                  </h2>
                  <div className="mt-6 grid gap-3 md:grid-cols-2">
                    {event.documents.map((document) => (
                      <a
                        key={document.id}
                        href={document.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex min-h-16 items-center justify-between gap-4 border border-[var(--color-linea)] p-4 font-bold text-[var(--color-guinda)]"
                      >
                        {document.title}
                        <Download className="h-5 w-5" aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </section>
              ) : null}
            </Container>
          </Section>
        ) : null}

        {relatedEvents.length > 0 ? (
          <Section tone="navy">
            <Container>
              <p className="text-sm font-bold uppercase text-[var(--color-dorado-claro)]">
                También puede interesarte
              </p>
              <h2 className="mt-4 text-4xl font-bold">Eventos relacionados.</h2>
              <div className="mt-10 grid gap-5 md:grid-cols-3">
                {relatedEvents.map((related) => (
                  <Link
                    key={related.id}
                    href={`/eventos/${related.slug}`}
                    className="border-t border-white/25 py-5 text-white"
                  >
                    <p className="text-sm text-white/62">
                      {formatFullDate(eventDate(related))}
                    </p>
                    <h3 className="mt-3 text-xl font-bold">{related.title}</h3>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-dorado-claro)]">
                      Ver evento
                      <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </Link>
                ))}
              </div>
            </Container>
          </Section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
