// Read Later queue — external resources to consume.
//
// This is the seed/source of truth, versioned in the repo. Each item ships with
// a default `status`; a reader's personal progress is layered on top per-browser
// via localStorage (see `src/lib/read-later.ts`), so toggling status on the
// static site never needs a backend.

export type ResourceType =
  | "blog"
  | "article"
  | "paper"
  | "book"
  | "movie"
  | "course"
  | "video";

export type ReadingStatus = "to-read" | "reading" | "completed";

export type ReadLaterItem = {
  /** Stable id — used as the localStorage key for status overrides. */
  id: string;
  title: string;
  type: ResourceType;
  url: string;
  /** Author, publication, channel, or studio. */
  by?: string;
  /** One-line reason it's worth the time. */
  note?: string;
  /** Default status; readers can override locally. */
  status: ReadingStatus;
};

export const RESOURCE_TYPES: { key: ResourceType; label: string }[] = [
  { key: "blog", label: "Blogs" },
  { key: "article", label: "Articles" },
  { key: "paper", label: "Research papers" },
  { key: "book", label: "Books" },
  { key: "movie", label: "Movies" },
  { key: "course", label: "Courses" },
  { key: "video", label: "YouTube videos" },
];

export const READING_STATUSES: { key: ReadingStatus; label: string }[] = [
  { key: "to-read", label: "To Read" },
  { key: "reading", label: "Reading" },
  { key: "completed", label: "Completed" },
];

export const READ_LATER: ReadLaterItem[] = [
  {
    id: "designing-data-intensive-applications",
    title: "Designing Data-Intensive Applications",
    type: "book",
    url: "https://dataintensive.net/",
    by: "Martin Kleppmann",
    note: "The canonical deep-dive on storage, replication, and distributed systems.",
    status: "reading",
  },
  {
    id: "raft-consensus-paper",
    title: "In Search of an Understandable Consensus Algorithm (Raft)",
    type: "paper",
    url: "https://raft.github.io/raft.pdf",
    by: "Diego Ongaro, John Ousterhout",
    note: "Consensus explained without the Paxos headache.",
    status: "to-read",
  },
  {
    id: "dynamo-paper",
    title: "Dynamo: Amazon's Highly Available Key-value Store",
    type: "paper",
    url: "https://www.allthingsdistributed.com/files/amazon-dynamo-sosp2007.pdf",
    by: "Amazon",
    note: "Origin story of eventually-consistent stores.",
    status: "to-read",
  },
  {
    id: "the-log-jay-kreps",
    title: "The Log: What every software engineer should know about real-time data",
    type: "article",
    url: "https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying",
    by: "Jay Kreps",
    note: "Why the log is the backbone of data integration.",
    status: "completed",
  },
  {
    id: "danluu-blog",
    title: "Dan Luu's blog",
    type: "blog",
    url: "https://danluu.com/",
    by: "Dan Luu",
    note: "Hard-numbers writing on latency, reliability, and hardware.",
    status: "to-read",
  },
  {
    id: "missing-semester",
    title: "The Missing Semester of Your CS Education",
    type: "course",
    url: "https://missing.csail.mit.edu/",
    by: "MIT",
    note: "The tooling — shell, git, tmux — nobody teaches formally.",
    status: "reading",
  },
  {
    id: "crafting-interpreters",
    title: "Crafting Interpreters",
    type: "book",
    url: "https://craftinginterpreters.com/",
    by: "Robert Nystrom",
    note: "Build two complete interpreters from scratch.",
    status: "to-read",
  },
  {
    id: "primeagen-youtube",
    title: "ThePrimeagen",
    type: "video",
    url: "https://www.youtube.com/@ThePrimeagen",
    by: "ThePrimeagen",
    note: "Fast-paced takes on tooling, performance, and workflow.",
    status: "to-read",
  },
  {
    id: "the-social-dilemma",
    title: "The Social Dilemma",
    type: "movie",
    url: "https://www.thesocialdilemma.com/",
    by: "Netflix",
    note: "How recommendation systems shape behaviour at scale.",
    status: "completed",
  },
];
