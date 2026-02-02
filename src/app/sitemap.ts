import { getSitemapEntries } from "@/data";
import { MetadataRoute } from "next";

export const revalidate = 0;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const entries = getSitemapEntries();
  return entries.map((e) => ({
    url: e.url,
    lastModified: e.lastModified,
  }));
}
