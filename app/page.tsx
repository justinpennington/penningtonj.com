import Image from "next/image";
import { ArrowUpRight, MapPin, Plus } from "lucide-react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ParallaxImage } from "@/components/ParallaxImage";
import { companies, faqs, infraxioProducts, sameAs, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfilePage",
      "@id": `${site.url}/#profile`,
      url: site.url,
      name: site.title,
      description: site.description,
      mainEntity: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Person",
      "@id": `${site.url}/#person`,
      name: site.name,
      givenName: "Justin",
      familyName: "Pennington",
      url: site.url,
      image: `${site.url}${site.headshot}`,
      jobTitle: "Founder",
      description:
        "Justin Pennington is the founder of Infraxio, Growth7, and DockOps. Infraxio is a technology consulting and software company based in Ponte Vedra, Florida.",
      worksFor: [
        { "@id": "https://www.infraxio.com/#organization" },
        { "@id": `${site.growth7Url}/#organization` },
        { "@id": `${site.dockopsUrl}/#organization` },
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ponte Vedra",
        addressRegion: "FL",
        addressCountry: "US",
      },
      knowsAbout: [
        "ERP implementation",
        "CRM",
        "Operational systems",
        "Software architecture",
        "Growth marketing",
        "AI consulting",
      ],
      sameAs,
    },
    {
      "@type": "Organization",
      "@id": "https://www.infraxio.com/#organization",
      name: "Infraxio",
      url: site.infraxioUrl,
      founder: { "@id": `${site.url}/#person` },
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ponte Vedra",
        addressRegion: "FL",
        addressCountry: "US",
      },
      owns: infraxioProducts.map((p) => ({
        "@type": "SoftwareApplication",
        name: p.name,
        url: p.url,
        applicationCategory: "BusinessApplication",
      })),
    },
    {
      "@type": "Organization",
      "@id": `${site.growth7Url}/#organization`,
      name: "Growth7",
      url: site.growth7Url,
      founder: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "Organization",
      "@id": `${site.dockopsUrl}/#organization`,
      name: "DockOps",
      url: site.dockopsUrl,
      founder: { "@id": `${site.url}/#person` },
    },
    {
      "@type": "FAQPage",
      "@id": `${site.url}/#faq`,
      mainEntity: faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ],
};

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


