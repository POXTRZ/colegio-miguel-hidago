import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import AboutCta from "@/components/institution/AboutCta";
import AboutHero from "@/components/institution/AboutHero";
import HistorySummary from "@/components/institution/HistorySummary";
import HymnSection from "@/components/institution/HymnSection";
import MissionVision from "@/components/institution/MissionVision";
import OrganizationChart from "@/components/institution/OrganizationChart";
import ShieldMeaning from "@/components/institution/ShieldMeaning";
import ValuesSection from "@/components/institution/ValuesSection";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <SiteHeader />
      <AboutHero />
      <HistorySummary />
      <MissionVision />
      <ValuesSection />
      <HymnSection />
      <OrganizationChart />
      <ShieldMeaning />
      <AboutCta />
      <SiteFooter />
    </main>
  );
}
