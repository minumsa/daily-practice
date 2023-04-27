import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `일상연습`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content",
      },
      __key: "pages",
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "일상연습",
        short_name: "일상연습",
        start_url: "/",
        background_color: "#f4f4f4",
        theme_color: "#000000",
        display: "standalone",
        icon: "./src/images/logo.png",
        include_favicon: false,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-dark-mode",
    "gatsby-plugin-react-helmet",
  ],
};

export default config;
