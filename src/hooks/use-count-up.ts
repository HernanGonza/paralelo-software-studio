import { useEffect, useRef, useState } from "react";

interface UseCountUpOptions {
  end: number;
  duration?: number;
  start?: number;
}

/**
 * Counts from `start` to `end` over `duration` ms when the returned ref
 * scrolls into view. Triggers only once.
 */
export function useCountUp({ end, duration = 1800, start = 0 }: UseCountUpOptions) {
  const [value, setValue] = useState(start);
  const ref = useRef<HTMLElement | null>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !triggered.current) {
            triggered.current = true;
            const startTime = performance.now();
            const tick = (now: number) => {
              const progress = Math.min((now - startTime) / duration, 1);
              // easeOutCubic
              const eased = 1 - Math.pow(1 - progress, 3);
              setValue(Math.round(start + (end - start) * eased));
              if (progress < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [end, duration, start]);

  return { value, ref };
}
