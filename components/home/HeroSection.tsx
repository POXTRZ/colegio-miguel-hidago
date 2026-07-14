import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import { schoolMotto } from "@/config/site";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-28">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#fffdf8_0%,#f4efe4_48%,#e8eeeb_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,rgba(251,250,246,0),var(--color-fondo))]" />

      <div className="relative mx-auto grid min-h-[84vh] max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-24 pt-12 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-[var(--color-linea)] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--color-guinda)] shadow-sm">
            {schoolMotto}
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight text-[var(--color-tinta)] sm:text-6xl lg:text-7xl">
            EducaciÃ³n integral con raÃ­z franciscana.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--color-muted)]">
            Desde 1907, el Colegio Miguel Hidalgo acompaÃ±a a la niÃ±ez y
            juventud ludovicense con formaciÃ³n acadÃ©mica, valores humanos y
            sentido de comunidad.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/quienes-somos"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--color-guinda)] px-6 py-3 text-sm font-bold text-white shadow-[0_18px_45px_rgba(125,23,52,0.24)] transition hover:bg-[var(--color-guinda-oscuro)]"
            >
              Conocer la instituciÃ³n
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/calendario"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-6 py-3 text-sm font-bold text-[var(--color-tinta)] shadow-sm transition hover:bg-[var(--color-hueso)]"
            >
              Ver calendario
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -left-6 top-8 h-36 w-36 rounded-full border border-[var(--color-dorado)] bg-white/40" />
          <div className="absolute -right-4 bottom-8 h-40 w-28 rounded-full bg-[var(--color-salvia)]/18" />
          <div className="relative overflow-hidden rounded-lg border border-white/80 bg-white shadow-[0_28px_90px_rgba(58,45,32,0.16)]">
            <div className="grid min-h-[520px] grid-rows-[1fr_auto]">
              <div className="relative bg-[linear-gradient(145deg,#ffffff_0%,#f2eadc_52%,#e8efed_100%)] p-8">
                <div className="absolute right-0 top-0 h-full w-28 bg-[var(--color-guinda)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <div className="flex items-start gap-5 rounded-lg border border-white/90 bg-white/90 p-6 shadow-sm backdrop-blur">
                    <Image
                      src="/brand/shield.webp"
                      alt="Escudo del Colegio Miguel Hidalgo"
                      width={396}
                      height={508}
                      unoptimized
                      className="h-36 w-auto object-contain"
                    />
                    <div>
                      <p className="text-sm font-bold text-[var(--color-guinda)]">
                        Colegio Miguel Hidalgo
                      </p>
                      <p className="mt-2 text-2xl font-bold leading-tight">
                        Una comunidad que forma para servir.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      ["1907", "Trayectoria"],
                      ["HFIC", "Identidad"],
                      ["SEG", "Validez"],
                    ].map(([value, label]) => (
                      <div
                        key={value}
                        className="rounded-lg border border-white/80 bg-white/90 p-4 text-center shadow-sm"
                      >
                        <p className="text-2xl font-black text-[var(--color-guinda)]">
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

              <div className="border-t border-[var(--color-linea)] bg-[var(--color-tinta)] p-6 text-white">
                <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
                  Lema institucional
                </p>
                <p className="mt-2 text-2xl font-bold leading-tight">
                  {schoolMotto}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
