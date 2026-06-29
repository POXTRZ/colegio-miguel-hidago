import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colegio Miguel Hidalgo | Educación integral franciscana",
  description:
    "Sitio institucional del Colegio Miguel Hidalgo, comunidad educativa de las Hermanas Franciscanas de la Inmaculada Concepción, Provincia Cristo Rey.",
  keywords: [
    "Colegio Miguel Hidalgo",
    "educación",
    "valores",
    "franciscanas",
    "kinder",
    "primaria",
    "secundaria",
    "preparatoria",
  ],
  openGraph: {
    title: "Colegio Miguel Hidalgo",
    description: "Educación integral con espíritu franciscano.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">{children}</body>
    </html>
  );
}
