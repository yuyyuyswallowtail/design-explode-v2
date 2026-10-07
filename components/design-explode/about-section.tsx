import Link from "next/link";
import { Reveal } from "./reveal";

export function AboutSection() {
  return (
    <section
      aria-labelledby="about-title"
      className="bg-butter px-4 py-28 text-ink md:px-8 md:py-44"
    >
      <p className="meta mb-8">06 / About Design Explode</p>
      <Reveal>
        <h2 id="about-title" className="display h-section">
          We make things that are too loud to ignore.
        </h2>
      </Reveal>
      <div className="mt-14 grid grid-cols-12 gap-4">
        <p className="col-span-12 text-base leading-relaxed md:col-span-4 md:col-start-8 md:text-lg">
          Design Explode is a pretend festival with real intentions: to show
          that graphic design, motion and code can share one stage. Everything
          here is invented, from the lineup to the venue, so we could say
          exactly what we wanted.
        </p>
        <Link
          href="/about"
          className="display col-span-12 mt-6 inline-block w-fit rounded-full bg-ink px-8 py-4 text-bone transition-transform hover:scale-105 md:col-span-4 md:col-start-8"
        >
          Read more →
        </Link>
      </div>
    </section>
  );
}
