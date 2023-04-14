import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Explain from "../components/HomePage/Main/Explain";
import ExplainInfo from "../components/Nav/ExplainInfo";
import Layout from "../components/Layout";

const ExplainPage: FC = () => {
  return (
    <Layout page={""} info={<ExplainInfo />}>
      <HomePage content={<Explain />} title={""} />
    </Layout>
  );
};

export default ExplainPage;
