import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import HistoryNarrative from "@/components/history/HistoryNarrative";

export default function HistoryPage() {
  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <SiteHeader />
      <section className="bg-white pt-32">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-14 lg:px-8">
          <p className="text-sm font-bold text-[var(--color-guinda)]">
            Historia
          </p>
          <h1 className="mt-5 max-w-4xl text-5xl font-bold leading-tight lg:text-6xl">
            Reseña histórica del Colegio Miguel Hidalgo.
          </h1>
        </div>
      </section>
      <HistoryNarrative />
      <SiteFooter />
    </main>
  );
}
