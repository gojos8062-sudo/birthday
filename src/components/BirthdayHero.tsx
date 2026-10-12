import { ArrowRight } from "lucide-react";
import { FloatingHearts, Confetti } from "./FloatingHearts";
import { birthdayData } from "@/data/birthdayData";

export function BirthdayHero() {
  const { hero, herName } = birthdayData;

  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="home"
      className="bg-dawn grain relative flex min-h-[100svh] items-center overflow-hidden px-5 pb-16 pt-28"
    >
      <FloatingHearts count={7} />
      <Confetti count={10} />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
        <div className="animate-soft-in text-center md:text-left">
          <div className="flex items-center justify-center gap-4 md:justify-start">
            <span className="h-px w-10 bg-primary/50" />
            <p className="font-rounded text-[0.7rem] font-semibold uppercase tracking-[0.4em] text-primary/80">
              {birthdayData.birthday}
            </p>
          </div>

          <h1 className="font-display mt-6 text-5xl font-light italic leading-[1] text-foreground sm:text-6xl lg:text-7xl">
            Happy Birthday,
          </h1>
          <p className="font-script mt-2 text-6xl leading-none text-primary sm:text-7xl lg:text-8xl">
            {herName}
          </p>

          <p className="mx-auto mt-8 max-w-md text-lg leading-relaxed text-foreground/70 md:mx-0">
            {hero.subtitle}
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <button
              onClick={() => go("story")}
              className="font-rounded group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold tracking-wider text-primary-foreground shadow-[var(--shadow-soft)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-lift)]"
            >
              Start Our Story
              <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
            <button
              onClick={() => go("memories")}
              className="font-rounded rounded-full border border-primary/30 px-8 py-4 text-sm font-semibold tracking-wider text-primary transition-colors duration-300 hover:bg-primary/5"
            >
              See memories
            </button>
          </div>

          <p className="font-hand mt-10 text-xl text-foreground/50">{hero.footnote}</p>
        </div>

        <div className="animate-soft-in relative mx-auto w-full max-w-sm md:max-w-none">
          <div
            className="absolute -inset-4 rounded-t-[999px] rounded-b-[2rem] border border-primary/20"
            aria-hidden
          />
          <div className="relative overflow-hidden rounded-t-[999px] rounded-b-[2rem] shadow-[var(--shadow-lift)]">
            <img
              src={hero.photo}
              alt={`${herName} — favourite photo`}
              width={1024}
              height={1280}
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-burgundy/25 via-transparent to-transparent" />
          </div>
          <span className="animate-beat absolute -bottom-4 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-paper text-xl shadow-[var(--shadow-soft)]">
            ❤️
          </span>
        </div>
      </div>
    </section>
  );
}
