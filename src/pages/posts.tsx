import React, { FC } from "react";
import PostPage from "../components/views/PostPage/PostPage";
import Layout from "../components/Layout";
import "./posts.css";

const Post: FC = () => {
  return (
    // <div className="posts-container">
    <>
      <Layout>
        <PostPage />
      </Layout>
    </>
    // </div>
  );
};

export default Post;
