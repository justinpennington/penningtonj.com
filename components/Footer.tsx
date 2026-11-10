import Link from "next/link";
import { Monogram } from "./Monogram";
import { site } from "@/lib/site";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink-deep text-white/70">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-14 sm:px-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-sm">
          <Link href="/" className="flex items-center gap-3 text-white">
            <Monogram className="h-10 w-10 rounded-full ring-1 ring-white/15" />
            <span className="font-display text-xl">Justin Pennington</span>
          </Link>
          <p className="mt-4 text-sm leading-relaxed">
            Founder of Infraxio, Growth7, and DockOps. Based in Ponte Vedra,
            Florida.
          </p>
        </div>
        <div className="flex flex-wrap gap-x-12 gap-y-6 text-sm">
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Connect
            </span>
            <a href={site.infraxioUrl} className="hover:text-white">
              Infraxio
            </a>
            <a href={site.growth7Url} className="hover:text-white">
              Growth7
            </a>
            <a href={site.dockopsUrl} className="hover:text-white">
              DockOps
            </a>
            <a href={site.ifxHubUrl} className="hover:text-white">
              IFX Hub
            </a>
            <a href={site.ifxBidUrl} className="hover:text-white">
              IFX Bid
            </a>
            <a href={site.linkedinUrl} className="hover:text-white" rel="me">
              LinkedIn
            </a>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Content
            </span>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link href="/elsewhere" className="hover:text-white">
              Elsewhere
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="text-xs font-semibold uppercase tracking-widest text-white/40">
              Legal
            </span>
            <Link href="/privacy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-white">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl space-y-2 px-5 py-6 sm:px-8">
          <p className="text-xs text-white/40">
            © {year} Justin Pennington. All rights reserved.
          </p>
          <p className="text-xs text-white/40">
            Powered by{" "}
            <a
              href="https://infraxio.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm no-underline underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Infraxio
            </a>{" "}
            and{" "}
            <a
              href="https://growth7.io"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-sm no-underline underline-offset-2 transition-colors hover:text-white hover:underline focus-visible:text-white focus-visible:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Growth7
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
