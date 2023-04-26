import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Explain from "../components/HomePage/Main/Explain";
import Layout from "../components/Layout";
import ExplainInfo from "../components/Nav/ExplainInfo";
import React, { FC } from "react";

const ExplainPage: FC = () => {
  return (
    <>
      <SEO title={`일상연습`} ogTitle={`소개 — 일상연습`} ogType={"website"} ogUrl={"https://14461.gatsbyjs.io/explain/"} />
      <Layout info={<ExplainInfo />}>
        <HomePage content={<Explain />} title={null} />
      </Layout>
    </>
  );
};

export default ExplainPage;
