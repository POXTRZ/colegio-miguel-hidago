import ContactPage from "@/components/contact/ContactPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Dirección, teléfono, horario de oficina, Facebook y ubicación del Colegio Miguel Hidalgo.",
  path: "/contacto",
});

export default function ContactoPage() {
  return <ContactPage />;
}
