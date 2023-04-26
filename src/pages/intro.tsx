import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Intro from "../components/HomePage/Main/Intro";
import Layout from "../components/Layout";
import IntroInfo from "../components/Nav/IntroInfo";
import React, { FC } from "react";

const IntroPage: FC = () => {
  return (
    <Layout info={<IntroInfo />}>
      <SEO title={"일상연습"} />
      <HomePage content={<Intro />} />
    </Layout>
  );
};

export default IntroPage;
