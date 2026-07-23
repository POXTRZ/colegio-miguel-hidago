import { CalendarDays } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

type CalendarHeaderProps = {
  demoMode: boolean;
};

export default function CalendarHeader({ demoMode }: CalendarHeaderProps) {
  return (
    <section className="bg-[var(--color-crema)] pt-28">
      <Container className="grid min-h-[470px] gap-10 border-b border-[var(--color-linea)] pb-14 pt-16 lg:grid-cols-[1fr_280px] lg:items-end lg:pb-20">
        <div className="max-w-3xl">
          <Eyebrow>Calendario escolar</Eyebrow>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] text-[var(--color-azul-marino)] sm:text-6xl lg:text-7xl">
            Fechas para encontrarnos y participar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Consulta actividades por fecha, categoría, estado y nivel
            educativo.
          </p>
        </div>
        <div className="flex items-start gap-4 border-l-2 border-[var(--color-dorado)] pl-5 text-sm leading-6 text-[var(--color-muted)]">
          <CalendarDays
            className="h-6 w-6 text-[var(--color-guinda)]"
            aria-hidden="true"
          />
          <span className="max-w-52">
            {demoMode
              ? "Vista de desarrollo con eventos demo"
              : "Información institucional confirmada"}
          </span>
        </div>
      </Container>
    </section>
  );
}
