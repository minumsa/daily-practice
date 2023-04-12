import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Intro from "../components/HomePage/Main/Intro";
import Nav from "../components/Nav";
import IntroInfo from "../components/Nav/IntroInfo";
import Layout from "../components/Layout";

const IntroPage: FC = () => {
  return (
    <Layout>
      <HomePage content={<Intro />} title={""} />
      <Nav page={""} info={<IntroInfo />} />
    </Layout>
  );
};

export default IntroPage;
