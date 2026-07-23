"use client";

import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import IconButton from "@/components/ui/IconButton";
import Modal from "@/components/ui/Modal";
import { cn } from "@/components/ui/utils";
import type { MediaAsset } from "@/types/media";

type GalleryProps = {
  className?: string;
  items: MediaAsset[];
  label?: string;
};

export default function Gallery({
  className,
  items,
  label = "Galería de imágenes",
}: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const selected = items[selectedIndex];
  const showTechnicalStatus =
    process.env.NODE_ENV === "development" &&
    (selected?.status === "provisional" ||
      selected?.status === "pending-replacement");

  const move = useCallback(
    (direction: -1 | 1) => {
      setSelectedIndex((current) =>
        (current + direction + items.length) % items.length
      );
    },
    [items.length]
  );

  useEffect(() => {
    if (!lightboxOpen || items.length < 2) {
      return;
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        move(-1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        move(1);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [items.length, lightboxOpen, move]);

  if (!selected) {
    return null;
  }

  function openAt(index: number) {
    setSelectedIndex(index);
    setLightboxOpen(true);
  }

  function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
    const start = touchStartX.current;
    const end = event.changedTouches[0]?.clientX;
    touchStartX.current = null;

    if (start === null || end === undefined || Math.abs(start - end) < 45) {
      return;
    }

    move(start > end ? 1 : -1);
  }

  return (
    <>
      <div
        aria-label={label}
        className={cn(
          "grid gap-3 md:grid-cols-[1.55fr_0.45fr] md:gap-5",
          className
        )}
        role="group"
      >
        <figure>
          <button
            type="button"
            aria-label={`Ampliar imagen: ${selected.alt}`}
            className="group relative block aspect-[4/3] w-full overflow-hidden bg-[var(--color-hueso)]"
            onClick={() => setLightboxOpen(true)}
          >
            <Image
              alt={selected.alt}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
              height={selected.height ?? 1200}
              sizes="(min-width: 1024px) 850px, 100vw"
              src={selected.src}
              width={selected.width ?? 1600}
            />
            <span className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-guinda)] shadow-[var(--shadow-md)]">
              <Expand className="h-5 w-5" aria-hidden="true" />
            </span>
            {showTechnicalStatus ? (
              <span className="absolute left-3 top-3 bg-[var(--color-advertencia)] px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                {selected.status === "provisional"
                  ? "Imagen provisional"
                  : "Reemplazo pendiente"}
              </span>
            ) : null}
          </button>
          {selected.caption || selected.status === "historical" ? (
            <figcaption className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {selected.status === "historical" ? (
                <span className="block text-xs font-bold uppercase text-[var(--color-guinda)]">
                  Archivo histórico
                </span>
              ) : null}
              {selected.caption}
            </figcaption>
          ) : null}
        </figure>

        <div className="grid grid-cols-3 gap-2 md:max-h-[640px] md:grid-cols-1 md:overflow-y-auto md:pr-1">
          {items.map((item, index) => (
            <button
              key={`${item.src}-${index}`}
              type="button"
              aria-label={`Ver imagen ${index + 1}: ${item.alt}`}
              aria-pressed={selectedIndex === index}
              className={`relative aspect-[4/3] overflow-hidden border-2 bg-[var(--color-hueso)] ${
                selectedIndex === index
                  ? "border-[var(--color-guinda)]"
                  : "border-transparent opacity-72 hover:opacity-100"
              }`}
              onClick={() => setSelectedIndex(index)}
              onDoubleClick={() => openAt(index)}
            >
              <Image
                alt=""
                aria-hidden="true"
                className="h-full w-full object-cover"
                height={item.height ?? 300}
                sizes="(min-width: 768px) 180px, 33vw"
                src={item.src}
                width={item.width ?? 400}
              />
            </button>
          ))}
        </div>
      </div>

      <Modal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={`${label}: imagen ${selectedIndex + 1} de ${items.length}`}
        footer={
          items.length > 1 ? (
            <div className="flex items-center justify-between">
              <IconButton
                aria-label="Imagen anterior"
                onClick={() => move(-1)}
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </IconButton>
              <span className="text-sm font-bold text-[var(--color-muted)]">
                {selectedIndex + 1} de {items.length}
              </span>
              <IconButton
                aria-label="Imagen siguiente"
                onClick={() => move(1)}
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </IconButton>
            </div>
          ) : null
        }
      >
        <div
          className="bg-[var(--color-azul-marino)] p-3 md:p-6"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative mx-auto flex min-h-[52vh] items-center justify-center">
            <Image
              alt={selected.alt}
              className="max-h-[62vh] w-auto object-contain"
              height={selected.height ?? 1200}
              sizes="90vw"
              src={selected.src}
              width={selected.width ?? 1600}
            />
          </div>
          {selected.caption ? (
            <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-6 text-white/78">
              {selected.status === "historical" ? (
                <span className="block text-xs font-bold uppercase text-[var(--color-dorado-claro)]">
                  Archivo histórico
                </span>
              ) : null}
              {selected.caption}
            </p>
          ) : null}
        </div>
      </Modal>
    </>
  );
}
