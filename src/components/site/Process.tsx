import { Compass, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Compass,
    number: "01",
    title: "Descubrimiento",
    description:
      "Entendemos tu negocio, los problemas reales y a quién le sirve la solución. Salimos con un alcance claro.",
  },
  {
    icon: PenTool,
    number: "02",
    title: "Diseño",
    description:
      "Definimos arquitectura, flujos y la interfaz. Prototipamos lo crítico antes de tocar una línea de código.",
  },
  {
    icon: Code2,
    number: "03",
    title: "Desarrollo",
    description:
      "Construimos en sprints cortos. Vos ves avances reales todas las semanas y podés iterar con nosotros.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Entrega y soporte",
    description:
      "Desplegamos, documentamos y acompañamos. El producto sigue creciendo; nosotros seguimos cerca.",
  },
];

export function Process() {
  return (
    <section
      id="proceso"
      className="relative scroll-mt-20 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span
            className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-celeste"
            data-usal="fade-u duration-600 once"
          >
            <span className="h-px w-8 bg-celeste" /> Proceso
            <span className="h-px w-8 bg-celeste" />
          </span>
          <h2
            className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl"
            data-usal="fade-u duration-800 delay-100 once"
          >
            Cómo trabajamos<span className="text-gradient">.</span>
          </h2>
          <p
            className="mx-auto mt-6 max-w-xl text-muted-foreground"
            data-usal="fade-u duration-700 delay-200 once"
          >
            Un flujo simple, transparente y en paralelo con tu equipo.
            Desde la primera charla hasta el deploy, sin sorpresas.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-20">
          {/* Línea horizontal (desktop) */}
          <div
            className="absolute left-0 right-0 top-7 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block"
            aria-hidden
          />

          <ol className="grid gap-12 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li
                  key={step.number}
                  className="group relative"
                  data-usal={`fade-u blur duration-800 delay-${200 + i * 120} once`}
                >
                  {/* Ícono circular */}
                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-border bg-background shadow-soft transition-all duration-500 group-hover:border-celeste group-hover:shadow-elegant">
                    <Icon className="h-6 w-6 text-primary transition-colors group-hover:text-celeste" />
                  </div>

                  {/* Contenido */}
                  <div className="mt-6 text-center md:text-left">
                    <span className="font-display text-xs font-medium uppercase tracking-[0.2em] text-celeste">
                      {step.number}
                    </span>
                    <h3 className="mt-2 font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
