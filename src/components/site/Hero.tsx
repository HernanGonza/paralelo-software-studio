import iso from "@/assets/paralelo-iso.png";
import { FloatingParticles } from "./FloatingParticles";
import { ScrollArrow, ScrollMouse } from "./ScrollIndicator";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-hero pt-32 pb-24 md:pt-40 md:pb-32 min-h-screen flex flex-col">
      <div className="absolute inset-0 -z-10 grid-bg" aria-hidden />
      
      {/* Partículas flotantes */}
      <FloatingParticles />

      <div className="mx-auto max-w-7xl px-6 flex-1 flex items-center">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div 
            className="mb-8 flex justify-center"
            data-usal="zoomin duration-600"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-celeste" />
              Estudio de software · Misiones, Argentina
            </span>
          </div>

          {/* Título principal */}
          <h1 
            className="font-display text-5xl font-bold leading-[1.05] tracking-tighter text-foreground md:text-7xl lg:text-8xl"
            data-usal="fade-u duration-800"
          >
            Construimos software
            <br />
            <span className="text-gradient">en paralelo</span> a tu negocio.
          </h1>

          {/* Subtítulo */}
          <p
            className="mx-auto mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl"
            data-usal="fade-u delay-200 duration-800"
          >
            Diseñamos y desarrollamos software web a medida: sistemas, plataformas
            internas y productos digitales pensados para escalar con tu negocio.
          </p>

          {/* Botones */}
          <div
            className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            data-usal="fade-u delay-400 duration-700"
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

        {/* Logo flotante */}
        <div 
          className="pointer-events-none absolute right-[-80px] top-1/2 hidden -translate-y-1/2 opacity-30 md:block"
          data-usal="flip-r blur duration-1200 delay-300"
        >
          <img src={iso} alt="" className="h-[420px] w-[420px] animate-float-slow" />
        </div>
      </div>

      {/* Scroll Indicators - dejá los dos y elegí después cuál te gusta */}
      <ScrollMouse />
      {/* <ScrollArrow /> */}
    </section>
  );
}