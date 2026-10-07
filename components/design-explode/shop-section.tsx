import Link from "next/link";
import { shopItems, TONE_HEX } from "@/lib/data";
import { Poster } from "./art";
import { SectionHeading } from "./section-heading";

export function ShopSection({ standalone = false }: { standalone?: boolean }) {
  return (
    <section
      aria-labelledby="shop-title"
      className="px-4 py-24 md:px-8 md:py-36"
    >
      <SectionHeading id="shop-title" kicker="08 / Shop" className="mb-12">
        The Shop
      </SectionHeading>
      <ul className="-mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-4 md:mx-0 md:grid md:grid-cols-5 md:overflow-visible md:px-0">
        {shopItems.map((item, i) => (
          <li
            key={item.name}
            className="w-[68vw] shrink-0 snap-start md:w-auto"
            style={{ marginTop: i % 2 ? "2rem" : 0 }}
          >
            <div
              className="group rounded-2xl p-3 transition-transform duration-300 hover:-translate-y-2 hover:rotate-1"
              style={{ background: TONE_HEX[item.tone] }}
            >
              <div className="aspect-[3/4] overflow-hidden rounded-xl">
                <Poster
                  seed={item.seed}
                  tone={item.tone}
                  label={item.name.split(" ")[0]}
                />
              </div>
              <div className="mt-3 flex items-center justify-between text-ink">
                <span className="display text-sm">{item.name}</span>
                <span className="display text-sm">{item.price}</span>
              </div>
              <button
                type="button"
                className="display mt-3 w-full rounded-md bg-ink px-3 py-2 text-xs text-bone transition-transform group-hover:scale-[1.03]"
              >
                View object
              </button>
            </div>
          </li>
        ))}
      </ul>
      <p className="meta mt-6 text-bone/50">
        Dummy store. Nothing here can be bought.
      </p>
      {standalone ? null : (
        <Link
          href="/shop"
          className="display mt-6 inline-block rounded-full border-2 border-bone px-6 py-3 transition-all hover:bg-bone hover:text-ink"
        >
          Whole shop →
        </Link>
      )}
    </section>
  );
}
