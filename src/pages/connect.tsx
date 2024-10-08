import SEO from "../SEO";
import Contact from "../components/home/main/Contact";
import Layout from "../components/Layout";
import React from "react";
import { siteTitle } from "../lib/constants";

const ConnectPage = () => {
  return (
    <>
      <SEO
        ogTitle={`연결 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://blog.divdivdiv.com/connect/"}
      />
      <Layout footerContent={"연결"}>
        <Contact />
      </Layout>
    </>
  );
};

export default ConnectPage;
