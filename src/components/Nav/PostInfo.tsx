import React, { FC } from "react";
import "./PostInfo.css";

const PostInfo = ({ date }: { date: React.ReactNode }) => {
  return (
    <>
      <div className="arrow-left">←</div>
      <div className="date-created">작성일: {date}</div>
      <div className="arrow-right">→</div>
    </>
  );
};

export default PostInfo;
