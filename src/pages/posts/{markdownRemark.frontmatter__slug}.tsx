import * as React from "react";
import { Link, graphql, PageProps } from "gatsby";
import Layout from "../../components/Layout";
import HomePage from "../../components/HomePage";
import Nav from "../../components/Nav";
import PostInfo from "../../components/Nav/PostInfo";
import PageNumber from "../../components/Nav/PageNumber";
import PrevButton from "../../components/Nav/PrevButton";
import NextButton from "../../components/Nav/NextButton";

export default function BlogPostTemplate({ data }: any) {
  const { markdownRemark } = data; // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark;

  let prevSlug = frontmatter.slug;
  prevSlug = "/" + String(Number(prevSlug.split("/").join("")) - 1);

  let nextSlug = frontmatter.slug;
  nextSlug = "/" + String(Number(nextSlug.split("/").join("")) + 1);

  let lastSlug = "/" + data.allMarkdownRemark.edges.length;

  return (
    <Layout>
      <HomePage content={<div className="content-text" dangerouslySetInnerHTML={{ __html: html }} />} title={frontmatter.title} />
      <Nav
        page={<PageNumber page={frontmatter.page} />}
        info={
          <PostInfo
            date={frontmatter.date}
            prev={
              frontmatter.slug === "/1" ? (
                <div
                  onClick={() => {
                    alert("첫 번째 게시물입니다.");
                  }}
                >
                  <PrevButton />
                </div>
              ) : (
                <Link to={"/posts" + prevSlug}>
                  <PrevButton />
                </Link>
              )
            }
            next={
              frontmatter.slug === lastSlug ? (
                <div
                  onClick={() => {
                    alert("마지막 게시물입니다.");
                  }}
                >
                  <NextButton />
                </div>
              ) : (
                <Link to={"/posts" + nextSlug}>
                  <NextButton />
                </Link>
              )
            }
          />
        }
      />
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
        page
      }
    }

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
