import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/components/ui/utils";

type EyebrowTone = "burgundy" | "gold" | "muted" | "light";

const toneClasses: Record<EyebrowTone, string> = {
  burgundy: "text-[var(--color-guinda)]",
  gold: "text-[var(--color-dorado-texto)]",
  muted: "text-[var(--color-muted)]",
  light: "text-white/80",
};

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  tone?: EyebrowTone;
} & ComponentPropsWithoutRef<"p">;

export default function Eyebrow({
  children,
  className,
  tone = "burgundy",
  ...props
}: EyebrowProps) {
  return (
    <p
      className={cn("text-sm font-bold uppercase tracking-normal", toneClasses[tone], className)}
      {...props}
    >
      {children}
    </p>
  );
}
