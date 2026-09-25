import type { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function LegalPage({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: ReactNode;
}) {
  return (
    <>
      <Header solid />
      <main className="flex-1 bg-sand pb-24 pt-32 sm:pt-40">
        <article className="mx-auto max-w-3xl px-5 sm:px-8">
          <h1 className="font-display text-4xl tracking-tight sm:text-5xl">
            {title}
          </h1>
          <p className="mt-3 text-sm text-ink/60">Last updated {updated}</p>
          <div className="mt-10 space-y-6 leading-relaxed text-ink/80 [&_h2]:mt-10 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-ink [&_a]:text-ember [&_a]:underline">
            {children}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
