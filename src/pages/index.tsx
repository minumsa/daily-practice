import React from "react";
import { graphql, Link, PageProps } from "gatsby";
import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import LandingInfo from "../components/Nav/LandingInfo";
import "./index.css";

const Index = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  const posts = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node.frontmatter!,
    id: node.id,
    excerpt: node.excerpt,
    page: Number(node.frontmatter!.page), // node.frontmatter가 null일 가능성을 무시
  }));

  const sortedPosts = [...posts].sort((a, b) => b.page - a.page);

  return (
    <Layout page={""} info={<LandingInfo />}>
      <HomePage
        content={
          <div className="list-container">
            <div className="total-post">
              총 <span className="post-count">{data.allMarkdownRemark.totalCount}개</span>의 글이 있습니다.
            </div>
            <div className="list-text-container">
              {sortedPosts.map(post => (
                <Link to={`/posts${post.slug}`} key={post.id}>
                  <div className="list-text">{post.title}</div>
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
