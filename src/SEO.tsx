// Very simplified version of a component
import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
}

const SEO = ({ title }: SEOProps) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          property: `og:title`,
          content: "I am a title Open Graph protocol will pick up and display",
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ]}
    />
  );
};

export default SEO;
