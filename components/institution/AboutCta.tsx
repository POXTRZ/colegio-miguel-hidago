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
          <h2 className="mt-3 text-4xl font-bold">Conoce nuestra oferta educativa.</h2>
        </div>
        <Link
          href="/oferta-educativa"
          className="inline-flex min-h-12 w-fit items-center gap-2 rounded-[var(--radius-md)] bg-white px-6 py-3 text-sm font-bold text-[var(--color-guinda)]"
        >
          Ver niveles educativos
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
