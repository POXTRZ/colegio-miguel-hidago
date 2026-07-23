import type { MetadataRoute } from "next";
import { confirmedEvents } from "@/data/confirmed/events";
import { siteUrl } from "@/lib/seo";

const staticRoutes = [
  "",
  "/quienes-somos",
  "/historia",
  "/oferta-educativa",
  "/inscripciones",
  "/instalaciones",
  "/calendario",
  "/documentos",
  "/contacto",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.8,
  }));

  const eventEntries: MetadataRoute.Sitemap = confirmedEvents.map((event) => ({
    url: `${siteUrl}/eventos/${event.slug}`,
    lastModified: event.startDate,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticEntries, ...eventEntries];
}
