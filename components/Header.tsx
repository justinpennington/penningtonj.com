"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";
import { site } from "@/lib/site";

const nav = [
  { href: "/#about", label: "About" },
  { href: "/#software", label: "Software" },
  { href: "/blog", label: "Blog" },
  { href: "/#faq", label: "FAQ" },
];

export function Header({ solid = false }: { solid?: boolean }) {
  const [scrolled, setScrolled] = useState(solid);

  useEffect(() => {
    if (solid) return;
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [solid]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/90 shadow-lg shadow-ink/10 backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:h-20 sm:px-8">
        <Link href="/" className="group flex items-center gap-3 text-white">
          <Monogram className="h-9 w-9 ring-1 ring-white/15 rounded-full transition-transform duration-300 group-hover:-rotate-3" />
          <span className="font-display text-lg tracking-tight">
            Justin Pennington
          </span>
        </Link>
        <nav className="flex items-center gap-1 sm:gap-2">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="hidden rounded-full px-3 py-2 text-sm text-white/80 transition hover:text-white sm:inline-block"
            >
              {n.label}
            </Link>
          ))}
          <a
            href={site.bookingUrl}
            className="ml-2 rounded-full bg-ember px-4 py-2 text-sm font-medium text-white transition hover:-translate-y-0.5 hover:bg-[#d9581a]"
          >
            Book a Call
          </a>
        </nav>
      </div>
    </header>
  );
}
