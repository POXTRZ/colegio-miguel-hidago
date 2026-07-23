import type { ReactNode } from "react";
import { cn } from "@/components/ui/utils";
import Eyebrow from "@/components/ui/Eyebrow";

type SectionHeaderAlign = "left" | "center";
type SectionHeaderTone = "default" | "light";

type SectionHeaderProps = {
  actions?: ReactNode;
  align?: SectionHeaderAlign;
  className?: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  title: ReactNode;
  tone?: SectionHeaderTone;
};

export default function SectionHeader({
  actions,
  align = "left",
  className,
  description,
  eyebrow,
  title,
  tone = "default",
}: SectionHeaderProps) {
  const centered = align === "center";
  const light = tone === "light";

  return (
    <div
      className={cn(
        "mb-14 flex flex-col gap-7",
        centered ? "items-center text-center" : "lg:flex-row lg:items-end lg:justify-between",
        className
      )}
    >
      <div className="max-w-3xl">
        {eyebrow ? (
          <Eyebrow tone={light ? "light" : "burgundy"}>{eyebrow}</Eyebrow>
        ) : null}
        <h2
          className={cn(
            "mt-5 max-w-[18ch] text-4xl font-semibold leading-[1.06] lg:text-5xl",
            light ? "text-white" : "text-[var(--color-azul-marino)]",
          )}
        >
          {title}
        </h2>
        {description ? (
          <p
            className={cn(
              "mt-5 text-lg leading-8",
              light ? "text-white/76" : "text-[var(--color-muted)]"
            )}
          >
            {description}
          </p>
        ) : null}
      </div>
      {actions ? <div className="shrink-0 lg:pb-1">{actions}</div> : null}
    </div>
  );
}
