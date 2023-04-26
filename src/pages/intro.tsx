import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Intro from "../components/HomePage/Main/Intro";
import Layout from "../components/Layout";
import IntroInfo from "../components/Nav/IntroInfo";
import React, { FC } from "react";

const IntroPage: FC = () => {
  return (
    <>
      <SEO title={`일상연습`} ogTitle={`일러두기 — 일상연습`} ogType={"website"} ogUrl={"https://14461.gatsbyjs.io/intro/"} />
      <Layout info={<IntroInfo />}>
        <HomePage content={<Intro />} />
      </Layout>
    </>
  );
};

export default IntroPage;
