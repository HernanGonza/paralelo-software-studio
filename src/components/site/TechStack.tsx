const technologies = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "TypeScript", icon: "TS" },
  { name: "Node.js", icon: "⬢" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Tailwind", icon: "🎨" },
  { name: "Supabase", icon: "⚡" },
  { name: "Vercel", icon: "▲" },
  { name: "Figma", icon: "🎯" },
  { name: "Git", icon: "🔀" },
];

export function TechStack() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card/50 py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p 
          className="mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground"
          data-usal="fade-u duration-600"
        >
          Tecnologías que usamos
        </p>
      </div>

      {/* Scroll infinito */}
      <div className="relative">
        {/* Fade izquierdo */}
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card/50 to-transparent" />
        {/* Fade derecho */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card/50 to-transparent" />

        <div className="flex animate-scroll-x">
          {/* Duplicamos para loop infinito */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex flex-shrink-0 items-center gap-3 px-8"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-xl shadow-soft">
                {tech.icon}
              </span>
              <span className="whitespace-nowrap font-medium text-foreground">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}