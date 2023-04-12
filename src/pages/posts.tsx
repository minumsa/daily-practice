import React, { FC } from "react";
import Layout from "../components/Layout";
import "./posts.css";
import PostInfo from "../components/Nav/PostInfo";
import Nav from "../components/Nav";
import HomePage from "../components/HomePage";
import { PageProps, graphql } from "gatsby";

const Posts = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  return (
    <Layout>
      <HomePage content={""} title={""} />
      <Nav page={""} info={<PostInfo date={""} />} />
    </Layout>
  );
};

export default Posts;

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
            page
            slug
          }
          excerpt
        }
      }
    }
  }
`;
