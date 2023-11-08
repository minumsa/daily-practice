import SEO from "../SEO";
import Home from "../components/Home";
import Contact from "../components/Home/Main/Contact";
import Layout from "../components/Layout";
import React, { FC } from "react";

const ConnectPage: FC = () => {
  return (
    <>
      <SEO
        title={"일상연습"}
        ogTitle={"연결 — 일상연습"}
        ogType={"website"}
        ogUrl={"https://14461.gatsbyjs.io/connect/"}
      />
      <Layout footer={"연결"}>
        <Home content={<Contact />} />
      </Layout>
    </>
  );
};

export default ConnectPage;
