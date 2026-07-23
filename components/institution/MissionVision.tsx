import { Quote } from "lucide-react";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import ResponsiveImage from "@/components/ui/ResponsiveImage";
import Section from "@/components/ui/Section";
import { institutionalItems } from "@/data/confirmed/institution";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function MissionVision() {
  const mission = institutionalItems.find((item) => item.id === "mision");
  const vision = institutionalItems.find((item) => item.id === "vision");
  const image = getHistoricalMedia("entrega-reconocimientos");

  return (
    <Section id="mision" tone="white">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1.22fr_0.78fr] lg:gap-24">
          <div>
            <Eyebrow>Misión</Eyebrow>
            <Quote
              className="mt-7 h-10 w-10 text-[var(--color-dorado-texto)]"
              aria-hidden="true"
            />
            <blockquote className="mt-5 font-display text-3xl leading-tight text-[var(--color-azul-marino)] md:text-4xl md:leading-tight lg:text-5xl">
              {mission?.body}
            </blockquote>
            <p className="mt-6 text-sm leading-6 text-[var(--color-muted)]">
              {mission?.note}
            </p>
          </div>

          <aside id="vision" className="scroll-mt-28 lg:pt-32">
            <div className="border-t-4 border-[var(--color-guinda)] pt-6">
              <Eyebrow>Visión</Eyebrow>
              <p className="mt-5 text-xl leading-9 text-[var(--color-tinta)]">
                {vision?.body}
              </p>
              <p className="mt-5 text-sm leading-6 text-[var(--color-muted)]">
                {vision?.note}
              </p>
            </div>
            {image ? (
              <ResponsiveImage
                alt={image.alt}
                src={image.src}
                width={image.width}
                height={image.height}
                ratio="portrait"
                className="grayscale-[0.18]"
                containerClassName="mt-9"
                sizes="(min-width: 1024px) 360px, 90vw"
              />
            ) : null}
          </aside>
        </div>
      </Container>
    </Section>
  );
}
