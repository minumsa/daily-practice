import React from "react";
import { Helmet } from "react-helmet";
import { siteTitle } from "./lib/data";

interface SEOProps {
  ogTitle?: string;
  ogType?: string;
  ogURL?: string;
  ogText?: string;
}

const SEO = ({ ogTitle, ogType, ogURL, ogText }: SEOProps) => {
  return (
    <Helmet
      title={siteTitle}
      meta={[
        {
          property: `og:site_name`,
          content: siteTitle,
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
          content: ogURL,
        },
        {
          property: `og:image`,
          content: "https://i.ibb.co/CB51dS6/img2321.png",
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
        {
          property: `og:description`,
          content: ogText,
        },
        {
          property: `og:locale`,
          content: "ko_kr",
        },
      ]}
    />
  );
};

export default SEO;
