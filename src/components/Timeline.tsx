import { Heart } from "lucide-react";
import { Reveal } from "./Reveal";
import { birthdayData } from "@/data/birthdayData";

export function Timeline() {
  const items = birthdayData.timeline;

  return (
    <section id="timeline" className="relative px-5 py-20 sm:py-24">
      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl leading-tight text-primary sm:text-5xl">
          Little moments that became big memories ❤️
        </h2>
      </Reveal>

      <div className="relative mx-auto mt-14 max-w-3xl">
        <div
          aria-hidden
          className="absolute bottom-0 left-4 top-0 w-px bg-border sm:left-1/2 sm:-translate-x-1/2"
        />

        <ol className="space-y-10">
          {items.map((item, i) => (
            <li key={i} className="relative pl-12 sm:pl-0">
              <span
                aria-hidden
                className="absolute left-4 top-3 grid h-6 w-6 -translate-x-1/2 place-items-center rounded-full bg-paper ring-1 ring-border sm:left-1/2"
              >
                <Heart size={11} className="text-rose" fill="currentColor" />
              </span>

              <Reveal delay={60}>
                <div
                  className={`sm:w-[calc(50%-2.25rem)] ${
                    i % 2 === 0 ? "sm:mr-auto sm:text-right" : "sm:ml-auto"
                  }`}
                >
                  <div className="paper-card lift p-5">
                    <p className="font-rounded text-xs font-bold uppercase tracking-[0.2em] text-rose">
                      {item.date}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-semibold text-primary">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-foreground/75">
                      {item.description}
                    </p>
                    {item.image && (
                      <img
                        src={item.image}
                        alt={item.title}
                        loading="lazy"
                        width={1024}
                        height={1024}
                        className="mt-4 aspect-[4/3] w-full rounded-xl object-cover"
                      />
                    )}
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
