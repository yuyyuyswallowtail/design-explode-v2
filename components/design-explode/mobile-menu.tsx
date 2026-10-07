"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { nav } from "@/lib/data";

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const firstLink = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    firstLink.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-[60] flex flex-col justify-between bg-ink px-6 pt-28 pb-10 md:hidden"
          initial={{ clipPath: "circle(0% at 92% 4%)", opacity: 0.6 }}
          animate={{ clipPath: "circle(150% at 92% 4%)", opacity: 1 }}
          exit={{ clipPath: "circle(0% at 92% 4%)", opacity: 0.6 }}
          transition={{ duration: 0.55, ease: [0.76, 0, 0.24, 1] }}
        >
          <nav aria-label="Mobile">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    ref={i === 0 ? firstLink : undefined}
                    href={item.href}
                    onClick={onClose}
                    className="display block text-[clamp(2.8rem,15vw,5rem)] hover:text-ember focus-visible:text-ember"
                  >
                    {item.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </nav>
          <Link
            href="/program"
            onClick={onClose}
            className="display inline-block self-start rounded-full bg-crimson px-8 py-4 text-xl text-bone"
          >
            Get tickets →
          </Link>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
