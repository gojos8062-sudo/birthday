import { useEffect, useRef, useState } from "react";
import { Play, Pause, Music } from "lucide-react";
import { Reveal } from "./Reveal";
import { FloatingHearts } from "./FloatingHearts";
import { birthdayData } from "@/data/birthdayData";

export function MusicPlayer() {
  const { song } = birthdayData;
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [missing, setMissing] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const onTime = () =>
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    const onEnd = () => {
      setPlaying(false);
      setProgress(0);
    };
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnd);
    audio.addEventListener("error", () => setMissing(true));
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnd);
    };
  }, []);

  const toggle = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    try {
      if (playing) {
        audio.pause();
        setPlaying(false);
      } else {
        await audio.play();
        setPlaying(true);
      }
    } catch {
      setMissing(true);
      setPlaying(false);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !audio.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    audio.currentTime = ((e.clientX - rect.left) / rect.width) * audio.duration;
  };

  return (
    <section id="music" className="relative overflow-hidden px-5 py-20 sm:py-24">
      {playing && <FloatingHearts count={12} />}

      <Reveal className="mx-auto max-w-2xl text-center">
        <h2 className="font-script text-4xl text-primary sm:text-5xl">{song.note}</h2>
      </Reveal>

      <Reveal delay={100} className="mx-auto mt-10 max-w-xl">
        <div className="paper-card flex flex-col items-center gap-6 p-6 sm:flex-row sm:p-7">
          <img
            src={song.cover}
            alt={`${song.title} cover`}
            loading="lazy"
            width={816}
            height={816}
            className={`h-32 w-32 shrink-0 rounded-2xl object-cover shadow-[var(--shadow-soft)] transition-transform duration-700 ${
              playing ? "scale-105" : ""
            }`}
          />

          <div className="w-full text-center sm:text-left">
            <h3 className="text-2xl font-semibold text-primary">{song.title}</h3>
            <p className="text-sm text-foreground/65">{song.artist}</p>

            <div
              onClick={seek}
              className="mt-4 h-1.5 w-full cursor-pointer rounded-full bg-secondary"
              role="presentation"
            >
              <div
                className="h-full rounded-full bg-primary transition-[width] duration-200"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="mt-4 flex items-center justify-center gap-3 sm:justify-start">
              <button
                onClick={toggle}
                aria-label={playing ? "Pause song" : "Play song"}
                className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground transition-transform duration-300 hover:scale-110"
              >
                {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" />}
              </button>
              <span className="font-rounded flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-rose">
                <Music size={13} />
                {playing ? "Playing" : "Press play"}
              </span>
            </div>

            {missing && (
              <p className="mt-4 text-xs leading-relaxed text-foreground/60">
                Add your song as <span className="font-semibold">public/assets/music/song.mp3</span>{" "}
                (or change the path in the data file) and it will play right here.
              </p>
            )}
          </div>
        </div>
      </Reveal>

      <audio ref={audioRef} src={song.audio} preload="none" />
    </section>
  );
}
