import { Filter } from "lucide-react";
import {
  categories,
  type CategoryFilter,
  type ViewMode,
} from "@/components/calendar/calendarUtils";

type CalendarFiltersProps = {
  category: CategoryFilter;
  viewMode: ViewMode;
  onCategoryChange: (category: CategoryFilter) => void;
  onViewModeChange: (viewMode: ViewMode) => void;
};

export default function CalendarFilters({
  category,
  viewMode,
  onCategoryChange,
  onViewModeChange,
}: CalendarFiltersProps) {
  return (
    <div className="mb-5 grid grid-cols-1 gap-4 lg:grid-cols-[1fr_auto] lg:items-center">
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-4 py-2 text-sm font-bold text-[var(--color-muted)]">
          <Filter className="h-4 w-4" aria-hidden="true" />
          Filtrar
        </span>
        {categories.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => onCategoryChange(item)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              category === item
                ? "bg-[var(--color-guinda)] text-white shadow-sm"
                : "border border-[var(--color-linea)] bg-white text-[var(--color-tinta)] hover:bg-[var(--color-hueso)]"
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      <div className="flex rounded-full border border-[var(--color-linea)] bg-white p-1">
        {(["month", "week"] as ViewMode[]).map((mode) => (
          <button
            key={mode}
            type="button"
            onClick={() => onViewModeChange(mode)}
            className={`rounded-full px-4 py-2 text-sm font-bold transition ${
              viewMode === mode
                ? "bg-[var(--color-tinta)] text-white"
                : "text-[var(--color-muted)] hover:bg-[var(--color-hueso)]"
            }`}
          >
            {mode === "month" ? "Mes" : "Semana"}
          </button>
        ))}
      </div>
    </div>
  );
}
