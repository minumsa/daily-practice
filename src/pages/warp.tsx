import React, { useState, useEffect } from "react";
import HomePage from "../components/HomePage";
import Warp from "../components/HomePage/Main/Warp";
import Layout from "../components/Layout";
import { PageProps, graphql } from "gatsby";

const WarpPage = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  const [randomPage, setRandomPage] = useState<number>(0);
  const [timer, setTimer] = useState<number>(0);

  useEffect(() => {
    const newRandomPage = Math.floor(Math.random() * data.allMarkdownRemark.totalCount);

    const newTimer = window.setTimeout(() => {
      window.location.href = `/posts/${newRandomPage}`;
    }, 1000);
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
