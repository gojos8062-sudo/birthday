import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Heart, Lock, LockOpen } from "lucide-react";
import { FloatingHearts, Sparkles } from "./FloatingHearts";
import { birthdayData } from "@/data/birthdayData";
import { checkEntranceAnswer } from "@/lib/gate.functions";

export function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const { passwordGate: g } = birthdayData;
  const check = useServerFn(checkEntranceAnswer);
  const [value, setValue] = useState("");
  const [wrong, setWrong] = useState(0);
  const [busy, setBusy] = useState(false);
  const [open, setOpen] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!value.trim() || busy) return;
    setBusy(true);
    try {
      const { ok } = await check({ data: { answer: value } });
      if (ok) {
        setOpen(true);
        setTimeout(onUnlock, 700);
      } else setWrong((n) => n + 1);
    } catch {
      setWrong((n) => n + 1);
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="bg-dawn grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-rose/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -right-24 bottom-10 h-80 w-80 rounded-full bg-lavender/50 blur-3xl" />
      <FloatingHearts count={9} />
      <Sparkles count={10} />

      <span className="animate-sway pointer-events-none absolute left-5 top-20 text-5xl opacity-40 sm:left-16 sm:text-6xl">🌸</span>
      <span className="animate-sway pointer-events-none absolute bottom-16 right-5 text-5xl opacity-40 sm:right-16 sm:text-6xl">🌷</span>

      <form onSubmit={submit} className="animate-soft-in relative z-10 w-full max-w-lg">
        {/* wax-seal style lock */}
        <div className="relative z-20 mx-auto -mb-10 grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-rose text-primary-foreground shadow-[var(--shadow-lift)] ring-4 ring-paper">
          {open ? <LockOpen size={28} /> : <Lock size={28} className={wrong ? "animate-wiggle" : "animate-beat"} key={wrong} />}
        </div>

        <div className="paper-card relative px-6 pb-9 pt-16 sm:px-10">
          <div aria-hidden className="pointer-events-none absolute inset-2.5 rounded-[1.6rem] border border-dashed border-primary/20" />

          <p className="font-rounded text-[0.68rem] font-bold uppercase tracking-[0.4em] text-rose">A secret, just for you</p>
          <h1 className="font-script mt-3 text-balance text-4xl leading-tight text-primary sm:text-5xl">{g.question}</h1>
          <p className="mt-3 text-foreground/65">{g.subtitle}</p>

          <div className="mx-auto my-6 flex items-center justify-center gap-3 text-rose/70" aria-hidden>
            <span className="h-px w-12 bg-primary/25" />
            <Heart size={12} fill="currentColor" />
            <span className="h-px w-12 bg-primary/25" />
          </div>

          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder={g.placeholder}
            aria-label={g.question}
            autoComplete="off"
            maxLength={100}
            key={`i${wrong}`}
            className={`font-rounded w-full rounded-full border border-border bg-cream px-6 py-3.5 text-center text-base text-foreground outline-none transition placeholder:text-muted-foreground/60 focus:border-primary/50 focus:ring-2 focus:ring-ring ${
              wrong ? "animate-wiggle" : ""
            }`}
          />

          <p className="font-script mt-3 min-h-8 text-xl text-rose">{wrong ? g.wrongReply : ""}</p>

          <button
            type="submit"
            disabled={busy}
            className="font-rounded mt-2 w-full rounded-full bg-gradient-to-r from-primary to-rose px-8 py-3.5 text-sm font-bold tracking-widest text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)] disabled:opacity-60"
          >
            {g.buttonLabel}
          </button>
        </div>

        <p className="font-hand mt-7 text-xl text-foreground/55">{g.hint}</p>
      </form>
    </div>
  );
}
