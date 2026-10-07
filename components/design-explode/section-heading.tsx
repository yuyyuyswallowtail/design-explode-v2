import type { ReactNode } from "react";

export function SectionHeading({
  kicker,
  children,
  id,
  className = "",
}: {
  kicker?: string;
  children: ReactNode;
  id?: string;
  className?: string;
}) {
  return (
    <header className={className}>
      {kicker ? <p className="meta mb-4 text-ember">{kicker}</p> : null}
      <h2 id={id} className="display h-section">
        {children}
      </h2>
    </header>
  );
}
