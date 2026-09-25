import type { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getAllPosts } from "@/lib/blog";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Thoughts on ERP, CRM, operations technology, AI consulting, and building businesses — by Justin Pennington, founder of Infraxio.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog | Justin Pennington",
    description:
      "Thoughts on ERP, CRM, operations technology, AI consulting, and building businesses.",
    url: `${site.url}/blog`,
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

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header solid />
      <main className="flex-1 bg-white pt-28 pb-20 sm:pt-36 sm:pb-28">
        <div className="mx-auto max-w-3xl px-5 sm:px-8">
          <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-ember">
            <span className="h-px w-8 bg-current" />
            Blog
          </p>
          <h1 className="font-display text-4xl leading-tight tracking-tight sm:text-5xl">
            From the Operator&rsquo;s Desk
          </h1>
          <p className="mt-4 text-lg text-ink/70">
            On ERP, CRM, operations technology, AI, growth marketing, and
            building companies from Ponte Vedra, Florida.
          </p>

          <div className="mt-14 divide-y divide-ink/10 border-t border-ink/10">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group block py-8 transition hover:bg-sand/40 -mx-5 px-5 sm:-mx-8 sm:px-8 rounded-xl"
              >
                <time className="text-sm text-ink/50">
                  {formatDate(post.date)}
                </time>
                <h2 className="mt-2 font-display text-xl leading-snug tracking-tight transition group-hover:text-ember sm:text-2xl">
                  {post.title}
                </h2>
                {post.excerpt && (
                  <p className="mt-2 text-ink/65 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
