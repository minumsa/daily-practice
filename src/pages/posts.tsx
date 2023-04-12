import React, { FC } from "react";
import PostPage from "../components/views/PostPage/PostPage";
import Layout from "../components/Layout";
import "./posts.css";
import PostInfo from "../components/Nav/PostInfo";
import Nav from "../components/Nav";
import HomePage from "../components/HomePage";
import { PageProps, graphql, Link } from "gatsby";

const Post = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  return (
    <Layout>
      <HomePage content={""} title={""} />
      <Nav page={""} info={<PostInfo date={""} />} />
    </Layout>
  );
};

export default Post;

export const query = graphql`
  query AllPages {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            slug
          }
          excerpt
        }
      }
    }
  }
`;
