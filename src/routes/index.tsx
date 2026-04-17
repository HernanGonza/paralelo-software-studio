import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paralelo · Estudio web — Diseño y desarrollo a medida" },
      {
        name: "description",
        content:
          "Estudio de diseño y desarrollo web fundado en Misiones, Argentina. Construimos productos digitales modernos, rápidos y a medida.",
      },
      { property: "og:title", content: "Paralelo · Estudio web" },
      {
        property: "og:description",
        content:
          "Diseño y desarrollo web a medida. Misiones, Argentina — desde 2025.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </main>
  );
}
