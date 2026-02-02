import { postsData } from "@/data";

interface TemplateProps {}

export default async function PostsTemplate(_props: TemplateProps) {
  // Use postsData for a list view if needed
  return <div>{postsData.length > 0 ? null : null}</div>;
}
