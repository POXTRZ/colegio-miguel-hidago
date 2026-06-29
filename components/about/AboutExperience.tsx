import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Network,
} from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import {
  hymnStanzas,
  institutionalItems,
  organizationGroups,
  schoolMotto,
  shieldElements,
  values,
} from "@/data/site";

export default function AboutExperience() {
  const mission = institutionalItems.find((item) => item.id === "mision");
  const vision = institutionalItems.find((item) => item.id === "vision");

  return (
    <main className="min-h-screen bg-[var(--color-fondo)] text-[var(--color-tinta)]">
      <SiteHeader />

      <section className="relative overflow-hidden pt-32">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#fffdf8_0%,#f3eadb_54%,#e8efed_100%)]" />
        <div className="absolute left-0 top-32 h-72 w-24 bg-[var(--color-guinda)]" />
        <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full border border-[var(--color-dorado)] bg-white/40" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-12 px-5 pb-20 pt-14 lg:grid-cols-[1fr_0.82fr] lg:px-8">
          <div>
            <p className="inline-flex rounded-full border border-[var(--color-linea)] bg-white/80 px-4 py-2 text-sm font-bold text-[var(--color-guinda)] shadow-sm">
              Quiénes somos
            </p>
            <h1 className="mt-7 max-w-4xl text-5xl font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
              Una historia educativa escrita con fe, servicio y comunidad.
            </h1>
            <p className="mt-7 max-w-3xl text-xl leading-9 text-[var(--color-muted)]">
              El Colegio Miguel Hidalgo reúne tradición, formación académica y
              carisma franciscano para acompañar a cada estudiante en su camino
              humano, espiritual y social.
            </p>
          </div>

          <div className="rounded-lg border border-white/80 bg-white/90 p-7 shadow-[0_24px_70px_rgba(58,45,32,0.12)] backdrop-blur">
            <div className="flex items-start gap-5">
              <Image
                src="/cmh-escudo.gif"
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

      <section id="resena" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="lg:sticky lg:top-28 lg:self-start">
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Reseña histórica
              </p>
              <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
                Desde 1907, una presencia educativa para San Luis de la Paz.
              </h2>
            </div>
            <div className="grid gap-6 text-lg leading-9 text-[var(--color-muted)]">
              <p>
                El Colegio Miguel Hidalgo inició labores ininterrumpidamente
                desde el año de 1907, ofreciendo a la comunidad ludovicense una
                educación integral a la niñez y juventud.
              </p>
              <p>
                Su ubicación en Guerrero No. 215, Colonia Centro, lo mantiene
                cercano a la vida cotidiana de las familias. Desde ahí, el
                colegio abre sus puertas a quienes desean formar parte de una
                institución basada en valores cristianos, cívicos, sociales y
                morales.
              </p>
              <p>
                La institución está incorporada a la Secretaría de Educación de
                Guanajuato y fortalece su propuesta con inglés, computación,
                danza, Educación en la Fe, banda de guerra, fútbol, básquetbol
                y voleibol.
              </p>
            </div>
          </div>
        </div>
      </section>

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
            {[
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
            ].map((card) => (
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
                La formación HFIC busca que los valores no se queden en una
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

      <section id="himno" className="bg-white py-24 lg:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <div>
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Himno institucional
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Una identidad que también se canta.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              Himno Colegios HFIC. Letra y música: César Miranda Barragán.
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

      <section id="organigrama" className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 max-w-3xl">
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Organigrama
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Coordinación por secciones y trabajo en equipo.
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {organizationGroups.map((group) => (
              <article
                key={group.title}
                className="rounded-lg border border-[var(--color-linea)] bg-white p-7 shadow-sm"
              >
                <Network
                  className="h-8 w-8 text-[var(--color-guinda)]"
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-2xl font-bold">{group.title}</h3>
                <ul className="mt-5 grid gap-2 text-sm leading-6 text-[var(--color-muted)]">
                  {group.items.map((item) => (
                    <li key={item} className="border-l-2 border-[var(--color-linea)] pl-3">
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div>
              <p className="text-sm font-bold text-[var(--color-guinda)]">
                Escudo CMH
              </p>
              <h2 className="mt-3 text-3xl font-bold">
                Identidad gráfica con raíz franciscana.
              </h2>
              <Image
                src="/cmh-escudo.gif"
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

      <section className="bg-[var(--color-guinda)] py-20 text-white">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-6 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-bold text-[var(--color-dorado-claro)]">
              Siguiente paso
            </p>
            <h2 className="mt-3 text-4xl font-bold">Consulta fechas y eventos.</h2>
          </div>
          <Link
            href="/calendario"
            className="inline-flex min-h-12 w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[var(--color-guinda)]"
          >
            Abrir calendario
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
