import type { Metadata } from "next";
import { Poster } from "@/components/design-explode/art";
import { Reveal } from "@/components/design-explode/reveal";
import { gallery } from "@/lib/data";

export const metadata: Metadata = { title: "Gallery — DESIGN EXPLODE" };

export default function GalleryPage() {
  return (
    <section className="px-4 pt-40 pb-28 md:px-8">
      <h1 className="display h-hero mb-16">Gallery</h1>
      <ul className="grid grid-cols-1 gap-x-4 gap-y-10 md:grid-cols-12">
        {gallery.map((g) => (
          <li key={g.caption} className={g.span}>
            <Reveal>
              <figure className="group">
                <div className={`${g.ratio} overflow-hidden rounded-sm`}>
                  <Poster
                    seed={g.seed}
                    tone={g.tone}
                    label={g.caption.slice(0, 2)}
                    className="transition-transform duration-700 group-hover:scale-[1.04]"
                  />
                </div>
                <figcaption className="meta mt-2 flex justify-between text-bone/60">
                  <span>{g.caption}</span>
                  <span>{g.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          </li>
        ))}
      </ul>
    </section>
  );
}
