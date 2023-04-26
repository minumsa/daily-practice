import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  ogTitle: string;
  ogSiteName: string;
  ogType: string;
  ogUrl: string;
}

const SEO = ({ title, ogTitle, ogSiteName, ogType, ogUrl }: SEOProps) => {
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
          content: ogType,
        },
        {
          property: `og:url`,
          content: ogUrl,
        },
      ]}
    />
  );
};

export default SEO;
