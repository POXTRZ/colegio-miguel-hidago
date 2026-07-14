"use client";

import {
  MapPin,
  Phone,
  Mail,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

// SVG Components para redes sociales
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.798.31-1.48.717-2.162 1.4-.682.682-1.09 1.365-1.4 2.162-.267.788-.469 1.658-.529 2.936C.015 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.529 2.936.31.798.717 1.48 1.4 2.162.682.682 1.365 1.09 2.162 1.4.788.268 1.658.469 2.936.529C8.333 23.985 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.529.798-.31 1.48-.717 2.162-1.4.682-.682 1.09-1.365 1.4-2.162.268-.788.469-1.658.529-2.936.057-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.529-2.936-.31-.798-.717-1.48-1.4-2.162-.682-.682-1.365-1.09-2.162-1.4-.788-.267-1.658-.469-2.936-.529C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07z" />
    <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a4 4 0 110-8 4 4 0 010 8z" />
    <circle cx="18.406" cy="5.594" r="1.44" />
  </svg>
);

const enlacesUtiles = [
  { label: "Portal de Alumnos", href: "#", tag: "Próximamente" },
  { label: "Portal Docente", href: "#", tag: "Próximamente" },
  { label: "Pagos y Colegiaturas", href: "#", tag: "Próximamente" },
  { label: "Trámites y Documentos", href: "/tramites" },
  { label: "Calendario Escolar", href: "/calendario" },
];

const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Quiénes somos", href: "#quienes-somos" },
  { label: "Niveles escolares", href: "#niveles" },
  { label: "Noticias", href: "#noticias" },
  { label: "Contacto", href: "/contacto" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--color-noche)",
        borderTop: "1px solid rgba(201,168,76,0.1)",
      }}
    >
      {/* Línea decorativa superior */}
      <div
        className="h-px w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
        }}
      />

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-20 mb-16">
          {/* Columna 1: Identidad */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-3 mb-6">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--color-guinda), #5c0022)",
                  boxShadow:
                    "0 0 0 1px rgba(201,168,76,0.3), 0 8px 20px rgba(139,0,51,0.15)",
                }}
              >
                <GraduationCap
                  className="w-6 h-6"
                  style={{ color: "var(--color-dorado)" }}
                />
              </div>
              <div>
                <p
                  className="font-display font-bold text-sm"
                  style={{
                    color: "var(--color-blanco-azul)",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Colegio Miguel
                </p>
                <p
                  className="font-display font-bold text-xs"
                  style={{ color: "var(--color-dorado)" }}
                >
                  Hidalgo
                </p>
              </div>
            </div>
            <p
              className="text-sm leading-relaxed mb-8"
              style={{ color: "rgba(240,244,255,0.5)" }}
            >
              Formando líderes con valores franciscanos. Educación integral desde kínder hasta preparatoria.
            </p>
            {/* Redes sociales */}
            <div className="flex gap-4">
              {[
                {
                  href: "https://facebook.com",
                  Icono: FacebookIcon,
                  label: "Facebook",
                },
                {
                  href: "https://instagram.com",
                  Icono: InstagramIcon,
                  label: "Instagram",
                },
              ].map(({ href, Icono, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(240,244,255,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(201,168,76,0.12)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(201,168,76,0.3)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-dorado)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.background =
                      "rgba(255,255,255,0.05)";
                    (e.currentTarget as HTMLAnchorElement).style.borderColor =
                      "rgba(255,255,255,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(240,244,255,0.5)";
                  }}
                >
                  <Icono className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-dorado)" }}
            >
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: "rgba(240,244,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-blanco-azul)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(240,244,255,0.5)")
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Enlaces útiles */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-dorado)" }}
            >
              Enlaces útiles
            </h4>
            <ul className="space-y-3">
              {enlacesUtiles.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm group/link transition-colors duration-200"
                    style={{ color: "rgba(240,244,255,0.5)" }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "var(--color-blanco-azul)")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLAnchorElement).style.color =
                        "rgba(240,244,255,0.5)")
                    }
                  >
                    {link.label}
                    {link.tag ? (
                      <span
                        className="text-[10px] px-1.5 py-0.5 rounded-full font-medium"
                        style={{
                          background: "rgba(139,0,51,0.2)",
                          border: "1px solid rgba(139,0,51,0.35)",
                          color: "rgba(240,100,130,0.9)",
                        }}
                      >
                        {link.tag}
                      </span>
                    ) : (
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover/link:opacity-60 transition-opacity" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4: Contacto */}
          <div>
            <h4
              className="text-xs font-semibold tracking-[0.2em] uppercase mb-5"
              style={{ color: "var(--color-dorado)" }}
            >
              Contacto
            </h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin
                  className="w-4 h-4 mt-0.5 shrink-0"
                  style={{ color: "var(--color-dorado)" }}
                />
                <p className="text-sm leading-relaxed" style={{ color: "rgba(240,244,255,0.5)" }}>
                  Calle Hidalgo #100, Col. Centro,<br />
                  San Luis de la Paz, Gto.
                </p>
              </li>
              <li className="flex gap-3 items-center">
                <Phone
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--color-dorado)" }}
                />
                <a
                  href="tel:+524001234567"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(240,244,255,0.5)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-blanco-azul)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(240,244,255,0.5)")
                  }
                >
                  (400) 123-4567
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail
                  className="w-4 h-4 shrink-0"
                  style={{ color: "var(--color-dorado)" }}
                />
                <a
                  href="mailto:contacto@cmh.edu.mx"
                  className="text-sm transition-colors duration-200"
                  style={{ color: "rgba(240,244,255,0.5)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "var(--color-blanco-azul)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color =
                      "rgba(240,244,255,0.5)")
                  }
                >
                  contacto@cmh.edu.mx
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(255,255,255,0.06)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(240,244,255,0.3)" }}>
            © {new Date().getFullYear()} Colegio Miguel Hidalgo · Todos los derechos reservados.
          </p>
          <p className="text-xs" style={{ color: "rgba(240,244,255,0.2)" }}>
            Hermanas Franciscanas de la Inmaculada Concepción · Provincia Cristo Rey
          </p>
        </div>
      </div>
    </footer>
  );
}
