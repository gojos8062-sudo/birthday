import type { ReactNode } from "react";
import { ArrowRight, RotateCcw } from "lucide-react";
import { Reveal } from "../Reveal";

export function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export function GameHeading({
  eyebrow,
  title,
  subtitle,
  light = false,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
  light?: boolean;
}) {
  return (
    <Reveal className="mx-auto max-w-2xl text-center">
      <p className={`font-rounded text-xs font-bold uppercase tracking-[0.3em] ${light ? "text-blush" : "text-rose"}`}>
        {eyebrow}
      </p>
      <h2 className={`font-display mt-3 text-4xl font-light leading-tight sm:text-5xl ${light ? "text-dusk-foreground" : "text-burgundy"}`}>
        {title}
      </h2>
      <p className={`font-script mt-3 text-2xl sm:text-3xl ${light ? "text-blush" : "text-primary"}`}>{subtitle}</p>
    </Reveal>
  );
}

export function Progress({ current, total, light = false }: { current: number; total: number; light?: boolean }) {
  return (
    <div className="flex flex-col items-center gap-2" aria-label={`${current} of ${total}`}>
      <span className={`font-rounded text-xs font-bold tracking-widest ${light ? "text-dusk-foreground/70" : "text-muted-foreground"}`}>
        {current} / {total}
      </span>
      <div className="flex flex-wrap justify-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <span
            key={i}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              i < current ? "w-6 bg-primary" : light ? "w-1.5 bg-dusk-foreground/30" : "w-1.5 bg-border"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export function NextLink({ label, to, light = false }: { label: string; to: string; light?: boolean }) {
  return (
    <div className="mt-14 text-center">
      <p className={`font-script text-2xl ${light ? "text-blush" : "text-primary"}`}>{label}</p>
      <button
        onClick={() => scrollToId(to)}
        className={`font-rounded mt-3 inline-flex items-center gap-2 rounded-full border px-5 py-2 text-xs font-bold uppercase tracking-widest transition-colors ${
          light ? "border-blush/50 text-blush hover:bg-blush/10" : "border-primary/30 text-primary hover:bg-secondary"
        }`}
      >
        Keep going <ArrowRight size={14} />
      </button>
    </div>
  );
}

export function RestartButton({ onClick, light = false }: { onClick: () => void; light?: boolean }) {
  return (
    <button
      onClick={onClick}
      className={`font-rounded inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest transition-colors ${
        light ? "text-dusk-foreground/70 hover:text-blush" : "text-muted-foreground hover:text-primary"
      }`}
    >
      <RotateCcw size={13} /> Play again
    </button>
  );
}

export function HeartBurst() {
  return (
    <div className="pointer-events-none absolute left-1/2 top-1/2" aria-hidden>
      {[-40, -18, 0, 20, 42].map((dx, i) => (
        <span
          key={i}
          className="animate-heart-pop absolute text-xl text-rose"
          style={{ ["--dx" as string]: `${dx}px`, animationDelay: `${i * 70}ms` }}
        >
          ♥
        </span>
      ))}
    </div>
  );
}

export function GameCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`paper-card grain relative mx-auto w-full max-w-xl p-5 sm:p-8 ${className}`}>{children}</div>;
}

export const primaryBtn =
  "font-rounded inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-bold tracking-wide text-primary-foreground transition-transform duration-300 hover:scale-105";