export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        {/* Hero */}
        <section className="relative isolate flex min-h-[92svh] items-center overflow-hidden bg-ink text-white">
          <ParallaxImage src="/images/hero-atlantic.jpg" />
          <div className="absolute inset-0 bg-gradient-to-br from-ink/95 via-ink/85 to-ink/60" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink/70 to-transparent" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-5 pb-20 pt-32 sm:px-8 md:grid-cols-[1.35fr_1fr] md:pt-40">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm text-white/80 backdrop-blur">
                <MapPin className="h-3.5 w-3.5 text-ember-soft" />
                {site.lede}
              </p>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
                Justin Pennington
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">
                Justin Pennington is the founder of Infraxio, a technology
                consulting and software company based in Ponte Vedra, Florida,
                and of Growth7 and DockOps.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href={site.infraxioUrl}
                  className="group inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 font-medium text-white shadow-lg shadow-ember/25 transition hover:-translate-y-0.5 hover:bg-[#d9581a] hover:shadow-xl hover:shadow-ember/30"
                >
                  Visit Infraxio
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </Reveal>
            <Reveal delay={0.15} className="mx-auto w-full max-w-[340px]">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-ember/50 to-transparent blur-2xl" />
                <div className="relative aspect-square overflow-hidden rounded-full ring-1 ring-white/20 ring-offset-8 ring-offset-transparent">
                  <Image
                    src={site.headshot}
                    alt="Justin Pennington, founder of Infraxio, Growth7, and DockOps"
                    fill
                    preload
                    sizes="(min-width: 768px) 340px, 80vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 md:grid-cols-[1fr_1.6fr]">
            <Reveal>
              <Eyebrow>About</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                An Operator Who Builds
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="space-y-6 text-lg leading-relaxed text-ink/80">
                <p className="text-xl text-ink sm:text-2xl sm:leading-snug">
                  Justin founded Infraxio on a simple conviction: the
                  businesses that win are the ones whose people use technology
                  as part of their craft, not as a burden handed down by IT.
                </p>
                <p>
                  He has spent his career on the operator side of that line —
                  running companies, implementing the systems they run on, and
                  living in the results.
                </p>
                <p>
                  Day to day he leads architecture and client strategy for the
                  Infraxio team, stays hands-on in the code alongside them, and
                  holds every engagement to the same standard: the system has
                  to run the business, the client’s team has to adopt it, and
                  the numbers have to move.
                </p>
              </div>
            </Reveal>
          </div>
        </section>

        {/* Companies & Software */}
        <section id="software" className="bg-sand py-24 sm:py-32">
          <div className="mx-auto max-w-6xl px-5 sm:px-8">
            <Reveal className="max-w-3xl">
              <Eyebrow>Companies &amp; Software</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Built to Solve Real Problems
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-ink/75">
                Justin is the founder of Infraxio, Growth7, and DockOps, and
                Infraxio builds and runs its own software, including IFX Hub
                and IFX Bid. Each one started as an answer to a problem Justin
                was solving for a real client or for Infraxio itself, and every
                one of them is in production today. When he tells a client what
                a system should do, it is because he has already made it do
                that somewhere else.
              </p>
            </Reveal>

            <Reveal className="mt-16">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                Companies Founded
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {companies.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.08}>
                  <a
                    href={c.url}
                    className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-ember/40 hover:shadow-xl hover:shadow-ink/5"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-display text-2xl">{c.name}</span>
                      <ArrowUpRight className="h-5 w-5 text-ink/30 transition group-hover:text-ember" />
                    </div>
                    <p className="flex-1 leading-relaxed text-ink/70">{c.blurb}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-ember">
                      Founder
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-16">
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-ink/50">
                Infraxio Products
              </h3>
            </Reveal>
            <div className="mt-6 grid gap-5 sm:grid-cols-2">
              {infraxioProducts.map((p, i) => (
                <Reveal key={p.name} delay={i * 0.08}>
                  <a
                    href={p.url}
                    className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-white/60 p-7 transition duration-300 hover:-translate-y-1 hover:border-ember/40 hover:bg-white hover:shadow-xl hover:shadow-ink/5"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="font-display text-2xl">{p.name}</span>
                      <ArrowUpRight className="h-5 w-5 text-ink/30 transition group-hover:text-ember" />
                    </div>
                    <p className="flex-1 leading-relaxed text-ink/70">{p.blurb}</p>
                    <p className="mt-6 text-xs font-semibold uppercase tracking-widest text-ember">
                      By Infraxio
                    </p>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Base */}
        <section className="relative overflow-hidden bg-ink py-24 text-white sm:py-32">
          <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-ember/10 blur-3xl" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 md:grid-cols-2">
            <Reveal>
              <Eyebrow light>Where</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Ponte Vedra, Florida
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="text-lg leading-relaxed text-white/80">
                Infraxio is 100% U.S.-based. The company has an office in Ponte
                Vedra used for meetings; the work itself is remote-first.
              </p>
              <dl className="mt-10 grid grid-cols-2 gap-6 border-t border-white/10 pt-8">
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/50">
                    Team
                  </dt>
                  <dd className="mt-2 font-display text-2xl">100% U.S.-Based</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-widest text-white/50">
                    Work Style
                  </dt>
                  <dd className="mt-2 font-display text-2xl">Remote-First</dd>
                </div>
              </dl>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-3xl px-5 sm:px-8">
            <Reveal>
              <Eyebrow>FAQ</Eyebrow>
              <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
                Common Questions
              </h2>
            </Reveal>
            <div className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
              {faqs.map((f, i) => (
                <Reveal key={f.q} delay={i * 0.06}>
                  <details className="group py-6" open={i === 0}>
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium [&::-webkit-details-marker]:hidden">
                      <h3>{f.q}</h3>
                      <Plus className="h-5 w-5 shrink-0 text-ember transition-transform duration-300 group-open:rotate-45" />
                    </summary>
                    <p className="mt-4 leading-relaxed text-ink/75">{f.a}</p>
                  </details>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative isolate overflow-hidden bg-ink py-24 text-white sm:py-28">
          <Image
            src="/images/hero-atlantic.jpg"
            alt=""
            fill
            sizes="100vw"
            className="-z-10 object-cover object-bottom"
          />
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/95 via-ink/85 to-ember/60" />
          <Reveal className="mx-auto max-w-4xl px-5 text-center sm:px-8">
            <h2 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
              Let’s Talk About Your Systems
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/80">
              Learn how Infraxio can help your business run on better systems.
            </p>
            <a
              href={site.infraxioUrl}
              className="group mt-10 inline-flex items-center gap-2 rounded-full bg-ember px-7 py-3.5 font-medium text-white shadow-lg shadow-ember/25 transition hover:-translate-y-0.5 hover:bg-[#d9581a] hover:shadow-xl hover:shadow-ember/30"
            >
              Visit Infraxio
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </section>
      </main>
      <Footer />
    </>
  );
}
