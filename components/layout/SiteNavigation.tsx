"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import { aboutAnchors, headerNav } from "@/config/navigation";

type SiteNavigationProps = {
  pathname: string;
};

function isActivePath(pathname: string, href: string) {
  const [path, hash] = href.split("#");

  if (hash) {
    return false;
  }

  return path === "/"
    ? pathname === "/"
    : pathname === path || pathname.startsWith(`${path}/`);
}

export default function SiteNavigation({ pathname }: SiteNavigationProps) {
  const [aboutOpen, setAboutOpen] = useState(false);
  const aboutContainerRef = useRef<HTMLDivElement>(null);
  const aboutToggleRef = useRef<HTMLButtonElement>(null);
  const firstAboutLinkRef = useRef<HTMLAnchorElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutActive = pathname.startsWith("/quienes-somos");

  const cancelScheduledClose = useCallback(() => {
    if (closeTimerRef.current) {
      clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  }, []);

  const openAboutMenu = useCallback(() => {
    cancelScheduledClose();
    setAboutOpen(true);
  }, [cancelScheduledClose]);

  const scheduleAboutClose = useCallback(() => {
    cancelScheduledClose();
    closeTimerRef.current = setTimeout(() => setAboutOpen(false), 180);
  }, [cancelScheduledClose]);

  useEffect(() => () => cancelScheduledClose(), [cancelScheduledClose]);

  useEffect(() => {
    if (!aboutOpen) {
      return;
    }

    const closeOnOutsideClick = (event: PointerEvent) => {
      if (!aboutContainerRef.current?.contains(event.target as Node)) {
        cancelScheduledClose();
        setAboutOpen(false);
      }
    };

    document.addEventListener("pointerdown", closeOnOutsideClick);
    return () => document.removeEventListener("pointerdown", closeOnOutsideClick);
  }, [aboutOpen, cancelScheduledClose]);

  const closeAboutMenu = (returnFocus = false) => {
    cancelScheduledClose();
    setAboutOpen(false);
    if (returnFocus) {
      aboutToggleRef.current?.focus();
    }
  };

  return (
    <div className="flex items-center gap-0.5">
      <div
        ref={aboutContainerRef}
        className="relative flex items-center"
        onMouseEnter={openAboutMenu}
        onMouseLeave={scheduleAboutClose}
        onBlur={(event) => {
          if (!event.currentTarget.contains(event.relatedTarget)) {
            closeAboutMenu();
          }
        }}
      >
        <Link
          href="/quienes-somos"
          aria-current={aboutActive ? "page" : undefined}
          className={`relative flex min-h-10 items-center rounded-l-[var(--radius-md)] py-2 pl-3 pr-1 text-sm font-semibold transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-[var(--color-dorado-decorativo)] ${
            aboutActive
              ? "text-[var(--color-guinda)] after:content-['']"
              : "text-[var(--color-texto-principal)] after:content-none hover:bg-[var(--color-crema)] hover:text-[var(--color-guinda)]"
          }`}
          onClick={() => closeAboutMenu()}
        >
          Quiénes somos
        </Link>
        <button
          ref={aboutToggleRef}
          type="button"
          className={`flex h-10 w-7 items-center justify-center rounded-r-[var(--radius-md)] transition-colors ${
            aboutActive
              ? "text-[var(--color-guinda)]"
              : "text-[var(--color-texto-secundario)] hover:bg-[var(--color-crema)] hover:text-[var(--color-guinda)]"
          }`}
          aria-label="Mostrar secciones de Quiénes somos"
          aria-expanded={aboutOpen}
          aria-controls="about-navigation"
          onClick={() => {
            cancelScheduledClose();
            setAboutOpen((open) => !open);
          }}
          onKeyDown={(event) => {
            if (event.key === "ArrowDown") {
              event.preventDefault();
              openAboutMenu();
              requestAnimationFrame(() => firstAboutLinkRef.current?.focus());
            } else if (event.key === "Escape" && aboutOpen) {
              event.preventDefault();
              closeAboutMenu(true);
            }
          }}
        >
          <ChevronDown
            className={`h-4 w-4 transition-transform motion-reduce:transition-none ${aboutOpen ? "rotate-180" : ""}`}
            aria-hidden="true"
          />
        </button>

        {aboutOpen ? (
          <div
            id="about-navigation"
            className="absolute left-0 top-full z-[var(--z-dropdown)] w-80 pt-2"
            onMouseEnter={cancelScheduledClose}
            onKeyDown={(event) => {
              if (event.key === "Escape") {
                event.preventDefault();
                closeAboutMenu(true);
              }
            }}
          >
            <div className="overflow-hidden rounded-[var(--radius-md)] border border-[var(--color-bordes)] bg-white p-2 shadow-[var(--shadow-lg)]">
              <p className="border-b border-[var(--color-bordes)] px-3 pb-2 pt-1 text-[0.6875rem] font-bold uppercase tracking-normal text-[var(--color-dorado-texto)]">
                Nuestra institución
              </p>
              <div className="grid grid-cols-2 gap-1 pt-2">
                {aboutAnchors.map((link, index) => (
                  <Link
                    ref={index === 0 ? firstAboutLinkRef : undefined}
                    key={link.href}
                    href={link.href}
                    className="flex min-h-10 items-center rounded-[var(--radius-sm)] px-3 py-2 text-sm leading-snug text-[var(--color-texto-secundario)] transition-colors hover:bg-[var(--color-crema)] hover:text-[var(--color-guinda)]"
                    onClick={() => closeAboutMenu()}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        ) : null}
      </div>

      {headerNav
        .filter((link) => link.href !== "/quienes-somos")
        .map((link) => {
          const active = isActivePath(pathname, link.href);

          return (
            <Link
              key={link.href}
              href={link.href}
              aria-current={active ? "page" : undefined}
              className={`relative flex min-h-10 items-center rounded-[var(--radius-md)] px-3 py-2 text-sm font-semibold transition-colors after:absolute after:inset-x-3 after:bottom-0 after:h-0.5 after:bg-[var(--color-dorado-decorativo)] ${
                active
                  ? "text-[var(--color-guinda)] after:content-['']"
                  : "text-[var(--color-texto-principal)] after:content-none hover:bg-[var(--color-crema)] hover:text-[var(--color-guinda)]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
    </div>
  );
}
