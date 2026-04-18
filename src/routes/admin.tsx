import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent } from "react";
import { supabase } from "@/integrations/supabase/client";
import type { User } from "@supabase/supabase-js";

export const Route = createFileRoute("/admin")({
  component: AdminPage,
});

type Project = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  project_url: string | null;
  technologies: string[] | null;
  client: string | null;
  year: number | null;
  display_order: number;
};

function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const { data: sub } = supabase.auth.onAuthStateChange((_e, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        checkAdmin(session.user.id);
      } else {
        setIsAdmin(null);
        setLoading(false);
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) checkAdmin(session.user.id);
      else setLoading(false);
    });

    return () => sub.subscription.unsubscribe();
  }, []);

  async function checkAdmin(userId: string) {
    const { data } = await supabase
      .from("user_roles")
      .select("role")
      .eq("user_id", userId)
      .eq("role", "admin")
      .maybeSingle();
    setIsAdmin(!!data);
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <p className="text-muted-foreground">Cargando…</p>
      </div>
    );
  }

  if (!user) return <AuthForm />;
  if (!isAdmin) return <NotAdmin email={user.email ?? ""} />;

  return <AdminDashboard userEmail={user.email ?? ""} />;
}

function AuthForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-elegant">
        <Link to="/" className="text-xs text-muted-foreground hover:text-foreground">
          ← Volver al sitio
        </Link>
        <h1 className="mt-4 font-display text-3xl font-bold">
          Panel <span className="text-gradient">Paralelo</span>
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Ingresá a tu cuenta.
        </p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              Email
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </div>
          <div>
            <label className="text-xs font-medium text-muted-foreground">
              Contraseña
            </label>
            <input
              type="password"
              required
              minLength={6}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/30"
            />
          </div>

          {error && <p className="text-sm text-destructive">{error}</p>}

          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-xl bg-primary px-4 py-3 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary/90 disabled:opacity-50"
          >
            {submitting ? "..." : "Ingresar"}
          </button>
        </form>
      </div>
    </div>
  );
}

function NotAdmin({ email }: { email: string }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-hero px-4">
      <div className="max-w-md rounded-3xl border border-border bg-card p-8 text-center shadow-elegant">
        <h1 className="font-display text-2xl font-bold">Acceso restringido</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Tu usuario <strong>{email}</strong> no tiene permisos de administrador.
        </p>
        <button
          onClick={() => supabase.auth.signOut()}
          className="mt-6 text-xs text-celeste underline-offset-4 hover:underline"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
  );
}

