"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

type Mode =
  | { kind: "dot" }
  | { kind: "link" }
  | { kind: "label"; text: string };

/** Desktop-only cursor. Never mounts on touch or when reduced motion is requested. */
export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [mode, setMode] = useState<Mode>({ kind: "dot" });
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 600, damping: 45, mass: 0.35 });
  const sy = useSpring(y, { stiffness: 600, damping: 45, mass: 0.35 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduce.matches) return;
    setEnabled(true);
    document.documentElement.classList.add("has-cursor");

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    const onOver = (e: PointerEvent) => {
      const el = (e.target as Element | null)?.closest<HTMLElement>(
        "[data-cursor], a, button, input, textarea",
      );
      if (el?.dataset.cursor)
        setMode({ kind: "label", text: el.dataset.cursor });
      else if (el) setMode({ kind: "link" });
      else setMode({ kind: "dot" });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerover", onOver, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      document.documentElement.classList.remove("has-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  const size = mode.kind === "label" ? 92 : mode.kind === "link" ? 44 : 14;
  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed top-0 left-0 z-[120]"
      style={{ x: sx, y: sy }}
    >
      <motion.div
        className="display -translate-x-1/2 -translate-y-1/2 flex items-center justify-center rounded-full text-center text-[0.6rem] leading-tight"
        animate={{
          width: size,
          height: size,
          backgroundColor: mode.kind === "label" ? "#ffd84a" : "#ff6a1f",
          color: "#0b0b14",
          opacity: mode.kind === "link" ? 0.6 : 1,
        }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
      >
        {mode.kind === "label" ? mode.text : null}
      </motion.div>
    </motion.div>
  );
}
