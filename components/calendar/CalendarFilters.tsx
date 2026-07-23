"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import {
  categories,
  educationLevelLabels,
  educationLevels,
  eventCategoryLabels,
  eventStatusLabels,
  statuses,
  type CategoryFilter,
  type LevelFilter,
  type StatusFilter,
} from "@/components/calendar/calendarUtils";

type CalendarFiltersProps = {
  category: CategoryFilter;
  level: LevelFilter;
  resultCount: number;
  status: StatusFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  onClear: () => void;
  onLevelChange: (level: LevelFilter) => void;
  onStatusChange: (status: StatusFilter) => void;
};

const selectClassName =
  "min-h-11 rounded-[var(--radius-sm)] border border-[var(--color-linea)] bg-white px-3 text-sm font-normal text-[var(--color-tinta)]";

export default function CalendarFilters({
  category,
  level,
  resultCount,
  status,
  onCategoryChange,
  onClear,
  onLevelChange,
  onStatusChange,
}: CalendarFiltersProps) {
  const hasFilters =
    category !== "all" || status !== "all" || level !== "all";
  const secondaryFilters = Number(status !== "all") + Number(level !== "all");

  return (
    <MotionConfig reducedMotion="user">
      <section
        className="border-b border-[var(--color-linea)] py-6"
        aria-labelledby="calendar-filters-title"
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2
              id="calendar-filters-title"
              className="text-sm font-bold text-[var(--color-azul-marino)]"
            >
              Explorar actividades
            </h2>
            <p
              className="mt-1 text-xs text-[var(--color-muted)]"
              aria-live="polite"
            >
              {resultCount} {resultCount === 1 ? "resultado" : "resultados"}
              {hasFilters ? " con los filtros activos" : ""}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <details className="group relative">
              <summary className="flex min-h-11 cursor-pointer list-none items-center gap-2 border border-[var(--color-linea)] bg-white px-3 text-sm font-bold text-[var(--color-azul-marino)] transition-colors hover:bg-[var(--color-crema)]">
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                Más filtros
                {secondaryFilters > 0 ? (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[var(--color-guinda)] px-1 text-[10px] text-white">
                    {secondaryFilters}
                  </span>
                ) : null}
              </summary>
              <div className="absolute right-0 z-20 mt-2 grid w-[min(19rem,calc(100vw-2.5rem))] gap-4 border border-[var(--color-linea)] bg-white p-4 shadow-[var(--shadow-md)]">
                <label className="grid gap-2 text-xs font-bold">
                  Estado
                  <select
                    className={selectClassName}
                    value={status}
                    onChange={(event) =>
                      onStatusChange(event.target.value as StatusFilter)
                    }
                  >
                    <option value="all">Todos los estados</option>
                    {statuses.map((item) => (
                      <option key={item} value={item}>
                        {eventStatusLabels[item]}
                      </option>
                    ))}
                  </select>
                </label>

                <label className="grid gap-2 text-xs font-bold">
                  Nivel
                  <select
                    className={selectClassName}
                    value={level}
                    onChange={(event) =>
                      onLevelChange(event.target.value as LevelFilter)
                    }
                  >
                    <option value="all">Todos los niveles</option>
                    {educationLevels
                      .filter((item) => item !== "todos")
                      .map((item) => (
                        <option key={item} value={item}>
                          {educationLevelLabels[item]}
                        </option>
                      ))}
                  </select>
                </label>
              </div>
            </details>

            <AnimatePresence initial={false}>
              {hasFilters ? (
                <motion.button
                  type="button"
                  onClick={onClear}
                  className="inline-flex min-h-11 items-center gap-2 px-2 text-sm font-bold text-[var(--color-guinda)]"
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                >
                  <X className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Limpiar</span>
                </motion.button>
              ) : null}
            </AnimatePresence>
          </div>
        </div>

        <div
          className="mt-5 flex flex-wrap gap-2"
          role="group"
          aria-label="Filtrar por categoría"
        >
          <button
            type="button"
            aria-pressed={category === "all"}
            onClick={() => onCategoryChange("all")}
            className={`min-h-10 border px-3 text-sm font-bold transition-colors ${
              category === "all"
                ? "border-[var(--color-azul-marino)] bg-[var(--color-azul-marino)] text-white"
                : "border-[var(--color-linea)] bg-white text-[var(--color-muted)] hover:border-[var(--color-guinda)] hover:text-[var(--color-guinda)]"
            }`}
          >
            Todas
          </button>
          {categories.map((item) => {
            const active = category === item;

            return (
              <button
                key={item}
                type="button"
                aria-pressed={active}
                onClick={() => onCategoryChange(item)}
                className={`min-h-10 border px-3 text-sm font-bold transition-colors ${
                  active
                    ? "border-[var(--color-azul-marino)] bg-[var(--color-azul-marino)] text-white"
                    : "border-[var(--color-linea)] bg-white text-[var(--color-muted)] hover:border-[var(--color-guinda)] hover:text-[var(--color-guinda)]"
                }`}
              >
                {eventCategoryLabels[item]}
              </button>
            );
          })}
        </div>
      </section>
    </MotionConfig>
  );
}
