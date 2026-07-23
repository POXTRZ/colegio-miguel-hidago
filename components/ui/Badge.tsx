import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/components/ui/utils";

type BadgeTone = "neutral" | "burgundy" | "gold" | "success" | "warning" | "error" | "info";

const toneClasses: Record<BadgeTone, string> = {
  neutral: "border-[var(--color-linea)] bg-white text-[var(--color-muted)]",
  burgundy: "border-transparent bg-[var(--color-guinda)] text-white",
  gold: "border-transparent bg-[var(--color-dorado-decorativo)] text-[var(--color-azul-marino)]",
  success: "border-transparent bg-[var(--color-exito)] text-white",
  warning: "border-transparent bg-[var(--color-advertencia-badge)] text-white",
  error: "border-transparent bg-[var(--color-error)] text-white",
  info: "border-transparent bg-[var(--color-informacion)] text-white",
};

type BadgeProps = {
  children: ReactNode;
  className?: string;
  tone?: BadgeTone;
} & ComponentPropsWithoutRef<"span">;

export default function Badge({
  children,
  className,
  tone = "neutral",
  ...props
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-xs font-bold",
        toneClasses[tone],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
