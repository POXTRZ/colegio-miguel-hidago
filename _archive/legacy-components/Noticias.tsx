"use client";

import { useState, useEffect } from "react";
import { Calendar, ArrowRight } from "lucide-react";
import { demoNews as noticias } from "@/data/demo/news";

function formatFecha(fechaStr: string) {
  const fecha = new Date(fechaStr + "T00:00:00");
  return fecha.toLocaleDateString("es-MX", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function Noticias() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => setMounted(true));
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      id="noticias"
      className="py-32 lg:py-48"
      style={{ background: "var(--color-noche)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header asimétrico */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-end">
          <div>
            <p
              className="text-xs font-semibold tracking-[0.3em] uppercase mb-4"
              style={{ color: "var(--color-dorado)" }}
            >
              Comunidad CMH
            </p>
            <h2
              className="font-display font-extrabold leading-[0.9]"
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4rem)",
                color: "var(--color-blanco-azul)",
                letterSpacing: "-0.02em",
              }}
            >
              Últimas
              <br />
              <span style={{ color: "var(--color-dorado)" }}>
                historias CMH
              </span>
            </h2>
          </div>
          <a
            href="/noticias"
            className="flex items-center gap-3 text-sm font-bold tracking-wide uppercase transition-all duration-300 group w-fit"
            style={{ color: "rgba(240,244,255,0.6)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "var(--color-dorado)";
              const arrow = (e.currentTarget as HTMLAnchorElement).querySelector("svg");
              if (arrow) arrow.style.transform = "translateX(6px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLAnchorElement).style.color =
                "rgba(240,244,255,0.6)";
              const arrow = (e.currentTarget as HTMLAnchorElement).querySelector("svg");
              if (arrow) arrow.style.transform = "translateX(0)";
            }}
          >
            Ver todo
            <ArrowRight className="w-4 h-4 transition-transform duration-300" />
          </a>
        </div>

        {/* Tarjetas de noticias — Premium Minimalista */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {noticias.map((noticia, i) => {
            return (
              <article
                key={noticia.id}
                className={`group relative rounded-xl overflow-hidden transition-all duration-600 cursor-pointer ${
                  i > 0 ? "md:translate-y-6" : ""
                } ${
                  mounted
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: mounted ? `${i * 120}ms` : "0ms",
                }}
              >
                {/* Contenedor con sombra premium */}
                <div
                  className="h-full rounded-xl overflow-hidden flex flex-col transition-all duration-500"
                  style={{
                    background: "var(--color-noche)",
                    border: "1px solid rgba(201,168,76,0.12)",
                    boxShadow: "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow =
                      "0 30px 90px rgba(139,0,51,0.15), 0 0 80px rgba(201,168,76,0.25), 0 0 0 1px rgba(201,168,76,0.3), inset 0 1px 0 rgba(255,255,255,0.1)";
                    el.style.transform = "translateY(-10px)";
                    el.style.borderColor = "rgba(201,168,76,0.25)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.boxShadow =
                      "0 20px 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,168,76,0.08), inset 0 1px 0 rgba(255,255,255,0.05)";
                    el.style.transform = "translateY(0)";
                    el.style.borderColor = "rgba(201,168,76,0.12)";
                  }}
                >
                  {/* Imagen/Placeholder minimalista */}
                  <div
                    className="h-40 relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, rgba(13,59,110,0.15) 0%, rgba(26,26,46,0.6) 100%)`,
                    }}
                  >
                    {/* Patrón muy sutil */}
                    <div
                      className="absolute inset-0 opacity-[0.03]"
                      style={{
                        backgroundImage:
                          "radial-gradient(circle, rgba(201,168,76,1) 0.5px, transparent 0.5px)",
                        backgroundSize: "25px 25px",
                      }}
                    />

                    {/* Número decorativo extremadamente subtle */}
                    <p
                      className="absolute bottom-0 right-0 font-display font-extrabold pointer-events-none"
                      style={{
                        fontSize: "120px",
                        color: "rgba(201,168,76,0.04)",
                        lineHeight: 1,
                        marginRight: "-10px",
                        marginBottom: "-20px",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </p>

                    {/* Badge de categoría — Minimalista */}
                    <div className="absolute top-4 left-4 z-10">
                      <span
                        className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-300"
                        style={{
                          background: "transparent",
                          border: "1px solid rgba(201,168,76,0.4)",
                          color: "var(--color-dorado)",
                          letterSpacing: "0.05em",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.background =
                            "rgba(201,168,76,0.08)";
                          (e.currentTarget as HTMLSpanElement).style.borderColor =
                            "rgba(201,168,76,0.6)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLSpanElement).style.background =
                            "transparent";
                          (e.currentTarget as HTMLSpanElement).style.borderColor =
                            "rgba(201,168,76,0.4)";
                        }}
                      >
                        {noticia.categoria}
                      </span>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-7 flex flex-col flex-grow">
                    {/* Fecha */}
                    <div
                      className="flex items-center gap-2 mb-5"
                      style={{ color: "rgba(240,244,255,0.35)" }}
                    >
                      <Calendar className="w-3 h-3" />
                      <span className="text-xs font-medium tracking-wide">
                        {formatFecha(noticia.fecha)}
                      </span>
                    </div>

                    {/* Título */}
                    <h3
                      className="font-display font-extrabold text-lg leading-tight mb-4 transition-colors duration-300"
                      style={{
                        color: "var(--color-blanco-azul)",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {noticia.titulo}
                    </h3>

                    {/* Resumen */}
                    <p
                      className="text-sm leading-relaxed mb-7 flex-grow"
                      style={{ color: "rgba(240,244,255,0.5)" }}
                    >
                      {noticia.resumen}
                    </p>

                    {/* Divisor sutil */}
                    <div
                      className="h-px mb-6"
                      style={{ background: "rgba(201,168,76,0.1)" }}
                    />

                    {/* Link con efecto premium */}
                    <a
                      href={`/noticias/${noticia.slug}`}
                      className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase transition-all duration-300 group/link"
                      style={{ color: "var(--color-dorado)" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.gap = "10px";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLAnchorElement;
                        el.style.gap = "8px";
                      }}
                    >
                      Leer más
                      <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/link:translate-x-1" />
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
