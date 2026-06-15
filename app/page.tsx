import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import TrustBanner from "@/components/sections/TrustBanner";
import Diferenciadores from "@/components/sections/Diferenciadores";
import Niveles from "@/components/sections/Niveles";
import Noticias from "@/components/sections/Noticias";
import CTAAdmisiones from "@/components/sections/CTAAdmisiones";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TrustBanner />
      <Diferenciadores />
      <Niveles />
      <Noticias />
      <CTAAdmisiones />
      <Footer />
    </main>
  );
}
