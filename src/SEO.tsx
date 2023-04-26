import { useStaticQuery, graphql } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  ogTitle: string;
  ogSiteName: string;
  ogType: string;
  ogUrl: string;
  ogImage: any;
}

const SEO = ({ title, ogTitle, ogSiteName, ogType, ogUrl, ogImage }: SEOProps) => {
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
        {
          property: `og:image`,
          content: ogImage,
        },
        {
          property: `og:image:width`,
          content: "672",
        },
        {
          property: `og:image:height`,
          content: "672",
        },
        {
          property: `og:image:type`,
          content: "image/png",
        },
      ]}
    />
  );
};

export default SEO;
