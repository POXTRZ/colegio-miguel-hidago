import Image from "next/image";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { getHistoricalMedia } from "@/data/confirmed/media";

export default function HistoryHero() {
  const heroImage = getHistoricalMedia("comunidad-educativa");

  return (
    <section className="relative min-h-[min(780px,88vh)] overflow-hidden bg-[var(--color-azul-marino)] pt-28 text-white">
      {heroImage ? (
        <Image
          alt=""
          aria-hidden="true"
          className="object-cover object-center opacity-52 grayscale-[0.18]"
          fill
          priority
          sizes="100vw"
          src={heroImage.src}
        />
      ) : null}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,37,69,0.98)_0%,rgba(11,37,69,0.82)_50%,rgba(11,37,69,0.28)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent,rgba(11,37,69,0.9))]" />

      <Container className="relative flex min-h-[calc(min(780px,88vh)-7rem)] items-end pb-16 pt-20 lg:pb-20">
        <div className="max-w-4xl">
          <Eyebrow tone="gold">Historia</Eyebrow>
          <h1 className="mt-5 max-w-3xl text-5xl font-bold leading-[1.02] sm:text-6xl lg:text-7xl">
            Memoria viva de una comunidad educativa.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/82 md:text-xl md:leading-9">
            Fotografías, documentos e hitos confirmados para comprender la
            continuidad del Colegio Miguel Hidalgo en San Luis de la Paz.
          </p>
        </div>
      </Container>
      {heroImage ? (
        <p className="absolute bottom-5 right-8 hidden max-w-sm border-r-2 border-[var(--color-dorado)] pr-4 text-right text-xs leading-5 text-white/72 lg:block">
          <span className="block font-bold uppercase text-[var(--color-dorado-claro)]">
            Archivo histórico
          </span>
          {heroImage.caption}
        </p>
      ) : null}
    </section>
  );
}
