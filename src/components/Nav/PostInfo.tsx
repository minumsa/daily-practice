import React, { FC } from "react";
import "./PostInfo.css";

interface postInfo {
  date?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
}

const PostInfo = ({ date, prev, next }: postInfo) => {
  return (
    <>
      {prev}
      <div className="date-created">작성일: {date}</div>
      {next}
    </>
  );
};

export default PostInfo;
