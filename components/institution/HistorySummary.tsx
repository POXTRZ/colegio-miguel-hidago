import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HistorySummary() {
  return (
    <section id="resena" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <div>
          <p className="text-sm font-bold text-[var(--color-guinda)]">
            Reseña histórica
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            Desde 1907, una presencia educativa para San Luis de la Paz.
          </h2>
        </div>
        <div className="grid gap-6 text-lg leading-9 text-[var(--color-muted)]">
          <p>
            El Colegio Miguel Hidalgo inició labores ininterrumpidamente desde
            el año de 1907, ofreciendo a la comunidad ludovicense una educación
            integral a la niñez y juventud.
          </p>
          <Link
            href="/historia"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-5 py-3 text-sm font-bold text-[var(--color-tinta)] transition hover:bg-[var(--color-hueso)]"
          >
            Ver historia completa
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
