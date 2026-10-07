"use client";

import {
  AnimatePresence,
  animate,
  motion,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useState } from "react";
import { Star } from "./art";

export function LoadingScreen() {
  const reduce = useReducedMotion();
  const [pct, setPct] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const controls = animate(0, 100, {
      duration: reduce ? 0.2 : 1.1,
      ease: "easeInOut",
      onUpdate: (v) => setPct(Math.round(v)),
      onComplete: () => setDone(true),
    });
    return () => controls.stop();
  }, [reduce]);

  return (
    <AnimatePresence>
      {done ? null : (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-ink"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <Star spikes={9} tone="ember" className="spin-slow size-16" />
          <p className="display text-center text-[clamp(2rem,9vw,5rem)]">
            DESIGN
            <br />
            EXPLODE!!!
          </p>
          <p className="meta tabular-nums text-bone/70">
            {String(pct).padStart(3, "0")}%
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
