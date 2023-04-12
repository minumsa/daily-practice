import React, { FC } from "react";
import HomePage from "../../HomePage";
import Nav from "../../Nav";
import Text from "../../HomePage/Main/Text";
import PageNumber from "../../Nav/PageNumber";
import PostInfo from "../../Nav/PostInfo";
import PostTitle from "../../HomePage/Title/PostTitle";

const PostPage = ({ date }: { date: React.ReactNode }) => {
  return (
    <>
      <HomePage content={<Text />} title={<PostTitle />} />
      <Nav page={<PageNumber />} info={<PostInfo date={date} />} />
    </>
  );
};

export default PostPage;
