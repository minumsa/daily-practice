import SEO from "../../SEO";
import Layout from "../../components/Layout";
import FooterNav from "../../components/Footer/FooterNav";
import { graphql } from "gatsby";
import * as React from "react";
import "./{markdownRemark.frontmatter__slug}.css";
import { siteTitle } from "../../lib/data";
import DOMPurify from "isomorphic-dompurify";
import FooterMobile from "../../components/Mobile/FooterMobile";

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
        page: string;
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
  const sortedDataByPage = allMarkdownRemark.edges.sort(
    (a, b) => a.node.frontmatter.page - b.node.frontmatter.page
  );

  const currentDataIndex = sortedDataByPage.findIndex(
    (p: Post) => p.node.frontmatter.slug === frontmatter.slug
  );
  const prevData = currentDataIndex === 0 ? null : sortedDataByPage[currentDataIndex - 1].node;
  const nextData =
    currentDataIndex === sortedDataByPage.length - 1
      ? null
      : sortedDataByPage[currentDataIndex + 1].node;

  const prevItemSlug = prevData?.frontmatter.slug;
  const nextItemSlug = nextData?.frontmatter.slug;

  return (
    <>
      <SEO
        ogTitle={`${frontmatter.title} — ${siteTitle}`}
        ogType={"article"}
        ogURL={"https://blog.divdivdiv.com/posts" + frontmatter.slug}
        ogText={frontmatter.description}
      />
      <Layout
        pageNumber={frontmatter.page}
        footerContent={
          <FooterNav
            createDate={frontmatter.date}
            prevItemSlug={prevItemSlug}
            nextItemSlug={nextItemSlug}
          />
        }
      >
        <div className="content-text" dangerouslySetInnerHTML={{ __html: sanitizer(html) }} />
        <FooterMobile
          createDate={frontmatter.date}
          prevItemSlug={prevItemSlug}
          nextItemSlug={nextItemSlug}
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
