"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight, X } from "lucide-react";
import { type RefObject, useEffect, useRef } from "react";
import { aboutAnchors, admissionsCta, headerNav } from "@/config/navigation";

type MobileNavigationProps = {
  open: boolean;
  pathname: string;
  triggerRef: RefObject<HTMLButtonElement | null>;
  onClose: () => void;
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

export default function MobileNavigation({
  open,
  pathname,
  triggerRef,
  onClose,
}: MobileNavigationProps) {
  const panelRef = useRef<HTMLElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const triggerElement = triggerRef.current;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    const focusFrame = requestAnimationFrame(() => {
      closeButtonRef.current?.focus();
    });

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab") {
        return;
      }

      const focusableElements = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );

      if (!focusableElements?.length) {
        return;
      }

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (event.shiftKey && document.activeElement === firstElement) {
        event.preventDefault();
        lastElement.focus();
      } else if (!event.shiftKey && document.activeElement === lastElement) {
        event.preventDefault();
        firstElement.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      cancelAnimationFrame(focusFrame);
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      triggerElement?.focus();
    };
  }, [onClose, open, triggerRef]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-navigation"
          className="fixed inset-0 z-[var(--z-modal)] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div
            className="absolute inset-0 bg-[var(--color-azul-marino)]/45 backdrop-blur-sm"
            aria-hidden="true"
            onPointerDown={onClose}
          />

          <motion.aside
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="absolute inset-y-0 right-0 flex w-full max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-[var(--color-bordes)] bg-white shadow-[var(--shadow-lg)]"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex min-h-20 items-center justify-between border-b border-[var(--color-bordes)] px-5">
              <div>
                <p
                  id="mobile-navigation-title"
                  className="font-display text-lg font-semibold text-[var(--color-azul-marino)]"
                >
                  Colegio Miguel Hidalgo
                </p>
                <p className="mt-1 text-[0.6875rem] font-semibold uppercase tracking-normal text-[var(--color-texto-secundario)]">
                  Navegación
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-[var(--radius-md)] border border-[var(--color-bordes)] text-[var(--color-azul-marino)] transition-colors hover:bg-[var(--color-crema)]"
                onClick={onClose}
                aria-label="Cerrar menú principal"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <nav
              className="flex flex-1 flex-col px-5 py-6"
              aria-label="Navegación móvil"
            >
              <div className="grid gap-1">
                {headerNav.map((link) => {
                  const active = isActivePath(pathname, link.href);

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-12 items-center justify-between rounded-[var(--radius-md)] px-3 py-2 text-base font-semibold transition-colors ${
                        active
                          ? "bg-[var(--color-crema)] text-[var(--color-guinda)]"
                          : "text-[var(--color-texto-principal)] hover:bg-[var(--color-crema)] hover:text-[var(--color-guinda)]"
                      }`}
                    >
                      {link.label}
                      <ChevronRight
                        className="h-4 w-4 text-[var(--color-dorado-texto)]"
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>

              <div className="mt-6 border-t border-[var(--color-bordes)] pt-5">
                <p className="px-3 text-[0.6875rem] font-bold uppercase tracking-normal text-[var(--color-dorado-texto)]">
                  Nuestra institución
                </p>
                <div className="mt-2 grid grid-cols-2 gap-1">
                  {aboutAnchors.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={onClose}
                      className="rounded-[var(--radius-sm)] px-3 py-2 text-sm text-[var(--color-texto-secundario)] transition-colors hover:bg-[var(--color-crema)] hover:text-[var(--color-guinda)]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                href={admissionsCta.href}
                onClick={onClose}
                className="mt-auto flex min-h-12 items-center justify-center rounded-[var(--radius-md)] bg-[var(--color-guinda)] px-5 py-3 text-sm font-bold text-white shadow-[var(--shadow-sm)] transition-colors hover:bg-[var(--color-guinda-oscuro)]"
              >
                {admissionsCta.label}
              </Link>
            </nav>
          </motion.aside>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
