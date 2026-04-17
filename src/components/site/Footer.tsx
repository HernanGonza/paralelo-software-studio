import { Link } from "@tanstack/react-router";
import logo from "@/assets/paralelo-logo.png";

export function Footer() {
  return (
    <footer
      id="contacto"
      className="relative scroll-mt-20 overflow-hidden bg-ink text-primary-foreground"
    >
      <div className="absolute inset-0 -z-10 opacity-20 grid-bg" aria-hidden />

      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <span className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-celeste">
              <span className="h-px w-8 bg-celeste" /> Contacto
            </span>
            <h2 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              ¿Tenés una idea?
              <br />
              <span className="text-gradient">Trabajemos en paralelo.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base text-primary-foreground/70 md:text-lg">
              Contanos en qué estás trabajando y te respondemos en menos de 24hs.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="mailto:hola@paralelo.tech"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-6 py-3 text-sm font-medium text-ink shadow-elegant transition-smooth hover:translate-y-[-2px]"
              >
                ✉ hola@paralelo.tech
              </a>
              <a
                href="https://wa.me/5493764000000"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-smooth hover:bg-primary-foreground/10"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50">
                  Ubicación
                </p>
                <p className="mt-2 text-sm text-primary-foreground/90">
                  Posadas, Misiones
                  <br />
                  Argentina 🇦🇷
                </p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-primary-foreground/50">
                  Seguinos
                </p>
                <ul className="mt-2 space-y-1.5 text-sm">
                  <li>
                    <a
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/90 transition-colors hover:text-celeste"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/90 transition-colors hover:text-celeste"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-foreground/90 transition-colors hover:text-celeste"
                    >
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 border-t border-primary-foreground/10 pt-8 md:flex-row md:items-center">
          <img src={logo} alt="Paralelo" className="h-12 w-auto md:h-14" loading="lazy" />
          <div className="flex items-center gap-6 text-xs text-primary-foreground/50">
            <span>© {new Date().getFullYear()} Paralelo Studio</span>
            <Link to="/admin" className="transition-colors hover:text-primary-foreground">
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
