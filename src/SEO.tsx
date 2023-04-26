import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  ogTitle: string;
}

const SEO = ({ title, ogTitle }: SEOProps) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          property: `og:title`,
          content: ogTitle,
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
