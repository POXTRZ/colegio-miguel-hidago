import HomePage from "@/components/home/HomePage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Colegio Miguel Hidalgo",
  description:
    "Educación integral desde Preescolar hasta Preparatoria en San Luis de la Paz, Guanajuato.",
  path: "/",
});

export default function Home() {
  return <HomePage />;
}
