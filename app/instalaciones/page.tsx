import FacilitiesPage from "@/components/facilities/FacilitiesPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Instalaciones",
  description:
    "Aulas, canchas, cómputo, laboratorio, salón de usos múltiples, capilla y área de Preescolar.",
  path: "/instalaciones",
});

export default function InstalacionesPage() {
  return <FacilitiesPage />;
}
