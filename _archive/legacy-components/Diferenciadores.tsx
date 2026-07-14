"use client";

import { useState, useEffect } from "react";
import { Languages, HeartHandshake, Dumbbell, Cpu } from "lucide-react";

const diferenciadores = [
  {
    icono: Languages,
    titulo: "Educación Integral",
    descripcion:
      "Programa de inglés integrado desde kínder, con metodología comunicativa para dominio real del idioma.",
  },
  {
    icono: HeartHandshake,
    titulo: "Formación en Valores",
    descripcion:
      "El carisma franciscano permea cada aspecto de la vida escolar: respeto, servicio, fraternidad y paz.",
  },
  {
    icono: Dumbbell,
    titulo: "Instalaciones Deportivas",
    descripcion:
      "Canchas, áreas verdes y programa deportivo que fomenta la salud integral, el trabajo en equipo y la disciplina.",
  },
  {
    icono: Cpu,
    titulo: "Tecnología e Innovación",
    descripcion:
      "Laboratorios de cómputo actualizados y herramientas digitales que preparan a nuestros alumnos para el futuro.",
  },
];

export default function Diferenciadores() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="quienes-somos"
      className="py-32 lg:py-48 relative overflow-hidden"
      style={{
        background: "var(--color-noche)",
      }}
    >
      {/* Acento de fondo minimalista */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 80%, rgba(13,59,110,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header — Asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-28 items-start">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-dorado)" }}
            >
              Nuestra propuesta
            </p>
            <h2
              className="font-display font-extrabold leading-[0.9]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                color: "var(--color-blanco-azul)",
                letterSpacing: "-0.02em",
              }}
            >
              Más que una
              <br />
              escuela.
            </h2>
          </div>
          <div className="pt-4">
            <p
              className="text-base lg:text-lg leading-relaxed"
              style={{ color: "rgba(240,244,255,0.55)" }}
            >
              Combinamos tradición franciscana con visión contemporánea. Cada programa, cada espacio, cada interacción 
              está diseñado para desarrollar personas íntegras que trasciendan en su entorno.
            </p>
          </div>
        </div>

        {/* Grid asimétrico */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {diferenciadores.map((item, i) => {
            const Icono = item.icono;
            const isEven = i % 2 === 0;
            return (
              <div
                key={item.titulo}
                className={`group relative transition-all duration-600 ${
                  isEven ? "lg:translate-y-0" : "lg:translate-y-8"
                } ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: mounted ? `${i * 100}ms` : "0ms",
                }}
              >
                {/* Card con sombra amplificada y efectos premium */}
                <div
                  className="relative p-10 lg:p-12 rounded-xl transition-all duration-500 overflow-hidden cursor-default group/card"
                  style={{
                    background: "var(--color-noche)",
                    border: "1px solid rgba(201,168,76,0.12)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.08)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow =
                      "0 30px 90px rgba(139,0,51,0.15), 0 0 60px rgba(201,168,76,0.2), 0 0 0 1px rgba(201,168,76,0.3)";
                    el.style.transform = "translateY(-10px)";
                    el.style.borderColor = "rgba(201,168,76,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow =
                      "0 20px 60px rgba(0,0,0,0.3), 0 0 0 1px rgba(201,168,76,0.08)";
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(201,168,76,0.12)";
                  }}
                >
                  {/* Gradient decorativo sutil */}
                  <div
                    className="absolute top-0 right-0 w-40 h-40 pointer-events-none opacity-10 group-hover/card:opacity-20 transition-opacity duration-500"
                    style={{
                      background:
                        "radial-gradient(circle, rgba(201,168,76,0.6), transparent)",
                      filter: "blur(50px)",
                    }}
                  />

                  {/* Contenido */}
                  <div className="relative z-10">
                    {/* Icono grande y elegante */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-300"
                      style={{
                        background: "rgba(201,168,76,0.1)",
                      }}
                    >
                      <Icono
                        className="w-8 h-8"
                        style={{ color: "var(--color-dorado)" }}
                      />
                    </div>

                    <h3
                      className="font-display font-extrabold text-2xl mb-4"
                      style={{
                        color: "var(--color-blanco-azul)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {item.titulo}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "rgba(240,244,255,0.6)" }}
                    >
                      {item.descripcion}
                    </p>
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
