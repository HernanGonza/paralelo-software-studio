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
    "React Native": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="2" />
        <ellipse cx="12" cy="12" rx="9" ry="4" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="9" ry="4" transform="rotate(120 12 12)" />
        <rect x="7" y="2" width="10" height="20" rx="2" strokeDasharray="2 2" />
      </svg>
    ),
    "Next.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 8l8 8M8 8v8" />
      </svg>
    ),
    JavaScript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M12 8v6c0 1.5-1 2-2 2M15 8h2c1 0 2 .5 2 2s-1 2-2 2h-1c-1 0-2 .5-2 2s1 2 2 2h2" />
      </svg>
    ),
    TypeScript: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 8h6M12 8v8M15 12h2c1 0 1.5 1 1.5 2s-.5 2-1.5 2h-2" />
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M8 6c4-2 8 0 8 4s-4 4-4 6c0 1 1 2 4 2" />
        <path d="M6 18c2 2 10 2 12 0" />
        <path d="M7 20c2 2 8 2 10 0" />
      </svg>
    ),
    "Node.js": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 2L3 7v10l9 5 9-5V7l-9-5z" />
        <path d="M12 22V12M3 7l9 5 9-5" />
      </svg>
    ),
    Express: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M4 12h16M4 12l4-4m-4 4l4 4" />
        <circle cx="17" cy="12" r="3" />
      </svg>
    ),
    "Spring Boot": (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 3c-5 0-9 4-9 9s4 9 9 9" />
        <path d="M12 3c3 2 5 5 5 9s-2 7-5 9" />
        <circle cx="12" cy="12" r="3" />
        <path d="M15 9l3-3M18 6l-1.5-.5M18 6l-.5-1.5" />
      </svg>
    ),
    PostgreSQL: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v6c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
      </svg>
    ),
    MySQL: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <ellipse cx="12" cy="6" rx="8" ry="3" />
        <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
        <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
      </svg>
    ),
    MongoDB: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 2c-1 2-3 4-3 8s2 6 3 8v4" />
        <path d="M12 2c1 2 3 4 3 8s-2 6-3 8" />
        <path d="M11 22h2" />
      </svg>
    ),
    Tailwind: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M6 12c.6-4 3-6 6-6 4.5 0 5.4 3 7.5 3.5 1.4.3 2.6-.2 3.5-1.5-.6 4-3 6-6 6-4.5 0-5.4-3-7.5-3.5-1.4-.3-2.6.2-3.5 1.5z" />
        <path d="M3 17c.6-4 3-6 6-6 4.5 0 5.4 3 7.5 3.5 1.4.3 2.6-.2 3.5-1.5-.6 4-3 6-6 6-4.5 0-5.4-3-7.5-3.5-1.4-.3-2.6.2-3.5 1.5z" />
      </svg>
    ),
    Bootstrap: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M8 7h5c2 0 3 1 3 2.5S15 12 13 12c2.5 0 3.5 1 3.5 2.5S15 17 12.5 17H8V7z" />
      </svg>
    ),
    Supabase: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 3L4 9v6l8 6 8-6V9l-8-6z" />
        <path d="M12 21v-6M12 9v6M4 9l8 6 8-6" />
      </svg>
    ),
    Flutter: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M14 4l-8 8 4 4 8-8V4h-4z" />
        <path d="M14 12l-4 4 4 4 4-4-4-4z" />
      </svg>
    ),
    Expo: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l4 2" />
        <path d="M8 3L6 6M16 3l2 3M8 21l-2-3M16 21l2-3" />
      </svg>
    ),
    Angular: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M12 2L3 6l1.5 12L12 22l7.5-4L21 6l-9-4z" />
        <path d="M12 6l-5 10h3l1-2h2l1 2h3L12 6z" />
      </svg>
    ),
    Vue: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <path d="M2 4h4l6 10 6-10h4L12 22 2 4z" />
        <path d="M6 4l6 10 6-10" />
      </svg>
    ),
    Ollama: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="12" cy="10" r="6" />
        <path d="M9 9h.01M15 9h.01" />
        <path d="M10 12c.5.5 1.5 1 2 1s1.5-.5 2-1" />
        <path d="M8 16c-2 1-3 3-3 5h14c0-2-1-4-3-5" />
      </svg>
    ),
    n8n: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-6 w-6">
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="18" cy="18" r="3" />
        <path d="M9 12h3M12 12l3-4.5M12 12l3 4.5" />
      </svg>
    ),
  };

  return icons[name] || <span className="text-sm font-bold">{name.slice(0, 2)}</span>;
};

const technologies = [
  "React",
  "React Native",
  "Next.js",
  "JavaScript",
  "TypeScript",
  "Java",
  "Node.js",
  "Express",
  "Spring Boot",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Tailwind",
  "Bootstrap",
  "Supabase",
  "Flutter",
  "Expo",
  "Angular",
  "Vue",
  "Ollama",
  "n8n",
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

        <div className="flex w-max animate-scroll-x hover:[animation-play-state:paused]">
          {/* Duplicamos dos veces para loop seamless */}
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