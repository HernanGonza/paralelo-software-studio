import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  project_url: string | null;
  technologies: string[] | null;
  client: string | null;
  year: number | null;
};

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    (async () => {
      const { data } = await supabase
        .from("projects")
        .select(
          "id, title, description, image_url, project_url, technologies, client, year"
        )
        .order("display_order", { ascending: true })
        .order("created_at", { ascending: false });
      if (!active) return;
      setProjects(data ?? []);
      setLoading(false);
    })();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      id="proyectos"
      className="relative scroll-mt-20 bg-secondary/40 py-24 md:py-32 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-16 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span 
              className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-celeste"
              data-usal="fade-r duration-600"
            >
              <span className="h-px w-8 bg-celeste" /> Proyectos
            </span>
            <h2 
              className="mt-6 font-display text-4xl font-bold tracking-tight md:text-5xl"
              data-usal="fade-u duration-800 delay-100"
            >
              Lo que construimos<span className="text-gradient">.</span>
            </h2>
          </div>
          <p 
            className="max-w-md text-muted-foreground"
            data-usal="fade-u duration-700 delay-200"
          >
            Una selección de productos digitales en los que trabajamos junto a
            equipos y emprendedores.
          </p>
        </div>

        {/* Grid de proyectos */}
        {loading ? (
          <div className="grid gap-6 md:grid-cols-2">
            {[0, 1].map((i) => (
              <div
                key={i}
                className="h-96 animate-pulse rounded-3xl border border-border bg-card"
              />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <EmptyState />
        ) : (
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, index) => (
              <ProjectCard key={p.id} project={p} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const Wrapper = project.project_url ? "a" : "div";
  const wrapperProps = project.project_url
    ? {
        href: project.project_url,
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  // Usar zoomin vertical para evitar scroll horizontal
  const delay = 300 + index * 100;

  return (
    <Wrapper
      {...wrapperProps}
      className="group block overflow-hidden rounded-3xl border border-border bg-card shadow-card transition-smooth hover:-translate-y-1 hover:border-celeste/60 hover:shadow-elegant"
      data-usal={`zoomin-u duration-800 delay-${delay}`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {project.image_url ? (
          <img
            src={project.image_url}
            alt={project.title}
            loading="lazy"
            className="h-full w-full object-cover transition-smooth group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-primary text-primary-foreground/60">
            <span className="font-display text-2xl">{project.title}</span>
          </div>
        )}
        {project.year && (
          <span className="absolute right-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-medium text-foreground backdrop-blur">
            {project.year}
          </span>
        )}
      </div>

      <div className="p-7">
        <div className="flex items-start justify-between gap-4">
          <div>
            {project.client && (
              <p className="text-xs uppercase tracking-wider text-muted-foreground">
                {project.client}
              </p>
            )}
            <h3 className="mt-1 font-display text-xl font-semibold">
              {project.title}
            </h3>
          </div>
          {project.project_url && (
            <span className="mt-1 text-celeste transition-smooth group-hover:translate-x-1">
              ↗
            </span>
          )}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{project.description}</p>

        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.technologies.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border bg-background px-2.5 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}

function EmptyState() {
  return (
    <div 
      className="rounded-3xl border border-dashed border-border bg-card/50 py-20 text-center"
      data-usal="fade-u blur duration-800"
    >
      <p className="font-display text-lg text-foreground">Próximamente.</p>
      <p className="mt-2 text-sm text-muted-foreground">
        Estamos preparando los primeros casos. Cargá proyectos desde{" "}
        <a href="/admin" className="text-celeste underline-offset-4 hover:underline">
          /admin
        </a>
        .
      </p>
    </div>
  );
}