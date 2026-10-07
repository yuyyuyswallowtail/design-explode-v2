"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useState } from "react";
import { INSPIRATION_URL, nav } from "@/lib/data";
import { MobileMenu } from "./mobile-menu";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = useCallback(() => setOpen(false), []);

  return (
    <div
      className="fixed inset-x-0 top-0 z-[70]"
      style={{ paddingTop: "env(safe-area-inset-top, 0px)" }}
    >
      <div className="meta flex items-center justify-between gap-3 bg-bone px-4 py-1.5 text-ink">
        <span className="font-black">DESIGN EXPLODE</span>
        <span className="truncate">
          Inspired by Design Bomb{" "}
          <a
            href={INSPIRATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-black underline decoration-crimson decoration-2 underline-offset-2 transition-all hover:decoration-4"
          >
            → designbomb.it
          </a>
        </span>
      </div>
      <header className="flex items-center justify-between bg-ink/80 px-4 py-3 backdrop-blur-none md:px-8">
        <Link
          href="/"
          className="display text-xl"
          onClick={close}
          aria-label="DESIGN EXPLODE — home"
        >
          DESIGN
          <br />
          EXPLODE<span className="text-ember">!</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-7 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="display group relative text-sm transition-transform hover:-translate-y-0.5"
              >
                {active ? (
                  <span className="mr-1.5 inline-block size-2 rounded-full bg-ember" />
                ) : null}
                {item.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-ember transition-all group-hover:w-full" />
              </Link>
            );
          })}
          <Link
            href="/program"
            className="display rounded-full bg-crimson px-5 py-2 text-sm text-bone transition-transform hover:scale-105 hover:bg-ember hover:text-ink"
          >
            Get tickets
          </Link>
        </nav>

        <button
          type="button"
          className="display rounded-full border-2 border-bone px-4 py-2 text-sm md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </header>
      <MobileMenu open={open} onClose={close} />
    </div>
  );
}
