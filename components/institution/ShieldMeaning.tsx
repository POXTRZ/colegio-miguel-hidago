import Image from "next/image";
import { shieldElements } from "@/data/confirmed/institution";

export default function ShieldMeaning() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-8 rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-8 lg:grid-cols-[0.35fr_0.65fr]">
          <div>
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Escudo CMH
            </p>
            <h2 className="mt-3 text-3xl font-bold">
              Identidad grÃ¡fica con raÃ­z franciscana.
            </h2>
            <Image
              src="/brand/shield.webp"
              alt="Escudo del Colegio Miguel Hidalgo"
              width={396}
              height={508}
              unoptimized
              className="mt-6 h-48 w-auto object-contain"
            />
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {shieldElements.map((element) => (
              <div
                key={element.title}
                className="rounded-lg border border-[var(--color-linea)] bg-white p-5"
              >
                <p className="font-bold text-[var(--color-tinta)]">
                  {element.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                  {element.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
