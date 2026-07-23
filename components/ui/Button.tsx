import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/components/ui/utils";

type ButtonVariant = "primary" | "secondary" | "ghost" | "light";
type ButtonSize = "sm" | "md";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-[var(--button-primary-bg)] text-[var(--button-primary-text)] shadow-sm hover:bg-[var(--button-primary-bg-hover)] active:bg-[var(--button-primary-bg-active)] disabled:opacity-40",
  secondary:
    "border border-[var(--button-secondary-border)] bg-[var(--button-secondary-bg)] text-[var(--button-secondary-text)] hover:bg-[var(--button-secondary-bg-hover)] active:bg-[var(--button-secondary-bg-active)] disabled:border-[var(--color-bordes)] disabled:text-[var(--color-guinda)]/40",
  ghost:
    "border border-[var(--color-linea)] bg-white text-[var(--color-tinta)] shadow-sm hover:bg-[var(--color-hueso)] active:bg-[var(--color-hueso)] disabled:opacity-50",
  light:
    "bg-white text-[var(--color-guinda)] shadow-sm hover:bg-[var(--color-hueso)] active:bg-[var(--color-hueso)] disabled:opacity-60",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "min-h-10 px-4 py-2 text-sm",
  md: "min-h-12 px-6 py-3 text-sm",
};

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  size?: ButtonSize;
  variant?: ButtonVariant;
};

type NativeButtonProps = SharedButtonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type LinkButtonProps = SharedButtonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href"> & {
    href: string;
  };

type ButtonProps = NativeButtonProps | LinkButtonProps;

function isLinkButton(props: ButtonProps): props is LinkButtonProps {
  return typeof props.href === "string";
}

export default function Button(props: ButtonProps) {
  const {
    children,
    className,
    size = "md",
    variant = "primary",
  } = props;
  const classes = cn(
    "group inline-flex w-fit items-center justify-center gap-2 rounded-full font-bold transition-[transform,background-color,border-color,color,box-shadow] duration-[var(--duration-base)] ease-[var(--ease-enter)] hover:-translate-y-0.5 hover:shadow-[var(--shadow-md)] active:translate-y-0 active:shadow-[var(--shadow-sm)] motion-reduce:transform-none [&_svg]:transition-transform [&_svg]:duration-[var(--duration-base)] [&_svg]:group-hover:translate-x-0.5",
    sizeClasses[size],
    variantClasses[variant],
    className
  );

  if (isLinkButton(props)) {
    const { children: _children, className: _className, href, size: _size, variant: _variant, ...linkProps } = props;
    void _children;
    void _className;
    void _size;
    void _variant;

    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children: _children, className: _className, href: _href, size: _size, variant: _variant, ...buttonProps } = props;
  void _children;
  void _className;
  void _href;
  void _size;
  void _variant;

  return (
    <button className={classes} type="button" {...buttonProps}>
      {children}
    </button>
  );
}
