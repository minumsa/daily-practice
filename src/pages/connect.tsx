import SEO from "../SEO";
import Home from "../components/Home";
import Contact from "../components/Home/Main/Contact";
import Layout from "../components/Layout";
import React, { FC } from "react";
import { siteTitle } from "../lib/data";

const ConnectPage: FC = () => {
  return (
    <Layout footerContent={"연결"}>
      <SEO
        ogTitle={`연결 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://14461.gatsbyjs.io/connect/"}
      />
      <Home content={<Contact />} />
    </Layout>
  );
};

export default ConnectPage;
