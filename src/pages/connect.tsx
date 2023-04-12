import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Connect from "../components/HomePage/Main/Connect";
import Nav from "../components/Nav";
import ConnectInfo from "../components/Nav/ConnectInfo";
import Layout from "../components/Layout";

const ConnectPage: FC = () => {
  return (
    <Layout>
      <HomePage content={<Connect />} title={""} />
      <Nav page={""} info={<ConnectInfo />} />
    </Layout>
  );
};

export default ConnectPage;
