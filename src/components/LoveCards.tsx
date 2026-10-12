import { useState } from "react";
import { Reveal } from "./Reveal";
import { birthdayData } from "@/data/birthdayData";

export function LoveCards() {
  const notes = birthdayData.loveNotes;
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="about-you" className="relative bg-secondary/40 px-5 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl text-primary sm:text-5xl">Things I love about you</h2>
        <p className="mt-3 text-foreground/70">Tap a card — there's more behind each one.</p>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {notes.map((note, i) => {
          const isOpen = open === i;
          return (
            <Reveal key={i} delay={(i % 3) * 90}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className={`paper-card lift h-full w-full p-6 text-left transition-colors duration-300 ${
                  isOpen ? "bg-blush/35" : ""
                }`}
              >
                <span className="text-3xl">{note.emoji}</span>
                <h3 className="mt-3 text-xl font-semibold text-primary">{note.title}</h3>
                <div
                  className={`grid transition-all duration-500 ease-out ${
                    isOpen ? "mt-3 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden text-sm leading-relaxed text-foreground/75">
                    {note.message}
                  </p>
                </div>
                {!isOpen && (
                  <span className="font-rounded mt-3 block text-xs font-bold uppercase tracking-[0.2em] text-rose">
                    Tap to open
                  </span>
                )}
              </button>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
