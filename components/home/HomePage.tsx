import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import ContactPreview from "@/components/home/ContactPreview";
import EducationalLevelsPreview from "@/components/home/EducationalLevelsPreview";
import EventsPreview from "@/components/home/EventsPreview";
import FacilitiesPreview from "@/components/home/FacilitiesPreview";
import HeroSection from "@/components/home/HeroSection";
import HistoryPreview from "@/components/home/HistoryPreview";
import IdentitySection from "@/components/home/IdentitySection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <SiteHeader />
      <HeroSection />
      <IdentitySection />
      <EducationalLevelsPreview />
      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-5 lg:grid-cols-2 lg:px-8">
          <HistoryPreview />
          <EventsPreview />
        </div>
      </section>
      <ContactPreview />
      <FacilitiesPreview />
      <SiteFooter />
    </main>
  );
}
