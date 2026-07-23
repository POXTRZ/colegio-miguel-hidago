import type { MediaAsset } from "@/types/media";

export type EventStatus =
  | "upcoming"
  | "completed"
  | "rescheduled"
  | "cancelled";

export type EventCategory =
  | "academic"
  | "cultural"
  | "sports"
  | "pastoral"
  | "administrative"
  | "celebration"
  | "community";

export type EventEducationLevel =
  | "preescolar"
  | "primaria"
  | "secundaria"
  | "preparatoria"
  | "todos";

export type EventImage = MediaAsset & {
  id: string;
  type: "image";
  caption?: string;
};

export type EventVideo = {
  id: string;
  type: "video";
  title: string;
  provider: "youtube" | "vimeo" | "facebook";
  url: string;
  embedUrl?: string;
};

export type EventMedia = EventImage | EventVideo;

export type EventDocument = {
  id: string;
  title: string;
  url: string;
  format: "pdf" | "doc" | "other";
};

export type CalendarEvent = {
  id: string;
  slug: string;
  title: string;
  summary: string;
  description: string;
  startDate: string;
  endDate?: string;
  time: string;
  location: string;
  category: EventCategory;
  status: EventStatus;
  educationLevel: EventEducationLevel[];
  cover?: MediaAsset;
  media: EventMedia[];
  documents: EventDocument[];
  isDemo?: boolean;
};
