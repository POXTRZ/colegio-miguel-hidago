import Image from "next/image";
import { schoolMotto } from "@/config/site";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function AboutHero() {
  const background = getHistoricalMedia("comunidad-franciscana");

  return (
    <section className="relative min-h-[min(760px,86vh)] overflow-hidden bg-[var(--color-azul-marino)] pt-28 text-white">
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

      <Container className="relative grid min-h-[calc(min(760px,86vh)-7rem)] items-center gap-10 py-14 lg:grid-cols-[1fr_300px]">
        <div className="max-w-4xl">
          <Eyebrow tone="gold">Quiénes somos</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Formar para construir un mundo fraterno.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/78 md:text-xl md:leading-9">
            Una comunidad educativa que integra conocimiento, dignidad,
            espiritualidad y servicio desde el carisma HFIC.
          </p>
          <p className="mt-8 border-l-2 border-[var(--color-dorado)] pl-5 font-display text-2xl italic text-white/92">
            {schoolMotto}
          </p>
        </div>

        <div className="flex justify-center lg:justify-end">
          <Image
            src="/brand/shield.webp"
            alt="Escudo oficial del Colegio Miguel Hidalgo"
            width={396}
            height={508}
            unoptimized
            className="h-auto w-48 object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.28)] sm:w-56 lg:w-64"
          />
        </div>
      </Container>
    </section>
  );
}
