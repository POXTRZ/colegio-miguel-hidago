import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { aboutAnchors, primaryNav } from "@/config/navigation";

type SiteNavigationProps = {
  pathname: string;
  aboutOpen: boolean;
  onAboutOpenChange: (open: boolean) => void;
};

export default function SiteNavigation({
  pathname,
  aboutOpen,
  onAboutOpenChange,
}: SiteNavigationProps) {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      <div
        className="relative"
        onMouseEnter={() => onAboutOpenChange(true)}
        onMouseLeave={() => onAboutOpenChange(false)}
      >
        <Link
          href="/quienes-somos"
          className={`flex items-center gap-1 rounded-full px-4 py-2 text-sm font-semibold transition ${
            pathname === "/quienes-somos"
              ? "bg-[var(--color-hueso)] text-[var(--color-guinda)]"
              : "text-[var(--color-tinta)] hover:bg-[var(--color-hueso)]"
          }`}
          onClick={() => onAboutOpenChange(false)}
          onFocus={() => onAboutOpenChange(true)}
        >
          Quiénes somos
          <ChevronDown className="h-4 w-4" aria-hidden="true" />
        </Link>
        <div
          className={`absolute left-0 top-12 w-72 rounded-lg border border-[var(--color-linea)] bg-white p-2 shadow-xl transition ${
            aboutOpen
              ? "visible translate-y-0 opacity-100"
              : "invisible -translate-y-2 opacity-0"
          }`}
        >
          {aboutAnchors.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="block rounded-md px-3 py-2 text-sm text-[var(--color-muted)] transition hover:bg-[var(--color-hueso)] hover:text-[var(--color-tinta)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>

      {primaryNav
        .filter((link) => link.label !== "Quiénes somos")
        .map((link) => {
          const active =
            link.href === pathname ||
            (link.href === "/" && pathname === "/") ||
            (link.href === "/calendario" && pathname === "/calendario");

          return (
            <Link
              key={link.href}
              href={link.href}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                active
                  ? "bg-[var(--color-hueso)] text-[var(--color-guinda)]"
                  : "text-[var(--color-tinta)] hover:bg-[var(--color-hueso)]"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
    </div>
  );
}
