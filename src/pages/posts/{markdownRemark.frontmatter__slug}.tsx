import SEO from "../../SEO";
import Home from "../../components/Home";
import Layout from "../../components/Layout";
import NextButton from "../../components/Nav/NextButton";
import PageNumber from "../../components/Nav/PageNumber";
import FooterContent from "../../components/Nav/PostInfo";
import PrevButton from "../../components/Nav/PrevButton";
import { Link, graphql } from "gatsby";
import * as React from "react";
import "./{markdownRemark.frontmatter__slug}.css";
import { siteTitle } from "../../lib/data";
import * as DOMPurify from "dompurify";

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
  // DOMPurify - XSS 공격 방지
  const sanitizer = DOMPurify.sanitize;

  // 모든 포스트를 페이지 번호를 기준으로 정렬
  const sortedDataAscending = allMarkdownRemark.edges.sort(
    (a, b) => a.node.frontmatter.page - b.node.frontmatter.page
  );
  const currentDataIndex = sortedDataAscending.findIndex(
    (p: Post) => p.node.frontmatter.slug === frontmatter.slug
  );
  const prevData = currentDataIndex === 0 ? null : sortedDataAscending[currentDataIndex - 1].node;
  const nextData =
    currentDataIndex === sortedDataAscending.length - 1
      ? null
      : sortedDataAscending[currentDataIndex + 1].node;

  // 이전 포스트와 다음 포스트를 보여주는 컴포넌트를 생성
  const ArrowLeft = () => {
    return prevData ? (
      <Link to={"/posts" + prevData.frontmatter.slug}>
        <PrevButton />
      </Link>
    ) : (
      <div onClick={() => alert("첫 번째 게시물입니다.")}>
        <PrevButton />
      </div>
    );
  };

  const ArrowRight = () => {
    return nextData ? (
      <Link to={"/posts" + nextData.frontmatter.slug}>
        <NextButton />
      </Link>
    ) : (
      <div onClick={() => alert("마지막 게시물입니다.")}>
        <NextButton />
      </div>
    );
  };

  return (
    <>
      <SEO
        ogTitle={`${frontmatter.title} — ${siteTitle}`}
        ogType={"article"}
        ogURL={"https://14461.gatsbyjs.io/posts" + frontmatter.slug}
        ogText={frontmatter.description}
      />
      <Layout
        page={<PageNumber page={frontmatter.page} />}
        footerContent={
          <FooterContent
            arrowLeft={<ArrowLeft />}
            createDate={frontmatter.date}
            arrowRight={<ArrowRight />}
          />
        }
      >
        <Home
          content={
            <div className="content-text" dangerouslySetInnerHTML={{ __html: sanitizer(html) }} />
          }
          title={frontmatter.title}
          footerLineMobile={
            <div className="footer-line-mobile-container">
              <div className="footer-line-mobile"></div>
            </div>
          }
          arrowLeftMobile={<ArrowLeft />}
          createDateMobile={<div className="create-date-mobile">작성일: {frontmatter.date}</div>}
          arrowRightMobile={<ArrowRight />}
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
