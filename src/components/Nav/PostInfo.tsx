import React, { FC } from "react";
import "./PostInfo.css";

const PostInfo = ({ date }: { date: React.ReactNode }) => {
  return (
    <>
      <div className="arrow-container">
        <div className="arrow-left"></div>
      </div>
      <div className="date-created">작성일: {date}</div>
      <div className="arrow-container">
        <div className="arrow-right"></div>
      </div>
    </>
  );
};

export default PostInfo;
