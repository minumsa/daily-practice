import * as React from "react";
import { PageProps, graphql } from "gatsby";
import LandingPage from "../components/views/LandingPage/LandingPage";
import Layout from "../components/Layout";
import Link from "gatsby-link";

const Index: React.FC = () => {
  return (
    <Layout>
      <LandingPage />
    </Layout>
  );
};
// const IndexQuery = ({ data }: any) => {
//   return (
//     <div>
//       <h2>Posts</h2>
//       <ul>
//         {data.allMarkdownRemark.edges.map(({ node }: any) => (
//           <li key={node.id}>
//             <Link to={node.frontmatter.slug}>{node.frontmatter.title}</Link>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default IndexQuery;

// export const query = graphql`
//   query IndexQuery {
//     allMarkdownRemark {
//       totalCount
//       edges {
//         node {
//           id
//           frontmatter {
//             title
//             date(formatString: "DD MMMM, YYYY")
//             slug
//           }
//           excerpt
//         }
//       }
//     }
//   }
// `;
