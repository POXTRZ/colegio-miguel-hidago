import type { Metadata } from "next";
import { notFound } from "next/navigation";
import EventPage from "@/components/events/EventPage";
import { getVisibleEvent, visibleEvents } from "@/data/events";

type EventRouteProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return visibleEvents.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({
  params,
}: EventRouteProps): Promise<Metadata> {
  const { slug } = await params;
  const event = getVisibleEvent(slug);

  if (!event) {
    return {
      title: "Evento no encontrado",
      robots: { index: false, follow: false },
    };
  }

  return {
    title: event.title,
    description: event.summary,
    alternates: {
      canonical: `/eventos/${event.slug}`,
    },
    openGraph: {
      title: event.title,
      description: event.summary,
      type: "article",
      locale: "es_MX",
      siteName: "Colegio Miguel Hidalgo",
      url: `/eventos/${event.slug}`,
      images: event.cover
        ? [
            {
              url: event.cover.src,
              alt: event.cover.alt,
              width: event.cover.width,
              height: event.cover.height,
            },
          ]
        : undefined,
    },
  };
}

export default async function EventRoute({ params }: EventRouteProps) {
  const { slug } = await params;
  const event = getVisibleEvent(slug);

  if (!event) {
    notFound();
  }

  const relatedEvents = visibleEvents
    .filter(
      (candidate) =>
        candidate.id !== event.id &&
        (candidate.category === event.category ||
          candidate.educationLevel.some((level) =>
            event.educationLevel.includes(level)
          ))
    )
    .slice(0, 3);

  return <EventPage event={event} relatedEvents={relatedEvents} />;
}
