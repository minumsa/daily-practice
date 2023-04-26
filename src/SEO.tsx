import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title?: string;
  ogTitle?: string;
  ogType?: string;
  ogUrl?: string;
  ogText?: string;
}

const SEO = ({ title, ogTitle, ogType, ogUrl, ogText }: SEOProps) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          property: `og:site_name`,
          content: "일상연습",
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
