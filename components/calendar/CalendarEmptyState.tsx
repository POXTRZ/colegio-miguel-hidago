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
    <div className="grid min-h-72 place-items-center border border-dashed border-[var(--color-linea)] bg-white px-6 py-12 text-center">
      <div className="max-w-md">
        <CalendarX2
          className="mx-auto h-10 w-10 text-[var(--color-guinda)]"
          aria-hidden="true"
        />
        <h2 className="mt-5 text-2xl font-bold">
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
