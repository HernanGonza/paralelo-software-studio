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

            {/* Stats */}
            <dl 
              className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8"
              data-usal="fade-u duration-700 delay-400"
            >
              {stats.map((s) => (
                <div key={s.label}>
                  <dt className="font-display text-2xl font-bold text-foreground md:text-3xl">
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
                  className={`card-shine group relative overflow-hidden rounded-2xl border border-border/50 bg-card/80 p-7 backdrop-blur-sm shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-celeste/40 hover:shadow-elegant ${
                    i === 0 ? "sm:translate-y-6" : ""
                  } ${i === 2 ? "sm:translate-y-6" : ""}`}
                  data-usal={`flip-u duration-800 delay-${200 + i * 150}`}
                >
                  {/* Efecto shine */}
                  <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
                  
                  {/* Borde gradiente */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-celeste/10 via-transparent to-primary/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
                  
                  <div className="relative">
                    <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 font-display text-sm font-bold text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110">
                      0{i + 1}
                    </div>
                    <h3 className="font-display text-lg font-semibold transition-colors group-hover:text-celeste">{v.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {v.description}
                    </p>
                  </div>
                </article>
              ))}
              
              {/* Quote card */}
              <article 
                className="card-shine group relative overflow-hidden rounded-2xl border border-primary/20 bg-gradient-primary p-7 text-primary-foreground shadow-elegant"
                data-usal="zoomin blur duration-1000 delay-700"
              >
                {/* Efecto shine */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 group-hover:animate-shine pointer-events-none" />
                
                <div className="relative">
                  <p className="font-display text-xl font-semibold leading-snug">
                    "Construimos software que tu equipo realmente quiere usar."
                  </p>
                  <p className="mt-4 text-sm opacity-80">— Equipo Paralelo</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}