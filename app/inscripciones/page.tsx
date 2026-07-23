import AdmissionsPage from "@/components/admissions/AdmissionsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Inscripciones 2026-2027",
  description:
    "Fechas, requisitos, costos, becas y políticas de inscripción confirmadas para el ciclo escolar 2026-2027.",
  path: "/inscripciones",
});

export default function InscripcionesPage() {
  return <AdmissionsPage />;
}
