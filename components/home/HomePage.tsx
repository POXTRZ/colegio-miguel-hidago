import AdmissionsSection from "@/components/home/AdmissionsSection";
import ContactPreview from "@/components/home/ContactPreview";
import EducationalLevelsPreview from "@/components/home/EducationalLevelsPreview";
import EventsPreview from "@/components/home/EventsPreview";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import FormationSection from "@/components/home/FormationSection";
import HeroSection from "@/components/home/HeroSection";
import HistoryPreview from "@/components/home/HistoryPreview";
import IdentitySection from "@/components/home/IdentitySection";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
        <HeroSection />
        <IdentitySection />
        <EducationalLevelsPreview />
        <FormationSection />
        <HistoryPreview />
        <FacilitiesPreview />
        <EventsPreview />
        <AdmissionsSection />
        <ContactPreview />
      </main>
      <SiteFooter />
    </>
  );
}
