import { RotateCcw } from "lucide-react";
import Button from "@/components/ui/Button";
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
  status: StatusFilter;
  onCategoryChange: (category: CategoryFilter) => void;
  onClear: () => void;
  onLevelChange: (level: LevelFilter) => void;
  onStatusChange: (status: StatusFilter) => void;
};

export default function CalendarFilters({
  category,
  level,
  status,
  onCategoryChange,
  onClear,
  onLevelChange,
  onStatusChange,
}: CalendarFiltersProps) {
  const hasFilters =
    category !== "all" || status !== "all" || level !== "all";

  return (
    <div className="grid gap-4 border-b border-[var(--color-linea)] py-6 lg:grid-cols-[1fr_1fr_1fr_auto] lg:items-end">
      <label className="grid gap-2 text-sm font-bold">
        Categoría
        <select
          className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-linea)] bg-white px-3 font-normal text-[var(--color-tinta)]"
          value={category}
          onChange={(event) =>
            onCategoryChange(event.target.value as CategoryFilter)
          }
        >
          <option value="all">Todas las categorías</option>
          {categories.map((item) => (
            <option key={item} value={item}>
              {eventCategoryLabels[item]}
            </option>
          ))}
        </select>
      </label>

      <label className="grid gap-2 text-sm font-bold">
        Estado
        <select
          className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-linea)] bg-white px-3 font-normal text-[var(--color-tinta)]"
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

      <label className="grid gap-2 text-sm font-bold">
        Nivel
        <select
          className="min-h-12 rounded-[var(--radius-md)] border border-[var(--color-linea)] bg-white px-3 font-normal text-[var(--color-tinta)]"
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

      <Button
        disabled={!hasFilters}
        onClick={onClear}
        variant="ghost"
        className="w-full lg:w-fit"
      >
        <RotateCcw className="h-4 w-4" aria-hidden="true" />
        Limpiar filtros
      </Button>
    </div>
  );
}
