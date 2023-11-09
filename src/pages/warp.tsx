import SEO from "../SEO";
import Home from "../components/Home";
import Warp from "../components/Home/Main/Warp";
import Layout from "../components/Layout";
import { PageProps, graphql } from "gatsby";
import React, { useEffect } from "react";
import { getRandomPage } from "../lib/modules";
import { siteTitle } from "../lib/data";

interface WarpPageProps extends PageProps<Queries.AllPagesQuery> {
  pageNumber: string;
  footerContent: string;
}

const Page = ({ data, pageNumber, footerContent }: WarpPageProps) => {
  useEffect(() => {
    const totalPageCount = data.allMarkdownRemark.totalCount;
    const prevRandomPage = Number(sessionStorage.getItem("randomPage"));
    let randomPage = getRandomPage(totalPageCount);

    // 직전 랜덤 페이지 번호, 새로운 랜덤 페이지 번호가 일치하지 않을 때까지 반복
    while (prevRandomPage && randomPage === prevRandomPage) {
      randomPage = getRandomPage(totalPageCount);
    }

    // 반복문을 통과한 랜덤 페이지 번호를 세션스토리지에 저장
    sessionStorage.setItem("randomPage", randomPage.toString());

    const newTimer = window.setTimeout(() => {
      window.location.href = `/posts/${randomPage}`;
    }, 2000);

    return () => {
      clearTimeout(newTimer);
    };
  }, []);

  return (
    <>
      <SEO
        ogTitle={`워프 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://14461.gatsbyjs.io/warp/"}
      />
      <Layout pageNumber={pageNumber} footerContent={footerContent}>
        <Home content={<Warp />} />
      </Layout>
    </>
  );
};

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

export default Page;
