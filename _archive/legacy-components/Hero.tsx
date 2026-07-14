"use client";

import { useEffect, useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "var(--color-noche)",
      }}
    >
      {/* Fondo minimalista con gradiente sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 100% at 50% 0%, rgba(13,59,110,0.25) 0%, transparent 60%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 80% at 100% 100%, rgba(139,0,51,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Línea diagonal decorativa — firma visual */}
      <div
        className="absolute top-0 right-16 w-1 h-2/3 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, rgba(201,168,76,0.5) 30%, rgba(201,168,76,0.7) 50%, rgba(201,168,76,0.5) 70%, transparent 100%)",
        }}
      />

      {/* Contenido */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-24 w-full">
        <div className="max-w-4xl">
          {/* Eyebrow — pequeño y discreto */}
          <div
            className={`inline-flex items-center gap-3 mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <span
              className="text-xs font-semibold tracking-[0.3em] uppercase"
              style={{ color: "var(--color-dorado)" }}
            >
              Educación de Excelencia
            </span>
          </div>

          {/* Headline — tipografía serif grande y pesada */}
          <h1
            className={`font-display font-extrabold leading-[0.9] mb-8 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              fontSize: "clamp(3.5rem, 8vw, 7rem)",
              color: "var(--color-blanco-azul)",
              letterSpacing: "-0.02em",
              transitionDelay: "200ms",
            }}
          >
            Formando líderes
            <br />
            <span style={{ color: "var(--color-dorado)" }}>
              con valores
            </span>
          </h1>

          {/* Subtítulo — elegante y sutil */}
          <p
            className={`text-base lg:text-lg leading-relaxed mb-12 max-w-2xl transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              color: "rgba(240,244,255,0.6)",
              transitionDelay: "350ms",
              fontWeight: "400",
            }}
          >
            Educación integral de kínder a preparatoria, fundamentada en valores franciscanos,
            excelencia académica y formación humana que transforma vidas.
          </p>

          {/* CTAs — Premium con sombras amplias */}
          <div
            className={`flex flex-col sm:flex-row gap-5 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            {/* CTA principal */}
            <a
              href="#quienes-somos"
              className="group px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 text-center"
              style={{
                background: "linear-gradient(135deg, var(--color-guinda) 0%, #6e0028 100%)",
                color: "var(--color-blanco-azul)",
                boxShadow: "0 20px 50px rgba(139,0,51,0.3), 0 0 0 1px rgba(139,0,51,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 30px 70px rgba(139,0,51,0.4), 0 0 0 1px rgba(201,168,76,0.3)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 20px 50px rgba(139,0,51,0.3), 0 0 0 1px rgba(139,0,51,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              <span className="flex items-center justify-center gap-2">
                Descubre nuestro modelo
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            {/* CTA secundario — Ghost premium */}
            <a
              href="https://wa.me/52XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300 text-center"
              style={{
                color: "var(--color-blanco-azul)",
                background: "rgba(240,244,255,0.05)",
                boxShadow: "0 0 0 1px rgba(240,244,255,0.15)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 15px 40px rgba(201,168,76,0.2), 0 0 0 1px rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(201,168,76,0.08)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 0 1px rgba(240,244,255,0.15)";
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(240,244,255,0.05)";
              }}
            >
              Contactar
            </a>
          </div>

          {/* Stats — Diseño minimalista con mucho espacio */}
          <div
            className={`grid grid-cols-3 gap-16 mt-20 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: "650ms",
            }}
          >
            {[
              { valor: "4", label: "Niveles" },
              { valor: "60+", label: "Años" },
              { valor: "∞", label: "Impacto" },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p
                  className="font-display font-extrabold text-3xl"
                  style={{ color: "var(--color-dorado)" }}
                >
                  {stat.valor}
                </p>
                <p className="text-xs font-medium tracking-wide uppercase" style={{ color: "rgba(240,244,255,0.45)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#afiliacion"
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity duration-300"
        aria-label="Scroll hacia abajo"
      >
        <span className="text-xs tracking-widest uppercase" style={{ color: "var(--color-dorado)", fontSize: "9px" }}>
          DESCUBRE
        </span>
        <ChevronDown
          className="w-4 h-4 animate-bounce"
          style={{ color: "var(--color-dorado)" }}
        />
      </a>
    </section>
  );
}
