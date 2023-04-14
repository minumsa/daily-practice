import React, { FC } from "react";
import HomePage from "../components/HomePage";
import Warp from "../components/HomePage/Main/Warp";
import Layout from "../components/Layout";

const WarpPage: FC = () => {
  return (
    <Layout page={""} info={""}>
      <HomePage content={<Warp />} title={""} />
    </Layout>
  );
};

export default WarpPage;
