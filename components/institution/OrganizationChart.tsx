import { Network } from "lucide-react";
import { organizationGroups } from "@/data/site";

export default function OrganizationChart() {
  return (
    <section id="organigrama" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mb-12 max-w-3xl">
          <p className="text-sm font-bold text-[var(--color-guinda)]">
            Organigrama
          </p>
          <h2 className="mt-4 text-4xl font-bold leading-tight lg:text-5xl">
            CoordinaciÃ³n por secciones y trabajo en equipo.
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
  );
}
