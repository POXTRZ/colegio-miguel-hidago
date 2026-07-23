import {
  Clock3,
  ExternalLink,
  MapPin,
  Phone,
} from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  Button,
  Container,
  Eyebrow,
  Section,
} from "@/components/ui";
import { contactInfo, facebookUrl } from "@/data/confirmed/contact";

const mapEmbedUrl =
  "https://www.google.com/maps?q=Guerrero%20215%2C%20Centro%2C%20San%20Luis%20de%20la%20Paz%2C%20Guanajuato&output=embed";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)]">
        <section className="pt-28">
          <Container size="2xl" className="grid gap-12 py-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:py-24">
            <div>
              <Eyebrow>Contacto</Eyebrow>
              <h1 className="mt-5 font-semibold text-[var(--color-azul-marino)]">
                Estamos en el centro de San Luis de la Paz.
              </h1>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Para información escolar o de inscripciones, comunícate por
              teléfono o visita la oficina dentro del horario de atención.
            </p>
          </Container>
        </section>

        <Section tone="white" spacing="md">
          <Container size="2xl">
            <div className="grid border-t border-[var(--color-bordes)] md:grid-cols-2 lg:grid-cols-4">
              <div className="border-b border-[var(--color-bordes)] py-7 lg:border-r lg:px-6 lg:first:pl-0">
                <MapPin className="h-5 w-5 text-[var(--color-guinda)]" aria-hidden="true" />
                <h2 className="mt-4 text-base font-bold">Dirección</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {contactInfo.address}<br />{contactInfo.city}
                </p>
              </div>
              <div className="border-b border-[var(--color-bordes)] py-7 lg:border-r lg:px-6">
                <Phone className="h-5 w-5 text-[var(--color-guinda)]" aria-hidden="true" />
                <h2 className="mt-4 text-base font-bold">Teléfono</h2>
                <a href={contactInfo.phoneHref} className="mt-2 inline-block text-sm text-[var(--color-muted)] hover:text-[var(--color-guinda)]">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="border-b border-[var(--color-bordes)] py-7 lg:border-r lg:px-6">
                <Clock3 className="h-5 w-5 text-[var(--color-guinda)]" aria-hidden="true" />
                <h2 className="mt-4 text-base font-bold">Horario</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {contactInfo.officeHours}<br />{contactInfo.summerHours}
                </p>
              </div>
              <div className="border-b border-[var(--color-bordes)] py-7 lg:px-6 lg:pr-0">
                <ExternalLink className="h-5 w-5 text-[var(--color-guinda)]" aria-hidden="true" />
                <h2 className="mt-4 text-base font-bold">Facebook</h2>
                <a href={facebookUrl} target="_blank" rel="noopener noreferrer" className="mt-2 inline-flex items-center gap-2 text-sm text-[var(--color-muted)] hover:text-[var(--color-guinda)]">
                  Página institucional
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Container>
        </Section>

        <Section>
          <Container size="2xl" className="grid gap-10 lg:grid-cols-[0.55fr_1.45fr] lg:items-start">
            <div>
              <h2 className="text-3xl font-semibold">Cómo llegar</h2>
              <p className="mt-4 leading-7 text-[var(--color-muted)]">
                Guerrero No. 215, Colonia Centro, San Luis de la Paz,
                Guanajuato.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button href={contactInfo.phoneHref}>
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar al colegio
                </Button>
                <Button href={contactInfo.mapsUrl} target="_blank" rel="noopener noreferrer" variant="secondary">
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Abrir ubicación
                </Button>
              </div>
            </div>
            <div className="overflow-hidden border border-[var(--color-bordes)] bg-white shadow-[var(--shadow-sm)]">
              <iframe
                title="Mapa de ubicación del Colegio Miguel Hidalgo"
                src={mapEmbedUrl}
                className="h-[420px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
