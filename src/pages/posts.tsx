import HomePage from "../components/HomePage";
import Layout from "../components/Layout";
import PostInfo from "../components/Nav/PostInfo";
import React, { FC } from "react";

const Posts: FC = () => {
  return (
    <Layout info={<PostInfo />}>
      <HomePage />
    </Layout>
  );
};

export default Posts;
