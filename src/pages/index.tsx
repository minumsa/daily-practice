import * as React from "react";
import { PageProps, graphql, Link } from "gatsby";
import LandingPage from "../components/views/LandingPage/LandingPage";
import Layout from "../components/Layout";
// import "./index.css";

// const Index: React.FC = () => {
//   return (
//     <Layout>
//       <LandingPage />
//     </Layout>
//   );
// };

// export default Index;

const IndexPage = ({ data }: PageProps<Queries.AllPagesQuery>) => {
  return (
    <div className="index-container">
      <h2>Posts</h2>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }: any) => (
          <li key={node.id}>
            <Link to={"/posts" + node.frontmatter.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IndexPage;

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
