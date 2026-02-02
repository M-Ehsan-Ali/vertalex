import { notFound } from "next/navigation";

import PageTemplate from "@/components/Templates/Page/PageTemplate";
import PostTemplate from "@/components/Templates/Post/PostTemplate";
import { getContentNodeBySlug } from "@/data";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import { setSeoData } from "@/utils/seoData";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string | string[] }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = nextSlugToWpSlug(Array.isArray(params.slug) ? params.slug.join("/") : params.slug);
  const isPreview = slug.includes("preview");
  const slugParam = isPreview ? slug.split("preview/")[1] : slug;
  const idType = isPreview ? "DATABASE_ID" : "URI";

  const contentNode = getContentNodeBySlug(slugParam, idType as "URI" | "DATABASE_ID");

  if (!contentNode) {
    return notFound();
  }

  const metadata = setSeoData({ seo: contentNode.seo });

  return {
    ...metadata,
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_BASE_URL}${slug}`,
    },
  } as Metadata;
}

export function generateStaticParams() {
  return [];
}

export default async function Page(props: Props) {
  const params = await props.params;
  const slug = nextSlugToWpSlug(Array.isArray(params.slug) ? params.slug.join("/") : params.slug);
  const isPreview = slug.includes("preview");
  const slugParam = isPreview ? slug.split("preview/")[1] : slug;
  const idType = isPreview ? "DATABASE_ID" : "URI";

  const contentNode = getContentNodeBySlug(slugParam, idType as "URI" | "DATABASE_ID");

  if (!contentNode) return notFound();

  switch (contentNode.contentTypeName) {
    case "page":
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}
