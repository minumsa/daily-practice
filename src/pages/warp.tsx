import SEO from "../SEO";
import Warp from "../components/home/main/Warp";
import Layout from "../components/Layout";
import { PageProps, graphql } from "gatsby";
import React, { useEffect } from "react";
import { siteTitle } from "../lib/constants";

interface WarpPageProps extends PageProps<Queries.AllPagesQuery> {
  pageNumber: string;
  footerContent: string;
}

const Page = ({ data, pageNumber, footerContent }: WarpPageProps) => {
  const getRandomPage = (totalCount: number) => {
    return Math.floor(Math.random() * (totalCount - 1)) + 1;
  };

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
        ogURL={"https://blog.divdivdiv.com/warp/"}
      />
      <Layout pageNumber={pageNumber} footerContent={footerContent}>
        <Warp />
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
