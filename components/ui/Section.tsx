import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/components/ui/utils";

type SectionSpacing = "sm" | "md" | "lg" | "none";
type SectionTone = "default" | "white" | "navy" | "burgundy";

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-16 lg:py-20",
  md: "py-20 lg:py-24",
  lg: "py-24 lg:py-32",
};

const toneClasses: Record<SectionTone, string> = {
  default: "bg-[var(--color-fondo)] text-[var(--color-tinta)]",
  white: "bg-white text-[var(--color-tinta)]",
  navy: "bg-[var(--color-azul-marino)] text-white",
  burgundy: "bg-[var(--color-guinda)] text-white",
};

type SectionProps = {
  children: ReactNode;
  className?: string;
  spacing?: SectionSpacing;
  tone?: SectionTone;
} & ComponentPropsWithoutRef<"section">;

export default function Section({
  children,
  className,
  spacing = "lg",
  tone = "default",
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(spacingClasses[spacing], toneClasses[tone], className)}
      {...props}
    >
      {children}
    </section>
  );
}
