import { Building2 } from "lucide-react";

export default function FacilitiesPreview() {
  return (
    <section id="instalaciones" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold text-[var(--color-guinda)]">
              Nuestras instalaciones
            </p>
            <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
              Espacios para aprender, convivir y crecer.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--color-muted)]">
              El layout queda listo para reemplazar estos bloques por
              fotografías reales del Colegio Miguel Hidalgo.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {["Aulas", "Áreas deportivas", "Tecnología", "Convivencia"].map(
              (space) => (
                <article
                  key={space}
                  className="flex min-h-40 items-end rounded-lg border border-[var(--color-linea)] bg-[var(--color-fondo)] p-5"
                >
                  <div>
                    <Building2
                      className="mb-4 h-7 w-7 text-[var(--color-guinda)]"
                      aria-hidden="true"
                    />
                    <h3 className="text-xl font-bold">{space}</h3>
                  </div>
                </article>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
