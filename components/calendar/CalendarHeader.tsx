import { calendarEvents } from "@/data/confirmed/events";
import { categories } from "@/components/calendar/calendarUtils";

export default function CalendarHeader() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#fffdf8_0%,#f4efe4_52%,#e8efed_100%)]" />
      <div className="absolute right-0 top-28 h-72 w-28 bg-[var(--color-guinda)]" />
      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-14 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex rounded-full border border-[var(--color-linea)] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--color-guinda)] shadow-sm">
              Calendario y eventos
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Todo lo importante, en una vista clara.
            </h1>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
              Explora actividades acadÃ©micas, pastorales, deportivas,
              admisiones y eventos de comunidad. Cambia entre mes y semana,
              filtra por categorÃ­a y abre cada evento para ver detalles.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 rounded-lg border border-white/80 bg-white/90 p-5 shadow-[0_24px_70px_rgba(58,45,32,0.12)]">
            {[
              [String(calendarEvents.length), "Eventos"],
              [String(categories.length - 1), "CategorÃ­as"],
              ["2", "Vistas"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-md border border-[var(--color-linea)] bg-[var(--color-fondo)] px-3 py-5 text-center"
              >
                <p className="text-3xl font-black text-[var(--color-guinda)]">
                  {value}
                </p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-[var(--color-muted)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
