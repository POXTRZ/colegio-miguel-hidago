import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AboutCta() {
  return (
    <section className="bg-[var(--color-guinda)] py-20 text-white">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 lg:flex-row lg:items-center lg:px-8">
        <div>
          <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
            Siguiente paso
          </p>
          <h2 className="mt-3 text-4xl font-bold">Consulta fechas y eventos.</h2>
        </div>
        <Link
          href="/calendario"
          className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-guinda)]"
        >
          Abrir calendario
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
