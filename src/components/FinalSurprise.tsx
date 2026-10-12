import { useState } from "react";
import { Reveal } from "./Reveal";
import { Confetti, FloatingHearts, Sparkles } from "./FloatingHearts";
import { birthdayData } from "@/data/birthdayData";

export function FinalSurprise() {
  const { finale, herName, myName } = birthdayData;
  const [revealed, setRevealed] = useState(false);

  return (
    <section className="relative overflow-hidden bg-dusk bg-dusk-gradient px-5 py-24 text-center text-dusk-foreground">
      <Sparkles count={22} />
      <FloatingHearts count={14} tone="light" />
      {revealed && <Confetti count={48} />}

      <div className="relative z-10 mx-auto max-w-2xl">
        {!revealed ? (
          <Reveal>
            <p className="font-script text-3xl text-blush sm:text-4xl">{finale.teaser}</p>
            <p className="mt-4 text-lg text-dusk-foreground/80">{finale.tease2}</p>
            <button
              onClick={() => setRevealed(true)}
              className="font-rounded mt-8 rounded-full bg-blush px-8 py-3.5 text-sm font-bold tracking-wide text-burgundy transition-transform duration-300 hover:scale-105"
            >
              {finale.buttonLabel}
            </button>
          </Reveal>
        ) : (
          <div className="animate-soft-in">
            <h2 className="font-script text-5xl leading-tight text-blush sm:text-6xl">
              Happy Birthday, {herName} ❤️
            </h2>

            <div className="mx-auto mt-8 max-w-sm">
              <div className="rounded-2xl bg-paper/10 p-3 backdrop-blur-sm">
                <img
                  src={finale.photo}
                  alt="Us"
                  loading="lazy"
                  width={1280}
                  height={912}
                  className="aspect-[4/3] w-full rounded-xl object-cover"
                />
              </div>
            </div>

            <p className="mx-auto mt-8 max-w-xl whitespace-pre-line text-base leading-[1.9] text-dusk-foreground/85 sm:text-lg">
              {finale.message}
            </p>

            <p className="font-script mt-10 text-2xl text-blush">{finale.signoff}</p>
            <p className="font-rounded mt-2 text-xs font-bold uppercase tracking-[0.3em] text-dusk-foreground/60">
              {myName}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
