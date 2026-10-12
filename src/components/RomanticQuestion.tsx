import { useState } from "react";
import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import { Confetti, FloatingHearts } from "./FloatingHearts";
import { birthdayData } from "@/data/birthdayData";

export function RomanticQuestion() {
  const q = birthdayData.dateQuestion;
  const [state, setState] = useState<"asking" | "maybe" | "yes">("asking");

  return (
    <section className="relative overflow-hidden bg-secondary/40 px-5 py-20 text-center sm:py-24">
      {state === "yes" && (
        <>
          <Confetti count={44} />
          <FloatingHearts count={18} />
        </>
      )}

      <Reveal className="relative z-10 mx-auto max-w-xl">
        <p className="font-rounded text-xs font-bold uppercase tracking-[0.3em] text-rose">
          {q.heading}
        </p>

        {state === "yes" ? (
          <div className="animate-soft-in mt-6">
            <Heart
              size={56}
              className="animate-beat mx-auto text-primary"
              fill="currentColor"
            />
            <h2 className="font-script mt-4 text-5xl text-primary sm:text-6xl">{q.yesTitle}</h2>
            <p className="mt-3 text-lg text-foreground/80">{q.yesSubtitle}</p>
          </div>
        ) : (
          <>
            <h2 className="font-script mt-4 text-4xl text-primary sm:text-5xl">{q.question}</h2>

            {state === "maybe" && (
              <p className="font-script animate-soft-in mt-5 text-2xl text-rose">{q.maybeReply}</p>
            )}

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setState("yes")}
                className="font-rounded rounded-full bg-primary px-8 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-transform duration-300 hover:scale-105"
              >
                {q.yesLabel}
              </button>
              {state === "asking" && (
                <button
                  onClick={() => setState("maybe")}
                  className="font-rounded rounded-full border border-border bg-paper px-8 py-3.5 text-sm font-semibold text-foreground/70 transition-colors duration-300 hover:bg-blush/40"
                >
                  {q.maybeLabel}
                </button>
              )}
            </div>
          </>
        )}
      </Reveal>
    </section>
  );
}
