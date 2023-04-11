import React, { FC } from "react";
import "./PostInfo.css";

const PostInfo: FC = () => {
  return (
    <>
      <div className="arrow-left">←</div>
      <div className="date-created">작성일: 2023년 4월 15일(토)</div>
      <div className="arrow-right">→</div>
    </>
  );
};

export default PostInfo;
