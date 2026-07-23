import HistoryPage from "@/components/history/HistoryPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Historia",
  description:
    "Reseña histórica del Colegio Miguel Hidalgo en San Luis de la Paz.",
  path: "/historia",
});

export default function HistoriaPage() {
  return <HistoryPage />;
}
