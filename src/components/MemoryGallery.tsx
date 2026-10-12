import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { birthdayData } from "@/data/birthdayData";

const ROTATIONS = ["-2.5deg", "1.8deg", "-1.2deg", "2.4deg", "-1.8deg", "1.1deg"];

export function MemoryGallery() {
  const memories = birthdayData.memories;
  const [index, setIndex] = useState<number | null>(null);

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIndex(null);
      if (e.key === "ArrowRight") setIndex((i) => ((i ?? 0) + 1) % memories.length);
      if (e.key === "ArrowLeft")
        setIndex((i) => ((i ?? 0) - 1 + memories.length) % memories.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, memories.length]);

  const active = index === null ? null : memories[index];

  return (
    <section id="memories" className="relative bg-secondary/40 px-5 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl text-primary sm:text-5xl">Photo memories</h2>
        <p className="mt-3 text-foreground/70">
          Tap any picture to see it properly — they all mean something.
        </p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-6xl grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {memories.map((memory, i) => (
          <Reveal key={i} delay={(i % 4) * 90}>
            <button
              onClick={() => setIndex(i)}
              style={{ rotate: ROTATIONS[i % ROTATIONS.length] }}
              className="lift group block w-full rounded-2xl bg-paper p-2 pb-8 shadow-[var(--shadow-soft)]"
            >
              <img
                src={memory.image}
                alt={memory.caption}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <span className="font-script mt-2 block px-1 text-center text-base text-foreground/75">
                {memory.caption}
              </span>
            </button>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="animate-soft-in fixed inset-0 z-[60] flex items-center justify-center bg-dusk/90 p-4 backdrop-blur-sm"
          onClick={() => setIndex(null)}
        >
          <button
            aria-label="Close"
            onClick={() => setIndex(null)}
            className="absolute right-4 top-4 rounded-full bg-paper/15 p-2.5 text-dusk-foreground transition-colors hover:bg-paper/30"
          >
            <X size={20} />
          </button>

          <button
            aria-label="Previous photo"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) - 1 + memories.length) % memories.length);
            }}
            className="absolute left-2 rounded-full bg-paper/15 p-2.5 text-dusk-foreground transition-colors hover:bg-paper/30 sm:left-6"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            aria-label="Next photo"
            onClick={(e) => {
              e.stopPropagation();
              setIndex((i) => ((i ?? 0) + 1) % memories.length);
            }}
            className="absolute right-2 rounded-full bg-paper/15 p-2.5 text-dusk-foreground transition-colors hover:bg-paper/30 sm:right-6"
          >
            <ChevronRight size={22} />
          </button>

          <figure
            className="max-h-[86svh] w-full max-w-lg overflow-hidden rounded-2xl bg-paper p-3"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={active.image}
              alt={active.caption}
              className="max-h-[62svh] w-full rounded-xl object-contain"
            />
            <figcaption className="px-2 pb-1 pt-3 text-center">
              <p className="font-rounded text-xs font-bold uppercase tracking-[0.2em] text-rose">
                {active.date}
              </p>
              <p className="font-script mt-1 text-2xl text-primary">{active.caption}</p>
            </figcaption>
          </figure>
        </div>
      )}
    </section>
  );
}
