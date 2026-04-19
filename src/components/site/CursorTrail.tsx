import { useEffect, useRef } from "react";

export function CursorTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const points = useRef<{ x: number; y: number; age: number }[]>([]);
  const mouse = useRef({ x: 0, y: 0 });
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      points.current.push({ x: e.clientX, y: e.clientY, age: 0 });
      
      // Mantener máximo 20 puntos para trail corto
      if (points.current.length > 20) {
        points.current.shift();
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Actualizar edad y dibujar trail
      points.current = points.current.filter((point) => {
        point.age += 1;
        return point.age < 20; // Desaparecer rápido
      });

      // Dibujar trail con gradiente
      points.current.forEach((point, index) => {
        const opacity = 1 - point.age / 20;
        const size = (1 - point.age / 20) * 8;
        
        // Gradiente de azul a celeste
        const gradient = ctx.createRadialGradient(
          point.x, point.y, 0,
          point.x, point.y, size
        );
        gradient.addColorStop(0, `rgba(48, 188, 229, ${opacity * 0.8})`); // celeste
        gradient.addColorStop(0.5, `rgba(85, 136, 230, ${opacity * 0.5})`); // azul medio
        gradient.addColorStop(1, `rgba(50, 80, 180, ${opacity * 0.2})`); // azul oscuro

        ctx.beginPath();
        ctx.arc(point.x, point.y, size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Cursor principal
      const mainGradient = ctx.createRadialGradient(
        mouse.current.x, mouse.current.y, 0,
        mouse.current.x, mouse.current.y, 12
      );
      mainGradient.addColorStop(0, "rgba(48, 188, 229, 0.9)");
      mainGradient.addColorStop(0.4, "rgba(48, 188, 229, 0.4)");
      mainGradient.addColorStop(1, "rgba(48, 188, 229, 0)");

      ctx.beginPath();
      ctx.arc(mouse.current.x, mouse.current.y, 12, 0, Math.PI * 2);
      ctx.fillStyle = mainGradient;
      ctx.fill();

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-[9999] hidden md:block"
      style={{ mixBlendMode: "screen" }}
    />
  );
}