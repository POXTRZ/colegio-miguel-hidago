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

type ModalProps = {
  children: ReactNode;
  footer?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title: string;
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
  footer,
  isOpen,
  onClose,
  title,
}: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
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
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence>
        {isOpen ? (
          <motion.div
          aria-labelledby={titleId}
          aria-modal="true"
          className="fixed inset-0 z-[var(--z-modal)] grid place-items-center overflow-y-auto bg-[var(--color-azul-marino)]/82 p-4 backdrop-blur-sm md:p-8"
          initial={{ opacity: 0 }}
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
            className="my-auto w-full max-w-5xl overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-crema)] shadow-[var(--shadow-lg)]"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-start justify-between gap-6 border-b border-[var(--color-linea)] px-5 py-4 md:px-8">
              <h2 id={titleId} className="text-2xl font-bold md:text-3xl">
                {title}
              </h2>
              <IconButton
                ref={closeButtonRef}
                aria-label="Cerrar ventana"
                onClick={onClose}
                size="sm"
              >
                <X className="h-5 w-5" aria-hidden="true" />
              </IconButton>
            </div>
            <div className="max-h-[72vh] overflow-y-auto">{children}</div>
            {footer ? (
              <div className="border-t border-[var(--color-linea)] px-5 py-4 md:px-8">
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
