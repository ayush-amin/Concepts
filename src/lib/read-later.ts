"use client";

import { useCallback, useEffect, useState } from "react";
import type { ReadingStatus } from "@/data/read-later";

const STORAGE_KEY = "read-later-status";

type StatusMap = Record<string, ReadingStatus>;

function readStore(): StatusMap {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as StatusMap) : {};
  } catch {
    return {};
  }
}

/**
 * Per-browser reading-status overrides layered on top of the repo defaults.
 *
 * Returns the current override map (empty until mounted, to stay
 * hydration-safe) and a setter that persists to localStorage.
 */
export function useReadingStatus() {
  const [overrides, setOverrides] = useState<StatusMap>({});
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setOverrides(readStore());
    setReady(true);
  }, []);

  const setStatus = useCallback((id: string, status: ReadingStatus) => {
    setOverrides((prev) => {
      const next = { ...prev, [id]: status };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      } catch {
        // Storage unavailable (private mode / quota) — keep in-memory only.
      }
      return next;
    });
  }, []);

  return { overrides, setStatus, ready };
}
