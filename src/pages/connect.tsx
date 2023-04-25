import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Connect from "../components/HomePage/Main/Connect";
import ConnectInfo from "../components/Nav/ConnectInfo";
import Layout from "../components/Layout";
import "./connect.css";

const ConnectPage: FC = () => {
  return (
    <Layout info={<ConnectInfo />}>
      <HomePage content={<Connect />} />
    </Layout>
  );
};

export default ConnectPage;
