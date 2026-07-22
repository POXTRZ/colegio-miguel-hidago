import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--color-fondo)] px-5 py-32 text-[var(--color-tinta)]">
      <div className="mx-auto max-w-3xl">
        <p className="text-sm font-bold text-[var(--color-guinda)]">
          Página no encontrada
        </p>
        <h1 className="mt-4 text-5xl font-bold leading-tight">
          No encontramos esta sección.
        </h1>
        <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
          La página pudo cambiar de ubicación o no estar disponible.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center rounded-full bg-[var(--color-guinda)] px-6 py-3 text-sm font-bold text-white transition hover:bg-[var(--color-guinda-oscuro)]"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  );
}
