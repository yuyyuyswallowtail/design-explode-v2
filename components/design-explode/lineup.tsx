"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { type CSSProperties, useState } from "react";
import { lineup, TONE_HEX } from "@/lib/data";
import { Poster } from "./art";
import { SectionHeading } from "./section-heading";

export function Lineup() {
  const [hover, setHover] = useState<number | null>(null);
  const [open, setOpen] = useState<number | null>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 26 });
  const sy = useSpring(y, { stiffness: 220, damping: 26 });
  const current = hover === null ? null : lineup[hover];

  return (
    <section
      aria-labelledby="lineup-title"
      className="px-4 py-24 md:px-8 md:py-36"
    >
      <SectionHeading
        id="lineup-title"
        kicker="01 / Lineup"
        className="mb-12 md:mb-20"
      >
        Lineup
      </SectionHeading>

      <ul
        className="border-t border-bone/25"
        onPointerMove={(e) => {
          x.set(e.clientX + 28);
          y.set(e.clientY - 120);
        }}
        onPointerLeave={() => setHover(null)}
      >
        {lineup.map((item, i) => {
          const isOpen = open === i;
          return (
            <li
              key={item.number}
              className="border-b border-bone/25"
              style={{ "--tone": TONE_HEX[item.tone] } as CSSProperties}
            >
              <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={`lineup-panel-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                onPointerEnter={(e) => e.pointerType === "mouse" && setHover(i)}
                className="group grid w-full grid-cols-[2.5rem_1fr_auto] items-center gap-x-3 gap-y-1 px-1 py-5 text-left transition-all duration-300 hover:bg-(--tone) hover:px-5 hover:text-ink focus-visible:bg-(--tone) focus-visible:text-ink md:grid-cols-[4rem_1.6fr_1fr_8rem_3rem] md:py-7"
              >
                <span className="meta">{item.number}</span>
                <span className="display text-[clamp(1.6rem,5vw,4rem)]">
                  {item.name}
                </span>
                <span className="meta col-start-2 md:col-start-auto">
                  {item.role}
                </span>
                <span className="meta hidden md:inline-flex md:items-center md:gap-2">
                  <span className="size-2 rounded-full bg-(--tone) group-hover:bg-ink" />
                  {item.category}
                </span>
                <span className="display row-start-1 col-start-3 text-2xl transition-transform group-hover:translate-x-2 md:col-start-5 md:row-start-auto">
                  {isOpen ? "–" : "→"}
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen ? (
                  <motion.div
                    id={`lineup-panel-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35 }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-center gap-5 px-1 pb-6 md:px-5">
                      <div className="aspect-[3/4] w-28 shrink-0 overflow-hidden rounded-sm md:w-36">
                        <Poster
                          seed={item.seed}
                          tone={item.tone}
                          label={item.number}
                        />
                      </div>
                      <p className="max-w-md text-sm text-bone/80">
                        {item.name} joins the lineup for a session on{" "}
                        <em>{item.role.toLowerCase()}</em>. Details drop closer
                        to the date.
                      </p>
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </li>
          );
        })}
      </ul>

      {/* cursor-following preview: fine pointers only */}
      <div
        className="fine-only pointer-events-none fixed top-0 left-0 z-40"
        aria-hidden="true"
      >
        <motion.div style={{ x: sx, y: sy }}>
          <AnimatePresence>
            {current ? (
              <motion.div
                key={current.number}
                className="aspect-[3/4] w-56 overflow-hidden rounded-md border-2 border-bone shadow-none"
                initial={{ opacity: 0, scale: 0.8, rotate: -8 }}
                animate={{ opacity: 1, scale: 1, rotate: 3 }}
                exit={{ opacity: 0, scale: 0.85, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
              >
                <Poster
                  seed={current.seed}
                  tone={current.tone}
                  label={current.number}
                />
              </motion.div>
            ) : null}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
