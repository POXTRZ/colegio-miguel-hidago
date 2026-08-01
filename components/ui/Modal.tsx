"use client";

import { AnimatePresence, MotionConfig, motion } from "framer-motion";
import { X } from "lucide-react";
import {
  type ReactNode,
  useEffect,
  useId,
  useRef,
} from "react";
import IconButton from "@/components/ui/IconButton";
import { cn } from "@/components/ui/utils";

type ModalProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
  footer?: ReactNode;
  headerStyle?: "default" | "overlay";
  isOpen: boolean;
  onClose: () => void;
  title: string;
  tone?: "default" | "dark";
};

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "[tabindex]:not([tabindex='-1'])",
].join(",");

export default function Modal({
  children,
  className,
  contentClassName,
  footer,
  headerStyle = "default",
  isOpen,
  onClose,
  title,
  tone = "default",
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );
      const first = focusable[0];
      const last = focusable.at(-1);

      if (!first || !last) {
        event.preventDefault();
        return;
      }

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            aria-labelledby={titleId}
            aria-modal="true"
            className="fixed inset-0 z-[var(--z-modal)] grid place-items-center overflow-y-auto bg-[var(--color-azul-marino)]/82 p-4 backdrop-blur-sm md:p-8"
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) {
                onClose();
              }
            }}
            role="dialog"
          >
            <motion.div
              ref={dialogRef}
              className={cn(
                "relative my-auto w-full overflow-hidden rounded-[var(--radius-lg)] shadow-[var(--shadow-lg)]",
                tone === "dark"
                  ? "max-w-7xl bg-[var(--color-azul-marino)] text-white"
                  : "max-w-5xl bg-[var(--color-crema)]",
                className,
              )}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 16 }}
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
            >
              <div
                className={cn(
                  "flex items-start justify-between gap-6 border-b px-5 py-4 md:px-8",
                  tone === "dark"
                    ? "border-white/15"
                    : "border-[var(--color-linea)]",
                  headerStyle === "overlay" &&
                    "pointer-events-none absolute inset-x-0 top-0 z-20 justify-end border-0 p-3 sm:p-4",
                )}
              >
                <h2
                  id={titleId}
                  className={cn(
                    "font-bold",
                    headerStyle === "overlay" && "sr-only",
                    tone === "dark"
                      ? "text-base text-white md:text-lg"
                      : "text-2xl md:text-3xl",
                  )}
                >
                  {title}
                </h2>
                <IconButton
                  ref={closeButtonRef}
                  aria-label="Cerrar ventana"
                  className={cn(
                    headerStyle === "overlay" &&
                      "pointer-events-auto shadow-[var(--shadow-md)]",
                  )}
                  onClick={onClose}
                  variant={tone === "dark" ? "light" : "ghost"}
                >
                  <X className="h-5 w-5" aria-hidden="true" />
                </IconButton>
              </div>
              <div
                className={cn(
                  "overflow-y-auto",
                  tone === "dark"
                    ? "max-h-[calc(100dvh-12rem)]"
                    : "max-h-[72vh]",
                  contentClassName,
                )}
              >
                {children}
              </div>
              {footer ? (
                <div
                  className={cn(
                    "border-t px-5 py-4 md:px-8",
                    tone === "dark"
                      ? "border-white/15"
                      : "border-[var(--color-linea)]",
                  )}
                >
                  {footer}
                </div>
              ) : null}
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </MotionConfig>
  );
}
