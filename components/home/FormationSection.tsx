import { Container, Eyebrow, ResponsiveImage, Section } from "@/components/ui";

const formationDimensions = [
  {
    title: "Humana",
    text: "Dignidad, libertad, responsabilidad y cercanía en cada etapa.",
  },
  {
    title: "Académica",
    text: "Conocimiento, criterio y herramientas para seguir aprendiendo.",
  },
  {
    title: "Espiritual",
    text: "Fe, interioridad y vocación vividas con respeto y sentido.",
  },
  {
    title: "Fraterna",
    text: "Comunidad, servicio y armonía con las personas y el entorno.",
  },
] as const;

export default function FormationSection() {
  return (
    <Section tone="navy" className="overflow-hidden">
      <Container size="2xl">
        <div className="grid items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative pb-8 pl-0 sm:pl-8">
            <div
              className="absolute bottom-0 left-0 top-10 hidden w-px bg-[var(--color-dorado-decorativo)] sm:block"
              aria-hidden="true"
            />
            <ResponsiveImage
              src="/images/home/comunidad-franciscana-archivo.jpeg"
              alt="Comunidad escolar y religiosa reunida en una fotografía histórica"
              width={1462}
              height={993}
              ratio="video"
              className="grayscale"
              sizes="(min-width: 1024px) 42vw, 100vw"
            />
            <p className="mt-3 text-xs leading-5 text-white/60">
              Archivo histórico del Colegio Miguel Hidalgo. Fecha y personas
              por identificar.
            </p>
          </div>

          <div>
            <Eyebrow tone="light">Formación integral</Eyebrow>
            <h2 className="mt-5 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl">
              Educar es acompañar a la persona completa.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/72">
              La propuesta educativa HFIC integra fe, cultura y vida. El
              aprendizaje académico convive con la formación humana, la
              espiritualidad franciscana y el compromiso con una comunidad
              más justa y fraterna.
            </p>

            <div className="mt-10 grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {formationDimensions.map((dimension, index) => (
                <div
                  key={dimension.title}
                  className={`border-l pl-5 ${
                    index === 0
                      ? "border-[var(--color-dorado-decorativo)]"
                      : "border-white/20"
                  }`}
                >
                  <p className="text-sm font-bold text-white">
                    {dimension.title}
                  </p>
                  <p className="mt-2 text-sm leading-6 text-white/64">
                    {dimension.text}
                  </p>
                </div>
              ))}
            </div>

            <p className="font-display mt-10 max-w-xl border-t border-white/14 pt-7 text-2xl leading-snug text-white">
              “Formar para construir un mundo fraterno”.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
