import {
  ArrowRight,
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
  ManagedImage,
  Section,
} from "@/components/ui";
import { contactInfo, facebookUrl } from "@/data/confirmed/contact";
import { currentContactPhotography } from "@/data/confirmed/media";

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="min-h-screen bg-[var(--color-fondo)]">
        <section className="overflow-hidden border-b border-[var(--color-bordes)] bg-white pt-[var(--internal-hero-offset)]">
          <Container
            size="2xl"
            className="grid py-10 md:grid-cols-2 md:items-stretch lg:py-14"
          >
            <div className="relative flex min-h-[22rem] flex-col justify-end overflow-hidden bg-[var(--color-azul-marino)] p-7 text-white sm:p-9 lg:p-10 xl:p-12">
              <span
                aria-hidden="true"
                className="absolute -right-5 top-2 font-display text-[8rem] leading-none text-white/[0.045] sm:text-[11rem]"
              >
                215
              </span>
              <div className="relative z-10">
                <Eyebrow tone="light">Contacto</Eyebrow>
                <h1 className="mt-5 max-w-2xl text-4xl font-semibold leading-[1.04] text-white sm:text-[2.6rem] lg:text-[3.25rem] xl:text-6xl">
                  Estamos en el centro de San Luis de la Paz.
                </h1>
                <p className="mt-6 max-w-xl border-l-2 border-[var(--color-dorado)] pl-5 text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                  Para información escolar o de inscripciones, comunícate por
                  teléfono o visita la oficina dentro del horario de atención.
                </p>
              </div>
            </div>
            <div className="bg-[var(--color-crema)] p-2 sm:p-3">
              <ManagedImage
                asset={currentContactPhotography}
                priority
                ratio="auto"
                showCaption={false}
                imageClassName="aspect-[4/3] object-cover object-[52%_center] md:h-full md:aspect-auto"
                sizes="(min-width: 768px) 55vw, 100vw"
              />
              <p className="mt-3 border-l-2 border-[var(--color-dorado)] px-3 text-xs leading-5 text-[var(--color-muted)] md:hidden">
                {currentContactPhotography.caption}
              </p>
            </div>
          </Container>
        </section>

        <Section tone="white" spacing="md">
          <Container size="2xl">
            <div className="mb-9 grid gap-5 lg:grid-cols-[0.72fr_1.28fr] lg:items-end lg:gap-16">
              <div>
                <Eyebrow>Atención directa</Eyebrow>
                <h2 className="mt-4 text-3xl font-semibold text-[var(--color-azul-marino)] sm:text-4xl">
                  La información esencial, en un solo lugar.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-7 text-[var(--color-muted)] lg:justify-self-end">
                Puedes visitarnos, llamar a la oficina o consultar la página
                institucional del Colegio.
              </p>
            </div>

            <div className="grid border-y border-[var(--color-bordes)] md:grid-cols-2 lg:grid-cols-12">
              <article className="border-b border-[var(--color-bordes)] py-7 md:border-r md:px-6 lg:col-span-4 lg:min-h-64 lg:px-8">
                <span className="flex h-11 w-11 items-center justify-center bg-[var(--color-crema)] text-[var(--color-guinda)]">
                  <MapPin className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-7 text-xs font-bold uppercase text-[var(--color-guinda)]">
                  Dirección
                </p>
                <h3 className="mt-2 max-w-sm font-display text-2xl font-semibold leading-tight text-[var(--color-azul-marino)]">
                  {contactInfo.address}
                </h3>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {contactInfo.city}
                </p>
                <a
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-guinda)] hover:text-[var(--color-guinda-oscuro)]"
                >
                  Abrir ubicación
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </article>

              <article className="border-b border-[var(--color-bordes)] py-7 md:px-6 lg:col-span-2 lg:border-r lg:px-7">
                <span className="flex h-11 w-11 items-center justify-center bg-[var(--color-crema)] text-[var(--color-guinda)]">
                  <Phone className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-7 text-xs font-bold uppercase text-[var(--color-guinda)]">
                  Teléfono
                </p>
                <a
                  href={contactInfo.phoneHref}
                  className="mt-2 inline-block font-display text-2xl font-semibold text-[var(--color-azul-marino)] hover:text-[var(--color-guinda)]"
                >
                  {contactInfo.phone}
                </a>
              </article>

              <article className="border-b border-[var(--color-bordes)] py-7 md:border-r md:px-6 lg:col-span-3 lg:px-8">
                <span className="flex h-11 w-11 items-center justify-center bg-[var(--color-crema)] text-[var(--color-guinda)]">
                  <Clock3 className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-7 text-xs font-bold uppercase text-[var(--color-guinda)]">
                  Horario
                </p>
                <p className="mt-2 font-display text-xl font-semibold leading-7 text-[var(--color-azul-marino)]">
                  {contactInfo.officeHours}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {contactInfo.summerHours}
                </p>
              </article>

              <article className="border-b border-[var(--color-bordes)] py-7 md:px-6 lg:col-span-3 lg:px-7">
                <span className="flex h-11 w-11 items-center justify-center bg-[var(--color-crema)] text-[var(--color-guinda)]">
                  <ExternalLink className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-7 text-xs font-bold uppercase text-[var(--color-guinda)]">
                  Facebook
                </p>
                <a
                  href={facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-2 font-display text-xl font-semibold text-[var(--color-azul-marino)] hover:text-[var(--color-guinda)]"
                >
                  Página institucional
                  <ExternalLink className="h-4 w-4 shrink-0" aria-hidden="true" />
                </a>
              </article>
            </div>
          </Container>
        </Section>

        <Section tone="navy" spacing="md">
          <Container
            size="2xl"
            className="grid gap-10 lg:grid-cols-[0.5fr_1.5fr] lg:items-center lg:gap-14"
          >
            <div>
              <Eyebrow tone="light">Cómo llegar</Eyebrow>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Visítanos en Zona Centro.
              </h2>
              <p className="mt-5 max-w-md leading-7 text-white/68">
                {contactInfo.fullAddress}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col">
                <Button
                  href={contactInfo.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="light"
                  className="w-full sm:w-fit lg:w-full"
                >
                  <MapPin className="h-4 w-4" aria-hidden="true" />
                  Abrir ubicación
                </Button>
                <Button
                  href={contactInfo.phoneHref}
                  variant="secondary"
                  className="w-full border-white/35 text-white hover:bg-white/10 sm:w-fit lg:w-full"
                >
                  <Phone className="h-4 w-4" aria-hidden="true" />
                  Llamar al Colegio
                </Button>
              </div>
            </div>
            <div className="relative bg-white p-2 sm:p-3">
              <iframe
                title="Mapa de ubicación del Colegio Miguel Hidalgo"
                src={contactInfo.mapEmbedUrl}
                className="h-[360px] w-full border-0 sm:h-[440px] lg:h-[500px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
          </Container>
        </Section>

        <Section tone="white" spacing="md">
          <Container className="grid gap-7 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <Eyebrow>Conoce el Colegio</Eyebrow>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-[var(--color-azul-marino)]">
                Consulta la información del proceso de inscripciones.
              </h2>
            </div>
            <Button href="/inscripciones" variant="secondary">
              Ver inscripciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </Container>
        </Section>
      </main>
      <SiteFooter />
    </>
  );
}
