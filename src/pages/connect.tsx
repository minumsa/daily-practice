import SEO from "../SEO";
import Contact from "../components/Home/Main/Contact";
import Layout from "../components/Layout";
import React, { FC } from "react";
import { siteTitle } from "../lib/data";

const ConnectPage: FC = () => {
  return (
    <>
      <SEO
        ogTitle={`연결 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://14461.gatsbyjs.io/connect/"}
      />
      <Layout footerContent={"연결"}>
        <Contact />
      </Layout>
    </>
  );
};

export default ConnectPage;
