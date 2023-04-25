import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Intro from "../components/HomePage/Main/Intro";
import IntroInfo from "../components/Nav/IntroInfo";
import Layout from "../components/Layout";

const IntroPage: FC = () => {
  return (
    <Layout info={<IntroInfo />}>
      <HomePage content={<Intro />} />
    </Layout>
  );
};

export default IntroPage;
