import { projects, TONE_HEX } from "@/lib/data";
import { Poster } from "./art";
import { Reveal } from "./reveal";
import { SectionHeading } from "./section-heading";

export function SelectedWork() {
  return (
    <section
      aria-labelledby="work-title"
      className="px-4 py-24 md:px-8 md:py-36"
    >
      <SectionHeading
        id="work-title"
        kicker="05 / Work"
        className="mb-16 md:mb-28"
      >
        Selected
        <br />
        Work
      </SectionHeading>

      <div className="space-y-24 md:space-y-40">
        {projects.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <Reveal key={p.n}>
              <article className="group grid grid-cols-12 items-end gap-x-4 gap-y-5">
                <div
                  className={`col-span-12 overflow-hidden rounded-sm ${flip ? "md:col-span-5 md:col-start-6 md:order-2" : "md:col-span-7"} ${i % 3 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}`}
                  data-cursor="VIEW PROJECT →"
                >
                  <Poster
                    seed={p.seed}
                    tone={p.tone}
                    label={p.title}
                    className="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <div
                  className={`col-span-12 ${flip ? "md:col-span-4 md:col-start-1 md:order-1" : "md:col-span-4 md:col-start-9"}`}
                >
                  <p className="meta mb-3 flex justify-between text-bone/60">
                    <span>{p.n}</span>
                    <span>{p.year}</span>
                  </p>
                  <h3 className="display text-[clamp(2.2rem,6vw,5rem)] transition-transform duration-300 group-hover:translate-x-2">
                    {p.title}
                  </h3>
                  <p className="meta mt-2" style={{ color: TONE_HEX[p.tone] }}>
                    {p.kind}
                  </p>
                  <p className="mt-4 max-w-xs text-sm text-bone/70">
                    {p.caption}
                  </p>
                  <span className="mt-5 block h-1 w-12 origin-left bg-ember transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
