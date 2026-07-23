import DocumentsPage from "@/components/documents/DocumentsPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Documentos",
  description:
    "Circulares y documentos institucionales confirmados del Colegio Miguel Hidalgo.",
  path: "/documentos",
});

export default function DocumentosPage() {
  return <DocumentsPage />;
}
