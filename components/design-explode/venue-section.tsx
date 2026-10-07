import { EVENT_DATES } from "@/lib/data";
import { SectionHeading } from "./section-heading";

const INFO = [
  ["Address", "Via dei Fuochi 22, Distretto Brace (fictional)"],
  [
    "Opening hours",
    "Fri 18:00 — 24:00 / Sat 10:00 — 02:00 / Sun 10:00 — 19:00",
  ],
  ["Dates", EVENT_DATES],
] as const;

export function VenueSection() {
  return (
    <section
      aria-labelledby="venue-title"
      className="px-4 py-24 md:px-8 md:py-36"
    >
      <SectionHeading id="venue-title" kicker="07 / Venue" className="mb-12">
        The Explode
        <br />
        Factory
      </SectionHeading>
      <div className="grid grid-cols-12 gap-x-4 gap-y-10">
        <dl className="col-span-12 space-y-6 md:col-span-4">
          {INFO.map(([k, v]) => (
            <div key={k} className="border-t border-bone/25 pt-3">
              <dt className="meta text-ember">{k}</dt>
              <dd className="mt-1 text-lg">{v}</dd>
            </div>
          ))}
        </dl>
        <figure className="col-span-12 md:col-span-7 md:col-start-6">
          <svg
            viewBox="0 0 600 400"
            role="img"
            aria-label="Abstract map of the fictional Brace district"
            className="h-auto w-full rounded-sm bg-ink-2 ring-1 ring-bone/25"
          >
            <title>Abstract map of the fictional Brace district</title>
            <g
              stroke="#f1ebdd"
              strokeOpacity="0.35"
              strokeWidth="2"
              fill="none"
            >
              <path d="M0 120 L600 90" />
              <path d="M0 280 L600 320" />
              <path d="M140 0 L190 400" />
              <path d="M420 0 L380 400" />
              <path d="M0 200 Q300 120 600 220" />
            </g>
            <rect
              x="215"
              y="150"
              width="130"
              height="90"
              fill="#ff6a1f"
              transform="rotate(-6 280 195)"
            />
            <circle cx="470" cy="110" r="22" fill="#19e3d2" />
            <circle cx="90" cy="320" r="16" fill="#e8204f" />
            <rect
              x="460"
              y="270"
              width="60"
              height="40"
              fill="#ffd84a"
              transform="rotate(8 490 290)"
            />
            <text
              x="228"
              y="204"
              fontFamily="Arial Black, Impact, sans-serif"
              fontWeight="900"
              fontSize="15"
              fill="#0b0b14"
            >
              EXPLODE FACTORY
            </text>
          </svg>
          <figcaption className="meta mt-3 text-bone/60">
            Illustrative map — this place does not exist.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
