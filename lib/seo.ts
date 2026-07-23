import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

type PageMetadata = {
  title: string;
  description: string;
  path: string;
};

export function createPageMetadata({
  title,
  description,
  path,
}: PageMetadata): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      type: "website",
      locale: "es_MX",
      siteName: "Colegio Miguel Hidalgo",
      url: path,
      images: [
        {
          url: "/brand/shield.webp",
          alt: "Escudo del Colegio Miguel Hidalgo",
          width: 396,
          height: 508,
        },
      ],
    },
    twitter: {
      card: "summary",
      title,
      description,
      images: ["/brand/shield.webp"],
    },
  };
}
