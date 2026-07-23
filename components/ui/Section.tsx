import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/components/ui/utils";

type SectionSpacing = "sm" | "md" | "lg" | "none";
type SectionTone = "default" | "white" | "navy" | "burgundy";

const spacingClasses: Record<SectionSpacing, string> = {
  none: "",
  sm: "py-14 lg:py-18",
  md: "py-18 lg:py-22",
  lg: "py-20 lg:py-28",
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
      className={cn(
        "relative overflow-clip",
        spacingClasses[spacing],
        toneClasses[tone],
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
