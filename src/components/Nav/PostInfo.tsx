import React, { FC } from "react";
import "./PostInfo.css";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const PostInfo = ({ date }: { date: React.ReactNode }) => {
  return (
    <>
      <PrevButton />
      <div className="date-created">작성일: {date}</div>
      <NextButton />
    </>
  );
};

export default PostInfo;
