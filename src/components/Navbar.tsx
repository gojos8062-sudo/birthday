import { useEffect, useState } from "react";
import { Heart, Menu, X } from "lucide-react";

const LINKS = [
  { id: "home", label: "Home" },
  { id: "story", label: "Our Story" },
  { id: "memories", label: "Memories" },
  { id: "about-you", label: "About You" },
  { id: "games", label: "Games" },
  { id: "letter", label: "Letter" },
];

export function Navbar({ herName }: { herName: string }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={`animate-soft-in fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-paper/85 backdrop-blur-md shadow-[0_10px_30px_-26px_oklch(0.34_0.108_16)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3.5">
        <button
          onClick={() => go("home")}
          className="font-script text-2xl text-primary transition-transform duration-300 hover:scale-105"
        >
          {herName}
        </button>

        <ul className="hidden items-center gap-5 lg:flex">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => go(link.id)}
                className="font-rounded relative text-sm font-semibold tracking-wide text-foreground/75 transition-colors duration-300 after:absolute after:-bottom-1 after:left-0 after:h-px after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:origin-left hover:after:scale-x-100"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="rounded-full border border-border bg-paper/70 p-2 text-primary lg:hidden"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </nav>

      {open && (
        <div className="animate-soft-in border-t border-border bg-paper/95 px-5 pb-5 pt-2 backdrop-blur-md lg:hidden">
          <ul className="grid grid-cols-2 gap-2">
            {LINKS.map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => go(link.id)}
                  className="font-rounded flex w-full items-center gap-2 rounded-xl px-3 py-2.5 text-left text-sm font-semibold text-foreground/80 transition-colors hover:bg-secondary hover:text-primary"
                >
                  <Heart size={13} className="text-rose" />
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
