import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { aboutAnchors, facebookUrl, primaryNav } from "@/data/site";

type MobileNavigationProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileNavigation({ open, onClose }: MobileNavigationProps) {
  return (
    <div
      className={`overflow-hidden border-t border-[var(--color-linea)] bg-white transition-[max-height] duration-300 lg:hidden ${
        open ? "max-h-[760px]" : "max-h-0"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 py-4">
        {primaryNav.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            className="block rounded-md px-3 py-3 text-sm font-bold hover:bg-[var(--color-hueso)]"
          >
            {link.label}
          </Link>
        ))}
        <div className="my-2 grid gap-1 border-l border-[var(--color-linea)] pl-3">
          {aboutAnchors.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="rounded-md px-3 py-2 text-sm text-[var(--color-muted)] hover:bg-[var(--color-hueso)]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 flex items-center justify-center gap-2 rounded-full bg-[var(--color-guinda)] px-4 py-3 text-sm font-bold text-white"
        >
          Facebook
          <ExternalLink className="h-4 w-4" aria-hidden="true" />
        </a>
      </div>
    </div>
  );
}
