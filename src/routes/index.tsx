import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { birthdayData } from "@/data/birthdayData";
import { Navbar } from "@/components/Navbar";
import { PasswordGate } from "@/components/PasswordGate";
import { WelcomeScreen } from "@/components/WelcomeScreen";
import { BirthdayHero } from "@/components/BirthdayHero";
import { OurStory } from "@/components/OurStory";
import { MemoryGallery } from "@/components/MemoryGallery";
import { Timeline } from "@/components/Timeline";
import { LoveCards } from "@/components/LoveCards";
import { BirthdayWishes } from "@/components/BirthdayWishes";
import { RomanticQuestion } from "@/components/RomanticQuestion";
import { LoveLetter } from "@/components/LoveLetter";
import { FinalSurprise } from "@/components/FinalSurprise";
import { RelationshipQuiz } from "@/components/games/RelationshipQuiz";
import { WhoSaidIt } from "@/components/games/WhoSaidIt";
import { MemoryVault } from "@/components/games/MemoryVault";
import { ScrollToTop } from "@/components/ScrollToTop";

const title = `Happy Birthday, ${birthdayData.herName} ❤️`;
const description = `A little birthday journey made just for ${birthdayData.herName} — memories, wishes, a song and a letter.`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [unlocked, setUnlocked] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;
    window.scrollTo({ top: 0 });
  }, [started]);

  if (!unlocked) {
    return <PasswordGate onUnlock={() => setUnlocked(true)} />;
  }

  if (!started) {
    return <WelcomeScreen onStart={() => setStarted(true)} />;
  }

  return (
    <div className="animate-soft-in min-h-screen">
      <Navbar herName={birthdayData.herName} />
      <main>
        <BirthdayHero />
        <OurStory />
        <MemoryGallery />
        <Timeline />
        <LoveCards />
        <BirthdayWishes />
        <RomanticQuestion />
        <RelationshipQuiz />
        <WhoSaidIt />
        <MemoryVault />
        <LoveLetter />
        <FinalSurprise />
      </main>
      <ScrollToTop />
    </div>
  );
}
