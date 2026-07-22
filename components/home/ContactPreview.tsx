import { Mail, MapPin } from "lucide-react";
import { contactInfo } from "@/data/confirmed/contact";

export default function ContactPreview() {
  return (
    <section id="admisiones" className="bg-[var(--color-tinta)] py-24 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-5 lg:grid-cols-[1fr_0.8fr] lg:px-8">
        <div>
          <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
            Admisiones
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            Una escuela cercana para crecer con propósito.
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-white/80">
            Para el ciclo escolar 2025-2026, el colegio conserva su compromiso
            de ofrecer una educación integral con personal capacitado en cada
            sección.
          </p>
        </div>
        <div className="grid gap-3">
          <a
            href={`mailto:${contactInfo.email}`}
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-guinda)]"
          >
            Escribir por correo
            <Mail className="h-4 w-4" aria-hidden="true" />
          </a>
          <a
            href={contactInfo.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white"
          >
            Ver ubicación
            <MapPin className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
