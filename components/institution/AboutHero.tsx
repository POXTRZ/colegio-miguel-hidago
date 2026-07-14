import Image from "next/image";
import { schoolMotto } from "@/config/site";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden pt-32">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#fffdf8_0%,#f3eadb_54%,#e8efed_100%)]" />
      <div className="absolute left-0 top-32 h-72 w-24 bg-[var(--color-guinda)]" />
      <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full border border-[var(--color-dorado)] bg-white/40" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1fr_0.82fr] lg:px-8">
        <div>
          <p className="inline-flex rounded-full border border-[var(--color-linea)] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--color-guinda)] shadow-sm">
            QuiÃ©nes somos
          </p>
          <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            Una historia educativa escrita con fe, servicio y comunidad.
          </h1>
          <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--color-muted)]">
            El Colegio Miguel Hidalgo reÃºne tradiciÃ³n, formaciÃ³n acadÃ©mica y
            carisma franciscano para acompaÃ±ar a cada estudiante en su camino
            humano, espiritual y social.
          </p>
        </div>

        <div className="rounded-lg border border-white/80 bg-white/90 p-7 shadow-[0_24px_70px_rgba(58,45,32,0.12)] backdrop-blur">
          <div className="flex items-start gap-5">
            <Image
              src="/brand/shield.webp"
              alt="Escudo del Colegio Miguel Hidalgo"
              width={396}
              height={508}
              unoptimized
              className="h-32 w-auto object-contain"
            />
            <div>
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Lema institucional
              </p>
              <p className="mt-2 text-3xl font-bold leading-tight">
                {schoolMotto}
              </p>
            </div>
          </div>
          <div className="mt-7 grid grid-cols-3 gap-3">
            {["1907", "HFIC", "SEG"].map((stat) => (
              <div
                key={stat}
                className="rounded-md border border-[var(--color-linea)] bg-[var(--color-fondo)] px-3 py-4 text-center"
              >
                <p className="text-2xl font-black text-[var(--color-guinda)]">
                  {stat}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
