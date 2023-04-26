import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  ogTitle: string;
  ogSiteName: string;
}

const SEO = ({ title, ogTitle, ogSiteName }: SEOProps) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          property: `og:site_name`,
          content: ogSiteName,
        },
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
