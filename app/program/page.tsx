import type { Metadata } from "next";
import { Program } from "@/components/design-explode/program";

export const metadata: Metadata = { title: "Program — DESIGN EXPLODE" };

export default function ProgramPage() {
  return (
    <section className="px-4 pt-40 pb-28 md:px-8">
      <h1 className="display h-hero mb-14">Program</h1>
      <Program />
    </section>
  );
}
