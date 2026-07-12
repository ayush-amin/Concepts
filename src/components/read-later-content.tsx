"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import {
  READ_LATER,
  READING_STATUSES,
  RESOURCE_TYPES,
  type ReadingStatus,
  type ResourceType,
} from "@/data/read-later";
import { useReadingStatus } from "@/lib/read-later";

type TypeFilter = ResourceType | "all";
type StatusFilter = ReadingStatus | "all";

const TYPE_LABEL: Record<ResourceType, string> = Object.fromEntries(
  RESOURCE_TYPES.map((t) => [t.key, t.label]),
) as Record<ResourceType, string>;

const STATUS_STYLE: Record<ReadingStatus, string> = {
  "to-read":
    "bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400",
  reading:
    "bg-amber-100 text-amber-700 dark:bg-amber-500/15 dark:text-amber-400",
  completed:
    "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/15 dark:text-emerald-400",
};

function Chip({
  active,
  label,
  count,
  onClick,
}: {
  active: boolean;
  label: string;
  count?: number;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-3 py-1.5 text-xs font-medium transition-colors ${
        active
          ? "border-neutral-900 bg-neutral-900 text-white dark:border-white dark:bg-white dark:text-neutral-900"
          : "border-neutral-200 bg-white text-neutral-500 hover:border-neutral-300 hover:text-neutral-900 dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-400 dark:hover:border-neutral-700 dark:hover:text-neutral-100"
      }`}
    >
      {label}
      {count !== undefined && (
        <span className="ml-1.5 font-mono text-[10px] opacity-60">{count}</span>
      )}
    </button>
  );
}

export function ReadLaterContent() {
  const { overrides, setStatus, ready } = useReadingStatus();
  const [typeFilter, setTypeFilter] = useState<TypeFilter>("all");
  const [statusFilter, setStatusFilter] = useState<StatusFilter>("all");

  // Effective status = per-reader override, falling back to the seed default.
  const effective = useMemo(
    () =>
      READ_LATER.map((item) => ({
        ...item,
        current: overrides[item.id] ?? item.status,
      })),
    [overrides],
  );

  const statusCounts = useMemo(() => {
    const counts: Record<ReadingStatus, number> = {
      "to-read": 0,
      reading: 0,
      completed: 0,
    };
    for (const item of effective) counts[item.current] += 1;
    return counts;
  }, [effective]);

  const typeCounts = useMemo(() => {
    const counts = {} as Record<ResourceType, number>;
    for (const item of effective) counts[item.type] = (counts[item.type] ?? 0) + 1;
    return counts;
  }, [effective]);

  const visible = effective.filter(
    (item) =>
      (typeFilter === "all" || item.type === typeFilter) &&
      (statusFilter === "all" || item.current === statusFilter),
  );

  return (
    <div className="min-h-screen bg-[#fafafa] dark:bg-neutral-950">
      <Header />

      <main className="mx-auto max-w-4xl px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-10"
        >
          <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-50">
            Read Later
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-500 dark:text-neutral-400">
            A queue of blogs, papers, books, courses, and videos worth my time.
            Progress is tracked in your browser — toggle a status and it sticks.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="mb-8 space-y-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Type
            </span>
            <Chip
              active={typeFilter === "all"}
              label="All"
              count={effective.length}
              onClick={() => setTypeFilter("all")}
            />
            {RESOURCE_TYPES.map((t) => (
              <Chip
                key={t.key}
                active={typeFilter === t.key}
                label={t.label}
                count={typeCounts[t.key] ?? 0}
                onClick={() => setTypeFilter(t.key)}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="mr-1 text-xs font-medium uppercase tracking-widest text-neutral-400 dark:text-neutral-500">
              Status
            </span>
            <Chip
              active={statusFilter === "all"}
              label="All"
              onClick={() => setStatusFilter("all")}
            />
            {READING_STATUSES.map((s) => (
              <Chip
                key={s.key}
                active={statusFilter === s.key}
                label={s.label}
                count={statusCounts[s.key]}
                onClick={() => setStatusFilter(s.key)}
              />
            ))}
          </div>
        </div>

        {/* List */}
        <div className="space-y-3">
          {visible.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: Math.min(i, 8) * 0.04,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className="flex flex-col gap-3 rounded-2xl border border-neutral-200 bg-white p-5 transition-colors hover:border-neutral-300 sm:flex-row sm:items-center sm:justify-between dark:border-neutral-800 dark:bg-neutral-900 dark:hover:border-neutral-700"
            >
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-block rounded-full bg-neutral-100 px-2.5 py-0.5 text-[11px] font-medium tracking-wide text-neutral-500 dark:bg-neutral-800 dark:text-neutral-400">
                    {TYPE_LABEL[item.type]}
                  </span>
                </div>
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-base font-semibold leading-tight tracking-tight text-neutral-900 hover:underline dark:text-neutral-100"
                >
                  {item.title}
                </a>
                {item.by && (
                  <span className="ml-2 text-sm text-neutral-400 dark:text-neutral-500">
                    {item.by}
                  </span>
                )}
                {item.note && (
                  <p className="mt-1 text-sm leading-relaxed text-neutral-500 dark:text-neutral-400">
                    {item.note}
                  </p>
                )}
              </div>

              {/* Status toggle */}
              <div
                className="flex shrink-0 gap-1 rounded-lg border border-neutral-200 p-1 dark:border-neutral-800"
                role="group"
                aria-label={`Reading status for ${item.title}`}
              >
                {READING_STATUSES.map((s) => {
                  const on = item.current === s.key;
                  return (
                    <button
                      key={s.key}
                      onClick={() => setStatus(item.id, s.key)}
                      disabled={!ready}
                      aria-pressed={on}
                      className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors disabled:opacity-50 ${
                        on
                          ? STATUS_STYLE[s.key]
                          : "text-neutral-400 hover:text-neutral-700 dark:text-neutral-500 dark:hover:text-neutral-300"
                      }`}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </motion.div>
          ))}

          {visible.length === 0 && (
            <p className="rounded-2xl border border-dashed border-neutral-200 py-12 text-center text-sm text-neutral-400 dark:border-neutral-800 dark:text-neutral-500">
              Nothing here with those filters.
            </p>
          )}
        </div>
      </main>
    </div>
  );
}
