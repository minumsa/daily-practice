import SEO from "../SEO";
import Layout from "../components/Layout";
import "./index.css";
import { graphql, PageProps } from "gatsby";
import React from "react";
import { siteTitle } from "../lib/constants";
import { ContentBlock } from "../components/home/main/ContentBlock";

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
    <Layout footerContent={"마음에 드는 링크를 클릭해주세요"}>
      <ContentBlock totalDataCount={totalDataCount} sortedData={sortedData} />
    </Layout>
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
