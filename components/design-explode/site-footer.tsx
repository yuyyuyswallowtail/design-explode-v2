import Link from "next/link";
import { INSPIRATION_URL, nav } from "@/lib/data";

const SOCIAL = ["Instagram", "Behance", "Dribbble", "Are.na"] as const;

export function SiteFooter() {
  return (
    <footer className="px-4 pt-24 pb-10 md:px-8">
      <p className="display text-[clamp(3rem,15.5vw,16rem)]" aria-hidden="true">
        Design
        <br />
        Explode<span className="text-ember">!!!</span>
      </p>
      <div className="mt-14 grid grid-cols-2 gap-8 border-t border-bone/25 pt-8 md:grid-cols-4">
        <nav aria-label="Footer">
          <ul className="space-y-2">
            {nav.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  className="display text-lg transition-colors hover:text-ember"
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className="space-y-2" aria-label="Social (dummy links)">
          {SOCIAL.map((s) => (
            <li key={s}>
              <a
                href="#top"
                className="text-lg transition-colors hover:text-aqua"
              >
                {s} ↗
              </a>
            </li>
          ))}
        </ul>
        <div className="col-span-2 text-sm text-bone/70">
          <p className="font-black text-bone">DESIGN EXPLODE</p>
          <p>Fictional portfolio project.</p>
          <p className="mt-3">
            Visual direction inspired by Design Bomb —{" "}
            <a
              href={INSPIRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-ember decoration-2 underline-offset-2"
            >
              designbomb.it
            </a>
            . Not affiliated.
          </p>
        </div>
      </div>
    </footer>
  );
}
