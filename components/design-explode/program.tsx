"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { type CSSProperties, useState } from "react";
import {
  type Day,
  EVENT_TONE,
  type EventCategory,
  events,
  TONE_HEX,
} from "@/lib/data";

const DAYS: (Day | "ALL")[] = ["ALL", "FRI", "SAT", "SUN"];
const CATS: (EventCategory | "ALL")[] = [
  "ALL",
  "TALK",
  "WORKSHOP",
  "PARTY",
  "EXHIBITION",
];

function Chip({
  active,
  onClick,
  children,
  tone,
}: {
  active: boolean;
  onClick: () => void;
  children: string;
  tone?: string;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      style={{ "--c": tone ?? "#ff6a1f" } as CSSProperties}
      className={`display rounded-full border-2 px-4 py-1.5 text-sm transition-all hover:-translate-y-0.5 ${
        active
          ? "border-(--c) bg-(--c) text-ink"
          : "border-bone/30 hover:border-(--c)"
      }`}
    >
      {children}
    </button>
  );
}

export function Program({
  limit,
  filters = true,
}: {
  limit?: number;
  filters?: boolean;
}) {
  const [day, setDay] = useState<Day | "ALL">("ALL");
  const [cat, setCat] = useState<EventCategory | "ALL">("ALL");
  const [open, setOpen] = useState<string | null>(null);

  const list = events
    .filter(
      (e) =>
        (day === "ALL" || e.day === day) &&
        (cat === "ALL" || e.category === cat),
    )
    .slice(0, limit);

  return (
    <div>
      {filters ? (
        <div className="mb-10 flex flex-col justify-between gap-6 md:flex-row">
          <fieldset className="flex flex-wrap items-center gap-2">
            <legend className="meta mb-2 text-bone/60">Day</legend>
            {DAYS.map((d) => (
              <Chip key={d} active={day === d} onClick={() => setDay(d)}>
                {d}
              </Chip>
            ))}
          </fieldset>
          <fieldset className="flex flex-wrap items-center gap-2 md:justify-end">
            <legend className="meta mb-2 text-bone/60 md:text-right">
              Filter by
            </legend>
            {CATS.map((c) => (
              <Chip
                key={c}
                active={cat === c}
                onClick={() => setCat(c)}
                tone={c === "ALL" ? undefined : TONE_HEX[EVENT_TONE[c]]}
              >
                {c}
              </Chip>
            ))}
          </fieldset>
        </div>
      ) : null}

      <ul className="border-t border-bone/25" aria-live="polite">
        <AnimatePresence mode="popLayout" initial={false}>
          {list.map((e) => {
            const isOpen = open === e.id;
            const tone = TONE_HEX[EVENT_TONE[e.category]];
            return (
              <motion.li
                key={e.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35 }}
                className="group border-b border-bone/25 py-6 transition-[padding] duration-300 hover:pl-3"
              >
                <div className="grid grid-cols-[1fr_auto] items-start gap-x-4 gap-y-3 md:grid-cols-[1fr_1.4fr_1fr_auto] md:items-center">
                  <p className="col-span-2 md:col-span-1">
                    <span className="block text-sm italic text-bone/70">
                      {e.date}
                    </span>
                    <span className="block text-lg font-black">{e.time}</span>
                    <span className="block text-sm">{e.location}</span>
                  </p>
                  <div>
                    <h3 className="text-xl font-black leading-tight md:text-2xl">
                      {e.title}
                    </h3>
                    <p className="text-sm text-bone/70">{e.host}</p>
                  </div>
                  <p className="display text-lg" style={{ color: tone }}>
                    {e.category}
                  </p>
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => setOpen(isOpen ? null : e.id)}
                    className="display col-start-2 row-start-2 rounded-md bg-bone px-3 py-2 text-xs text-ink transition-transform hover:scale-105 md:col-start-auto md:row-start-auto"
                  >
                    {isOpen ? "Show less" : "Show more"}
                  </button>
                </div>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.p
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden pt-4 text-sm text-bone/80 md:max-w-lg md:pl-[calc(100%/3.4)]"
                    >
                      {e.blurb}
                    </motion.p>
                  ) : null}
                </AnimatePresence>
              </motion.li>
            );
          })}
        </AnimatePresence>
        {list.length === 0 ? (
          <li className="py-10 text-bone/60">
            Nothing here yet. Try another filter.
          </li>
        ) : null}
      </ul>

      {limit ? (
        <Link
          href="/program"
          className="display mt-8 inline-block rounded-full border-2 border-bone px-6 py-3 transition-all hover:bg-bone hover:text-ink"
        >
          Full program →
        </Link>
      ) : null}
    </div>
  );
}
