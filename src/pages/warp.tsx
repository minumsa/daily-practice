import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Warp from "../components/HomePage/Main/Warp";
import Nav from "../components/Nav";
import Layout from "../components/Layout";

const WarpPage: FC = () => {
  return (
    <Layout>
      <HomePage content={<Warp />} title={""} />
      <Nav page={""} info={""} />
    </Layout>
  );
};

export default WarpPage;
