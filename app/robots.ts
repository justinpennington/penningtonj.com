import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      other: {
        "# llms.txt": `${site.url}/llms.txt`,
      },
    },
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
