import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import "./index.css";
import HomePage from "../components/HomePage";
import Nav from "../components/Nav";
import LandingInfo from "../components/Nav/LandingInfo";

const Index = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  return (
    <Layout page={""} info={<LandingInfo />}>
      <HomePage
        content={
          <div className="list-container">
            <div className="list-text-container">
              {data.allMarkdownRemark.edges.map(({ node }: any) => (
                <Link to={"/posts" + node.frontmatter.slug}>
                  <div className="test">
                    <div className="list-text" key={node.id}>
                      {node.frontmatter.title}
                    </div>
                  </div>
                </Link>
              ))}
              <div className="list-button">→</div>
            </div>
          </div>
        }
        title={""}
      />
    </Layout>
  );
};

export default Index;

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
