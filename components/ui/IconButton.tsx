import {
  forwardRef,
  type ButtonHTMLAttributes,
  type ReactNode,
} from "react";
import { cn } from "@/components/ui/utils";

type IconButtonVariant = "ghost" | "primary" | "light";
type IconButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<IconButtonVariant, string> = {
  ghost:
    "border border-[var(--color-linea)] bg-white text-[var(--color-tinta)] hover:bg-[var(--color-hueso)]",
  primary:
    "border border-transparent bg-[var(--button-primary-bg)] text-white hover:bg-[var(--button-primary-bg-hover)]",
  light:
    "border border-white/20 bg-white text-[var(--color-guinda)] hover:bg-[var(--color-hueso)]",
};

const sizeClasses: Record<IconButtonSize, string> = {
  sm: "h-9 w-9",
  md: "h-11 w-11",
  lg: "h-12 w-12",
};

type IconButtonProps = {
  children: ReactNode;
  className?: string;
  size?: IconButtonSize;
  variant?: IconButtonVariant;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    {
      children,
      className,
      size = "md",
      type = "button",
      variant = "ghost",
      ...props
    },
    ref
  ) {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex shrink-0 items-center justify-center rounded-full transition disabled:cursor-not-allowed disabled:opacity-50",
          sizeClasses[size],
          variantClasses[variant],
          className
        )}
        type={type}
        {...props}
      >
        {children}
      </button>
    );
  }
);

export default IconButton;
