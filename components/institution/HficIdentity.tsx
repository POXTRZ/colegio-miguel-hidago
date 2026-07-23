import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function HficIdentity() {
  const image = getHistoricalMedia("hermanas-franciscanas");

  return (
    <section id="identidad-hfic" className="bg-[var(--color-guinda)] text-white">
      <Container className="grid gap-0 px-0 lg:grid-cols-2 lg:px-8">
        <div className="flex flex-col justify-center px-5 py-20 lg:px-0 lg:pr-20 lg:py-28">
          <Eyebrow tone="gold">Identidad HFIC</Eyebrow>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            Hermanas Franciscanas de la Inmaculada Concepción.
          </h2>
          <p className="mt-6 text-lg leading-8 text-white/78">
            La identidad HFIC vincula la espiritualidad franciscana y mariana
            con una misión educativa centrada en las obras de misericordia, la
            dignidad de la persona y la construcción de una sociedad fraterna.
          </p>
          <p className="mt-8 border-l-2 border-[var(--color-dorado)] pl-5 font-display text-2xl italic">
            Reparar la viña del Señor.
          </p>
        </div>

        {image ? (
          <figure className="relative min-h-[420px] lg:min-h-[640px]">
            <Image
              alt={image.alt}
              className="object-cover grayscale-[0.2]"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              src={image.src}
            />
            <figcaption className="absolute inset-x-0 bottom-0 bg-[linear-gradient(180deg,transparent,rgba(11,37,69,0.88))] px-6 pb-6 pt-20 text-sm text-white/88">
              {image.caption}
            </figcaption>
          </figure>
        ) : null}
      </Container>
    </section>
  );
}
