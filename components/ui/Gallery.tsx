"use client";

import Image from "next/image";
import { MotionConfig, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";
import IconButton from "@/components/ui/IconButton";
import Modal from "@/components/ui/Modal";
import { cn } from "@/components/ui/utils";
import type {
  HistoricalArchiveCategory,
  MediaAsset,
} from "@/types/media";

type GalleryItem = MediaAsset & {
  archiveCategory?: HistoricalArchiveCategory;
  id?: string;
};

type GalleryProps = {
  className?: string;
  items: GalleryItem[];
  label?: string;
  variant?: "default" | "editorial";
};

const editorialLayout = [
  {
    className: "md:col-span-2 lg:col-span-8",
    ratio: "aspect-[16/10]",
    sizes: "(min-width: 1024px) 64vw, (min-width: 768px) 100vw, 100vw",
  },
  {
    className: "lg:col-span-4",
    ratio: "aspect-[4/5]",
    sizes: "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw",
  },
  {
    className: "lg:col-span-5",
    ratio: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 40vw, (min-width: 768px) 50vw, 100vw",
  },
  {
    className: "lg:col-span-7",
    ratio: "aspect-[16/9]",
    sizes: "(min-width: 1024px) 56vw, (min-width: 768px) 50vw, 100vw",
  },
  {
    className: "lg:col-span-4",
    ratio: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw",
  },
  {
    className: "lg:col-span-4",
    ratio: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw",
  },
  {
    className: "lg:col-span-4",
    ratio: "aspect-[4/3]",
    sizes: "(min-width: 1024px) 32vw, (min-width: 768px) 50vw, 100vw",
  },
  {
    className: "md:col-span-2 lg:col-span-12",
    ratio: "aspect-[16/6]",
    sizes: "(min-width: 1024px) 100vw, (min-width: 768px) 100vw, 100vw",
  },
] as const;

function technicalStatus(item: GalleryItem) {
  if (
    process.env.NODE_ENV !== "development" ||
    (item.status !== "provisional" &&
      item.status !== "pending-replacement")
  ) {
    return null;
  }

  return item.status === "provisional"
    ? "Imagen provisional"
    : "Reemplazo pendiente";
}

export default function Gallery({
  className,
  items,
  label = "Galería de imágenes",
  variant = "default",
}: GalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const selected = items[selectedIndex];

  const move = useCallback(
    (direction: -1 | 1) => {
      setSelectedIndex((current) =>
        (current + direction + items.length) % items.length,
      );
    },
    [items.length],
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

  const mainGallery =
    variant === "editorial" ? (
      <MotionConfig reducedMotion="user">
        <motion.div
          aria-label={label}
          className={cn(
            "grid gap-x-5 gap-y-9 md:grid-cols-2 lg:grid-cols-12 lg:gap-x-6 lg:gap-y-10",
            className,
          )}
          role="group"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        >
          {items.slice(0, editorialLayout.length).map((item, index) => {
            const layout = editorialLayout[index];
            const status = technicalStatus(item);

            return (
              <figure
                key={item.id ?? `${item.src}-${index}`}
                className={layout.className}
              >
                <button
                  type="button"
                  aria-label={`Ampliar imagen: ${item.alt}`}
                  className={cn(
                    "group relative block w-full overflow-hidden bg-[var(--color-hueso)] text-left",
                    layout.ratio,
                  )}
                  onClick={() => openAt(index)}
                >
                  <Image
                    alt={item.alt}
                    className="object-cover grayscale-[0.08] transition duration-500 group-hover:scale-[1.018] group-focus-visible:scale-[1.018]"
                    fill
                    sizes={layout.sizes}
                    src={item.src}
                  />
                  <span className="absolute inset-x-0 bottom-0 h-2/3 bg-[linear-gradient(180deg,transparent,rgba(11,37,69,0.78))]" />
                  {item.archiveCategory ? (
                    <span className="absolute left-4 top-4 bg-[var(--color-crema)] px-3 py-1.5 text-[10px] font-bold uppercase text-[var(--color-guinda)]">
                      {item.archiveCategory}
                    </span>
                  ) : null}
                  {status ? (
                    <span className="absolute right-4 top-4 bg-[var(--color-advertencia)] px-2.5 py-1.5 text-[10px] font-bold uppercase text-white">
                      {status}
                    </span>
                  ) : null}
                  <span className="absolute bottom-4 right-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-[var(--color-guinda)] shadow-[var(--shadow-md)]">
                    <Expand className="h-5 w-5" aria-hidden="true" />
                  </span>
                </button>
                <figcaption className="mt-3 border-l-2 border-[var(--color-dorado)] pl-4">
                  {item.status === "historical" ? (
                    <span className="block text-[10px] font-bold uppercase text-[var(--color-guinda)]">
                      Archivo histórico
                    </span>
                  ) : null}
                  <span className="mt-1 block text-sm leading-6 text-[var(--color-muted)]">
                    {item.caption}
                  </span>
                </figcaption>
              </figure>
            );
          })}
        </motion.div>
      </MotionConfig>
    ) : (
      <div
        aria-label={label}
        className={cn(
          "grid gap-3 md:grid-cols-[1.55fr_0.45fr] md:gap-5",
          className,
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
            {technicalStatus(selected) ? (
              <span className="absolute left-3 top-3 bg-[var(--color-advertencia)] px-2.5 py-1 text-[10px] font-bold uppercase text-white">
                {technicalStatus(selected)}
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
              key={item.id ?? `${item.src}-${index}`}
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
    );

  return (
    <>
      {mainGallery}

      <Modal
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        title={`${label}: imagen ${selectedIndex + 1} de ${items.length}`}
        tone="dark"
        footer={
          items.length > 1 ? (
            <div className="flex items-center justify-between">
              <IconButton
                aria-label="Imagen anterior"
                onClick={() => move(-1)}
                variant="light"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </IconButton>
              <span className="text-sm font-bold text-white/72">
                {selectedIndex + 1} de {items.length}
              </span>
              <IconButton
                aria-label="Imagen siguiente"
                onClick={() => move(1)}
                variant="light"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </IconButton>
            </div>
          ) : null
        }
      >
        <div
          className="bg-[var(--color-azul-marino)] px-3 py-4 md:px-8 md:py-6"
          onTouchStart={(event) => {
            touchStartX.current = event.touches[0]?.clientX ?? null;
          }}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative mx-auto flex min-h-[38dvh] items-center justify-center">
            <Image
              alt={selected.alt}
              className="max-h-[48dvh] w-auto object-contain"
              height={selected.height ?? 1200}
              sizes="92vw"
              src={selected.src}
              width={selected.width ?? 1600}
            />
          </div>
          <div className="mx-auto mt-5 max-w-3xl text-center">
            {selected.archiveCategory ? (
              <p className="text-[10px] font-bold uppercase text-[var(--color-dorado-claro)]">
                {selected.archiveCategory}
              </p>
            ) : null}
            {selected.status === "historical" ? (
              <p className="mt-1 text-[10px] font-bold uppercase text-white/56">
                Archivo histórico
              </p>
            ) : null}
            {selected.caption ? (
              <p className="mt-2 text-sm leading-6 text-white/78">
                {selected.caption}
              </p>
            ) : null}
          </div>
        </div>
      </Modal>
    </>
  );
}
