import { MetadataRoute } from "next";

export const revalidate = 0;

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";

/** Static robots – no backend. All data is in src/data. */
export default async function robots(): Promise<MetadataRoute.Robots> {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "" },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
