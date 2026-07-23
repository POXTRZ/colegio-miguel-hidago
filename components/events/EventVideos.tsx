import { ExternalLink } from "lucide-react";
import type { EventVideo } from "@/types/event";

type EventVideosProps = {
  videos: EventVideo[];
};

export default function EventVideos({ videos }: EventVideosProps) {
  if (videos.length === 0) {
    return null;
  }

  return (
    <section aria-labelledby="event-videos">
      <h2 id="event-videos" className="text-3xl font-bold">
        Videos
      </h2>
      <div className="mt-7 grid gap-6 md:grid-cols-2">
        {videos.map((video) =>
          video.embedUrl && video.provider !== "facebook" ? (
            <figure key={video.id}>
              <div className="aspect-video overflow-hidden bg-[var(--color-azul-marino)]">
                <iframe
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full"
                  loading="lazy"
                  src={video.embedUrl}
                  title={video.title}
                />
              </div>
              <figcaption className="mt-3 text-sm text-[var(--color-muted)]">
                {video.title}
              </figcaption>
            </figure>
          ) : (
            <a
              key={video.id}
              href={video.url}
              target="_blank"
              rel="noreferrer"
              className="flex min-h-28 items-center justify-between gap-5 border border-[var(--color-linea)] bg-white p-5 font-bold text-[var(--color-guinda)]"
            >
              {video.title}
              <ExternalLink className="h-5 w-5 shrink-0" aria-hidden="true" />
            </a>
          )
        )}
      </div>
    </section>
  );
}
