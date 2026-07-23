import Image, { type ImageProps } from "next/image";
import { cn } from "@/components/ui/utils";

export type ResponsiveImageRatio =
  | "square"
  | "video"
  | "portrait"
  | "wide"
  | "auto";

const ratioClasses: Record<ResponsiveImageRatio, string> = {
  square: "aspect-square",
  video: "aspect-video",
  portrait: "aspect-[4/5]",
  wide: "aspect-[16/7]",
  auto: "",
};

type ResponsiveImageProps = Omit<ImageProps, "fill"> & {
  containerClassName?: string;
  ratio?: ResponsiveImageRatio;
};

export default function ResponsiveImage({
  alt,
  className,
  containerClassName,
  ratio = "video",
  sizes = "(min-width: 1280px) 1120px, (min-width: 768px) 90vw, 100vw",
  ...props
}: ResponsiveImageProps) {
  return (
    <figure
      className={cn(
        "relative overflow-hidden rounded-[var(--radius-md)] bg-[var(--color-hueso)] shadow-[var(--shadow-sm)] ring-1 ring-black/5 [&_img]:transition-[transform,filter] [&_img]:duration-[var(--duration-slow)] [&_img]:ease-[var(--ease-enter)] hover:[&_img]:scale-[1.025] motion-reduce:[&_img]:transform-none",
        ratioClasses[ratio],
        containerClassName
      )}
    >
      <Image
        alt={alt}
        className={cn("h-full w-full object-cover", className)}
        sizes={sizes}
        {...props}
      />
    </figure>
  );
}
