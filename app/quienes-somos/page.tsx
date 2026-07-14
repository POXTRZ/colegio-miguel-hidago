import type { Metadata } from "next";
import AboutPage from "@/components/institution/AboutPage";

export const metadata: Metadata = {
  title: "Quiénes somos | Colegio Miguel Hidalgo",
  description:
    "Historia, filosofía, misión, visión, valores, himno, escudo y organigrama del Colegio Miguel Hidalgo.",
};

export default function QuienesSomosPage() {
  return <AboutPage />;
}
