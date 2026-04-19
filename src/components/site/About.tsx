const stats = [
  { value: "2025", label: "Año de fundación" },
  { value: "Misiones", label: "Argentina" },
  { value: "100%", label: "Hecho a medida" },
];

const values = [
  {
    title: "Sistemas a medida",
    description:
      "Plataformas, paneles internos e integraciones. Software pensado para resolver problemas reales de tu operación.",
  },
  {
    title: "Producto end-to-end",
    description:
      "Desde la arquitectura y la base de datos hasta la interfaz. Stack moderno, performance y código mantenible.",
  },
  {
    title: "Trabajo en paralelo",
    description:
      "Iteramos junto a tu equipo. Comunicación clara, entregas continuas, sin sorpresas.",
  },
];

export function About() {
  return (
    <section id="nosotros" className="relative scroll-mt-20 py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* Columna izquierda */}
          <div className="lg:col-span-5">
            <span 
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-celeste"
              data-usal="fade-r duration-600"
            >
              <span className="h-px w-8 bg-celeste" /> Nosotros
            </span>
            
            <h2 
              className="mt-6 font-display text-4xl font-bold leading-tight tracking-tight md:text-5xl"
              data-usal="fade-l duration-800 delay-100"
            >
              Un estudio de software con
              <span className="text-gradient"> ambición global.</span>
            </h2>
            
            <p 
              className="mt-6 text-lg text-muted-foreground"
              data-usal="fade-u duration-700 delay-200"
            >
              Nacimos en <strong className="text-foreground">2025 en Misiones, Argentina</strong>,
              con foco en construir <strong className="text-foreground">software web a medida</strong>:
              sistemas, plataformas internas y productos digitales para empresas y
              equipos que necesitan algo más que una plantilla.
            </p>
            
            <p 
              className="mt-4 text-muted-foreground"
              data-usal="fade-u duration-700 delay-300"
            >
              También hacemos sitios web cuando el proyecto lo pide. Trabajamos en
              paralelo con vos: escuchamos, prototipamos y entregamos producto.
            </p>

            {/* Stats con count animation */}
            <dl 
              className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8"
              data-usal="split-item split-fade-u split-delay-100 delay-400"
            >
              {stats.map((s, i) => (
                <div key={s.label}>
                  <dt 
                    className="font-display text-2xl font-bold text-foreground md:text-3xl"
                    data-usal={i === 2 ? "count-[100] duration-2000 delay-600" : undefined}
                  >
                    {s.value}
                  </dt>
                  <dd className="mt-1 text-xs text-muted-foreground">{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Columna derecha - Tarjetas */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {values.map((v, i) => (
                <article
                  key={v.title}
                  className={`group rounded-2xl border border-border bg-card p-7 shadow-card transition-smooth hover:border-celeste/60 hover:shadow-elegant ${
                    i === 0 ? "sm:translate-y-6" : ""
                  } ${i === 2 ? "sm:translate-y-6" : ""}`}
                  data-usal={`flip-u duration-800 delay-${200 + i * 150}`}
                >
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-bold text-primary transition-smooth group-hover:bg-primary group-hover:text-primary-foreground">
                    0{i + 1}
                  </div>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {v.description}
                  </p>
                </article>
              ))}
              
              {/* Quote card */}
              <article 
                className="rounded-2xl border border-primary/20 bg-gradient-primary p-7 text-primary-foreground shadow-elegant"
                data-usal="zoomin blur duration-1000 delay-700"
              >
                <p className="font-display text-xl font-semibold leading-snug">
                  "Construimos software que tu equipo realmente quiere usar."
                </p>
                <p className="mt-4 text-sm opacity-80">— Equipo Paralelo</p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}