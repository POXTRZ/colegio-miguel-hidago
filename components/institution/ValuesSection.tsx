import { values } from "@/data/site";

export default function ValuesSection() {
  return (
    <section id="valores" className="bg-[var(--color-tinta)] py-24 text-white lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
              Valores
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Virtudes que se vuelven vida escolar.
            </h2>
            <p className="mt-5 text-lg leading-8 text-white/70">
              La formaciÃ³n HFIC busca que los valores no se queden en una
              lista, sino que atraviesen la convivencia, el aprendizaje y el
              servicio.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
            {values.map((value) => (
              <div
                key={value}
                className="rounded-lg border border-white/10 bg-white/10 px-4 py-5 text-center text-sm font-bold text-white"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
