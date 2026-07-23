import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { siteUrl } from "@/lib/seo";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fraunces",
});

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Colegio Miguel Hidalgo | Formar para construir un mundo fraterno",
    template: "%s | Colegio Miguel Hidalgo",
  },
  description:
    "Colegio Miguel Hidalgo de San Luis de la Paz, Guanajuato. Educación integral con valores evangélicos, marianos y franciscanos.",
  keywords: [
    "Colegio Miguel Hidalgo",
    "educación",
    "valores",
    "franciscanas",
    "preescolar",
    "primaria",
    "secundaria",
    "preparatoria",
  ],
  openGraph: {
    title: "Colegio Miguel Hidalgo",
    description: "Formar para construir un mundo fraterno.",
    type: "website",
    locale: "es_MX",
    siteName: "Colegio Miguel Hidalgo",
    url: "/",
    images: [
      {
        url: "/brand/shield.webp",
        alt: "Escudo del Colegio Miguel Hidalgo",
        width: 396,
        height: 508,
      },
    ],
  },
  alternates: { canonical: "/" },
  twitter: {
    card: "summary",
    title: "Colegio Miguel Hidalgo",
    description: "Formar para construir un mundo fraterno.",
    images: ["/brand/shield.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a className="skip-link" href="#main-content">
          Saltar al contenido principal
        </a>
        {children}
      </body>
    </html>
  );
}
