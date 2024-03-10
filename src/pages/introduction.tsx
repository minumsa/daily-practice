import SEO from "../SEO";
import Home from "../components/Home";
import Introduction from "../components/Home/Main/Introduction";
import Layout from "../components/Layout";
import React, { FC } from "react";
import { siteTitle } from "../lib/data";

const Page: FC = () => {
  return (
    <>
      <SEO
        ogTitle={`소개 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://14461.gatsbyjs.io/introduction"}
      />
      <Layout footerContent={"소개"}>
        <Introduction />
      </Layout>
    </>
  );
};

export default Page;
