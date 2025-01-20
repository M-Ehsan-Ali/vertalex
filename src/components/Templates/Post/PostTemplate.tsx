import { print } from "graphql/language/printer";

// import { ContentNode, Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

import { PostQuery } from "./PostQuery";
import styles from "./PostTemplate.module.css";

interface TemplateProps {
  node: any;
}

export default async function PostTemplate({ node }: TemplateProps) {
  const { post } = await fetchGraphQL<{ post: any }>(print(PostQuery), {
    id: node.databaseId,
  });

  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.author}>By {post.author?.node.name}</div>

      <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
    </div>
  );
}
