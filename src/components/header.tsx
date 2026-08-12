"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeToggle } from "./theme-toggle";

const LINKS = [
  { href: "/", label: "Notes" },
  { href: "/read-later", label: "Read Later" },
  { href: "/about", label: "About" },
];

const linkClass =
  "rounded-lg px-3 py-1.5 text-xs font-medium whitespace-nowrap text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function openSearch() {
    setOpen(false);
    window.dispatchEvent(new Event("open-search"));
  }

  // Close the mobile menu on navigation, and whenever the viewport grows
  // wide enough for the inline nav to take over.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 640px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="sticky top-0 z-50 border-b border-neutral-100 bg-white/80 backdrop-blur-xl dark:border-neutral-800 dark:bg-neutral-950/80"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
        <Link href="/" className="flex shrink-0 items-center gap-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-neutral-900 text-white dark:bg-white dark:text-neutral-900">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round">
              <circle cx="16" cy="16" r="7.5" />
              <line x1="16" y1="4.5" x2="16" y2="27.5" />
            </svg>
          </div>
          <span className="text-sm font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
            Concepts
          </span>
        </Link>

        <nav className="flex items-center gap-1">
          <button
            onClick={openSearch}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:mr-1 sm:w-auto sm:justify-start sm:gap-2 sm:border sm:border-neutral-200 sm:bg-neutral-50 sm:px-2.5 sm:text-xs sm:text-neutral-400 sm:hover:border-neutral-300 sm:hover:bg-neutral-50 sm:hover:text-neutral-600 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100 sm:dark:border-neutral-800 sm:dark:bg-neutral-900 sm:dark:hover:border-neutral-700 sm:dark:hover:bg-neutral-900 sm:dark:hover:text-neutral-300"
            aria-label="Search notes"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" className="sm:h-[13px] sm:w-[13px]">
              <circle cx="11" cy="11" r="7" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <span className="hidden sm:inline">Search</span>
            <kbd className="hidden rounded bg-neutral-200 px-1.5 font-mono text-[10px] text-neutral-500 sm:inline dark:bg-neutral-800 dark:text-neutral-400">
              ⌘K
            </kbd>
          </button>

          {LINKS.map((link) => (
            <Link key={link.href} href={link.href} className={`hidden sm:block ${linkClass}`}>
              {link.label}
            </Link>
          ))}

          <ThemeToggle />

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-neutral-500 transition-colors hover:bg-neutral-100 hover:text-neutral-900 sm:hidden dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-neutral-100"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </nav>
      </div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden border-t border-neutral-100 sm:hidden dark:border-neutral-800"
          >
            <div className="flex flex-col gap-1 px-4 py-3">
              {LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`${linkClass} text-sm`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
