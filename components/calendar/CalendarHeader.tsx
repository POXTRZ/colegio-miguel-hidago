import { CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

type CalendarHeaderProps = {
  demoMode: boolean;
};

export default function CalendarHeader({ demoMode }: CalendarHeaderProps) {
  return (
    <section className="bg-[var(--color-crema)] pt-28">
      <Container className="grid gap-8 border-b border-[var(--color-linea)] pb-12 pt-12 lg:grid-cols-[1fr_auto] lg:items-end lg:pb-16">
        <div className="max-w-3xl">
          <Eyebrow>Calendario escolar</Eyebrow>
          <h1 className="mt-4 text-5xl font-bold leading-tight sm:text-6xl">
            Fechas para encontrarnos y participar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Consulta actividades por fecha, categoría, estado y nivel
            educativo.
          </p>
        </div>
        <div className="flex items-center gap-3 border-l-2 border-[var(--color-dorado)] pl-5 text-sm text-[var(--color-muted)]">
          <CalendarDays
            className="h-6 w-6 text-[var(--color-guinda)]"
            aria-hidden="true"
          />
          <span>
            {demoMode
              ? "Vista de desarrollo con eventos demo"
              : "Información institucional confirmada"}
          </span>
        </div>
      </Container>
    </section>
  );
}
