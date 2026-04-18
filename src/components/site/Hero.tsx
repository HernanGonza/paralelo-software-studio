import iso from "@/assets/paralelo-iso.png";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />

      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-8 flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-celeste" />
              Estudio de software · Misiones, Argentina
            </span>
          </div>

          <h1 className="animate-fade-up font-display text-5xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
            Construimos software
            <br />
            <span className="text-gradient">en paralelo</span> a tu negocio.
          </h1>

          <p
            className="mx-auto mt-8 max-w-2xl animate-fade-up text-lg text-muted-foreground md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            Diseñamos y desarrollamos sistemas a medida — CRMs, plataformas internas
            y productos digitales — además de sitios web pensados para escalar.
          </p>

          <div
            className="mt-10 flex animate-fade-up flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#proyectos"
              className="inline-flex w-full items-center justify-center rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:translate-y-[-2px] hover:bg-primary/90 sm:w-auto"
            >
              Ver proyectos
            </a>
            <a
              href="#contacto"
              className="inline-flex w-full items-center justify-center rounded-full border border-border bg-background/60 px-7 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-smooth hover:bg-background sm:w-auto"
            >
              Iniciar un proyecto →
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-[-80px] top-1/2 hidden -translate-y-1/2 opacity-30 md:block">
          <img src={iso} alt="" className="h-[420px] w-[420px] animate-float-slow" />
        </div>
      </div>
    </section>
  );
}
