import { BookOpen } from "lucide-react";
import { institutionalItems } from "@/data/confirmed/institution";

const philosophyCards = [
  {
    title: "Dignidad de la persona",
    text:
      "Cada alumno es acompañado desde su realidad, con paciencia, cercanía y sentido de vocación.",
  },
  {
    title: "Fraternidad educativa",
    text:
      "Escuela y familia trabajan en una comunidad de respeto, alegría, participación y corresponsabilidad.",
  },
  {
    title: "Servicio y esperanza",
    text:
      "La formación busca construir una sociedad más justa, fraterna y solidaria desde el Evangelio.",
  },
];

export default function MissionVision() {
  const mission = institutionalItems.find((item) => item.id === "mision");
  const vision = institutionalItems.find((item) => item.id === "vision");

  return (
    <>
      <section id="filosofia" className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Filosofía institucional
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Una forma de educar que integra fe, cultura y vida.
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {philosophyCards.map((card) => (
              <article
                key={card.title}
                className="rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-7"
              >
                <BookOpen
                  className="h-8 w-8 text-[var(--color-guinda)]"
                  aria-hidden="true"
                />
                <h3 className="mt-6 text-2xl font-bold">{card.title}</h3>
                <p className="mt-3 text-sm leading-7 text-[var(--color-muted)]">
                  {card.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 lg:grid-cols-2 lg:px-8">
          {[mission, vision].map((item) => (
            <article
              key={item?.id}
              id={item?.id}
              className="scroll-mt-28 rounded-lg border border-[var(--color-linea)] bg-white p-8 shadow-sm"
            >
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                {item?.title}
              </p>
              <p className="mt-5 text-lg leading-9 text-[var(--color-muted)]">
                {item?.body}
              </p>
              <p className="mt-6 rounded-md bg-[var(--color-hueso)] px-3 py-2 text-xs font-bold text-[var(--color-guinda)]">
                {item?.note}
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
