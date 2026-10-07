"use client";

import { type FormEvent, useId, useState } from "react";

export function Newsletter() {
  const id = useId();
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      aria-labelledby="news-title"
      className="bg-bone px-4 py-28 text-ink md:px-8 md:py-44"
    >
      <h2 id="news-title" className="display h-section">
        Don&apos;t miss the next{" "}
        <span className="text-crimson">explosion.</span>
      </h2>
      <form
        onSubmit={onSubmit}
        className="mt-14 flex max-w-2xl flex-col gap-3 md:flex-row"
      >
        <label htmlFor={id} className="sr-only">
          Email address
        </label>
        <input
          id={id}
          type="email"
          required
          placeholder="your@email.com"
          className="min-h-14 flex-1 rounded-full border-2 border-ink bg-transparent px-6 text-lg placeholder:text-ink/50"
        />
        <button
          type="submit"
          className="display min-h-14 rounded-full bg-ink px-8 text-bone transition-transform hover:scale-105 hover:bg-crimson"
        >
          Subscribe →
        </button>
      </form>
      <p role="status" className="mt-4 text-sm font-bold text-crimson">
        {sent ? "Thanks! (Demo form: nothing was stored.)" : ""}
      </p>
      <p className="meta mt-6 max-w-md text-ink/60">
        Fictional project. We do not collect or send anything. No real
        newsletter exists.
      </p>
    </section>
  );
}
