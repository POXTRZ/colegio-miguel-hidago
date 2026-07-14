"use client";

import { Shield, Heart } from "lucide-react";

export default function TrustBanner() {
  return (
    <section
      id="afiliacion"
      className="relative py-8 lg:py-12 overflow-hidden"
      style={{
        background: "var(--color-noche)",
        borderTop: "1px solid rgba(201,168,76,0.08)",
        borderBottom: "1px solid rgba(201,168,76,0.08)",
      }}
    >
      {/* Decorative gradient lines */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Top gradient line */}
        <div
          className="absolute top-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
          }}
        />
        {/* Bottom gradient line */}
        <div
          className="absolute bottom-0 left-0 right-0 h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(201,168,76,0.15), transparent)",
          }}
        />
        {/* Subtle radial gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 100% 60% at 50% 50%, rgba(13,59,110,0.08) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side: Escudo icon */}
          <div className="flex-shrink-0">
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 cursor-default"
              style={{
                background:
                  "linear-gradient(135deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05))",
                border: "1px solid rgba(201,168,76,0.25)",
                boxShadow: "0 8px 25px rgba(201,168,76,0.08)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 12px 35px rgba(201,168,76,0.15)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(201,168,76,0.4)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 8px 25px rgba(201,168,76,0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(201,168,76,0.25)";
              }}
            >
              <Shield
                className="w-6 h-6"
                style={{ color: "var(--color-dorado)" }}
              />
            </div>
          </div>

          {/* Center: Texto institucional */}
          <div className="flex-1 text-center lg:text-left">
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-2"
              style={{ color: "var(--color-dorado)" }}
            >
              Afiliación institucional
            </p>
            <div className="flex flex-col lg:flex-row lg:items-baseline gap-2 lg:gap-3">
              <h3
                className="font-display font-extrabold text-xl lg:text-2xl leading-tight"
                style={{
                  color: "var(--color-blanco-azul)",
                  letterSpacing: "-0.01em",
                }}
              >
                Provincia Cristo Rey
              </h3>
              <div
                className="hidden lg:block h-6 w-px"
                style={{ background: "rgba(201,168,76,0.2)" }}
              />
              <p
                className="text-sm lg:text-base leading-relaxed"
                style={{ color: "rgba(240,244,255,0.65)" }}
              >
                <span style={{ color: "var(--color-dorado)", fontWeight: "600" }}>
                  Hermanas Franciscanas de la Inmaculada Concepción
                </span>{" "}
                · Educación con carisma desde 1960
              </p>
            </div>
          </div>

          {/* Right side: Badge */}
          <div className="flex-shrink-0 lg:pl-8">
            <div
              className="flex items-center gap-2.5 px-4 py-3 rounded-xl transition-all duration-300 cursor-default"
              style={{
                background: "rgba(201,168,76,0.08)",
                border: "1px solid rgba(201,168,76,0.2)",
                boxShadow: "0 0 0 1px rgba(13,59,110,0.1)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(201,168,76,0.12)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(201,168,76,0.3)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.background =
                  "rgba(201,168,76,0.08)";
                (e.currentTarget as HTMLDivElement).style.borderColor =
                  "rgba(201,168,76,0.2)";
              }}
            >
              <Heart
                className="w-4 h-4 shrink-0"
                style={{ color: "var(--color-guinda)" }}
              />
              <span
                className="text-xs font-semibold"
                style={{ color: "var(--color-dorado)" }}
              >
                Carisma Franciscano
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
