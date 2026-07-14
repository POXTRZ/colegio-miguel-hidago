import Link from "next/link";
import { ArrowRight, BookOpen, Cpu, Dumbbell, HeartHandshake, Sparkles } from "lucide-react";
import { levels } from "@/data/confirmed/education-levels";
import { differentiators } from "@/data/confirmed/institution";

const featureIcons = [Sparkles, HeartHandshake, Dumbbell, Cpu];

export default function EducationalLevelsPreview() {
  return (
    <>
      <section id="academico" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Propuesta educativa
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Lo esencial, ordenado para familias reales.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
                El sitio ahora prioriza rutas claras: instituciÃ³n, calendario,
                admisiones y contacto. Menos ruido, mÃ¡s decisiones.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {differentiators.map((item, index) => {
                const Icon = featureIcons[index];
                return (
                  <article
                    key={item.title}
                    className="group rounded-lg border border-[var(--color-linea)] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(58,45,32,0.1)]"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--color-hueso)] text-[var(--color-guinda)]">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    <h3 className="mt-6 text-2xl font-bold">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                      {item.description}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Niveles escolares
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Un recorrido formativo completo.
              </h2>
            </div>
            <Link
              href="/quienes-somos#filosofia"
              className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full border border-[var(--color-linea)] bg-white px-5 py-3 text-sm font-bold transition hover:bg-[var(--color-hueso)]"
            >
              Ver filosofÃ­a
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            {levels.map((level) => (
              <article
                key={level.name}
                className="rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-6"
              >
                <BookOpen
                  className="h-7 w-7 text-[var(--color-guinda)]"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-2xl font-bold">{level.name}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                  {level.detail}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
