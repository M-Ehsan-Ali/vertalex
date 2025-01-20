import gql from "graphql-tag";

export const PostQuery = gql`
  query PostQuery {
    posts {
      nodes {
        id
        content
        title
      }
    }
  }
`;
