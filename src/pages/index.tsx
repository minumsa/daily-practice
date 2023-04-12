import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import "./index.css";
import HomePage from "../components/HomePage";
import Nav from "../components/Nav";
import LandingInfo from "../components/Nav/LandingInfo";

const Test = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  return (
    <Layout>
      <HomePage
        content={
          <div className="list-container">
            <div className="list-text-container">
              {data.allMarkdownRemark.edges.map(({ node }: any) => (
                <div className="list-text" key={node.id}>
                  <Link to={"/posts" + node.frontmatter.slug}>{node.frontmatter.title}</Link>
                </div>
              ))}

              <div className="list-button">→</div>
            </div>
          </div>
        }
        title={""}
      />
      <Nav page={""} info={<LandingInfo />} />
    </Layout>
  );
};

export default Test;

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
            slug
          }
          excerpt
        }
      }
    }
  }
`;
