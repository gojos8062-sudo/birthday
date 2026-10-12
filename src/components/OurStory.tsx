import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { birthdayData } from "@/data/birthdayData";

export function OurStory() {
  const { story } = birthdayData;

  return (
    <section id="story" className="relative px-5 py-20 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal className="order-2 md:order-1">
          <h2 className="font-script text-4xl text-primary sm:text-5xl">{story.title} ❤️</h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
            {story.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <button
            onClick={() =>
              document.getElementById("memories")?.scrollIntoView({ behavior: "smooth" })
            }
            className="font-rounded mt-8 inline-flex items-center gap-2 rounded-full border border-primary/35 px-6 py-3 text-sm font-bold text-primary transition-all duration-300 hover:bg-primary hover:text-primary-foreground"
          >
            See Our Memories
            <ArrowRight size={16} />
          </button>
        </Reveal>

        <Reveal delay={120} className="order-1 md:order-2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-3 rotate-3 rounded-3xl bg-lavender/45" aria-hidden />
            <div className="paper-card lift relative overflow-hidden p-3">
              <img
                src={story.photo}
                alt="A memory of us"
                loading="lazy"
                width={1024}
                height={1024}
                className="aspect-square w-full rounded-xl object-cover"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
