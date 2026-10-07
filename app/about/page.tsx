import type { Metadata } from "next";
import { Marquee } from "@/components/design-explode/marquee";
import { Reveal } from "@/components/design-explode/reveal";
import { disciplines, team, values } from "@/lib/data";

export const metadata: Metadata = { title: "About — DESIGN EXPLODE" };

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pt-40 pb-24 md:px-8">
        <h1 className="display h-hero">
          Too loud
          <br />
          to ignore.
        </h1>
        <p className="mt-10 max-w-xl text-lg text-bone/80">
          Design Explode is a fictional festival, built as a playground for
          type, motion and code. Everything on this site is invented.
        </p>
      </section>

      <section aria-labelledby="values" className="px-4 py-24 md:px-8">
        <h2 id="values" className="meta mb-10 text-ember">
          Philosophy &amp; values
        </h2>
        <ul className="grid gap-10 md:grid-cols-3">
          {values.map((v) => (
            <Reveal key={v.title}>
              <li className="border-t-4 border-ember pt-4">
                <h3 className="display text-4xl">{v.title}</h3>
                <p className="mt-3 text-bone/80">{v.text}</p>
              </li>
            </Reveal>
          ))}
        </ul>
      </section>

      <section aria-label="Disciplines" className="py-16">
        <Marquee seconds={36} className="border-y border-bone/20 py-4">
          {disciplines.map((d) => (
            <span
              key={d}
              className="display px-6 text-[clamp(2.5rem,8vw,6rem)] whitespace-nowrap"
            >
              {d} <span className="text-butter">/</span>
            </span>
          ))}
        </Marquee>
      </section>

      <section aria-labelledby="team" className="px-4 py-24 md:px-8">
        <h2 id="team" className="display h-section mb-12">
          Team
        </h2>
        <ul className="border-t border-bone/25">
          {team.map((t) => (
            <li
              key={t.name}
              className="group flex items-baseline justify-between border-b border-bone/25 py-5 transition-all hover:px-4 hover:text-aqua"
            >
              <span className="display text-[clamp(1.6rem,5vw,4rem)]">
                {t.name}
              </span>
              <span className="meta">{t.role}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
