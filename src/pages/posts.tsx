import Home from "../components/Home";
import Layout from "../components/Layout";
import PostInfo from "../components/Nav/PostInfo";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <Layout info={<PostInfo />}>
      <Home />
    </Layout>
  );
};

export default Page;
