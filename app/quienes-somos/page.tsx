import AboutPage from "@/components/institution/AboutPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Quiénes somos",
  description:
    "Historia, filosofía, misión, visión, valores, himno, escudo y organigrama del Colegio Miguel Hidalgo.",
  path: "/quienes-somos",
});

export default function QuienesSomosPage() {
  return <AboutPage />;
}
