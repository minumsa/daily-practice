import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Explain from "../components/HomePage/Main/Explain";
import Layout from "../components/Layout";
import ExplainInfo from "../components/Nav/ExplainInfo";
import React, { FC } from "react";

const ExplainPage: FC = () => {
  return (
    <Layout info={<ExplainInfo />}>
      <SEO title={"일상연습"} />
      <HomePage content={<Explain />} title={null} />
    </Layout>
  );
};

export default ExplainPage;
