import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ExternalLink, MapPin, Phone } from "lucide-react";
import { Button, Container, Eyebrow } from "@/components/ui";
import { contactInfo, facebookUrl } from "@/data/confirmed/contact";
import { primaryNav } from "@/config/navigation";
import { schoolMotto } from "@/config/site";
import { schoolShield } from "@/data/confirmed/media";

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-[var(--color-dorado-decorativo)] bg-[var(--color-tinta)] text-white">
      <span
        className="pointer-events-none absolute -right-8 top-28 hidden font-display text-[13rem] font-semibold leading-none text-white/[0.025] lg:block"
        aria-hidden="true"
      >
        CMH
      </span>

      <div className="border-b border-white/12">
        <Container
          size="2xl"
          className="grid gap-8 py-14 lg:grid-cols-[1fr_auto] lg:items-end lg:py-18"
        >
          <div>
            <Eyebrow tone="light">Colegio Miguel Hidalgo</Eyebrow>
            <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-[1.06] sm:text-5xl">
              {schoolMotto}
            </h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Button href="/oferta-educativa" variant="light">
              Conocer la oferta
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href="/contacto"
              variant="secondary"
              className="border-white/40 text-white hover:bg-white/10"
            >
              Hablar con el colegio
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </Container>
      </div>

      <Container
        size="2xl"
        className="relative grid grid-cols-1 gap-12 py-14 md:grid-cols-2 lg:grid-cols-[1.25fr_0.75fr_0.75fr_1fr] lg:gap-16 lg:py-18"
      >
        <div>
          <div className="flex items-center gap-4">
            <span className="flex h-16 w-13 items-center justify-center rounded-[var(--radius-sm)] bg-white p-1.5 shadow-[var(--shadow-md)]">
              <Image
                src={schoolShield.src}
                alt=""
                width={schoolShield.width}
                height={schoolShield.height}
                className="h-full w-auto object-contain"
              />
            </span>
            <div>
              <p className="font-display text-xl font-semibold">
                Colegio Miguel Hidalgo
              </p>
              <p className="mt-1 text-xs font-semibold uppercase text-white/60">
                HFIC · Provincia Cristo Rey
              </p>
            </div>
          </div>
          <p className="mt-7 max-w-sm text-sm leading-7 text-white/64">
            Educación integral con formación académica, humana y franciscana
            en San Luis de la Paz.
          </p>
          <div className="mt-7 grid gap-3 text-sm text-white/64">
            <a
              href={contactInfo.phoneHref}
              className="inline-flex items-center gap-3 hover:text-white"
            >
              <Phone
                className="h-4 w-4 text-[var(--color-dorado-claro)]"
                aria-hidden="true"
              />
              {contactInfo.phone}
            </a>
            <p className="flex items-start gap-3">
              <MapPin
                className="mt-1 h-4 w-4 shrink-0 text-[var(--color-dorado-claro)]"
                aria-hidden="true"
              />
              <span>
                {contactInfo.address}
                <br />
                {contactInfo.city}
              </span>
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">Navegación</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/64">
            {primaryNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="w-fit transition-transform hover:translate-x-1 hover:text-white motion-reduce:transform-none"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">Explorar</h3>
          <div className="mt-5 grid gap-3 text-sm text-white/64">
            <Link href="/calendario" className="w-fit hover:text-white">
              Calendario escolar
            </Link>
            <Link href="/instalaciones" className="w-fit hover:text-white">
              Instalaciones
            </Link>
            <Link href="/documentos" className="w-fit hover:text-white">
              Documentos
            </Link>
            <Link
              href="/quienes-somos#organigrama"
              className="w-fit hover:text-white"
            >
              Organigrama
            </Link>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-fit items-center gap-2 hover:text-white"
            >
              Facebook
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-sm font-bold text-white">Atención</h3>
          <div className="mt-5 grid gap-4 text-sm leading-6 text-white/64">
            <p>{contactInfo.officeHours}</p>
            <p>{contactInfo.summerHours}</p>
            <Link
              href="/inscripciones"
              className="inline-flex w-fit items-center gap-2 font-bold text-[var(--color-dorado-claro)] hover:text-white"
            >
              Inscripciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container
          size="2xl"
          className="flex flex-col gap-2 py-5 text-xs text-white/58 sm:flex-row sm:items-center sm:justify-between"
        >
          <p>
            © {new Date().getFullYear()} Colegio Miguel Hidalgo. Todos los
            derechos reservados.
          </p>
          <p>San Luis de la Paz, Guanajuato</p>
        </Container>
      </div>
    </footer>
  );
}
