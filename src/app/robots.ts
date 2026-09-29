import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? process.env.URL ?? "https://ema.co.za";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // Netlify's form declarations — a blank page with no content to index.
      disallow: ["/__forms.html"],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
