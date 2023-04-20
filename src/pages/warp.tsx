import React, { useState, useEffect } from "react";
import HomePage from "../components/HomePage";
import Warp from "../components/HomePage/Main/Warp";
import Layout from "../components/Layout";
import { PageProps, graphql } from "gatsby";

const WarpPage = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  const [timer, setTimer] = useState<number>(0);
  const [randomPage, setRandomPage] = useState<number>(0);

  useEffect(() => {
    const totalPages = data.allMarkdownRemark.totalCount;
    const currentPage = parseInt(new URL(window.location.href).pathname.split("/").pop() as string) || 0;

    console.log(currentPage);

    let newRandomPage: number;
    let attempts = 0;
    do {
      newRandomPage = Math.floor(Math.random() * totalPages) + 1;
      attempts++;
    } while (newRandomPage === currentPage && attempts < 10);

    const newTimer = window.setTimeout(() => {
      window.location.href = `/posts/${newRandomPage}`;
    }, 1000);

    setRandomPage(newRandomPage);
    setTimer(newTimer);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <Layout page={""} info={""}>
      <HomePage content={<Warp />} title={""} />
    </Layout>
  );
};

export default WarpPage;

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
