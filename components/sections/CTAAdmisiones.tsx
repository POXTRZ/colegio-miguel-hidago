"use client";

import { useState, useEffect } from "react";
import { ArrowRight, ClipboardList } from "lucide-react";

export default function CTAAdmisiones() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="py-32 lg:py-48 relative overflow-hidden"
      style={{
        background: "var(--color-noche)",
      }}
    >
      {/* Fondos decorativos sutiles */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 100% at 50% 50%, rgba(139,0,51,0.1) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(13,59,110,0.08) 0%, transparent 60%)",
        }}
      />

      {/* Línea dorada superior */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
        }}
      />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          {/* Badge con animación */}
          <div
            className={`inline-flex items-center gap-2 mb-6 transition-all duration-600 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              transitionDelay: mounted ? "100ms" : "0ms",
            }}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.3)",
                boxShadow: "0 0 15px rgba(201,168,76,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 25px rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(201,168,76,0.18)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 15px rgba(201,168,76,0.1)";
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(201,168,76,0.12)";
              }}
            >
              <ClipboardList
                className="w-4 h-4"
                style={{ color: "var(--color-dorado)" }}
              />
            </div>
            <span
              className="text-xs font-bold tracking-[0.3em] uppercase"
              style={{ color: "var(--color-dorado)" }}
            >
              Admisión 2025–2026
            </span>
          </div>

          {/* Headline con animación */}
          <h2
            className={`font-display font-extrabold leading-[0.95] mb-8 mx-auto transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
            style={{
              fontSize: "clamp(2.8rem, 7vw, 5.5rem)",
              color: "var(--color-blanco-azul)",
              letterSpacing: "-0.02em",
              maxWidth: "800px",
              transitionDelay: mounted ? "200ms" : "0ms",
            }}
          >
            Únete a la familia
            <br />
            <span style={{ color: "var(--color-dorado)" }}>
              Miguel Hidalgo.
            </span>
          </h2>

          {/* Descripción con animación */}
          <p
            className={`text-base lg:text-lg leading-relaxed mb-12 max-w-2xl mx-auto transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{
              color: "rgba(240,244,255,0.65)",
              transitionDelay: mounted ? "350ms" : "0ms",
            }}
          >
            Cupo limitado para el ciclo 2025–2026. Asegura el lugar de tu hijo
            en una institución que forma personas íntegras, líderes con valores.
          </p>

          {/* CTAs con animación */}
          <div
            className={`flex flex-col sm:flex-row gap-5 justify-center items-center transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
            style={{
              transitionDelay: mounted ? "500ms" : "0ms",
            }}
          >
            {/* CTA principal */}
            <a
              href="https://wa.me/52XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              className="group px-10 py-5 rounded-lg font-bold text-sm tracking-wide transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, var(--color-guinda) 0%, #6e0028 100%)",
                color: "var(--color-blanco-azul)",
                boxShadow: "0 20px 50px rgba(139,0,51,0.3), 0 0 0 1px rgba(139,0,51,0.2), 0 0 25px rgba(201,168,76,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-6px)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 35px 90px rgba(139,0,51,0.4), 0 0 60px rgba(201,168,76,0.25), 0 0 0 1px rgba(201,168,76,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 20px 50px rgba(139,0,51,0.3), 0 0 0 1px rgba(139,0,51,0.2), 0 0 25px rgba(201,168,76,0.1)";
              }}
            >
              <span className="flex items-center gap-2.5">
                Proceso de inscripción
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </a>

            {/* CTA secundaria — Ghost premium */}
            <a
              href="/contacto"
              className="px-10 py-5 rounded-lg font-semibold text-sm tracking-wide transition-all duration-300"
              style={{
                color: "var(--color-blanco-azul)",
                background: "rgba(240,244,255,0.05)",
                boxShadow: "0 0 0 1px rgba(240,244,255,0.15), 0 0 20px rgba(201,168,76,0.05)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(201,168,76,0.12)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 15px 50px rgba(201,168,76,0.2), 0 0 40px rgba(201,168,76,0.2), 0 0 0 1px rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.background =
                  "rgba(240,244,255,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.boxShadow =
                  "0 0 0 1px rgba(240,244,255,0.15), 0 0 20px rgba(201,168,76,0.05)";
                (e.currentTarget as HTMLAnchorElement).style.transform =
                  "translateY(0)";
              }}
            >
              Agendar visita
            </a>
          </div>
        </div>
      </div>

      {/* Línea dorada inferior */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
        }}
      />
    </section>
  );
}
