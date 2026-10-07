import type { Metadata } from "next";
import { Poster } from "@/components/design-explode/art";
import { Reveal } from "@/components/design-explode/reveal";
import { TONE_HEX, workshops } from "@/lib/data";

export const metadata: Metadata = { title: "Workshops — DESIGN EXPLODE" };

export default function WorkshopsPage() {
  return (
    <section className="px-4 pt-40 pb-28 md:px-8">
      <h1 className="display h-hero mb-16">Workshops</h1>
      <ul className="space-y-16 md:space-y-24">
        {workshops.map((w, i) => (
          <Reveal key={w.title}>
            <li className="group grid grid-cols-12 items-center gap-x-4 gap-y-5 border-t border-bone/25 pt-8">
              <div
                className={`col-span-8 aspect-[4/3] overflow-hidden rounded-sm md:col-span-4 ${i % 2 ? "md:order-2 md:col-start-9" : ""}`}
              >
                <Poster
                  seed={w.seed}
                  tone={w.tone}
                  label={String(i + 1).padStart(2, "0")}
                  className="transition-transform duration-700 group-hover:scale-[1.05]"
                />
              </div>
              <div className="col-span-12 md:col-span-6 md:col-start-5">
                <h2
                  className="display text-[clamp(2rem,6vw,5rem)]"
                  style={{ color: TONE_HEX[w.tone] }}
                >
                  {w.title}
                </h2>
                <p className="mt-3 max-w-md text-bone/80">{w.blurb}</p>
                <dl className="meta mt-5 flex flex-wrap gap-x-8 gap-y-2 text-bone/70">
                  <div>
                    <dt className="inline text-bone/40">Duration </dt>
                    <dd className="inline">{w.duration}</dd>
                  </div>
                  <div>
                    <dt className="inline text-bone/40">Level </dt>
                    <dd className="inline">{w.level}</dd>
                  </div>
                  <div>
                    <dt className="inline text-bone/40">Mentor </dt>
                    <dd className="inline">{w.mentor}</dd>
                  </div>
                </dl>
              </div>
            </li>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}
