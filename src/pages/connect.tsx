import SEO from "../SEO";
import HomePage from "../components/HomePage";
import Connect from "../components/HomePage/Main/Connect";
import Layout from "../components/Layout";
import ConnectInfo from "../components/Nav/ConnectInfo";
import React, { FC } from "react";

const ConnectPage: FC = () => {
  return (
    <>
      <SEO title={`일상연습`} ogTitle={`연결 — 일상연습`} ogType={"website"} ogUrl={"https://14461.gatsbyjs.io/connect/"} />
      <Layout info={<ConnectInfo />}>
        <HomePage content={<Connect />} />
      </Layout>
    </>
  );
};

export default ConnectPage;
