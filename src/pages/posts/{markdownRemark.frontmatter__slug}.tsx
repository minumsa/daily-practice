import * as React from "react";
import { graphql } from "gatsby";
import PostPage from "../../components/views/PostPage/PostPage";
import Layout from "../../components/Layout";
import HomePage from "../../components/HomePage";
import Nav from "../../components/Nav";
import PostInfo from "../../components/Nav/PostInfo";

export default function BlogPostTemplate({ data }: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  return (
    <Layout>
      <HomePage content={<div className="content-text" dangerouslySetInnerHTML={{ __html: html }} />} title={frontmatter.title} />
      <Nav page={""} info={<PostInfo date={frontmatter.date} />} />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY년 MM월 DD일")
        slug
        title
      }
    }
  }
`;
