import { useEffect, useRef, useState } from "react";
import { Reveal } from "./Reveal";
import { useReveal } from "@/hooks/useReveal";
import { birthdayData } from "@/data/birthdayData";

export function LoveLetter() {
  const letter = birthdayData.letter;
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);
  const [shown, setShown] = useState(0);
  const [done, setDone] = useState(false);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!visible || done) return;
    timer.current = setInterval(() => {
      setShown((n) => {
        if (n >= letter.length) {
          setDone(true);
          return n;
        }
        return n + 2;
      });
    }, 18);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [visible, done, letter.length]);

  const text = done ? letter : letter.slice(0, shown);

  return (
    <section id="letter" className="relative px-5 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl text-primary sm:text-5xl">A little letter for you 💌</h2>
      </Reveal>

      <div ref={ref} className="mx-auto mt-10 max-w-2xl">
        <div className="paper-card grain relative p-7 sm:p-10">
          <span className="animate-sway absolute -right-3 -top-4 text-3xl">🌹</span>
          <p className="whitespace-pre-line text-base leading-[1.9] text-foreground/85 sm:text-lg">
            {text}
            {!done && <span className="text-rose">|</span>}
          </p>

          {!done && (
            <button
              onClick={() => setDone(true)}
              className="font-rounded mt-6 rounded-full border border-primary/35 px-5 py-2.5 text-xs font-bold uppercase tracking-[0.2em] text-primary transition-colors duration-300 hover:bg-primary hover:text-primary-foreground"
            >
              Show the whole letter
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
