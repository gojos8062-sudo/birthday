import { useState } from "react";
import { birthdayData } from "@/data/birthdayData";
import { FloatingHearts } from "../FloatingHearts";
import { GameCard, GameHeading, HeartBurst, NextLink, Progress, RestartButton, primaryBtn } from "./GameParts";

export function RelationshipQuiz() {
  const qs = birthdayData.relationshipQuiz;
  const [i, setI] = useState(0);
  const [picked, setPicked] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const q = qs[i]!;
  const correct = picked !== null && picked === q.correctAnswer;

  const pick = (idx: number) => {
    if (picked !== null) return;
    setPicked(idx);
    if (idx === q.correctAnswer) setScore((s) => s + 1);
  };
  const next = () => {
    if (i + 1 >= qs.length) return setDone(true);
    setI(i + 1);
    setPicked(null);
  };
  const restart = () => {
    setI(0);
    setPicked(null);
    setScore(0);
    setDone(false);
  };

  const pct = (score / qs.length) * 100;
  const result = birthdayData.quizResults.find((r) => pct >= r.minPercent)?.message;

  return (
    <section id="games" className="relative overflow-hidden px-4 py-20 sm:px-5 sm:py-24">
      <div className="mx-auto mb-10 max-w-xl text-center">
        <p className="font-script text-2xl text-primary">Think you remember these?</p>
        <p className="font-rounded mt-1 text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground">
          ❤️ mini-games ❤️
        </p>
      </div>
      <GameHeading eyebrow="Game one" title="How Well Do You Know Us? ❤️" subtitle="Let's see how much you remember..." />

      <div className="mt-10">
        {done ? (
          <GameCard className="animate-soft-in overflow-hidden text-center">
            <FloatingHearts count={10} />
            <p className="font-rounded text-xs font-bold uppercase tracking-[0.3em] text-rose">Our lore score ❤️</p>
            <p className="font-display mt-3 text-6xl font-light text-burgundy">
              {score} <span className="text-3xl text-muted-foreground">/ {qs.length}</span>
            </p>
            <p className="font-script mt-4 text-2xl text-primary sm:text-3xl">{result}</p>
            <div className="mt-6">
              <RestartButton onClick={restart} />
            </div>
          </GameCard>
        ) : (
          <GameCard key={i} className="animate-soft-in">
            <Progress current={i + 1} total={qs.length} />
            <h3 className="font-display mt-5 text-center text-2xl text-burgundy sm:text-3xl">{q.question}</h3>
            <div className="mt-6 grid gap-3">
              {q.options.map((opt, idx) => {
                const isRight = picked !== null && idx === q.correctAnswer;
                const isWrongPick = picked === idx && idx !== q.correctAnswer;
                return (
                  <button
                    key={idx}
                    onClick={() => pick(idx)}
                    disabled={picked !== null}
                    className={`font-rounded break-words rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ${
                      isRight
                        ? "border-primary bg-primary text-primary-foreground"
                        : isWrongPick
                          ? "animate-wiggle border-rose/50 bg-secondary text-foreground/70"
                          : picked !== null
                            ? "border-border bg-paper text-foreground/45"
                            : "border-border bg-paper text-foreground/85 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary/60"
                    }`}
                  >
                    <span className="mr-2 text-rose">{String.fromCharCode(65 + idx)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>

            {picked !== null && (
              <div className="animate-soft-in relative mt-6 text-center">
                {correct && <HeartBurst />}
                <p className="font-script text-2xl text-primary">{correct ? q.correctMessage : q.wrongMessage}</p>
                <button onClick={next} className={`${primaryBtn} mt-4`}>
                  {i + 1 >= qs.length ? "See our score ❤️" : "Next question →"}
                </button>
              </div>
            )}
          </GameCard>
        )}
      </div>

      <NextLink label="Let's see if you can put the memories back together..." to="match" />
    </section>
  );
}
