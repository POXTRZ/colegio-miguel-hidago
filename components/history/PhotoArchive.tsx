import Gallery from "@/components/ui/Gallery";
import Container from "@/components/ui/Container";
import Section from "@/components/ui/Section";
import SectionHeader from "@/components/ui/SectionHeader";
import { historicalMedia } from "@/data/confirmed/media";

const archiveIds = [
  "hermanas-franciscanas",
  "capilla-historica",
  "grupo-escolar-aula",
  "actividad-escolar",
  "entrega-reconocimientos",
  "comunidad-franciscana",
  "generacion-escolar",
];

export default function PhotoArchive() {
  const archive = archiveIds
    .map((id) => historicalMedia.find((asset) => asset.id === id))
    .filter((asset) => asset !== undefined);

  return (
    <Section id="archivo-fotografico" tone="white">
      <Container size="2xl">
        <SectionHeader
          eyebrow="Archivo fotográfico"
          title="Fragmentos de una memoria compartida."
          description="La clasificación se basa en lo visible en cada pieza. Fechas, generaciones y participantes permanecen pendientes hasta contar con identificación documental."
        />
        <Gallery
          items={archive}
          label="Archivo histórico del Colegio"
          variant="editorial"
        />
      </Container>
    </Section>
  );
}
