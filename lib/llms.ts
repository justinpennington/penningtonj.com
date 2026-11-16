import { getAllPosts } from "@/lib/blog";
import { companies, infraxioProducts, site } from "@/lib/site";

const BANNED = ["2017", "3 kings", "wholesale house", "court docket", "legal case"];

function oneLine(text: string): string {
  return text.replace(/\s+/g, " ").trim();
}

/** First sentence of a post excerpt, keeping decimals like "$16.32" intact. */
function firstSentence(text: string): string {
  const flat = oneLine(text);
  const parts = flat.split(/(?<=[.!?])\s+(?=[A-Z“"])/);
  return parts[0] || flat;
}

function mdLink(label: string, url: string, description: string): string {
  const safe = label.replace(/\\/g, "\\\\").replace(/\[/g, "\\[").replace(/\]/g, "\\]");
  return `- [${safe}](${url}): ${oneLine(description)}`;
}

function companyByUrl(url: string) {
  return [...companies, ...infraxioProducts].find((item) => item.url === url);
}

export function buildLlmsTxt(): string {
  const recent = getAllPosts()
    .slice()
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0;
    })
    .slice(0, 10);

  const productOrder = [
    site.infraxioUrl,
    site.growth7Url,
    site.ifxBidUrl,
    site.dockopsUrl,
    site.ifxHubUrl,
  ];

  const lines = [
    "# Justin Pennington",
    "",
    "> Justin Pennington is the founder of Infraxio, a technology consulting and software company based in Ponte Vedra, Florida, and of Growth7 and DockOps. Infraxio also builds and runs IFX Hub and IFX Bid. Justin Pennington, founder of Infraxio, Ponte Vedra.",
    "",
    "## About",
    "",
    mdLink("Home", site.url, site.description),
    mdLink(
      "Elsewhere",
      `${site.url}/elsewhere`,
      "Writing, press, and profiles for Justin Pennington, founder of Infraxio, Ponte Vedra — off penningtonj.com.",
    ),
    mdLink(
      "Infraxio founder page",
      site.infraxioFounderUrl,
      "Founder profile on the Infraxio site.",
    ),
    mdLink("LinkedIn", "https://www.linkedin.com/in/justin-pennington", "Official profile."),
    mdLink(
      "Crunchbase",
      "https://www.crunchbase.com/person/justin-pennington-4bcd",
      "Official profile.",
    ),
    mdLink("X", "https://x.com/penningtonj", "Official profile."),
    "",
    "## Companies and products",
    "",
    ...productOrder.map((url) => {
      const item = companyByUrl(url);
      if (!item) throw new Error(`Missing company copy for ${url}`);
      return mdLink(item.name, item.url, item.blurb);
    }),
    "",
    "## Writing",
    "",
    mdLink(
      "Blog",
      `${site.url}/blog`,
      "Thoughts on ERP, CRM, operations technology, AI consulting, and building businesses — by Justin Pennington, founder of Infraxio.",
    ),
    ...recent.map((post) =>
      mdLink(
        post.title,
        `${site.url}/blog/${post.slug}`,
        post.excerpt ? firstSentence(post.excerpt) : post.title,
      ),
    ),
    "",
    "## Media",
    "",
    "Media contact: Vick Fleurimond, team@infraxio.com",
    "",
  ];

  const body = lines.join("\n");
  const hits = BANNED.filter((term) => body.toLowerCase().includes(term));
  if (hits.length > 0) {
    throw new Error(`llms.txt contains banned strings: ${hits.join(", ")}`);
  }
  return body;
}
