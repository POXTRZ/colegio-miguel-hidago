import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

export default function EventsPreview() {
  return (
    <Link
      href="/calendario"
      className="group min-h-80 rounded-lg border border-[var(--color-linea)] bg-[var(--color-guinda)] p-8 text-white shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(125,23,52,0.2)]"
    >
      <CalendarDays className="h-10 w-10 text-[var(--color-dorado-claro)]" />
      <p className="mt-10 text-sm font-bold text-[var(--color-dorado-claro)]">
        Calendario y eventos
      </p>
      <h2 className="mt-4 text-4xl font-bold leading-tight">
        Vista mensual, semanal, filtros y detalles.
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-7 text-white/80">
        Un calendario interactivo para familias, alumnos y personal del
        colegio.
      </p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-white">
        Explorar eventos
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
