import { TONE_HEX, type Tone } from "@/lib/data";
import { Poster, Star } from "./art";

type Item =
  | {
      kind: "poster";
      x: number;
      y: number;
      w: number;
      r: number;
      tone: Tone;
      seed: number;
      label: string;
    }
  | {
      kind: "star";
      x: number;
      y: number;
      w: number;
      r: number;
      tone: Tone;
      spikes: number;
    }
  | { kind: "pill"; x: number; y: number; r: number; tone: Tone; text: string };

/** Fixed, hand-placed coordinates: the same layout on every render. */
const ITEMS: Item[] = [
  {
    kind: "poster",
    x: 4,
    y: 6,
    w: 17,
    r: -6,
    tone: "ember",
    seed: 61,
    label: "ART",
  },
  { kind: "star", x: 24, y: 4, w: 10, r: 12, tone: "butter", spikes: 9 },
  {
    kind: "poster",
    x: 38,
    y: 12,
    w: 14,
    r: 5,
    tone: "aqua",
    seed: 62,
    label: "TYPE",
  },
  { kind: "pill", x: 60, y: 8, r: -8, tone: "crimson", text: "NOT A CLONE" },
  {
    kind: "poster",
    x: 72,
    y: 18,
    w: 20,
    r: 7,
    tone: "bone",
    seed: 63,
    label: "3D",
  },
  { kind: "pill", x: 10, y: 44, r: 6, tone: "aqua", text: "MAKE NOISE" },
  {
    kind: "poster",
    x: 22,
    y: 52,
    w: 16,
    r: -4,
    tone: "crimson",
    seed: 64,
    label: "SOUND",
  },
  { kind: "star", x: 46, y: 46, w: 14, r: -10, tone: "ember", spikes: 11 },
  {
    kind: "poster",
    x: 62,
    y: 56,
    w: 13,
    r: 9,
    tone: "butter",
    seed: 65,
    label: "CODE",
  },
  { kind: "star", x: 84, y: 60, w: 9, r: 20, tone: "aqua", spikes: 7 },
  { kind: "pill", x: 36, y: 82, r: -5, tone: "butter", text: "BREAK THE GRID" },
  {
    kind: "poster",
    x: 74,
    y: 78,
    w: 15,
    r: -7,
    tone: "ember",
    seed: 66,
    label: "AI",
  },
];

function render(item: Item) {
  if (item.kind === "poster")
    return (
      <div className="aspect-[3/4] overflow-hidden rounded-sm border-2 border-bone/80">
        <Poster seed={item.seed} tone={item.tone} label={item.label} />
      </div>
    );
  if (item.kind === "star")
    return (
      <Star spikes={item.spikes} tone={item.tone} className="drift w-full" />
    );
  return null;
}

export function Collage() {
  return (
    <section aria-label="Collage" className="relative">
      <h2 className="sr-only">Collage</h2>
      {/* desktop: scattered poster */}
      <div className="relative mx-auto hidden h-[130vh] max-w-[1600px] md:block">
        {ITEMS.map((it) => (
          <div
            key={`${it.kind}-${it.x}-${it.y}`}
            className="absolute"
            style={{
              left: `${it.x}%`,
              top: `${it.y}%`,
              width: it.kind === "pill" ? "auto" : `${it.w}%`,
              transform: `rotate(${it.r}deg)`,
            }}
          >
            {it.kind === "pill" ? (
              <span
                className="display inline-block whitespace-nowrap rounded-full px-5 py-2 text-xl text-ink"
                style={{ background: TONE_HEX[it.tone] }}
              >
                {it.text}
              </span>
            ) : (
              render(it)
            )}
          </div>
        ))}
        <p className="display absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-3 text-center text-[clamp(3rem,9vw,9rem)] mix-blend-difference">
          Make
          <br />
          noise
        </p>
      </div>

      {/* mobile: structured grid */}
      <div className="grid grid-cols-2 gap-3 px-4 py-16 md:hidden">
        <p className="display col-span-2 mb-4 text-5xl">
          Make
          <br />
          noise
        </p>
        {ITEMS.filter((i) => i.kind !== "pill").map((it) => (
          <div
            key={`m-${it.kind}-${it.x}-${it.y}`}
            className={
              it.kind === "star" ? "flex items-center justify-center p-4" : ""
            }
          >
            {render(it)}
          </div>
        ))}
      </div>
    </section>
  );
}
