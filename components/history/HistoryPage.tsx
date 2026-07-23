import HistoryContinuity from "@/components/history/HistoryContinuity";
import HistoryHero from "@/components/history/HistoryHero";
import HistoryNarrative from "@/components/history/HistoryNarrative";
import HistoricalTimeline from "@/components/history/HistoricalTimeline";
import PhotoArchive from "@/components/history/PhotoArchive";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function HistoryPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
        <HistoryHero />
        <HistoryNarrative />
        <HistoricalTimeline />
        <PhotoArchive />
        <HistoryContinuity />
      </main>
      <SiteFooter />
    </>
  );
}
