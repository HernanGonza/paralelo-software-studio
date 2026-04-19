import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import iso from "@/assets/paralelo-iso.png";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#nosotros", label: "Nosotros" },
  { href: "#proceso", label: "Proceso" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquear scroll cuando el menú mobile está abierto
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
          scrolled
            ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        data-usal="fade-d duration-700 once"
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo con microinteracción en las Ls */}
          <Link
            to="/"
            className="logo-paralelo group flex items-center gap-2.5"
            data-usal="fade-r duration-500 delay-100 once"
          >
            <img
              src={iso}
              alt="Paralelo"
              className="h-9 w-9 transition-transform duration-500 group-hover:rotate-[-8deg]"
            />
            <span className="font-display text-lg font-semibold tracking-tight">
              para
              <span className="logo-l text-accent">l</span>
              e
              <span className="logo-l text-accent">l</span>
              o
            </span>
          </Link>

          {/* Links desktop */}
          <div
            className="hidden items-center gap-8 md:flex"
            data-usal="split-item split-fade-d split-delay-80 delay-200 once"
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* Acciones derecha */}
          <div className="flex items-center gap-2">
            <div data-usal="zoomin duration-500 delay-300 once">
              <ThemeToggle />
            </div>

            {/* CTA desktop */}
            <a
              href="#contacto"
              className="hidden items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary/90 hover:shadow-elegant md:inline-flex"
              data-usal="zoomin duration-600 delay-400 once"
            >
              Trabajemos juntos
            </a>

            {/* Hamburguesa mobile */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={mobileOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground backdrop-blur transition-smooth hover:border-celeste/40 md:hidden"
            >
              {mobileOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </nav>
      </header>

      {/* Overlay menú mobile */}
      <div
        className={`fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
        aria-hidden={!mobileOpen}
      >
        <div
          className="flex h-full flex-col items-center justify-center gap-8 px-6"
          onClick={(e) => e.stopPropagation()}
        >
          {links.map((l, i) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="font-display text-3xl font-semibold text-foreground transition-colors hover:text-celeste"
              style={{
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
                transition: `opacity 0.4s ease ${i * 60}ms, transform 0.4s ease ${i * 60}ms`,
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:bg-primary/90"
            style={{
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(12px)",
              transition: `opacity 0.4s ease ${links.length * 60}ms, transform 0.4s ease ${links.length * 60}ms`,
            }}
          >
            Trabajemos juntos
          </a>
        </div>
      </div>
    </>
  );
}
