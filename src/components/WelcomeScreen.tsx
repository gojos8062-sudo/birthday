import { useState } from "react";
import { Heart } from "lucide-react";
import { FloatingHearts, Sparkles } from "./FloatingHearts";
import { birthdayData } from "@/data/birthdayData";

export function WelcomeScreen({ onStart }: { onStart: () => void }) {
  const { welcome } = birthdayData;
  const [noCount, setNoCount] = useState(0);
  const [nudge, setNudge] = useState({ x: 0, y: 0 });

  const replies = welcome.noReplies;
  const reply = noCount > 0 ? replies[Math.min(noCount - 1, replies.length - 1)] : null;
  const surrendered = noCount >= replies.length;

  const handleNo = () => {
    setNoCount((c) => c + 1);
    setNudge({
      x: ((noCount % 3) - 1) * 26,
      y: ((noCount % 2) - 0.5) * 24,
    });
  };

  return (
    <div className="bg-dawn grain relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-5 py-16 text-center">
      <div aria-hidden className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-rose/25 blur-3xl" />
      <div aria-hidden className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full bg-lavender/50 blur-3xl" />
      <FloatingHearts count={12} />
      <Sparkles count={14} />

      <span className="animate-sway pointer-events-none absolute left-4 top-16 text-5xl opacity-45 sm:left-14 sm:text-7xl">🌸</span>
      <span className="animate-sway pointer-events-none absolute bottom-14 right-5 text-5xl opacity-45 sm:right-14 sm:text-7xl">🌷</span>

      <div className="animate-soft-in relative z-10 w-full max-w-xl">
        <div className="relative mx-auto mb-8 grid h-24 w-24 place-items-center">
          <span aria-hidden className="absolute inset-0 rounded-full border border-primary/25" />
          <span aria-hidden className="absolute -inset-3 rounded-full border border-primary/10" />
          <span className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-primary to-rose text-primary-foreground shadow-[var(--shadow-lift)]">
            <Heart size={34} className="animate-beat" fill="currentColor" />
          </span>
        </div>

        <p className="font-rounded text-[0.68rem] font-bold uppercase tracking-[0.4em] text-rose">
          Something made with love
        </p>
        <h1 className="font-script mt-3 text-6xl leading-none text-primary sm:text-7xl">
          {welcome.greeting}
        </h1>
        <p className="font-display mt-5 text-2xl font-light italic text-foreground/75 sm:text-3xl">
          {welcome.subtitle}
        </p>

        <div className="paper-card mx-auto mt-10 max-w-md px-6 py-7 sm:px-8">
          <p className="font-rounded text-base font-semibold text-burgundy sm:text-lg">{welcome.question}</p>

          <div className="min-h-12">
            {reply && (
              <p key={noCount} className="font-script animate-soft-in mt-3 text-2xl text-rose sm:text-3xl">
                {reply}
              </p>
            )}
          </div>

          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={onStart}
              className="font-rounded rounded-full bg-gradient-to-r from-primary to-rose px-7 py-3.5 text-sm font-bold tracking-wide text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:scale-105 hover:shadow-[var(--shadow-lift)] sm:text-base"
            >
              {welcome.yesLabel}
            </button>

            {!surrendered ? (
              <button
                onClick={handleNo}
                style={{ transform: `translate(${nudge.x}px, ${nudge.y}px)` }}
                className="font-rounded rounded-full border border-border bg-cream px-7 py-3.5 text-sm font-semibold text-foreground/70 transition-all duration-300 hover:bg-secondary sm:text-base"
              >
                {welcome.noLabel}
              </button>
            ) : (
              <button
                onClick={onStart}
                className="font-rounded rounded-full border border-primary/40 bg-paper px-7 py-3.5 text-sm font-semibold text-primary transition-transform duration-300 hover:scale-105 sm:text-base"
              >
                Okay, show me ❤️
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
