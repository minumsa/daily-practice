import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Warp from "../components/HomePage/Main/Warp";
import Layout from "../components/Layout";
import { PageProps, graphql } from "gatsby";
import React, { useEffect } from "react";
import { getRandomPage } from "../lib/modules";

interface WarpPageProps extends PageProps<Queries.AllPagesQuery> {
  page: string;
  info: string;
}

const Page = ({ data, page, info }: WarpPageProps) => {
  useEffect(() => {
    // 페이지 수 가져오기
    const totalPageCount = data.allMarkdownRemark.totalCount;
    // 마지막 랜덤 페이지 번호 가져오기
    const lastRandomPage = sessionStorage.getItem("randomPage");
    // 새로운 랜덤 페이지 번호 만들기
    let randomPage = getRandomPage(totalPageCount);

    // 마지막 랜덤 페이지 번호와 새로운 랜덤 페이지 번호가 같을 경우 다시 만들기
    while (lastRandomPage && randomPage === parseInt(lastRandomPage)) {
      randomPage = getRandomPage(totalPageCount);
    }

    // 새로운 랜덤 페이지 번호를 sessionStorage에 저장
    sessionStorage.setItem("randomPage", randomPage.toString());

    const newTimer = window.setTimeout(() => {
      window.location.href = `/posts/${randomPage}`;
    }, 1500);

    return () => {
      clearTimeout(newTimer);
    };
  }, []);

  return (
    <>
      <SEO
        title={`일상연습`}
        ogTitle={`워프 — 일상연습`}
        ogType={"website"}
        ogUrl={"https://14461.gatsbyjs.io/warp/"}
      />
      <Layout page={page} info={info}>
        <HomePage content={<Warp />} />
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
