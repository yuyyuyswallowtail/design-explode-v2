import type { ReactNode } from "react";

/** CSS-only marquee. Content is duplicated so a -50% translate loops seamlessly. */
export function Marquee({
  children,
  direction = "left",
  seconds = 40,
  className = "",
}: {
  children: ReactNode;
  direction?: "left" | "right";
  seconds?: number;
  className?: string;
}) {
  const animation = direction === "left" ? "marquee-left" : "marquee-right";
  return (
    <div className={`marquee overflow-hidden ${className}`}>
      <div
        className="marquee-track"
        style={{ animation: `${animation} ${seconds}s linear infinite` }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}

export function WordMarquee({
  direction = "left",
  seconds = 30,
}: {
  direction?: "left" | "right";
  seconds?: number;
}) {
  return (
    <Marquee
      direction={direction}
      seconds={seconds}
      className="border-y border-bone/20 py-4"
    >
      {["a", "b", "c", "d"].map((id) => (
        <span
          key={id}
          className="display whitespace-nowrap px-6 text-[clamp(2.5rem,9vw,7rem)]"
        >
          DESIGN EXPLODE <span className="text-ember">—</span>
        </span>
      ))}
    </Marquee>
  );
}
