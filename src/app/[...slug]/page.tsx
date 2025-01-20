import { print } from "graphql/language/printer";
import { notFound } from "next/navigation";

import PageTemplate from "@/components/Templates/Page/PageTemplate";
import PostTemplate from "@/components/Templates/Post/PostTemplate";
// import { ContentNode } from "@/gql/graphql";
import { ContentInfoQuery } from "@/queries/general/ContentInfoQuery";
import { SeoQuery } from "@/queries/general/SeoQuery";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { nextSlugToWpSlug } from "@/utils/nextSlugToWpSlug";
import { setSeoData } from "@/utils/seoData";
import { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const slug = nextSlugToWpSlug(params.slug);
  const isPreview = slug.includes("preview");

  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(SeoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    }
  );

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
  const slug = nextSlugToWpSlug(params.slug);
  const isPreview = slug.includes("preview");
  const { contentNode } = await fetchGraphQL<{ contentNode: any }>(
    print(ContentInfoQuery),
    {
      slug: isPreview ? slug.split("preview/")[1] : slug,
      idType: isPreview ? "DATABASE_ID" : "URI",
    }
  );

  if (!contentNode) return notFound();

  switch (contentNode.contentTypeName) {
    case "page":
      return "Hello";
      return <PageTemplate node={contentNode} />;
    case "post":
      return <PostTemplate node={contentNode} />;
    default:
      return <p>{contentNode.contentTypeName} not implemented</p>;
  }
}
