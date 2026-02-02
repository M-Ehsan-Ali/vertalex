import { getPageByDatabaseId } from "@/data";

interface TemplateProps {
  node: { databaseId: number };
}

export default async function PageTemplate({ node }: TemplateProps) {
  const page = getPageByDatabaseId(node.databaseId);

  return <div dangerouslySetInnerHTML={{ __html: page?.content ?? "" }} />;
}
