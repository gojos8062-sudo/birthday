import { Reveal } from "./Reveal";
import { birthdayData } from "@/data/birthdayData";

export function BirthdayWishes() {
  const wishes = birthdayData.wishes;

  return (
    <section id="wishes" className="relative px-5 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl text-primary sm:text-5xl">Birthday wishes for you 🎂</h2>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-5xl gap-5 sm:grid-cols-2">
        {wishes.map((wish, i) => (
          <Reveal key={i} delay={(i % 2) * 110}>
            <article className="paper-card lift flex h-full gap-5 p-6">
              <span className="font-display text-4xl leading-none text-blush">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="text-xl font-semibold text-primary">{wish.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-foreground/75">{wish.message}</p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
