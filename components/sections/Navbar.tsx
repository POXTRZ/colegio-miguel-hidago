"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Lock, X, Menu, GraduationCap } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloquear scroll cuando el modal está abierto
  useEffect(() => {
    document.body.style.overflow = modalOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [modalOpen]);

  const navLinks = [
    { label: "Nosotros", href: "#nosotros" },
    { label: "Niveles", href: "#niveles" },
    { label: "Noticias", href: "#noticias" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "glass shadow-lg shadow-black/30"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 lg:px-8 h-16 lg:h-20 flex items-center justify-between gap-6">
          {/* Logo — Minimalista y elegante */}
          <Link
            href="/"
            className="flex items-center gap-3 group shrink-0 transition-all duration-300"
            aria-label="Colegio Miguel Hidalgo — Inicio"
          >
            <div
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, var(--color-guinda), #5c0022)",
                boxShadow: "0 0 0 1px rgba(201,168,76,0.3), 0 8px 20px rgba(139,0,51,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 0 1px rgba(201,168,76,0.5), 0 12px 30px rgba(139,0,51,0.35)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  "0 0 0 1px rgba(201,168,76,0.3), 0 8px 20px rgba(139,0,51,0.2)";
              }}
            >
              <GraduationCap
                className="w-5 h-5 lg:w-6 lg:h-6"
                style={{ color: "var(--color-dorado)" }}
              />
            </div>
            <div className="hidden sm:flex flex-col leading-tight">
              <p
                className="font-display font-bold text-xs tracking-widest uppercase"
                style={{ color: "var(--color-blanco-azul)" }}
              >
                Colegio
              </p>
              <p
                className="font-display font-extrabold text-sm"
                style={{ color: "var(--color-dorado)", letterSpacing: "-0.01em" }}
              >
                Miguel Hidalgo
              </p>
            </div>
          </Link>

          {/* Nav links — Desktop con efecto premium */}
          <ul className="hidden lg:flex items-center gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-semibold tracking-wide transition-all duration-300"
                  style={{ color: "rgba(240,244,255,0.7)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-blanco-azul)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(240,244,255,0.7)";
                  }}
                >
                  {link.label}
                  <span
                    className="absolute bottom-1 left-4 right-4 h-px scale-x-0 transition-transform duration-300 origin-left"
                    style={{ background: "var(--color-dorado)" }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLSpanElement).classList.add(
                        "scale-x-100"
                      );
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLSpanElement).classList.remove(
                        "scale-x-100"
                      );
                    }}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* Portal button + hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setModalOpen(true)}
              className="hidden sm:flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs lg:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, var(--color-guinda), #6e0028)",
                color: "var(--color-blanco-azul)",
                boxShadow: "0 8px 25px rgba(139,0,51,0.25), 0 0 0 1px rgba(201,168,76,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 12px 35px rgba(139,0,51,0.4), 0 0 0 1px rgba(201,168,76,0.4)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.boxShadow =
                  "0 8px 25px rgba(139,0,51,0.25), 0 0 0 1px rgba(201,168,76,0.2)";
                (e.currentTarget as HTMLButtonElement).style.transform =
                  "translateY(0)";
              }}
            >
              <Lock className="w-4 h-4" />
              <span className="hidden lg:inline">Portal</span>
            </button>

            {/* Hamburger — mobile */}
            <button
              className="lg:hidden p-2 rounded-lg transition-all duration-300"
              style={{ color: "var(--color-blanco-azul)" }}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.opacity = "1";
              }}
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? "max-h-64" : "max-h-0"
          }`}
          style={{
            background: "rgba(26,26,46,0.98)",
            backdropFilter: "blur(20px)",
            borderTop: "1px solid rgba(201,168,76,0.15)",
          }}
        >
          <ul className="flex flex-col py-4 px-6 space-y-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block py-3 px-3 text-sm font-semibold rounded-lg transition-all duration-300"
                  style={{
                    color: "rgba(240,244,255,0.8)",
                  }}
                  onClick={() => setMenuOpen(false)}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(201,168,76,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-blanco-azul)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "transparent";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(240,244,255,0.8)";
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-2 border-t" style={{ borderColor: "rgba(201,168,76,0.15)" }}>
              <button
                onClick={() => {
                  setModalOpen(true);
                  setMenuOpen(false);
                }}
                className="w-full py-3 px-3 rounded-lg text-sm font-bold transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-guinda), #6e0028)",
                  color: "var(--color-blanco-azul)",
                  boxShadow: "0 0 0 1px rgba(201,168,76,0.2)",
                }}
              >
                Acceder al Portal
              </button>
            </li>
          </ul>
        </div>
      </header>

      {/* Modal — Portal próximamente */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          style={{ background: "rgba(10,10,20,0.85)", backdropFilter: "blur(8px)" }}
          onClick={(e) => e.target === e.currentTarget && setModalOpen(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl p-8 text-center"
            style={{
              background:
                "linear-gradient(145deg, #1e1e38 0%, #12122a 100%)",
              border: "1px solid rgba(201,168,76,0.3)",
              boxShadow: "0 25px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.1)",
            }}
          >
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-full transition-colors"
              style={{ color: "var(--color-gris-suave)" }}
              aria-label="Cerrar"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Icono */}
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
              style={{
                background:
                  "linear-gradient(135deg, rgba(139,0,51,0.3), rgba(139,0,51,0.1))",
                border: "1px solid rgba(139,0,51,0.4)",
              }}
            >
              <Lock className="w-7 h-7" style={{ color: "var(--color-dorado)" }} />
            </div>

            <p
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-2"
              style={{ color: "var(--color-dorado)" }}
            >
              Próximamente
            </p>
            <h3
              className="font-display text-2xl font-bold mb-3"
              style={{ color: "var(--color-blanco-azul)" }}
            >
              Nuevo Portal Escolar
            </h3>
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "var(--color-gris-suave)" }}
            >
              Estamos construyendo un espacio digital exclusivo para nuestra comunidad escolar: calificaciones, pagos, comunicados y más, todo en un solo lugar.
            </p>

            <div
              className="flex items-center gap-3 p-3 rounded-xl mb-6"
              style={{ background: "rgba(201,168,76,0.08)", border: "1px solid rgba(201,168,76,0.15)" }}
            >
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      background: "var(--color-dorado)",
                      animationDelay: `${i * 0.2}s`,
                      opacity: 1 - i * 0.25,
                    }}
                  />
                ))}
              </div>
              <p className="text-xs" style={{ color: "var(--color-dorado)" }}>
                Portal de alumnos en desarrollo — Ciclo 2025-2026
              </p>
            </div>

            <button
              onClick={() => setModalOpen(false)}
              className="w-full py-3 rounded-xl text-sm font-semibold transition-all duration-300"
              style={{
                background: "rgba(139,0,51,0.2)",
                border: "1px solid rgba(139,0,51,0.4)",
                color: "var(--color-blanco-azul)",
              }}
            >
              Entendido
            </button>
          </div>
        </div>
      )}
    </>
  );
}
