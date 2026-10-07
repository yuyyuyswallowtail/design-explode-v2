import { Reveal } from "./reveal";

export function Intro() {
  return (
    <section
      aria-labelledby="intro-title"
      className="grid grid-cols-12 gap-x-4 px-4 py-28 md:px-8 md:py-44"
    >
      <p className="meta col-span-12 mb-8 text-ember md:col-span-1 md:mb-0">
        00 / Manifesto
      </p>
      <Reveal className="col-span-12 md:col-span-9 md:col-start-2">
        <h2 id="intro-title" className="display h-section">
          Design should <span className="text-aqua">not</span> sit still.
        </h2>
      </Reveal>
      <Reveal
        delay={0.15}
        className="col-span-12 mt-10 md:col-span-4 md:col-start-8 md:mt-20"
      >
        <p className="text-base leading-relaxed text-bone/80 md:text-lg">
          <strong className="text-bone">DESIGN EXPLODE</strong> is a fictional
          creative festival celebrating visual culture, digital experiments,
          motion, typography, art direction and ideas that refuse to behave.
        </p>
        <span className="mt-6 block h-1 w-24 bg-ember" />
      </Reveal>
    </section>
  );
}
