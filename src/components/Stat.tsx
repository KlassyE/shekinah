import { useEffect, useRef, useState } from 'react';

type Props = { end: number; suffix?: string; label: string; duration?: number };

export function Stat({ end, suffix = '', label, duration = 1600 }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLDivElement | null>(null);
  const started = useRef(false);

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !started.current) {
            started.current = true;
            const start = performance.now();
            const tick = (now: number) => {
              const p = Math.min(1, (now - start) / duration);
              const eased = 1 - Math.pow(1 - p, 3);
              setValue(Math.round(end * eased));
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          }
        });
      },
      { threshold: 0.4 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [end, duration]);

  return (
    <div className="stat" ref={ref}>
      <div className="stat-value">{value.toLocaleString()}{suffix}</div>
      <div className="stat-label">{label}</div>
    </div>
  );
}
