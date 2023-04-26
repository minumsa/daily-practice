import SEO from "../../SEO";
import HomePage from "../../components/HomePage";
import Layout from "../../components/Layout";
import NextButton from "../../components/Nav/NextButton";
import PageNumber from "../../components/Nav/PageNumber";
import PostInfo from "../../components/Nav/PostInfo";
import PrevButton from "../../components/Nav/PrevButton";
import { Link, graphql } from "gatsby";
import * as React from "react";

interface Post {
  node: {
    frontmatter: {
      slug: string;
      title: string;
      page: number;
    };
  };
}

interface BlogPostTemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: {
        date: string;
        slug: string;
        title: string;
        page: any;
      };
    };
    allMarkdownRemark: {
      edges: Post[];
    };
  };
}

export default function BlogPostTemplate({ data }: BlogPostTemplateProps) {
  const { markdownRemark, allMarkdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  const posts = allMarkdownRemark.edges.sort((a, b) => a.node.frontmatter.page - b.node.frontmatter.page);

  const currentIndex = posts.findIndex((p: Post) => p.node.frontmatter.slug === frontmatter.slug);

  const prevPost = currentIndex === 0 ? null : posts[currentIndex - 1].node;
  const nextPost = currentIndex === posts.length - 1 ? null : posts[currentIndex + 1].node;

  const PrevComponent = prevPost ? (
    <Link to={"/posts" + prevPost.frontmatter.slug}>
      <PrevButton />
    </Link>
  ) : (
    <div onClick={() => alert("첫 번째 게시물입니다.")}>
      <PrevButton />
    </div>
  );

  const NextComponent = nextPost ? (
    <Link to={"/posts" + nextPost.frontmatter.slug}>
      <NextButton />
    </Link>
  ) : (
    <div onClick={() => alert("마지막 게시물입니다.")}>
      <NextButton />
    </div>
  );

  const PrevPost = prevPost ? (
    <Link to={"/posts" + prevPost.frontmatter.slug}>
      <PrevButton />
    </Link>
  ) : (
    <div onClick={() => alert("첫 번째 게시물입니다.")}>
      <PrevButton />
    </div>
  );

  const NextPost = nextPost ? (
    <Link to={"/posts" + nextPost.frontmatter.slug}>
      <NextButton />
    </Link>
  ) : (
    <div onClick={() => alert("마지막 게시물입니다.")}>
      <NextButton />
    </div>
  );

  return (
    <Layout page={<PageNumber page={frontmatter.page} />} info={<PostInfo date={frontmatter.date} prev={PrevComponent} next={NextComponent} />}>
      <SEO />
      <HomePage
        content={<div className="content-text" dangerouslySetInnerHTML={{ __html: html }} />}
        title={frontmatter.title}
        line={<div className="mobile-line"></div>}
        prev={PrevPost}
        middle={<div className="mobile-middle">작성일: {frontmatter.date}</div>}
        next={NextPost}
      />
    </Layout>
  );
}

export const pageQuery = graphql`
  query ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        date(formatString: "YYYY년 M월 D일")
        slug
        title
        page
      }
    }

    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
            page
            slug
          }
        }
      }
    }
  }
`;
