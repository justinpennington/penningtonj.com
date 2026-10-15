import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { site } from "@/lib/site";
import {
  writingElsewhere,
  press,
  profiles,
  type ElsewhereLink,
} from "@/content/elsewhere-links";

export const metadata: Metadata = {
  title: "Elsewhere",
  description:
    "Writing, press, and profiles for Justin Pennington, founder of Infraxio, Ponte Vedra — off penningtonj.com.",
  alternates: { canonical: "/elsewhere" },
  openGraph: {
    title: "Elsewhere — Justin Pennington",
    description:
      "Writing, press, and profiles for Justin Pennington, founder of Infraxio, Ponte Vedra — off penningtonj.com.",
    url: `${site.url}/elsewhere`,
  },
};

function formatDate(dateStr: string) {
  const d = new Date(dateStr + "T12:00:00");
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

function Eyebrow({ children, light = false }: { children: string; light?: boolean }) {
  return (
    <p
      className={`mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] ${
        light ? "text-ember-soft" : "text-ember"
      }`}
    >
      <span className="h-px w-8 bg-current" />
      {children}
    </p>
  );
}

function LinkCard({ link, i }: { link: ElsewhereLink; i: number }) {
  return (
    <Reveal delay={i * 0.05}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-start justify-between gap-4 rounded-xl border border-ink/10 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-lg hover:shadow-ink/5"
      >
        <div className="min-w-0">
          <h3 className="font-display text-lg leading-snug tracking-tight transition group-hover:text-ember">
            {link.title}
          </h3>
          <p className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-ink/50">
            <span>{link.outlet}</span>
            {link.date && (
              <>
                <span className="text-ink/20">·</span>
                <span>{formatDate(link.date)}</span>
              </>
            )}
          </p>
          {link.note && (
            <p className="mt-2 text-sm leading-relaxed text-ink/60">
              {link.note}
            </p>
          )}
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-ink/25 transition group-hover:text-ember" />
      </a>
    </Reveal>
  );
}

function ProfilePill({ link, i }: { link: ElsewhereLink; i: number }) {
  return (
    <Reveal delay={i * 0.04}>
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer me"
        className="group inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-5 py-3 text-sm font-medium transition duration-300 hover:-translate-y-0.5 hover:border-ember/40 hover:shadow-md hover:shadow-ink/5"
      >
        <span className="transition group-hover:text-ember">{link.title}</span>
        <ArrowUpRight className="h-3.5 w-3.5 text-ink/30 transition group-hover:text-ember" />
      </a>
    </Reveal>
  );
}

export default function ElsewherePage() {
  return (
    <>
      <Header solid />
      <main className="flex-1">
        {/* Hero */}
        <section className="bg-ink pb-16 pt-28 text-white sm:pb-20 sm:pt-36">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow light>Elsewhere</Eyebrow>
              <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Off This Site
              </h1>
              <p className="mt-4 max-w-2xl text-lg text-white/75">
                Writing, press coverage, and profiles for Justin Pennington,
                founder of Infraxio, Ponte Vedra — published elsewhere on the
                web.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Writing Elsewhere */}
        <section className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow>Writing Elsewhere</Eyebrow>
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Articles &amp; Posts
              </h2>
              <p className="mt-3 text-ink/65">
                Pieces published on Medium, Substack, Dev.to, Hashnode, and
                other platforms.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4">
              {writingElsewhere.map((link, i) => (
                <LinkCard key={link.url} link={link} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Press */}
        <section className="bg-white py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow>Press</Eyebrow>
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Coverage &amp; Mentions
              </h2>
              <p className="mt-3 text-ink/65">
                Press features and media coverage.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4">
              {press.map((link, i) => (
                <LinkCard key={link.url} link={link} i={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Profiles */}
        <section className="bg-sand py-20 sm:py-28">
          <div className="mx-auto max-w-4xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow>Profiles</Eyebrow>
              <h2 className="font-display text-3xl leading-tight tracking-tight sm:text-4xl">
                Around the Web
              </h2>
              <p className="mt-3 text-ink/65">
                Official profiles and company pages.
              </p>
            </Reveal>
            <div className="mt-10 flex flex-wrap gap-3">
              {profiles.map((link, i) => (
                <ProfilePill key={link.url} link={link} i={i} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
