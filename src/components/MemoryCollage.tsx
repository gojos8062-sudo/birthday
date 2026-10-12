import { Reveal } from "./Reveal";
import { birthdayData } from "@/data/birthdayData";

const TILT = ["-4deg", "3deg", "-2deg", "4.5deg"];

export function MemoryCollage() {
  const items = birthdayData.collage;

  return (
    <section className="relative overflow-hidden bg-blush/25 px-5 py-20 sm:py-24">
      <span className="animate-sway pointer-events-none absolute left-6 top-10 text-5xl opacity-40">
        🌼
      </span>
      <span className="animate-sway pointer-events-none absolute bottom-10 right-8 text-5xl opacity-40">
        💐
      </span>

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl text-primary sm:text-5xl">Our scrapbook</h2>
        <p className="mt-3 text-foreground/70">Bits and pieces of us, taped to the page.</p>
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-4xl grid-cols-2 gap-x-4 gap-y-10 sm:gap-x-8">
        {items.map((item, i) => (
          <Reveal key={i} delay={(i % 2) * 120}>
            <figure
              style={{ rotate: TILT[i % TILT.length] }}
              className="tape lift mx-auto max-w-xs bg-paper p-3 pb-6 shadow-[var(--shadow-soft)]"
            >
              <img
                src={item.image}
                alt={item.note}
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="font-hand mt-3 text-center text-xl text-foreground/75">
                {item.note}
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
