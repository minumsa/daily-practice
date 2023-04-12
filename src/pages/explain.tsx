import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Explain from "../components/HomePage/Main/Explain";
import Nav from "../components/Nav";
import ExplainInfo from "../components/Nav/ExplainInfo";
import Layout from "../components/Layout";

const ExplainPage: FC = () => {
  return (
    <Layout>
      <HomePage content={<Explain />} title={""} />
      <Nav page={""} info={<ExplainInfo />} />
    </Layout>
  );
};

export default ExplainPage;
