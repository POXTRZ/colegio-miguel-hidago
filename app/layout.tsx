import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Colegio Miguel Hidalgo | Formando líderes con valores",
  description:
    "Institución educativa de excelencia afiliada a la Provincia Cristo Rey – Hermanas Franciscanas de la Inmaculada Concepción. Kínder, Primaria, Secundaria y Preparatoria.",
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
    description: "Formando líderes con valores desde hace décadas.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
