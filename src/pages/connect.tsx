import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Contact from "../components/HomePage/Main/Contact";
import Layout from "../components/Layout";
import React, { FC } from "react";

const ConnectPage: FC = () => {
  return (
    <>
      <SEO
        title={`일상연습`}
        ogTitle={`연결 — 일상연습`}
        ogType={"website"}
        ogUrl={"https://14461.gatsbyjs.io/connect/"}
      />
      <Layout info={"연결"}>
        <HomePage content={<Contact />} />
      </Layout>
    </>
  );
};

export default ConnectPage;
