import type { Metadata } from "next";

import { getContentNodeBySlug, getPageByDatabaseId } from "@/data";
import { setSeoData } from "@/utils/seoData";

const notFoundPageId = 27;

export async function generateMetadata(): Promise<Metadata> {
  const contentNode = getContentNodeBySlug(String(notFoundPageId), "DATABASE_ID");

  if (!contentNode?.seo) {
    return { title: "404 Not Found" };
  }

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/404-not-found/`,
    },
  } as Metadata;
}

export default async function NotFound() {
  const page = getPageByDatabaseId(notFoundPageId);

  return (
    <div dangerouslySetInnerHTML={{ __html: page?.content ?? "<h1>Not found</h1>" }} />
  );
}
