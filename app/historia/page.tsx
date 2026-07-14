import type { Metadata } from "next";
import HistoryPage from "@/components/history/HistoryPage";

export const metadata: Metadata = {
  title: "Historia | Colegio Miguel Hidalgo",
  description:
    "ReseÃ±a histÃ³rica del Colegio Miguel Hidalgo en San Luis de la Paz.",
};

export default function HistoriaPage() {
  return <HistoryPage />;
}
