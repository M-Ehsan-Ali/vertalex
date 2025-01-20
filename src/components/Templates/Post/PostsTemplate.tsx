import { print } from "graphql/language/printer";

// import { Post } from "@/gql/graphql";
import { fetchGraphQL } from "@/utils/fetchGraphQL";

import { PostQuery } from "./PostQuery";

interface TemplateProps {}

export default async function PostsTemplate({}: TemplateProps) {
  const properties = await fetchGraphQL<{ post: any }>(print(PostQuery));
  return (
    <div></div>
    // <div className={styles.post}>
    //   <h1 className={styles.title}>{post.title}</h1>
    //   <div className={styles.author}>By {post.author?.node.name}</div>

    //   <div dangerouslySetInnerHTML={{ __html: post.content || "" }} />
    // </div>
  );
}
