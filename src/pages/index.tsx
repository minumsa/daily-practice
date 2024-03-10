import SEO from "../SEO";
import Home from "../components/Home";
import Layout from "../components/Layout";
import "./index.css";
import { graphql, Link, PageProps } from "gatsby";
import React from "react";
import { siteTitle } from "../lib/data";
import { ContentBlock } from "../components/Home/Main/ContentBlock";

interface BlockItem {
  date: string;
  id: string;
  page: number;
  slug: string;
  title: string;
}

const Page = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  // md 파일에서 frontmatter, id, page 데이터만 가져와서 새로운 객체로 만들기
  const filteredData: BlockItem[] = data.allMarkdownRemark.edges.map(({ node }) => ({
    date: node.frontmatter?.date ?? "",
    id: node.id,
    page: Number(node.frontmatter?.page) ?? 0,
    slug: node.frontmatter?.slug ?? "",
    title: node.frontmatter?.title ?? "",
  }));

  const totalDataCount = filteredData.length;

  // filteredData를 page를 기준으로 오름차순 정렬
  const sortedData = [...filteredData].sort((a, b) => b.page - a.page);

  return (
    <>
      <SEO
        ogTitle={`소개 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://14461.gatsbyjs.io/"}
        ogText={
          "이 사이트는 개인적인 글을 아카이빙하는 공간이다. 사이트 이름이 『일상연습』인 이유는 이곳에 주로 일기 형식의 에세이들을 올릴 계획이기 때문이다. 물질적으로 책에 가까운 사이트를 만들기 위해 노력했다."
        }
      />
      <Layout footerText={"마음에 드는 링크를 클릭해주세요"}>
        <ContentBlock totalDataCount={totalDataCount} sortedData={sortedData} />
      </Layout>
    </>
  );
};

export default Page;

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

    site {
      siteMetadata {
        title
      }
    }
  }
`;
