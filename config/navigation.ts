import type { NavigationLink } from "@/types/navigation";

export const primaryNav: NavigationLink[] = [
  { label: "Inicio", href: "/" },
  { label: "Quiénes somos", href: "/quienes-somos" },
  { label: "Académico", href: "/oferta-educativa" },
  { label: "Calendario", href: "/calendario" },
  { label: "Admisiones", href: "/inscripciones" },
  { label: "Contacto", href: "/contacto" },
];

export const aboutAnchors: NavigationLink[] = [
  { label: "Reseña histórica", href: "/quienes-somos#resena" },
  { label: "Filosofía", href: "/quienes-somos#filosofia" },
  { label: "Misión", href: "/quienes-somos#mision" },
  { label: "Visión", href: "/quienes-somos#vision" },
  { label: "Valores", href: "/quienes-somos#valores" },
  { label: "Himno", href: "/quienes-somos#himno" },
  { label: "Organigrama", href: "/quienes-somos#organigrama" },
];

export const admissionsCta: NavigationLink = {
  label: "Inscripciones",
  href: "/inscripciones",
};

export const headerNav = primaryNav.filter(
  (link) => link.href !== admissionsCta.href,
);
