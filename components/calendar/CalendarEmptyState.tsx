import { CalendarX2 } from "lucide-react";
import Button from "@/components/ui/Button";

type CalendarEmptyStateProps = {
  filtered?: boolean;
  onClear?: () => void;
};

export default function CalendarEmptyState({
  filtered = false,
  onClear,
}: CalendarEmptyStateProps) {
  return (
    <div className="grid min-h-72 border-y border-[var(--color-linea)] bg-[var(--color-crema)] px-6 py-12 md:grid-cols-[8rem_1fr] md:items-center md:px-10 md:text-left">
      <CalendarX2
        className="h-10 w-10 text-[var(--color-guinda)]"
        aria-hidden="true"
      />
      <div className="mt-6 max-w-2xl md:mt-0">
        <p className="text-xs font-bold uppercase text-[var(--color-dorado-texto)]">
          Calendario institucional
        </p>
        <h2 className="mt-3 text-3xl font-semibold text-[var(--color-azul-marino)]">
          {filtered
            ? "No hay eventos con estos filtros."
            : "Aún no hay eventos confirmados."}
        </h2>
        <p className="mt-3 leading-7 text-[var(--color-muted)]">
          {filtered
            ? "Prueba otra combinación o restablece todos los filtros."
            : "Las actividades aparecerán aquí cuando la información haya sido revisada y autorizada para publicación."}
        </p>
        {filtered && onClear ? (
          <Button className="mt-6" onClick={onClear} variant="secondary">
            Limpiar filtros
          </Button>
        ) : null}
      </div>
    </div>
  );
}
