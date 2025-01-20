import { print } from "graphql/language/printer";
// import { ContentNode, Page } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";
import { PageQuery } from "./PageQuery";

interface TemplateProps {
  node: any;
}

export default async function PageTemplate({ node }: TemplateProps) {
  const { page } = await fetchGraphQL<{ page: any }>(print(PageQuery), {
    id: node.databaseId,
  });

  return <div dangerouslySetInnerHTML={{ __html: page?.content || "" }} />;
}
