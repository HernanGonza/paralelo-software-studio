import { useEffect, useState } from "react";

// Opción 1: Flecha animada minimalista
export function ScrollArrow() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#nosotros"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground transition-all duration-500 hover:text-celeste ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll hacia abajo"
    >
      <span className="text-xs uppercase tracking-widest">Scroll</span>
      <svg
        className="h-6 w-6 animate-bounce"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M19 14l-7 7m0 0l-7-7m7 7V3"
        />
      </svg>
    </a>
  );
}

// Opción 2: Mouse con ruedita animada
export function ScrollMouse() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY < 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <a
      href="#nosotros"
      className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 text-muted-foreground transition-all duration-500 hover:text-celeste group ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
      aria-label="Scroll hacia abajo"
    >
      {/* Mouse outline */}
      <div className="relative h-10 w-6 rounded-full border-2 border-current transition-colors">
        {/* Wheel */}
        <div 
          className="absolute left-1/2 top-2 h-2 w-0.5 -translate-x-1/2 rounded-full bg-current"
          style={{
            animation: "scrollWheel 1.5s ease-in-out infinite",
          }}
        />
      </div>
      
      {/* Flechitas */}
      <div className="flex flex-col items-center -space-y-1">
        <svg 
          className="h-3 w-3 animate-bounce" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          style={{ animationDelay: "0ms" }}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
        <svg 
          className="h-3 w-3 animate-bounce" 
          fill="currentColor" 
          viewBox="0 0 24 24"
          style={{ animationDelay: "150ms" }}
        >
          <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z" />
        </svg>
      </div>
    </a>
  );
}