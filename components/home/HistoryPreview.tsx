import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";

export default function HistoryPreview() {
  return (
    <Link
      href="/quienes-somos"
      className="group min-h-80 rounded-lg border border-[var(--color-linea)] bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-[0_24px_70px_rgba(58,45,32,0.12)]"
    >
      <Shield className="h-10 w-10 text-[var(--color-guinda)]" />
      <p className="mt-10 text-sm font-bold text-[var(--color-guinda)]">
        QuiÃ©nes somos
      </p>
      <h2 className="mt-4 text-4xl font-bold leading-tight">
        Historia, misiÃ³n, valores, himno y organigrama.
      </h2>
      <p className="mt-5 max-w-xl text-sm leading-7 text-[var(--color-muted)]">
        Una vista editorial para conocer la identidad del colegio y su
        pertenencia al carisma HFIC.
      </p>
      <span className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[var(--color-guinda)]">
        Abrir pÃ¡gina
        <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
      </span>
    </Link>
  );
}
