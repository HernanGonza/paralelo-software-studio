import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Projects } from "@/components/site/Projects";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Paralelo · Estudio de software — Sistemas a medida" },
      {
        name: "description",
        content:
          "Estudio de software fundado en Misiones, Argentina. Construimos sistemas a medida, CRMs, plataformas internas y sitios web modernos.",
      },
      { property: "og:title", content: "Paralelo · Estudio de software" },
      {
        property: "og:description",
        content:
          "Sistemas a medida, CRMs y productos digitales. Misiones, Argentina — desde 2025.",
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
