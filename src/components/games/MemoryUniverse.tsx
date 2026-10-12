import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Sparkles } from "../FloatingHearts";
import { GameHeading, NextLink } from "./GameParts";

export function MemoryUniverse() {
  const nodes = birthdayData.memoryUniverse;
  const [active, setActive] = useState<number | null>(null);
  const [seen, setSeen] = useState<number[]>([]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  const open = (i: number) => {
    setActive(i);
    setSeen((s) => (s.includes(i) ? s : [...s, i]));
  };
  const node = active !== null ? nodes[active] : null;

  return (
    <section id="universe" className="bg-universe relative overflow-hidden px-4 py-20 sm:px-5 sm:py-24">
      <Sparkles count={26} />
      <GameHeading eyebrow="Explore" title="Our Little Universe 🌙" subtitle="A few moments that became part of us." />
      <p className="font-rounded mt-4 text-center text-xs font-bold uppercase tracking-widest text-muted-foreground">
        Tap a star · {seen.length} / {nodes.length} discovered
      </p>

      <div className="relative mx-auto mt-8 aspect-[3/4] w-full max-w-4xl sm:aspect-[16/10]">
        <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
          <polyline
            points={nodes.map((n) => `${n.x},${n.y}`).join(" ")}
            fill="none"
            stroke="var(--rose)"
            strokeOpacity="0.5"
            strokeWidth="0.35"
            strokeDasharray="1 1.4"
            vectorEffect="non-scaling-stroke"
            style={{ strokeWidth: 1.5 }}
          />
        </svg>
        {nodes.map((n, i) => (
          <button
            key={i}
            onClick={() => open(i)}
            className="animate-drift group absolute flex flex-col items-center"
            style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * -0.9}s` }}
          >
            <span
              className={`flex h-12 w-12 items-center justify-center rounded-full border bg-paper text-xl shadow-[var(--shadow-soft)] transition-transform duration-300 group-hover:scale-110 sm:h-14 sm:w-14 sm:text-2xl ${
                seen.includes(i) ? "border-primary/50 ring-4 ring-primary/10" : "border-border"
              }`}
            >
              {n.icon}
            </span>
            <span className="font-hand mt-1 w-24 text-center text-base leading-tight text-burgundy sm:w-32 sm:text-lg">
              {n.title}
            </span>
          </button>
        ))}
      </div>

      {node && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-burgundy/40 p-4 backdrop-blur-sm"
          onClick={() => setActive(null)}
        >
          <div
            role="dialog"
            aria-label={node.title}
            onClick={(e) => e.stopPropagation()}
            className="animate-soft-in relative max-h-[90vh] w-full max-w-sm overflow-y-auto rounded-md bg-paper p-3 pb-6 shadow-[var(--shadow-lift)]"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute right-4 top-4 z-10 rounded-full bg-paper/90 p-1.5 text-primary"
            >
              <X size={16} />
            </button>
            <img src={node.image} alt={node.title} className="aspect-[4/3] w-full rounded-sm object-cover" />
            <div className="px-2 pt-4">
              <p className="font-rounded text-xs font-bold uppercase tracking-widest text-rose">{node.date}</p>
              <h3 className="font-script mt-1 text-3xl text-primary">{node.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/80">{node.description}</p>
              <p className="font-hand mt-4 text-xl text-burgundy">{node.message}</p>
            </div>
          </div>
        </div>
      )}

      <NextLink label="There's one last thing hidden here..." to="vault" />
    </section>
  );
}
