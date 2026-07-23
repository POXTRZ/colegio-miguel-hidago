import { ArrowLeft, CalendarDays } from "lucide-react";
import SiteFooter from "@/components/layout/SiteFooter";
import SiteHeader from "@/components/layout/SiteHeader";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-screen overflow-hidden bg-[var(--color-azul-marino)] text-white"
      >
        <Container
          size="2xl"
          className="grid min-h-[calc(100svh-var(--header-height))] min-w-0 content-center gap-12 py-20 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-20"
        >
          <div className="min-w-0 max-w-2xl">
            <p className="text-sm font-bold uppercase text-[var(--color-dorado-claro)]">
              Página no encontrada
            </p>
            <h1 className="mt-5 text-5xl font-bold leading-tight text-white sm:text-6xl">
              No encontramos esta sección.
            </h1>
            <h2 className="mt-6 text-xl font-semibold text-white">
              Volvamos a un punto conocido.
            </h2>
            <p className="mt-3 max-w-xl text-base leading-7 text-white/74 sm:text-lg sm:leading-8">
              La página pudo cambiar de ubicación o no estar disponible.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/" variant="light">
                <ArrowLeft aria-hidden="true" size={18} />
                Volver al inicio
              </Button>
              <Button
                href="/calendario"
                variant="secondary"
                className="border-white/45 bg-transparent text-white hover:bg-white/10"
              >
                <CalendarDays aria-hidden="true" size={18} />
                Ver calendario
              </Button>
            </div>
          </div>
          <p
            aria-hidden="true"
            className="font-display text-8xl font-bold leading-none text-white/10 sm:text-9xl md:text-[10rem]"
          >
            404
          </p>
        </Container>
      </main>
      <SiteFooter />
    </>
  );
}
