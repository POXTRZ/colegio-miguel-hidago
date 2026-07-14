"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ExternalLink, Menu, X } from "lucide-react";
import MobileNavigation from "@/components/layout/MobileNavigation";
import SiteNavigation from "@/components/layout/SiteNavigation";
import { facebookUrl } from "@/data/confirmed/contact";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-[var(--color-linea)] bg-white/92 shadow-[0_16px_45px_rgba(47,41,36,0.08)] backdrop-blur-xl"
          : "border-transparent bg-white/72 backdrop-blur-lg"
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 lg:px-8">
        <Link
          href="/"
          className="flex min-w-0 items-center gap-3"
          aria-label="Colegio Miguel Hidalgo - Inicio"
        >
          <span className="flex h-12 w-10 shrink-0 items-center justify-center rounded-md bg-white p-1 shadow-sm ring-1 ring-[var(--color-linea)]">
            <Image
              src="/cmh-escudo.gif"
              alt=""
              width={396}
              height={508}
              unoptimized
              className="h-full w-auto object-contain"
            />
          </span>
          <span className="min-w-0 leading-tight">
            <span className="block text-sm font-bold text-[var(--color-tinta)]">
              Colegio Miguel Hidalgo
            </span>
            <span className="block text-xs text-[var(--color-muted)]">
              HFIC - Provincia Cristo Rey
            </span>
          </span>
        </Link>

        <SiteNavigation
          pathname={pathname}
          aboutOpen={aboutOpen}
          onAboutOpenChange={setAboutOpen}
        />

        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-[var(--color-guinda)] px-4 py-2 text-sm font-bold text-white shadow-sm transition hover:bg-[var(--color-guinda-oscuro)] xl:flex"
        >
          Facebook
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-linea)] bg-white text-[var(--color-tinta)] lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Cerrar menÃº" : "Abrir menÃº"}
        >
          {menuOpen ? (
            <X className="h-5 w-5" aria-hidden="true" />
          ) : (
            <Menu className="h-5 w-5" aria-hidden="true" />
          )}
        </button>
      </nav>

      <MobileNavigation open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
