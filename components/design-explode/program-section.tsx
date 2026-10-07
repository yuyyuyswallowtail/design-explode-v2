import { Program } from "./program";
import { SectionHeading } from "./section-heading";

export function ProgramPreview() {
  return (
    <section
      aria-labelledby="program-title"
      className="px-4 py-24 md:px-8 md:py-36"
    >
      <SectionHeading
        id="program-title"
        kicker="03 / Program"
        className="mb-12"
      >
        Program
      </SectionHeading>
      <Program limit={4} filters={false} />
    </section>
  );
}
