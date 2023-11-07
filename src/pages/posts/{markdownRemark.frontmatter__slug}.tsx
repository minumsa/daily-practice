import SEO from "../../SEO";
import HomePage from "../../components/HomePage";
import Layout from "../../components/Layout";
import NextButton from "../../components/Nav/NextButton";
import PageNumber from "../../components/Nav/PageNumber";
import PostInfo from "../../components/Nav/PostInfo";
import PrevButton from "../../components/Nav/PrevButton";
import { Link, graphql } from "gatsby";
import * as React from "react";
import "./{markdownRemark.frontmatter__slug}.css";

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
        description: string;
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

  // 모든 포스트를 페이지 번호를 기준으로 정렬
  const posts = allMarkdownRemark.edges.sort(
    (a, b) => a.node.frontmatter.page - b.node.frontmatter.page
  );

  // 현재 포스트의 인덱스를 찾음
  const currentIndex = posts.findIndex((p: Post) => p.node.frontmatter.slug === frontmatter.slug);

  // 이전 인덱스와 다음 인덱스를 찾음
  const prevIndex = currentIndex === 0 ? null : posts[currentIndex - 1].node;
  const nextIndex = currentIndex === posts.length - 1 ? null : posts[currentIndex + 1].node;

  // 이전 포스트와 다음 포스트를 보여주는 컴포넌트를 생성
  const PrevPost = prevIndex ? (
    <Link to={"/posts" + prevIndex.frontmatter.slug}>
      <PrevButton />
    </Link>
  ) : (
    <div onClick={() => alert("첫 번째 게시물입니다.")}>
      <PrevButton />
    </div>
  );

  const NextPost = nextIndex ? (
    <Link to={"/posts" + nextIndex.frontmatter.slug}>
      <NextButton />
    </Link>
  ) : (
    <div onClick={() => alert("마지막 게시물입니다.")}>
      <NextButton />
    </div>
  );

  return (
    <>
      <SEO
        title={`${frontmatter.title} — 일상연습`}
        ogTitle={`${frontmatter.title} — 일상연습`}
        ogType={"article"}
        ogUrl={"https://14461.gatsbyjs.io/posts" + frontmatter.slug}
        ogText={frontmatter.description}
      />
      <Layout
        page={<PageNumber page={frontmatter.page} />}
        info={<PostInfo date={frontmatter.date} prev={PrevPost} next={NextPost} />}
      >
        <HomePage
          content={<div className="content-text" dangerouslySetInnerHTML={{ __html: html }} />}
          title={frontmatter.title}
          line={
            <div className="footer-line-container">
              <div className="footer-line"></div>
            </div>
          }
          prev={PrevPost}
          middle={<div className="mobile-post-date">작성일: {frontmatter.date}</div>}
          next={NextPost}
        />
      </Layout>
    </>
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
        description
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
