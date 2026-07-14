import { hymnStanzas } from "@/data/confirmed/institution";

export default function HymnSection() {
  return (
    <section id="himno" className="bg-white py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
        <div>
          <p className="text-sm font-bold text-[var(--color-guinda)]">
            Himno institucional
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            Una identidad que tambiÃ©n se canta.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
            Himno Colegios HFIC. Letra y mÃºsica: CÃ©sar Miranda BarragÃ¡n.
          </p>
        </div>
        <div className="grid gap-4 rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-7">
          {hymnStanzas.map((stanza, index) => (
            <div key={index} className="leading-8 text-[var(--color-tinta)]">
              {stanza.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
