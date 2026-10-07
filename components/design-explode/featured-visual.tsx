import { Poster } from "./art";
import { Reveal } from "./reveal";

export function FeaturedVisual() {
  return (
    <section
      aria-label="Featured visual"
      className="relative px-4 py-16 md:px-8 md:py-28"
    >
      <div className="grid grid-cols-12 gap-4">
        <Reveal className="col-span-12 md:col-span-8">
          <figure>
            <div
              className="aspect-[16/10] overflow-hidden rounded-sm"
              data-cursor="LOOK →"
            >
              <Poster
                seed={52}
                tone="ember"
                label="NIGHT STUDY"
                className="transition-transform duration-700 hover:scale-[1.03]"
              />
            </div>
            <figcaption className="meta mt-3 flex justify-between text-bone/60">
              <span>01 — Night Study</span>
              <span>Generative artwork / original</span>
            </figcaption>
          </figure>
        </Reveal>
        <Reveal
          delay={0.2}
          className="col-span-8 col-start-5 -mt-16 md:col-span-3 md:col-start-9 md:mt-40 md:-ml-16"
        >
          <figure>
            <div className="aspect-[3/4] overflow-hidden rounded-sm border-4 border-ink">
              <Poster
                seed={53}
                tone="aqua"
                label="LOUD"
                className="transition-transform duration-700 hover:scale-[1.05]"
              />
            </div>
            <figcaption className="meta mt-3 text-bone/60">
              02 — Loud Letters
            </figcaption>
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
