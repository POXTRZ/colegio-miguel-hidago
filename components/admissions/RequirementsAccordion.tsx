"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import Badge from "@/components/ui/Badge";
import { admissionsInfo } from "@/data/confirmed/admissions";

const requirementLevels = [
  {
    key: "preescolar",
    label: "Preescolar",
    items: admissionsInfo.requirements.preescolar,
  },
  {
    key: "primaria",
    label: "Primaria",
    items: admissionsInfo.requirements.primaria,
  },
  {
    key: "secundaria",
    label: "Secundaria",
    items: admissionsInfo.requirements.secundaria,
  },
] as const;

export default function RequirementsAccordion() {
  const [openLevels, setOpenLevels] = useState<Set<string>>(() => new Set());

  const toggleLevel = (key: string) => {
    setOpenLevels((current) => {
      const next = new Set(current);

      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }

      return next;
    });
  };

  return (
    <div className="border-t border-[var(--color-bordes)]">
      {requirementLevels.map((level, index) => {
        const isOpen = openLevels.has(level.key);
        const buttonId = `requirements-trigger-${level.key}`;
        const panelId = `requirements-panel-${level.key}`;

        return (
          <div key={level.key} className="border-b border-[var(--color-bordes)]">
            <button
              id={buttonId}
              type="button"
              className="group flex min-h-18 w-full items-center justify-between gap-5 px-1 py-5 text-left sm:px-5"
              aria-controls={panelId}
              aria-expanded={isOpen}
              onClick={() => toggleLevel(level.key)}
            >
              <span className="grid min-w-0 grid-cols-[2.5rem_minmax(0,1fr)] items-center gap-4">
                <span className="font-display text-xl text-[var(--color-dorado-texto)]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-lg font-bold text-[var(--color-azul-marino)] sm:text-xl">
                  {level.label}
                </span>
              </span>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--color-bordes)] bg-white text-[var(--color-guinda)] transition-colors group-hover:border-[var(--color-guinda)] motion-reduce:transition-none">
                {isOpen ? (
                  <Minus className="h-4 w-4" aria-hidden="true" />
                ) : (
                  <Plus className="h-4 w-4" aria-hidden="true" />
                )}
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              aria-hidden={!isOpen}
              className={`grid transition-[grid-template-rows,opacity] duration-200 ease-[var(--ease-enter)] motion-reduce:transition-none ${
                isOpen
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <ul className="grid gap-x-8 border-t border-[var(--color-bordes)] px-1 py-5 sm:grid-cols-2 sm:px-5 sm:py-6">
                  {level.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 border-b border-[var(--color-bordes)] py-3 text-sm leading-6 last:border-b-0 sm:[&:nth-last-child(2)]:border-b-0"
                    >
                      <span
                        className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--color-dorado-texto)]"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}

      <div className="border-b border-[var(--color-bordes)] px-1 py-6 sm:px-5">
        <Badge tone="warning">Preparatoria</Badge>
        <p className="mt-3 font-bold">{admissionsInfo.preparatoriaStatus}</p>
        <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
          No se publican requisitos ni costos hasta contar con confirmación
          institucional.
        </p>
      </div>
    </div>
  );
}
