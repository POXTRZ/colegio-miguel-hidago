import EducationPage from "@/components/education/EducationPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Oferta educativa",
  description:
    "Preescolar, Primaria, Secundaria y Preparatoria con formación académica, humana y franciscana.",
  path: "/oferta-educativa",
});

export default function OfertaEducativaPage() {
  return <EducationPage />;
}
