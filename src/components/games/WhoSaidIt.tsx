import { useState } from "react";
import { birthdayData } from "@/data/birthdayData";
import { FloatingHearts } from "../FloatingHearts";
import { GameCard, GameHeading, HeartBurst, NextLink, Progress, RestartButton, primaryBtn } from "./GameParts";

export function WhoSaidIt() {
  const { whoSaidIt: items, herName, myName } = birthdayData;
  const [i, setI] = useState(0);
  const [guess, setGuess] = useState<"me" | "her" | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const item = items[i]!;
  const correct = guess === item.speaker;
  const fromHer = item.speaker === "her";

  const answer = (g: "me" | "her") => {
    if (guess) return;
    setGuess(g);
    if (g === item.speaker) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= items.length) return setDone(true);
    setI(i + 1);
    setGuess(null);
  };
  const restart = () => {
    setI(0);
    setGuess(null);
    setScore(0);
    setDone(false);
  };

  return (
    <section id="who-said-it" className="relative overflow-hidden px-4 py-20 sm:px-5 sm:py-24">
      <GameHeading eyebrow="Game three" title="Who Said It? 💬" subtitle="Okay... let's test your memory." />

      <div className="mt-10">
        {done ? (
          <GameCard className="animate-soft-in overflow-hidden text-center">
            <FloatingHearts count={10} />
            <p className="font-display text-5xl font-light text-burgundy">
              {score} <span className="text-2xl text-muted-foreground">/ {items.length}</span>
            </p>
            <p className="font-script mt-4 text-2xl text-primary sm:text-3xl">{birthdayData.whoSaidItEnd}</p>
            <div className="mt-6"><RestartButton onClick={restart} /></div>
          </GameCard>
        ) : (
          <GameCard key={i} className="animate-soft-in">
            <Progress current={i + 1} total={items.length} />

            <div className={`mt-6 flex ${guess ? (fromHer ? "justify-start" : "justify-end") : "justify-center"} transition-all`}>
              <div
                className={`animate-soft-in max-w-[90%] break-words rounded-3xl px-5 py-4 text-lg shadow-[var(--shadow-soft)] ${
                  guess
                    ? fromHer
                      ? "rounded-bl-md bg-secondary text-burgundy"
                      : "rounded-br-md bg-primary text-primary-foreground"
                    : "rounded-bl-md bg-secondary text-burgundy"
                }`}
              >
                “{item.quote}”
              </div>
            </div>
            {!guess && (
              <div className="mt-2 flex justify-center gap-1" aria-hidden>
                {[0, 1, 2].map((d) => (
                  <span key={d} className="animate-twinkle h-1.5 w-1.5 rounded-full bg-rose" style={{ animationDelay: `${d * 200}ms` }} />
                ))}
              </div>
            )}

            {!guess ? (
              <div className="mt-6 grid grid-cols-2 gap-3">
                <button onClick={() => answer("me")} className={primaryBtn}>ME ❤️</button>
                <button
                  onClick={() => answer("her")}
                  className="font-rounded rounded-full border border-primary/30 bg-paper px-5 py-3 text-sm font-bold text-primary transition-transform duration-300 hover:scale-105"
                >
                  HER 🌸
                </button>
              </div>
            ) : (
              <div className="animate-soft-in relative mt-6 text-center">
                {correct && <HeartBurst />}
                <p className={`font-rounded text-xl font-bold ${correct ? "text-primary" : "animate-wiggle text-rose"}`}>
                  {correct ? "YOU REMEMBERED 😭❤️" : "NOPE 😂"}
                </p>
                <p className="font-script mt-2 text-2xl text-burgundy">
                  {fromHer ? `She said it. (${herName})` : `I said it. (${myName})`}
                </p>
                {item.photo && (
                  <img src={item.photo} alt="" loading="lazy" className="mx-auto mt-4 aspect-square w-32 rotate-[-3deg] rounded-md bg-paper object-cover p-1.5 pb-5 shadow-[var(--shadow-soft)]" />
                )}
                <p className="mt-4 text-sm text-foreground/75">{item.context}</p>
                <button onClick={next} className={`${primaryBtn} mt-5`}>
                  {i + 1 >= items.length ? "Finish 💬" : "Next →"}
                </button>
              </div>
            )}
          </GameCard>
        )}
      </div>

      <NextLink label="Every memory has a place..." to="universe" />
    </section>
  );
}
