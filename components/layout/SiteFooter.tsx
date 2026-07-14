import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import {
  contactInfo,
  facebookUrl,
} from "@/data/confirmed/contact";
import { primaryNav } from "@/config/navigation";
import { schoolMotto } from "@/config/site";

export default function SiteFooter() {
  return (
    <footer
      id="contacto"
      className="border-t border-[var(--color-linea)] bg-[var(--color-tinta)] text-white"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-10 items-center justify-center rounded-md bg-white p-1">
              <Image
                src="/brand/shield.webp"
                alt=""
                width={396}
                height={508}
                unoptimized
                className="h-full w-auto object-contain"
              />
            </span>
            <div>
              <p className="font-bold">Colegio Miguel Hidalgo</p>
              <p className="text-sm text-white/60">HFIC</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-6 text-white/64">{schoolMotto}</p>
        </div>

        <div>
          <h3 className="font-bold">Navegación</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/64">
            {primaryNav.map((link) => (
              <Link key={link.href} href={link.href} className="hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-bold">Enlaces</h3>
          <div className="mt-4 grid gap-2 text-sm text-white/64">
            <Link href="/calendario" className="hover:text-white">
              Calendario escolar
            </Link>
            <Link href="/quienes-somos#organigrama" className="hover:text-white">
              Organigrama
            </Link>
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 hover:text-white"
            >
              Facebook
              <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold">Contacto</h3>
          <div className="mt-4 grid gap-3 text-sm text-white/64">
            <p>{contactInfo.address}</p>
            <a href={`mailto:${contactInfo.email}`} className="hover:text-white">
              {contactInfo.email}
            </a>
            <p>{contactInfo.whatsapp}</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Colegio Miguel Hidalgo. Todos los derechos
        reservados.
      </div>
    </footer>
  );
}
