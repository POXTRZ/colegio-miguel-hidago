import type { Metadata } from "next";
import AboutExperience from "@/components/about/AboutExperience";

export const metadata: Metadata = {
  title: "Quiénes somos | Colegio Miguel Hidalgo",
  description:
    "Historia, filosofía, misión, visión, valores, himno, escudo y organigrama del Colegio Miguel Hidalgo.",
};

export default function QuienesSomosPage() {
  return <AboutExperience />;
}
