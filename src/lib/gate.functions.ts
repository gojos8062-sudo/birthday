import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { createHash, timingSafeEqual } from "node:crypto";

// Ignore case, spacing and punctuation so "2026 New Year" also works.
const normalise = (s: string) => s.toLowerCase().replace(/[^a-z0-9]/g, "");

const digest = (s: string) => createHash("sha256").update(normalise(s), "utf8").digest();

export const checkEntranceAnswer = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => z.object({ answer: z.string().max(100) }).parse(data))
  .handler(async ({ data }) => {
    const expected = process.env["SITE_PASSWORD"];
    if (!expected) throw new Error("SITE_PASSWORD is not set");
    const ok = timingSafeEqual(digest(data.answer), digest(expected));
    return { ok };
  });
