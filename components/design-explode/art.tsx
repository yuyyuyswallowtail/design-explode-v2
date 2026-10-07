import { TONE_HEX, type Tone } from "@/lib/data";

/** Deterministic integer PRNG so server and client render identical shapes. */
function rng(seed: number) {
  let s = (seed * 9301 + 49297) % 233280;
  return () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  };
}

const round = (n: number) => Math.round(n * 10) / 10;

export function starPoints(
  spikes: number,
  outer: number,
  inner: number,
  cx = 50,
  cy = 50,
) {
  const pts: string[] = [];
  for (let i = 0; i < spikes * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const a = (Math.PI * i) / spikes - Math.PI / 2;
    pts.push(`${round(cx + r * Math.cos(a))},${round(cy + r * Math.sin(a))}`);
  }
  return pts.join(" ");
}

export function Star({
  spikes = 9,
  tone = "ember",
  className = "",
}: {
  spikes?: number;
  tone?: Tone;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <polygon
        points={starPoints(spikes, 49, 24)}
        fill={TONE_HEX[tone]}
        stroke="#0b0b14"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <polygon
        points={starPoints(spikes, 28, 13)}
        fill="#0b0b14"
        opacity="0.18"
      />
    </svg>
  );
}

const ORDER: Tone[] = ["ember", "aqua", "crimson", "butter", "bone"];

/** Original generative poster art, used in place of photography. */
export function Poster({
  seed,
  tone,
  label,
  className = "",
}: {
  seed: number;
  tone: Tone;
  label?: string;
  className?: string;
}) {
  const r = rng(seed);
  const base = TONE_HEX[tone];
  const alt =
    TONE_HEX[
      ORDER[
        (ORDER.indexOf(tone) + 1 + Math.floor(r() * 3)) % ORDER.length
      ] as Tone
    ];
  const dark = "#0b0b14";
  const circles = Array.from({ length: 3 }, () => ({
    cx: round(40 + r() * 220),
    cy: round(60 + r() * 280),
    rad: round(30 + r() * 70),
  }));
  const bars = Array.from({ length: 5 }, (_, i) => ({
    y: i * 14 + round(r() * 8),
    h: round(4 + r() * 6),
  }));
  const spikes = 7 + Math.floor(r() * 5);
  return (
    <svg
      viewBox="0 0 300 400"
      preserveAspectRatio="xMidYMid slice"
      className={`h-full w-full ${className}`}
      aria-hidden="true"
      focusable="false"
    >
      <rect width="300" height="400" fill={base} />
      {circles.map((c, i) => (
        <circle
          key={`${c.cx}-${c.cy}`}
          cx={c.cx}
          cy={c.cy}
          r={c.rad}
          fill={i % 2 ? alt : dark}
          opacity={i === 0 ? 1 : 0.9}
        />
      ))}
      <g transform="translate(150 210) scale(2.2)">
        <polygon
          points={starPoints(spikes, 40, 18, 0, 0)}
          fill={alt}
          stroke={dark}
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </g>
      {bars.map((b) => (
        <rect
          key={b.y}
          x="0"
          y={300 + b.y}
          width="300"
          height={b.h}
          fill={dark}
        />
      ))}
      {label ? (
        <text
          x="16"
          y="48"
          fill={dark}
          fontFamily="Arial Black, Impact, sans-serif"
          fontWeight="900"
          fontStyle="italic"
          fontSize="34"
          letterSpacing="-2"
        >
          {label}
        </text>
      ) : null}
    </svg>
  );
}
