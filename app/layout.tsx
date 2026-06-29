import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Colegio Miguel Hidalgo | Formar para construir un mundo fraterno",
  description:
    "Colegio Miguel Hidalgo de San Luis de la Paz, Gto. Educación integral con valores evangélicos, marianos y franciscanos desde 1907.",
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