function AdminDashboard({ userEmail }: { userEmail: string }) {
  const [projects, setProjects] = useState<Project[]>([]);
  const [editing, setEditing] = useState<Project | null>(null);
  const [showForm, setShowForm] = useState(false);

  async function load() {
    const { data } = await supabase
      .from("projects")
      .select("*")
      .order("display_order", { ascending: true })
      .order("created_at", { ascending: false });
    setProjects(data ?? []);
  }

  useEffect(() => {
    load();
  }, []);

  async function remove(id: string) {
    if (!confirm("¿Eliminar este proyecto?")) return;
    await supabase.from("projects").delete().eq("id", id);
    load();
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-card/50 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-4">
            <Link to="/" className="font-display text-lg font-semibold">
              paralelo<span className="text-celeste">/</span>admin
            </Link>
            <span className="text-xs text-muted-foreground">{userEmail}</span>
          </div>
          <button
            onClick={() => supabase.auth.signOut()}
            className="text-xs text-muted-foreground hover:text-foreground"
          >
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h1 className="font-display text-2xl font-bold">Proyectos</h1>
          <button
            onClick={() => {
              setEditing(null);
              setShowForm(true);
            }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary/90"
          >
            + Nuevo proyecto
          </button>
        </div>

        {(showForm || editing) && (
          <ProjectForm
            project={editing}
            onClose={() => {
              setShowForm(false);
              setEditing(null);
            }}
            onSaved={() => {
              setShowForm(false);
              setEditing(null);
              load();
            }}
          />
        )}

        <div className="space-y-4">
          {projects.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between rounded-2xl border border-border bg-card p-5"
            >
              <div className="flex items-center gap-4">
                {p.image_url ? (
                  <img
                    src={p.image_url}
                    alt=""
                    className="h-14 w-20 rounded-lg object-cover"
                  />
                ) : (
                  <div className="flex h-14 w-20 items-center justify-center rounded-lg bg-muted text-xs text-muted-foreground">
                    Sin imagen
                  </div>
                )}
                <div>
                  <p className="font-medium">{p.title}</p>
                  <p className="text-xs text-muted-foreground">
                    {p.client ?? "Sin cliente"} · {p.year ?? "—"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setEditing(p)}
                  className="rounded-full border border-border px-4 py-1.5 text-xs hover:bg-muted"
                >
                  Editar
                </button>
                <button
                  onClick={() => remove(p.id)}
                  className="rounded-full border border-destructive/30 px-4 py-1.5 text-xs text-destructive hover:bg-destructive/10"
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          {projects.length === 0 && (
            <div className="rounded-2xl border border-dashed border-border bg-card/50 py-16 text-center text-sm text-muted-foreground">
              Aún no cargaste proyectos.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

function ProjectForm({
  project,
  onClose,
  onSaved,
}: {
  project: Project | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [title, setTitle] = useState(project?.title ?? "");
  const [description, setDescription] = useState(project?.description ?? "");
  const [projectUrl, setProjectUrl] = useState(project?.project_url ?? "");
  const [client, setClient] = useState(project?.client ?? "");
  const [year, setYear] = useState<string>(
    project?.year?.toString() ?? new Date().getFullYear().toString()
  );
  const [technologies, setTechnologies] = useState(
    project?.technologies?.join(", ") ?? ""
  );
  const [imageUrl, setImageUrl] = useState(project?.image_url ?? "");
  const [order, setOrder] = useState(project?.display_order ?? 0);
  const [uploading, setUploading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function uploadImage(file: File) {
    setUploading(true);
    setError(null);
    try {
      const ext = file.name.split(".").pop();
      const path = `${crypto.randomUUID()}.${ext}`;
      const { error: upErr } = await supabase.storage
        .from("project-images")
        .upload(path, file, { upsert: false });
      if (upErr) throw upErr;
      const { data } = supabase.storage
        .from("project-images")
        .getPublicUrl(path);
      setImageUrl(data.publicUrl);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al subir imagen");
    } finally {
      setUploading(false);
    }
  }

  async function save(e: FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError(null);
    try {
      const payload = {
        title,
        description,
        project_url: projectUrl || null,
        client: client || null,
        year: year ? parseInt(year) : null,
        technologies: technologies
          .split(",")
          .map((t) => t.trim())
          .filter(Boolean),
        image_url: imageUrl || null,
        display_order: order,
      };

      const { error } = project
        ? await supabase.from("projects").update(payload).eq("id", project.id)
        : await supabase.from("projects").insert(payload);

      if (error) throw error;
      onSaved();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al guardar");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-ink/40 p-4 backdrop-blur">
      <form
        onSubmit={save}
        className="my-8 w-full max-w-2xl space-y-4 rounded-3xl border border-border bg-card p-8 shadow-elegant"
      >
        <div className="flex items-center justify-between">
          <h2 className="font-display text-xl font-bold">
            {project ? "Editar proyecto" : "Nuevo proyecto"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
          >
            ✕
          </button>
        </div>

        <Field label="Título" required>
          <input
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input"
          />
        </Field>

        <Field label="Descripción" required>
          <textarea
            required
            rows={3}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="input resize-none"
          />
        </Field>

        <Field label="Imagen (captura del proyecto)">
          {imageUrl && (
            <img
              src={imageUrl}
              alt=""
              className="mb-2 h-40 w-full rounded-lg object-cover"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) uploadImage(f);
            }}
            className="block w-full text-xs text-muted-foreground file:mr-3 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-2 file:text-xs file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
          />
          {uploading && (
            <p className="mt-1 text-xs text-muted-foreground">Subiendo…</p>
          )}
        </Field>

        <div className="grid grid-cols-2 gap-4">
          <Field label="URL del sitio">
            <input
              type="url"
              placeholder="https://..."
              value={projectUrl}
              onChange={(e) => setProjectUrl(e.target.value)}
              className="input"
            />
          </Field>
          <Field label="Cliente">
            <input
              value={client}
              onChange={(e) => setClient(e.target.value)}
              className="input"
            />
          </Field>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Field label="Año">
            <input
              type="number"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="input"
            />
          </Field>
          <Field label="Orden (menor = primero)">
            <input
              type="number"
              value={order}
              onChange={(e) => setOrder(parseInt(e.target.value) || 0)}
              className="input"
            />
          </Field>
        </div>

        <Field label="Tecnologías (separadas por coma)">
          <input
            placeholder="React, Next.js, Tailwind"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            className="input"
          />
        </Field>

        {error && <p className="text-sm text-destructive">{error}</p>}

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-border px-5 py-2 text-sm hover:bg-muted"
          >
            Cancelar
          </button>
          <button
            type="submit"
            disabled={saving || uploading}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft hover:bg-primary/90 disabled:opacity-50"
          >
            {saving ? "Guardando…" : "Guardar"}
          </button>
        </div>

        <style>{`.input{width:100%;border-radius:0.75rem;border:1px solid var(--input);background:var(--background);padding:0.6rem 0.9rem;font-size:0.875rem;outline:none;}
        .input:focus{border-color:var(--ring);box-shadow:0 0 0 3px color-mix(in oklab, var(--ring) 25%, transparent);}`}</style>
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label className="text-xs font-medium text-muted-foreground">
        {label} {required && <span className="text-destructive">*</span>}
      </label>
      <div className="mt-1">{children}</div>
    </div>
  );
}