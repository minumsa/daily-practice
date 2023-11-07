import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Explanation from "../components/HomePage/Main/Explanation";
import Layout from "../components/Layout";
import ExplanationTitle from "../components/Nav/ExplanationTitle";
import React, { FC } from "react";

const ExplanationPage: FC = () => {
  return (
    <>
      <SEO
        title={`일상연습`}
        ogTitle={`일러두기 — 일상연습`}
        ogType={"website"}
        ogUrl={"https://14461.gatsbyjs.io/explanation/"}
      />
      <Layout info={<ExplanationTitle />}>
        <HomePage content={<Explanation />} />
      </Layout>
    </>
  );
};

export default ExplanationPage;
