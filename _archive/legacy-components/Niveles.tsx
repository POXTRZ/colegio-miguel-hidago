"use client";

import { useState, useEffect } from "react";
import { Baby, BookOpen, Microscope, Flame } from "lucide-react";

const niveles = [
  {
    id: "kinder",
    nombre: "Preescolar",
    rango: "3 – 6 años",
    descripcion:
      "Un ambiente de amor y juego donde los más pequeños despiertan su curiosidad, creatividad y primeras habilidades sociales.",
    icono: Baby,
  },
  {
    id: "primaria",
    nombre: "Primaria",
    rango: "1° – 6° grado",
    descripcion:
      "Seis años de formación sólida en habilidades académicas, valores franciscanos y desarrollo del pensamiento crítico.",
    icono: BookOpen,
  },
  {
    id: "secundaria",
    nombre: "Secundaria",
    rango: "1° – 3° año",
    descripcion:
      "Una etapa de descubrimiento personal y académico donde los alumnos construyen su identidad y proyecto de vida.",
    icono: Microscope,
  },
  {
    id: "preparatoria",
    nombre: "Preparatoria",
    rango: "1° – 3° semestre",
    descripcion:
      "Formamos bachilleres íntegros, listos para la universidad y para contribuir positivamente a la sociedad.",
    icono: Flame,
  },
];

export default function Niveles() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="niveles"
      className="py-32 lg:py-48"
      style={{ background: "var(--color-noche)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header minimalista */}
        <div className="mb-24 max-w-2xl">
          <p
            className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
            style={{ color: "var(--color-dorado)" }}
          >
            Programa académico
          </p>
          <h2
            className="font-display font-extrabold leading-[0.9] mb-6"
            style={{
              fontSize: "clamp(2.5rem, 5vw, 4rem)",
              color: "var(--color-blanco-azul)",
              letterSpacing: "-0.02em",
            }}
          >
            Un camino completo
            <br />
            <span style={{ color: "var(--color-dorado)" }}>
              hacia la excelencia.
            </span>
          </h2>
          <p
            className="text-base lg:text-lg leading-relaxed"
            style={{ color: "rgba(240,244,255,0.6)" }}
          >
            Acompañamos a cada estudiante desde kínder hasta preparatoria,
            con el mismo compromiso franciscano de excelencia académica y formación humana.
          </p>
        </div>

        {/* Grid de tarjetas — Minimalista Premium */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {niveles.map((nivel, idx) => {
            const Icono = nivel.icono;
            return (
              <div
                key={nivel.id}
                className={`group relative rounded-xl transition-all duration-600 overflow-hidden ${
                  idx >= 2 ? "lg:translate-y-6" : ""
                } ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: mounted ? `${idx * 100}ms` : "0ms",
                }}
              >
                {/* Card principal minimalista con sombras premium */}
                <div
                  className="relative p-10 rounded-xl h-full transition-all duration-500 cursor-default"
                  style={{
                    background: "var(--color-noche)",
                    border: "1px solid rgba(201,168,76,0.12)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow =
                      "0 30px 90px rgba(139,0,51,0.15), 0 0 80px rgba(201,168,76,0.25), 0 0 0 1px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.08)";
                    el.style.transform = "translateY(-12px)";
                    el.style.borderColor = "rgba(201,168,76,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow =
                      "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.04)";
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(201,168,76,0.12)";
                  }}
                >
                  {/* Contenido */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Icono elegante */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-8 transition-all duration-300"
                      style={{
                        background: "rgba(201,168,76,0.08)",
                        border: "1px solid rgba(201,168,76,0.3)",
                      }}
                    >
                      <Icono className="w-6 h-6" style={{ color: "var(--color-dorado)" }} />
                    </div>

                    {/* Badge rango — Minimalista */}
                    <p
                      className="text-xs font-semibold tracking-[0.15em] uppercase mb-4"
                      style={{ color: "var(--color-dorado)" }}
                    >
                      {nivel.rango}
                    </p>

                    {/* Nombre */}
                    <h3
                      className="font-display font-extrabold text-2xl lg:text-3xl mb-4 leading-tight"
                      style={{
                        color: "var(--color-blanco-azul)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {nivel.nombre}
                    </h3>

                    {/* Descripción */}
                    <p
                      className="text-sm lg:text-base leading-relaxed mb-8 flex-grow"
                      style={{ color: "rgba(240,244,255,0.55)" }}
                    >
                      {nivel.descripcion}
                    </p>

                    {/* Divisor sutil */}
                    <div
                      className="h-px mb-6"
                      style={{ background: "rgba(201,168,76,0.1)" }}
                    />

                    {/* Link con efecto premium */}
                    <a
                      href={`/niveles/${nivel.id}`}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 group/link"
                      style={{ color: "var(--color-dorado)" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.gap = "12px";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.gap = "8px";
                      }}
                    >
                      Ver más
                      <span className="transition-transform duration-300 inline-block group-hover/link:translate-x-1">
                        →
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
