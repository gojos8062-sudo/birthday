import { useEffect, useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { birthdayData } from "@/data/birthdayData";
import { Confetti } from "../FloatingHearts";
import { GameHeading, Progress, RestartButton, primaryBtn, scrollToId } from "./GameParts";

type Card = { key: string; pairId: number; kind: "photo" | "caption"; image: string; title: string };

/** Reusable: builds a shuffled deck from pairs. */
function buildDeck(pairs: { id: number; image: string; title: string }[], mode: string): Card[] {
  const cards: Card[] = pairs.flatMap((p) => [
    { key: `${p.id}-a`, pairId: p.id, kind: "photo", image: p.image, title: p.title },
    { key: `${p.id}-b`, pairId: p.id, kind: mode === "photo-photo" ? "photo" : "caption", image: p.image, title: p.title },
  ]);
  for (let i = cards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [cards[i], cards[j]] = [cards[j]!, cards[i]!];
  }
  return cards;
}

export function MemoryMatch() {
  const pairs = birthdayData.memoryMatchPairs;
  const [seed, setSeed] = useState(0);
  const [deck, setDeck] = useState<Card[]>(() => buildDeck(pairs, "x").map((c) => c)); // replaced on mount
  const [open, setOpen] = useState<string[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);

  // shuffle on the client only (avoids hydration mismatch)
  useEffect(() => {
    setDeck(buildDeck(pairs, birthdayData.matchMode));
    setOpen([]);
    setMatched([]);
    setMoves(0);
  }, [seed, pairs]);

  const byKey = useMemo(() => Object.fromEntries(deck.map((c) => [c.key, c])), [deck]);

  const flip = (key: string) => {
    if (open.length === 2 || open.includes(key) || matched.includes(byKey[key]!.pairId)) return;
    const next = [...open, key];
    setOpen(next);
    if (next.length === 2) {
      setMoves((m) => m + 1);
      const [a, b] = next.map((k) => byKey[k]!) as [Card, Card];
      if (a.pairId === b.pairId) {
        setTimeout(() => {
          setMatched((m) => [...m, a.pairId]);
          setOpen([]);
        }, 450);
      } else {
        setTimeout(() => setOpen([]), 1000);
      }
    }
  };

  const done = matched.length === pairs.length;

  return (
    <section id="match" className="relative overflow-hidden bg-secondary/40 px-4 py-20 sm:px-5 sm:py-24">
      {done && <Confetti count={40} />}
      <GameHeading eyebrow="Game two" title="Let's Put Our Memories Back Together 🧩" subtitle="Some things just belong together." />

      <div className="mt-8 flex items-center justify-center gap-6">
        <Progress current={matched.length} total={pairs.length} />
        <span className="font-rounded text-xs font-bold tracking-widest text-muted-foreground">{moves} tries</span>
      </div>

      {done ? (
        <div className="animate-soft-in mx-auto mt-10 max-w-lg text-center">
          <Heart size={44} className="animate-beat mx-auto text-primary" fill="currentColor" />
          <h3 className="font-script mt-4 text-4xl text-primary sm:text-5xl">You found them all ❤️</h3>
          <p className="font-display mt-4 whitespace-pre-line text-xl italic text-burgundy">
            {"Maybe that's what memories are...\nlittle pieces that somehow belong together."}
          </p>
          <div className="mt-7 flex flex-col items-center gap-4">
            <button onClick={() => scrollToId("who-said-it")} className={primaryBtn}>There's more →</button>
            <RestartButton onClick={() => setSeed((s) => s + 1)} />
          </div>
        </div>
      ) : (
        <>
          <div className="mx-auto mt-8 grid max-w-2xl grid-cols-2 gap-3 min-[420px]:grid-cols-4 sm:gap-4">
            {deck.map((c) => {
              const isOpen = open.includes(c.key) || matched.includes(c.pairId);
              const isMatched = matched.includes(c.pairId);
              return (
                <button
                  key={c.key}
                  onClick={() => flip(c.key)}
                  aria-label={isOpen ? c.title : "Hidden memory card"}
                  className="flip-scene aspect-square w-full sm:aspect-[3/4]"
                >
                  <div className={`flip-inner ${isOpen ? "is-flipped" : ""}`}>
                    <div className="flip-face flex items-center justify-center rounded-2xl border border-primary/15 bg-paper shadow-[var(--shadow-soft)] [background-image:radial-gradient(color-mix(in_oklab,var(--rose)_18%,transparent)_1px,transparent_1px)] [background-size:12px_12px]">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-primary">
                        <Heart size={20} fill="currentColor" />
                      </span>
                    </div>
                    <div
                      className={`flip-face flip-back overflow-hidden rounded-2xl bg-paper p-1.5 shadow-[var(--shadow-soft)] ${
                        isMatched ? "ring-2 ring-primary/60" : ""
                      }`}
                    >
                      {c.kind === "photo" ? (
                        <img src={c.image} alt="" loading="lazy" className="h-full w-full rounded-xl object-cover" />
                      ) : (
                        <div className="flex h-full items-center justify-center rounded-xl bg-secondary/60 p-2 text-center">
                          <span className="font-hand break-words text-lg leading-tight text-burgundy sm:text-xl">{c.title}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-6 text-center">
            <RestartButton onClick={() => setSeed((s) => s + 1)} />
          </div>
        </>
      )}

      {!done && (
        <p className="font-script mt-12 text-center text-2xl text-primary">
          You remember the pictures... but what about what we said?
        </p>
      )}
    </section>
  );
}
