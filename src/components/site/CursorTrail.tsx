import { useEffect, useRef } from "react";

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const cursor = cursorRef.current;
    if (!canvas || !cursor) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Ocultar cursor nativo en todo el documento
    document.body.style.cursor = "none";
    
    // Aplicar cursor none a todos los elementos
    const style = document.createElement("style");
    style.id = "custom-cursor-style";
    style.textContent = `
      *, *::before, *::after {
        cursor: none !important;
      }
    `;
    document.head.appendChild(style);

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      
      // Mover cursor custom
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
      
      points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      
      // Mantener máximo 15 puntos para trail corto
      if (points.current.length > 15) {
        points.current.shift();
      }
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar edad y filtrar puntos viejos
      points.current = points.current.filter((point) => {
        point.age += 1;
        return point.age < 15;
      });

      // Dibujar trail con gradiente
      points.current.forEach((point) => {
        const opacity = 1 - point.age / 15;
        const size = (1 - point.age / 15) * 6;
        
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        );
        gradient.addColorStop(0, `rgba(48, 188, 229, ${opacity * 0.6})`);
        gradient.addColorStop(0.5, `rgba(85, 136, 230, ${opacity * 0.4})`);
        gradient.addColorStop(1, `rgba(50, 80, 180, ${opacity * 0.1})`);

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      document.body.style.cursor = "auto";
      const customStyle = document.getElementById("custom-cursor-style");
      if (customStyle) customStyle.remove();
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <>
      {/* Canvas para el trail */}
      <canvas
        ref={canvasRef}
        className="pointer-events-none fixed inset-0 z-[9998] hidden md:block"
        style={{ mixBlendMode: "screen" }}
      />
      
      {/* Cursor custom */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] hidden md:block"
        style={{
          transform: "translate(-50%, -50%)",
          transition: "opacity 0.2s ease",
        }}
      >
        {/* Círculo exterior */}
        <div 
          className="absolute -left-5 -top-5 h-10 w-10 rounded-full border-2"
          style={{
            borderColor: "rgba(50, 80, 180, 0.5)",
            transition: "transform 0.15s ease-out, border-color 0.2s ease",
          }}
        />
        {/* Punto central */}
        <div 
          className="absolute -left-1.5 -top-1.5 h-3 w-3 rounded-full"
          style={{
            backgroundColor: "rgb(50, 80, 180)",
            boxShadow: "0 0 10px rgba(50, 80, 180, 0.5), 0 0 20px rgba(48, 188, 229, 0.3)",
          }}
        />
      </div>
    </>
  );
}