import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import "./index.css";
import HomePage from "../components/HomePage";
import LandingInfo from "../components/Nav/LandingInfo";

const Index = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  return (
    <Layout page={""} info={<LandingInfo />}>
      <HomePage
        content={
          <div className="list-container">
            <div className="total-post">
              총 <span className="post-count">{data.allMarkdownRemark.totalCount}개</span>의 글이 있습니다.
            </div>
            <div className="list-text-container">
              {data.allMarkdownRemark.edges
                .map(({ node }: any) => ({
                  ...node.frontmatter,
                  id: node.id,
                  excerpt: node.excerpt,
                  page: parseInt(node.frontmatter.page),
                }))
                .sort((a, b) => b.page - a.page)
                .map((frontmatter: any) => (
                  <Link to={"/posts" + frontmatter.slug}>
                    <div className="list-text" key={frontmatter.id}>
                      {frontmatter.title}
                    </div>
                  </Link>
                ))}
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
