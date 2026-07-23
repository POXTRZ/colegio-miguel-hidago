import Image from "next/image";
import { schoolMotto } from "@/config/site";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { getHistoricalMedia, schoolShield } from "@/data/confirmed/media";

export default function AboutHero() {
  const background = getHistoricalMedia("comunidad-franciscana");

  return (
    <section className="relative min-h-[min(700px,80svh)] overflow-hidden bg-[var(--color-azul-marino)] pt-[var(--internal-hero-offset)] text-white">
      {background ? (
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-center opacity-24 grayscale"
          fill
          priority
          sizes="100vw"
          src={background.src}
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,1)_0%,rgba(11,37,69,0.9)_58%,rgba(11,37,69,0.48)_100%)]" />

      <Container className="relative grid min-h-[calc(min(700px,80svh)-var(--internal-hero-offset))] items-center gap-10 py-12 lg:grid-cols-[1fr_260px]">
        <div className="max-w-4xl">
          <Eyebrow tone="gold">Quiénes somos</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.04] sm:text-6xl lg:text-7xl">
            Una comunidad educativa con identidad franciscana.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl md:leading-9">
            Una comunidad educativa que integra conocimiento, dignidad,
            espiritualidad y servicio desde el carisma HFIC.
          </p>
          <p className="mt-8 border-l-2 border-[var(--color-dorado)] pl-5 font-display text-2xl italic text-white/92">
            {schoolMotto}
          </p>
        </div>

        <div className="hidden justify-center sm:flex lg:justify-end">
          <Image
            src={schoolShield.src}
            alt={schoolShield.alt}
            width={schoolShield.width}
            height={schoolShield.height}
            unoptimized
            className="h-auto w-44 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.28)] sm:w-52 lg:w-56"
          />
        </div>
      </Container>
      {background ? (
        <p className="absolute bottom-5 left-8 hidden max-w-sm border-l-2 border-[var(--color-dorado)] pl-4 text-xs leading-5 text-white/68 lg:block">
          <span className="block font-bold uppercase text-[var(--color-dorado-claro)]">
            Archivo histórico
          </span>
          {background.caption}
        </p>
      ) : null}
    </section>
  );
}
