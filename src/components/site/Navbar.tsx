import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import iso from "@/assets/paralelo-iso.png";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-smooth ${
        scrolled
          ? "border-b border-border/60 bg-background/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
      data-usal="fade-d duration-700 once"
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link 
          to="/" 
          className="flex items-center gap-2.5"
          data-usal="fade-r duration-500 delay-100 once"
        >
          <img src={iso} alt="Paralelo" className="h-9 w-9" />
          <span className="font-display text-lg font-semibold tracking-tight">
            para<span className="text-accent">l</span>e<span className="text-accent">l</span>o
          </span>
        </Link>

        {/* Links de navegación */}
        <div 
          className="hidden items-center gap-8 md:flex"
          data-usal="split-item split-fade-d split-delay-80 delay-200 once"
        >
          <a
            href="#nosotros"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Nosotros
          </a>
          <a
            href="#proyectos"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Contacto
          </a>
        </div>

        {/* CTA Button */}
        <a
          href="#contacto"
          className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground shadow-soft transition-smooth hover:bg-primary/90 hover:shadow-elegant"
          data-usal="zoomin duration-600 delay-400 once"
        >
          Trabajemos juntos
        </a>
      </nav>
    </header>
  );
}