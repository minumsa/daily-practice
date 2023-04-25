import React, { useState, useEffect } from "react";
import HomePage from "../components/HomePage";
import Warp from "../components/HomePage/Main/Warp";
import Layout from "../components/Layout";
import { PageProps, graphql } from "gatsby";

// 페이지 총 수를 받아서 무작위 페이지 번호를 반환하는 함수
const getRandomPage = (totalCount: number) => {
  return Math.floor(Math.random() * (totalCount - 1)) + 1;
};

const WarpPage = ({ data }: PageProps<Queries.AllPagesQuery>) => {
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

    // 1초 후 랜덤 페이지로 이동
    const newTimer = window.setTimeout(() => {
      window.location.href = `/posts/${randomPage}`;
    }, 1000);

    // 언마운트 될 때 타이머 제거
    return () => {
      clearTimeout(newTimer);
    };
  }, []);

  return (
    // Layout 컴포넌트를 사용하여 페이지 구성
    <Layout page={""} info={""}>
      <HomePage content={<Warp />} title={""} {...props} />
    </Layout>
  );
};

// GraphQL 쿼리를 사용하여 모든 페이지 정보 가져오기
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

export default WarpPage;
