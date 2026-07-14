import { contactInfo } from "@/data/confirmed/contact";

export default function IdentitySection() {
  return (
    <section className="border-y border-[var(--color-linea)] bg-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-5 py-8 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="text-sm font-bold text-[var(--color-guinda)]">
            DirecciÃ³n
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {contactInfo.address}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-[var(--color-guinda)]">
            Contacto
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            {contactInfo.email}
          </p>
        </div>
        <div>
          <p className="text-sm font-bold text-[var(--color-guinda)]">
            Identidad
          </p>
          <p className="mt-1 text-sm text-[var(--color-muted)]">
            Hermanas Franciscanas de la Inmaculada ConcepciÃ³n
          </p>
        </div>
      </div>
    </section>
  );
}
