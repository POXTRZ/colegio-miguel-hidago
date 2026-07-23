import { Clock3, ExternalLink, MapPin, Phone } from "lucide-react";
import {
  Button,
  Container,
  Eyebrow,
  Section,
} from "@/components/ui";
import { contactInfo, facebookUrl } from "@/data/confirmed/contact";

export default function ContactPreview() {
  return (
    <Section id="contacto" tone="white">
      <Container size="2xl">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div>
            <Eyebrow>Contacto</Eyebrow>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-[var(--color-azul-marino)] sm:text-5xl">
              Estamos en el corazón de San Luis de la Paz.
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--color-texto-secundario)]">
              La oficina del colegio atiende directamente a familias
              interesadas y a la comunidad educativa.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button href={contactInfo.phoneHref}>
                Llamar al colegio
                <Phone className="h-4 w-4" aria-hidden="true" />
              </Button>
              <Button
                href={facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Facebook
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </Button>
            </div>
          </div>

          <div className="grid border-t border-[var(--color-bordes)] sm:grid-cols-2">
            <div className="editorial-row border-b border-[var(--color-bordes)] py-7 sm:border-r sm:pr-8">
              <MapPin
                className="h-5 w-5 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-bold text-[var(--color-azul-marino)]">
                Dirección
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)]">
                {contactInfo.address}
                <br />
                {contactInfo.city}
              </p>
            </div>
            <div className="editorial-row border-b border-[var(--color-bordes)] py-7 sm:pl-8">
              <Phone
                className="h-5 w-5 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-bold text-[var(--color-azul-marino)]">
                Teléfono
              </h3>
              <a
                href={contactInfo.phoneHref}
                className="mt-2 inline-block text-sm text-[var(--color-texto-secundario)] hover:text-[var(--color-guinda)]"
              >
                {contactInfo.phone}
              </a>
            </div>
            <div className="editorial-row border-b border-[var(--color-bordes)] py-7 sm:border-b-0 sm:border-r sm:pr-8">
              <Clock3
                className="h-5 w-5 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-bold text-[var(--color-azul-marino)]">
                Horario de oficina
              </h3>
              <p className="mt-2 text-sm leading-6 text-[var(--color-texto-secundario)]">
                {contactInfo.officeHours}
                <br />
                {contactInfo.summerHours}
              </p>
            </div>
            <div className="editorial-row py-7 sm:pl-8">
              <MapPin
                className="h-5 w-5 text-[var(--color-guinda)]"
                aria-hidden="true"
              />
              <h3 className="mt-4 text-base font-bold text-[var(--color-azul-marino)]">
                Ubicación
              </h3>
              <a
                href={contactInfo.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-guinda)] hover:text-[var(--color-guinda-oscuro)]"
              >
                Abrir en Google Maps
                <ExternalLink className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
