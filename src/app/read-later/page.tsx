import type { Metadata } from "next";
import { ReadLaterContent } from "@/components/read-later-content";

export const metadata: Metadata = {
  title: "Read Later",
  description:
    "A queue of blogs, articles, papers, books, courses, and videos to consume — with per-item reading status.",
};

export default function ReadLaterPage() {
  return <ReadLaterContent />;
}
