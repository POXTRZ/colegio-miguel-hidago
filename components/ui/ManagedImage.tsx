import ResponsiveImage, {
  type ResponsiveImageRatio,
} from "@/components/ui/ResponsiveImage";
import { cn } from "@/components/ui/utils";
import type { ManagedImageAsset } from "@/types/media";

type CaptionTone = "default" | "light";

type ManagedImageProps = {
  asset: ManagedImageAsset;
  captionClassName?: string;
  captionTone?: CaptionTone;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  ratio?: ResponsiveImageRatio;
  showCaption?: boolean;
  sizes?: string;
};

const statusLabels = {
  final: "Final",
  historical: "Archivo histórico",
  provisional: "Imagen provisional",
  "pending-replacement": "Reemplazo pendiente",
} as const;

export default function ManagedImage({
  asset,
  captionClassName,
  captionTone = "default",
  className,
  imageClassName,
  priority = false,
  ratio = "video",
  showCaption = true,
  sizes,
}: ManagedImageProps) {
  const showTechnicalStatus =
    process.env.NODE_ENV === "development" &&
    (asset.status === "provisional" ||
      asset.status === "pending-replacement");
  const lightCaption = captionTone === "light";

  return (
    <div className={cn("relative min-w-0", className)}>
      {asset.src ? (
        <ResponsiveImage
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          ratio={ratio}
          priority={priority}
          sizes={sizes}
          className={imageClassName}
          containerClassName="rounded-none"
        />
      ) : (
        <div
          className={cn(
            "relative flex min-w-0 overflow-hidden border border-[var(--color-bordes)] bg-[var(--color-azul-marino)] p-5 text-white sm:p-7",
            ratio === "auto" && "min-h-72",
            ratio === "square" && "aspect-square",
            ratio === "video" && "aspect-[4/3] sm:aspect-video",
            ratio === "portrait" && "aspect-[4/5]",
            ratio === "wide" && "aspect-[4/3] sm:aspect-[16/7]",
          )}
          role="img"
          aria-label={asset.alt}
        >
          <div className="flex h-full min-w-0 max-w-lg flex-col justify-between">
            <span
              className={cn(
                "font-display text-5xl leading-none text-[var(--color-dorado-claro)]/70 sm:text-6xl",
                (ratio === "video" || ratio === "wide") && "hidden sm:block",
              )}
              aria-hidden="true"
            >
              CMH
            </span>
            <div className="min-w-0">
              <p className="font-display break-words text-xl leading-tight sm:text-2xl">
                Registro fotográfico en preparación
              </p>
              <p className="mt-3 break-words text-sm leading-6 text-white/68">
                {asset.context}
              </p>
            </div>
          </div>
          <span
            className="absolute inset-y-8 right-10 w-px rotate-12 bg-[var(--color-dorado)]/60"
            aria-hidden="true"
          />
        </div>
      )}

      {showTechnicalStatus ? (
        <span className="absolute right-3 top-3 bg-[var(--color-advertencia)] px-2.5 py-1 text-[10px] font-bold uppercase text-white">
          {statusLabels[asset.status]}
        </span>
      ) : null}

      {showCaption && asset.caption ? (
        <p
          className={cn(
            "mt-3 border-l-2 border-[var(--color-dorado)] pl-4 text-xs leading-5",
            lightCaption ? "text-white/70" : "text-[var(--color-muted)]",
            captionClassName,
          )}
        >
          {asset.status === "historical" ? (
            <span
              className={cn(
                "block font-bold uppercase",
                lightCaption
                  ? "text-[var(--color-dorado-claro)]"
                  : "text-[var(--color-guinda)]",
              )}
            >
              {statusLabels.historical}
            </span>
          ) : null}
          {asset.caption}
        </p>
      ) : null}
    </div>
  );
}
