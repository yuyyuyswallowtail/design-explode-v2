"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef } from "react";
import { EVENT_DATES } from "@/lib/data";
import { Star } from "./art";

const spring = { type: "spring", stiffness: 140, damping: 14 } as const;

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const k = reduce ? 0 : 1;
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yText = useTransform(scrollYProgress, [0, 1], [0, 120 * k]);
  const yA = useTransform(scrollYProgress, [0, 1], [0, -220 * k]);
  const yB = useTransform(scrollYProgress, [0, 1], [0, 160 * k]);
  const yC = useTransform(scrollYProgress, [0, 1], [0, -90 * k]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 90 * k]);

  return (
    <section
      ref={ref}
      aria-labelledby="hero-title"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pt-32 pb-16 md:px-8"
    >
      <motion.div className="relative z-10 w-full" style={{ y: yText }}>
        <h1 id="hero-title" className="display h-hero">
          <motion.span
            className="block"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            Design
          </motion.span>
          <motion.span
            className="block pl-[6vw] text-ember md:pl-[14vw]"
            initial={{ opacity: 0, scale: 0.96, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.65,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Explode!!!
          </motion.span>
        </h1>
        <motion.p
          className="meta mt-8 max-w-xs text-bone/70"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
        >
          A fictional festival for visual culture, motion, type and ideas that
          refuse to behave.
        </motion.p>
      </motion.div>

      {/* floating graphic objects */}
      <motion.div
        aria-hidden="true"
        className="absolute top-[18%] right-[6%] z-20 w-[22vw] max-w-40"
        style={{ y: yA, rotate: rot }}
      >
        <motion.div
          initial={{ opacity: 0, rotate: -10, scale: 0.6 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ ...spring, delay: 0.9 }}
        >
          <Star spikes={9} tone="butter" className="drift w-full" />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute top-[26%] left-[4%] z-20"
        style={{ y: yB }}
      >
        <motion.span
          className="display inline-block -rotate-6 rounded-full bg-aqua px-4 py-2 text-[clamp(0.7rem,2.4vw,1.1rem)] text-ink"
          initial={{ opacity: 0, rotate: -20, x: -40 }}
          animate={{ opacity: 1, rotate: -6, x: 0 }}
          transition={{ ...spring, delay: 1 }}
        >
          {EVENT_DATES}
        </motion.span>
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] bottom-[10%] z-20"
        style={{ y: yC }}
      >
        <motion.div
          className="size-[18vw] max-h-40 max-w-40 rounded-full bg-crimson"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ ...spring, delay: 1.2 }}
        />
      </motion.div>

      <motion.div
        aria-hidden="true"
        className="absolute bottom-[8%] left-[10%] z-20 w-14"
        style={{ y: yB }}
      >
        <motion.div
          initial={{ opacity: 0, rotate: 30 }}
          animate={{ opacity: 1, rotate: 0 }}
          transition={{ ...spring, delay: 1.3 }}
        >
          <Star spikes={6} tone="aqua" className="spin-slow w-full" />
        </motion.div>
      </motion.div>

      <motion.span
        aria-hidden="true"
        className="display absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-4xl text-ember md:block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          delay: 1.5,
          y: { repeat: Number.POSITIVE_INFINITY, duration: 2 },
        }}
      >
        ↓
      </motion.span>
    </section>
  );
}
