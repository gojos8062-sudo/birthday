import { useMemo } from "react";

const GLYPHS = ["❤", "🌸", "✿", "♡", "✦"];

/** Soft hearts / petals drifting upward. Purely decorative. */
export function FloatingHearts({
  count = 14,
  tone = "rose",
}: {
  count?: number;
  tone?: "rose" | "light";
}) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 97) % 100,
        size: 10 + ((i * 13) % 18),
        duration: 16 + ((i * 7) % 14),
        delay: -((i * 5) % 20),
        glyph: GLYPHS[i % GLYPHS.length],
        opacity: 0.25 + ((i * 11) % 30) / 100,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((item) => (
        <span
          key={item.id}
          className={`animate-float-up absolute bottom-0 ${
            tone === "light" ? "text-blush" : "text-rose"
          }`}
          style={{
            left: `${item.left}%`,
            fontSize: `${item.size}px`,
            animationDuration: `${item.duration}s`,
            animationDelay: `${item.delay}s`,
            opacity: item.opacity,
          }}
        >
          {item.glyph}
        </span>
      ))}
    </div>
  );
}

/** Tiny twinkling sparkles for hero-type sections. */
export function Sparkles({ count = 18 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 37) % 100,
        top: (i * 53) % 100,
        size: 3 + ((i * 3) % 5),
        delay: (i % 10) * 0.4,
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((s) => (
        <span
          key={s.id}
          className="animate-twinkle absolute rounded-full bg-rose"
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            width: s.size,
            height: s.size,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

/** Confetti burst used at celebratory moments. */
export function Confetti({ count = 40 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: (i * 29) % 100,
        delay: ((i * 7) % 20) / 10,
        duration: 3.5 + ((i * 3) % 25) / 10,
        tone: i % 3,
        w: 5 + (i % 4),
        h: 9 + (i % 7),
      })),
    [count],
  );

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
      {items.map((c) => (
        <span
          key={c.id}
          className={`animate-confetti absolute top-0 rounded-[2px] ${
            c.tone === 0 ? "bg-rose" : c.tone === 1 ? "bg-blush" : "bg-lavender"
          }`}
          style={{
            left: `${c.left}%`,
            width: c.w,
            height: c.h,
            animationDelay: `${c.delay}s`,
            animationDuration: `${c.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
