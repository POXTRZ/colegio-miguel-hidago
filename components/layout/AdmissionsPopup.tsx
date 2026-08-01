"use client";

import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";

const SESSION_KEY = "cmh-admissions-popup-seen";
const DISMISS_UNTIL_KEY = "cmh-admissions-popup-dismissed-until";
const DISMISS_DAYS = 7;

function getStorage(type: "localStorage" | "sessionStorage") {
  try {
    const storage = window[type];
    const key = "__cmh_storage_test__";
    storage.setItem(key, key);
    storage.removeItem(key);
    return storage;
  } catch {
    return null;
  }
}

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [hideForSeveralDays, setHideForSeveralDays] = useState(false);
  const hideForSeveralDaysRef = useRef(false);

  useEffect(() => {
    const sessionStorage = getStorage("sessionStorage");
    const localStorage = getStorage("localStorage");

    if (sessionStorage?.getItem(SESSION_KEY)) {
      return;
    }

    if (localStorage) {
      const dismissedUntil = Number(localStorage.getItem(DISMISS_UNTIL_KEY));

      if (Number.isFinite(dismissedUntil) && dismissedUntil > Date.now()) {
        return;
      }

      localStorage.removeItem(DISMISS_UNTIL_KEY);
    }

    const openTimer = window.setTimeout(() => setIsOpen(true), 450);
    return () => window.clearTimeout(openTimer);
  }, []);

  const dismiss = useCallback(() => {
    const sessionStorage = getStorage("sessionStorage");
    const localStorage = getStorage("localStorage");
    sessionStorage?.setItem(SESSION_KEY, "true");

    if (hideForSeveralDaysRef.current && localStorage) {
      const expiration = Date.now() + DISMISS_DAYS * 24 * 60 * 60 * 1000;
      localStorage.setItem(DISMISS_UNTIL_KEY, String(expiration));
    }

    setIsOpen(false);
  }, []);

  return (
    <Modal
      className="max-h-[85dvh] max-w-[860px] border border-white/35 shadow-[0_24px_80px_rgba(6,23,42,0.32)]"
      contentClassName="max-h-[85dvh] overscroll-contain"
      headerStyle="overlay"
      isOpen={isOpen}
      onClose={dismiss}
      title="Información de inscripciones de Preescolar"
    >
      <div className="grid bg-white md:grid-cols-[minmax(0,0.48fr)_minmax(0,0.52fr)]">
        <div className="relative h-[min(38dvh,18rem)] min-h-52 w-full bg-white p-3 md:h-[min(78dvh,40rem)] md:min-h-0 md:p-5">
          <Image
            src="/images/admissions/preescolar-inscripciones-abiertas.webp"
            alt="Cartel de inscripciones abiertas para primero de Preescolar del Colegio Miguel Hidalgo"
            fill
            sizes="(max-width: 767px) 100vw, 48vw"
            className="object-contain"
          />
        </div>

        <div className="flex flex-col justify-center border-t border-[var(--color-linea)] bg-[var(--color-crema)] p-5 sm:p-6 md:min-h-[min(78dvh,40rem)] md:border-l md:border-t-0 md:p-7 lg:p-8">
          <p className="text-xs font-bold uppercase text-[var(--color-dorado-texto)]">
            Preescolar
          </p>
          <h3 className="mt-2 max-w-sm text-2xl font-bold leading-tight text-[var(--color-azul-marino)] sm:text-3xl">
            Aún hay lugares en primero
          </h3>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[var(--color-texto-secundario)]">
            Conoce la propuesta formativa y consulta directamente con el Colegio
            la disponibilidad para el ciclo vigente.
          </p>

          <div className="mt-5 flex flex-col gap-2.5">
            <Button href="/inscripciones" className="w-full" onClick={dismiss}>
              Ver inscripciones
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button
              href="/contacto"
              className="w-full"
              onClick={dismiss}
              variant="secondary"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              Contactar al Colegio
            </Button>
          </div>

          <label className="mt-5 flex cursor-pointer items-start gap-3 border-t border-[var(--color-linea)] pt-4 text-xs leading-5 text-[var(--color-texto-secundario)] sm:text-sm">
            <input
              type="checkbox"
              checked={hideForSeveralDays}
              className="mt-0.5 h-4 w-4 shrink-0 accent-[var(--color-guinda)]"
              onChange={(event) => {
                hideForSeveralDaysRef.current = event.target.checked;
                setHideForSeveralDays(event.target.checked);
              }}
            />
            No mostrar durante 7 días
          </label>
        </div>
      </div>
    </Modal>
  );
}
