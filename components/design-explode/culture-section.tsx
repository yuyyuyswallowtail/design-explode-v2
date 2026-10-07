import { cultureRows, pillTones, TONE_HEX } from "@/lib/data";
import { Marquee, WordMarquee } from "./marquee";
import { SectionHeading } from "./section-heading";

export function CultureSection() {
  return (
    <section
      aria-labelledby="culture-title"
      className="overflow-hidden py-24 md:py-36"
    >
      <SectionHeading
        id="culture-title"
        kicker="04 / Culture"
        className="mb-12 px-4 md:mb-16 md:px-8"
      >
        Digital
        <br />
        Culture
      </SectionHeading>
      <div className="space-y-3">
        {cultureRows.map((row, r) => {
          const words = [...row.words, ...row.words].map((w, n) => ({
            w,
            id: `${w}-${n < row.words.length ? 0 : 1}`,
          }));
          return (
            <Marquee
              key={row.words.join("")}
              direction={row.dir}
              seconds={row.speed}
            >
              {words.map(({ w, id }, i) => {
                const t = pillTones[(i + r * 2) % pillTones.length];
                if (!t) return null;
                return (
                  <span
                    key={id}
                    className="display mx-2 rounded-2xl px-6 py-3 text-[clamp(2rem,7vw,5.5rem)] whitespace-nowrap"
                    style={{
                      background: TONE_HEX[t.bg],
                      color: t.fg === "ink" ? "#0b0b14" : TONE_HEX[t.fg],
                    }}
                  >
                    {w}
                  </span>
                );
              })}
            </Marquee>
          );
        })}
      </div>
      <div className="mt-16">
        <WordMarquee direction="right" seconds={50} />
      </div>
    </section>
  );
}
