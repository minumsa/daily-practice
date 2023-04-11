import React, { FC } from "react";
import PostPage from "../components/views/PostPage/PostPage";
import Layout from "../components/Layout";

const Post: FC = () => {
  return (
    <Layout>
      <PostPage />
    </Layout>
  );
};

export default Post;
