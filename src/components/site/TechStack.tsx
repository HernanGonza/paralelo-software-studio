// Iconos SVG minimalistas para cada tecnología
const TechIcon = ({ name }: { name: string }) => {
  const icons: Record<string, JSX.Element> = {
    React: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="2.5" />
        <ellipse cx="12" cy="12" rx="10" ry="4" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M9 6l6 6-6 6" />
        <circle cx="12" cy="12" r="10" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 8v8M9 8h6M14 12h3M17 12v4c0 1-1 2-2 2" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path d="M12 22V12M3 7l9 5 9-5" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
    Tailwind: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M6 12c.6-4 3-6 6-6 4.5 0 5.4 3 7.5 3.5 1.4.3 2.6-.2 3.5-1.5-.6 4-3 6-6 6-4.5 0-5.4-3-7.5-3.5-1.4-.3-2.6.2-3.5 1.5z" />
        <path d="M3 17c.6-4 3-6 6-6 4.5 0 5.4 3 7.5 3.5 1.4.3 2.6-.2 3.5-1.5-.6 4-3 6-6 6-4.5 0-5.4-3-7.5-3.5-1.4-.3-2.6.2-3.5 1.5z" />
      </svg>
    ),
    Supabase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 3L4 9v6l8 6 8-6V9l-8-6z" />
        <path d="M12 21v-6M12 9v6M4 9l8 6 8-6" />
      </svg>
    ),
    Vercel: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 3L2 21h20L12 3z" />
      </svg>
    ),
    Figma: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="15" cy="9" r="3" />
        <path d="M6 6h6v6H6zM6 12h6v6H9a3 3 0 01-3-3v-3zM12 6h3a3 3 0 010 6h-3V6zM6 6h3a3 3 0 000 6H6V6z" />
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="6" cy="6" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M6 9v6M18 9v3c0 3-3 3-3 3H9" />
      </svg>
    ),
  };

  return icons[name] || <span className="text-sm font-bold">{name.slice(0, 2)}</span>;
};

const technologies = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Tailwind",
  "Supabase",
  "Vercel",
  "Figma",
  "Git",
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
        <div className="absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-card/80 to-transparent" />
        {/* Fade derecho */}
        <div className="absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-card/80 to-transparent" />

        <div className="flex animate-scroll-x hover:[animation-play-state:paused]">
          {/* Duplicamos para loop infinito */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={`${tech}-${index}`}
              className="group flex flex-shrink-0 items-center gap-3 px-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-primary shadow-soft transition-all duration-300 group-hover:border-celeste group-hover:text-celeste group-hover:shadow-elegant">
                <TechIcon name={tech} />
              </div>
              <span className="whitespace-nowrap font-medium text-foreground transition-colors group-hover:text-celeste">
                {tech}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}