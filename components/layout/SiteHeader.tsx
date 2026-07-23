"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { Menu } from "lucide-react";
import MobileNavigation from "@/components/layout/MobileNavigation";
import SiteNavigation from "@/components/layout/SiteNavigation";
import { admissionsCta } from "@/config/navigation";
import { schoolShield } from "@/data/confirmed/media";

export default function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const scrollable =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
      progressRef.current?.style.setProperty(
        "transform",
        `scaleX(${Math.min(1, Math.max(0, progress))})`,
      );
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobileMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  return (
    <>
      <header
        data-compact={scrolled}
        className={`fixed inset-x-0 top-0 z-[var(--z-sticky)] border-b border-t-[3px] border-b-[var(--color-bordes)] border-t-[var(--color-dorado-decorativo)] transition-[background-color,box-shadow] duration-[var(--duration-medium)] ease-[var(--ease-standard)] motion-reduce:transition-none ${
          scrolled
            ? "bg-white/96 shadow-[var(--shadow-md)] backdrop-blur-xl"
            : "bg-white/90 backdrop-blur-lg"
        }`}
      >
        <nav
          className={`mx-auto flex max-w-[var(--container-2xl)] items-center px-[var(--container-padding)] transition-[height,gap] duration-[var(--duration-medium)] ease-[var(--ease-standard)] motion-reduce:transition-none ${
            scrolled ? "h-[62px] gap-3" : "h-[77px] gap-4"
          }`}
          aria-label="Navegación principal"
        >
          <Link
            href="/"
            className={`group flex min-w-0 shrink-0 items-center rounded-[var(--radius-sm)] transition-[gap] duration-[var(--duration-medium)] motion-reduce:transition-none ${
              scrolled ? "gap-2.5" : "gap-3"
            }`}
            aria-label="Colegio Miguel Hidalgo - Inicio"
          >
            <span
              className={`flex shrink-0 items-center justify-center border border-[var(--color-bordes)] bg-white p-1 shadow-[var(--shadow-sm)] transition-[width,height,transform] duration-[var(--duration-medium)] ease-[var(--ease-standard)] group-hover:-translate-y-0.5 motion-reduce:transition-none ${
                scrolled ? "h-11 w-9" : "h-14 w-11"
              }`}
            >
              <Image
                src={schoolShield.src}
                alt=""
                width={schoolShield.width}
                height={schoolShield.height}
                className="h-full w-auto object-contain"
                priority
              />
            </span>
            <span className="min-w-0 leading-tight">
              <span className="font-display block whitespace-nowrap text-[1.05rem] font-semibold text-[var(--color-azul-marino)] sm:text-lg">
                Colegio Miguel Hidalgo
              </span>
              <span
                className={`hidden overflow-hidden text-[0.675rem] font-semibold uppercase tracking-normal text-[var(--color-texto-secundario)] transition-[max-height,margin,opacity] duration-[var(--duration-base)] motion-reduce:transition-none sm:block ${
                  scrolled ? "mt-0 max-h-0 opacity-0" : "mt-1 max-h-4 opacity-100"
                }`}
              >
                HFIC - Provincia Cristo Rey
              </span>
            </span>
          </Link>

          <div className="ml-auto hidden items-center gap-3 lg:flex">
            <SiteNavigation pathname={pathname} />

            <Link
              href={admissionsCta.href}
              className="inline-flex min-h-10 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-guinda)] px-4 text-sm font-bold text-white shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--color-guinda-oscuro)]"
            >
              {admissionsCta.label}
            </Link>
          </div>

          <button
            ref={menuButtonRef}
            type="button"
            className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-bordes)] bg-white text-[var(--color-azul-marino)] shadow-[var(--shadow-sm)] transition-colors hover:border-[var(--color-dorado-decorativo)] hover:bg-[var(--color-crema)] lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú principal"
            aria-controls="mobile-navigation"
            aria-expanded={menuOpen}
          >
            <Menu className="h-5 w-5" aria-hidden="true" />
          </button>
        </nav>
        <span
          ref={progressRef}
          className="absolute inset-x-0 bottom-[-1px] h-px origin-left scale-x-0 bg-[var(--color-dorado-decorativo)] will-change-transform"
          aria-hidden="true"
        />
      </header>
      <MobileNavigation
        open={menuOpen}
        pathname={pathname}
        triggerRef={menuButtonRef}
        onClose={closeMobileMenu}
      />
    </>
  );
}
