import AboutCta from "@/components/institution/AboutCta";
import AboutHero from "@/components/institution/AboutHero";
import EducationalModel from "@/components/institution/EducationalModel";
import HficIdentity from "@/components/institution/HficIdentity";
import HistorySummary from "@/components/institution/HistorySummary";
import HymnSection from "@/components/institution/HymnSection";
import MissionVision from "@/components/institution/MissionVision";
import OrganizationChart from "@/components/institution/OrganizationChart";
import ShieldMeaning from "@/components/institution/ShieldMeaning";
import ValuesSection from "@/components/institution/ValuesSection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
        <AboutHero />
        <HistorySummary />
        <MissionVision />
        <ValuesSection />
        <EducationalModel />
        <HficIdentity />
        <ShieldMeaning />
        <HymnSection />
        <OrganizationChart />
        <AboutCta />
      </main>
      <SiteFooter />
    </>
  );
}
