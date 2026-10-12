import { useState } from "react";
import { birthdayData } from "@/data/birthdayData";
import { Confetti, FloatingHearts, Sparkles } from "../FloatingHearts";
import { GameHeading, RestartButton, scrollToId } from "./GameParts";

const optionBtn =
  "font-rounded break-words rounded-2xl border border-dusk-foreground/25 bg-dusk-foreground/5 px-4 py-3 text-sm font-semibold text-dusk-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-dusk-foreground/10";

export function MemoryVault() {
  const c = birthdayData.vaultChallenges;
  const [step, setStep] = useState(0); // 0..3 unlocked count
  const [wrong, setWrong] = useState<string | null>(null);

  const attempt = (ok: boolean, id: string) => {
    if (ok) {
      setWrong(null);
      setStep((s) => s + 1);
    } else {
      setWrong(id);
      setTimeout(() => setWrong(null), 900);
    }
  };

  const unlocked = step >= 3;

  return (
    <section id="vault" className="relative overflow-hidden bg-dusk bg-dusk-gradient px-4 py-20 text-dusk-foreground sm:px-5 sm:py-24">
      <Sparkles count={18} />
      {unlocked && (
        <>
          <Confetti count={44} />
          <FloatingHearts count={14} tone="light" />
        </>
      )}
      <GameHeading eyebrow="The memory vault" title="One Last Thing... 🔐" subtitle="I've hidden something for you." light />

      <div className="relative z-10 mx-auto mt-10 w-full max-w-xl rounded-3xl border border-dusk-foreground/15 bg-dusk-foreground/[0.06] p-5 text-center backdrop-blur-sm sm:p-8">
        <div className="flex justify-center gap-3 text-3xl sm:text-4xl" aria-label={`${step} of 3 locks open`}>
          {[0, 1, 2].map((i) => (
            <span key={i} className={`transition-transform duration-500 ${i < step ? "scale-110" : "opacity-70"}`}>
              {i < step ? "🔓" : "🔒"}
            </span>
          ))}
        </div>

        <div key={step} className={`animate-soft-in mt-7 ${wrong ? "animate-wiggle" : ""}`}>
          {step === 0 && (
            <>
              <p className="font-script text-3xl text-blush">{c.date.prompt}</p>
              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {c.date.options.map((o, i) => (
                  <button key={i} className={optionBtn} onClick={() => attempt(i === c.date.correctAnswer, "date")}>{o}</button>
                ))}
              </div>
            </>
          )}
          {step === 1 && (
            <>
              <p className="font-script text-3xl text-blush">{c.quote.prompt}</p>
              <p className="mx-auto mt-4 max-w-sm break-words rounded-3xl rounded-bl-md bg-blush px-5 py-3 text-burgundy">“{c.quote.quote}”</p>
              <div className="mt-5 grid grid-cols-2 gap-3">
                <button className={optionBtn} onClick={() => attempt(c.quote.correctSpeaker === "me", "quote")}>ME ❤️</button>
                <button className={optionBtn} onClick={() => attempt(c.quote.correctSpeaker === "her", "quote")}>HER 🌸</button>
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <p className="font-script text-3xl text-blush">{c.photo.prompt}</p>
              <p className="mt-2 text-sm text-dusk-foreground/80">{c.photo.memory}</p>
              <div className="mt-5 grid grid-cols-3 gap-2 sm:gap-4">
                {c.photo.photos.map((p, i) => (
                  <button
                    key={i}
                    onClick={() => attempt(i === c.photo.correctAnswer, "photo")}
                    className="rounded-md bg-paper p-1.5 pb-4 shadow-[var(--shadow-soft)] transition-transform duration-300 hover:-translate-y-1 hover:rotate-1"
                  >
                    <img src={p} alt={`Photo option ${i + 1}`} loading="lazy" className="aspect-square w-full rounded-sm object-cover" />
                  </button>
                ))}
              </div>
            </>
          )}
          {unlocked && (
            <>
              <p className="font-rounded text-2xl font-bold tracking-wide text-blush sm:text-3xl">YOU UNLOCKED IT ❤️</p>
              <p className="font-script mt-3 text-3xl text-dusk-foreground">I knew you'd remember.</p>
              <button
                onClick={() => scrollToId("letter")}
                className="font-rounded mt-7 rounded-full bg-blush px-7 py-3.5 text-sm font-bold tracking-wide text-burgundy transition-transform duration-300 hover:scale-105"
              >
                OPEN THE LAST SURPRISE 💌
              </button>
              <div className="mt-5"><RestartButton light onClick={() => setStep(0)} /></div>
            </>
          )}
          {wrong && !unlocked && (
            <p className="font-script mt-4 text-xl text-blush">Hmm, not quite... try again 🥺</p>
          )}
        </div>
      </div>
    </section>
  );
}
