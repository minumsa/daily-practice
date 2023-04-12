import * as React from "react";
import { graphql } from "gatsby";
import PostPage from "../../components/views/PostPage/PostPage";
import Layout from "../../components/Layout";
import HomePage from "../../components/HomePage";
import Nav from "../../components/Nav";
import PostInfo from "../../components/Nav/PostInfo";

export default function BlogPostTemplate({
  data, // this prop will be injected by the GraphQL query below.
}: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;
  // return (
  //   <Layout>
  //     <PostPage html={html}/>
  //   </Layout>
  // );
  return (
    <Layout>
      <HomePage content={<div className="content-text" dangerouslySetInnerHTML={{ __html: html }} />} title={frontmatter.title} />
      <Nav page={""} info={<PostInfo date={frontmatter.date} />} />
    </Layout>

    // <h2>{frontmatter.date}</h2>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`;
