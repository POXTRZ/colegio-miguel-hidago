import { Container, Section, SectionHeader } from "@/components/ui";

const facilities = [
  "Aulas equipadas con proyector, bocinas y computadora",
  "Dos canchas techadas",
  "Una cancha con pasto sintético",
  "Salón de cómputo con 40 equipos",
  "Laboratorio de química",
  "Salón de usos múltiples",
  "Capilla",
  "Espacio exclusivo de Preescolar",
] as const;

type PhotoPlaceholderProps = {
  className?: string;
  label: string;
};

function PhotoPlaceholder({ className = "", label }: PhotoPlaceholderProps) {
  const isDevelopment = process.env.NODE_ENV === "development";

  return (
    <div
      className={`relative flex min-h-52 items-end overflow-hidden border border-[var(--color-bordes)] bg-[var(--color-azul-marino)] p-6 text-white ${className}`}
    >
      <div
        className="absolute inset-y-0 right-10 w-px rotate-12 bg-[var(--color-dorado-decorativo)]/70"
        aria-hidden="true"
      />
      <div className="relative">
        {isDevelopment ? (
          <p className="mb-3 text-xs font-bold uppercase tracking-normal text-[var(--color-dorado-claro)]">
            Fotografía actual pendiente
          </p>
        ) : null}
        <p className="font-display text-2xl">{label}</p>
      </div>
    </div>
  );
}

export default function FacilitiesPreview() {
  return (
    <Section id="instalaciones">
      <Container size="2xl">
        <SectionHeader
          eyebrow="Espacios para aprender"
          title="Instalaciones pensadas para estudiar, convivir y crecer."
          description="La infraestructura acompaña las actividades académicas, deportivas, tecnológicas y pastorales de cada sección."
        />

        <div className="grid gap-5 lg:grid-cols-[1.35fr_0.65fr]">
          <PhotoPlaceholder
            label="Aulas y tecnología"
            className="min-h-[26rem] lg:min-h-[34rem]"
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            <PhotoPlaceholder label="Deporte y convivencia" />
            <PhotoPlaceholder
              label="Capilla y espacios formativos"
              className="bg-[var(--color-guinda)]"
            />
          </div>
        </div>

        <div className="mt-12 grid gap-x-10 gap-y-4 border-t border-[var(--color-bordes)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
          {facilities.map((facility) => (
            <p
              key={facility}
              className="flex gap-3 text-sm leading-6 text-[var(--color-texto-secundario)]"
            >
              <span
                className="mt-2 h-1.5 w-1.5 shrink-0 bg-[var(--color-dorado-decorativo)]"
                aria-hidden="true"
              />
              {facility}
            </p>
          ))}
        </div>
      </Container>
    </Section>
  );
}
