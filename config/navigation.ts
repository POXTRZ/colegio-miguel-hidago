import type { NavigationLink } from "@/types/navigation";

export const primaryNav: NavigationLink[] = [
  { label: "Inicio", href: "/" },
  { label: "QuiÃ©nes somos", href: "/quienes-somos" },
  { label: "AcadÃ©mico", href: "/#academico" },
  { label: "Calendario", href: "/calendario" },
  { label: "Admisiones", href: "/#admisiones" },
  { label: "Contacto", href: "/#contacto" },
];

export const aboutAnchors: NavigationLink[] = [
  { label: "ReseÃ±a histÃ³rica", href: "/quienes-somos#resena" },
  { label: "FilosofÃ­a", href: "/quienes-somos#filosofia" },
  { label: "MisiÃ³n", href: "/quienes-somos#mision" },
  { label: "VisiÃ³n", href: "/quienes-somos#vision" },
  { label: "Valores", href: "/quienes-somos#valores" },
  { label: "Himno", href: "/quienes-somos#himno" },
  { label: "Organigrama", href: "/quienes-somos#organigrama" },
];
