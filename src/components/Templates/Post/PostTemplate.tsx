import { getPostByDatabaseId } from "@/data";
import styles from "./PostTemplate.module.css";

interface TemplateProps {
  node: { databaseId: number };
}

export default async function PostTemplate({ node }: TemplateProps) {
  const post = getPostByDatabaseId(node.databaseId);

  if (!post) return null;

  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{post.title}</h1>
      <div className={styles.author}>By {post.author?.node.name ?? "—"}</div>

      <div dangerouslySetInnerHTML={{ __html: post.content ?? "" }} />
    </div>
  );
}
