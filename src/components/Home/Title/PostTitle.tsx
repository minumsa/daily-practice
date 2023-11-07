import React from "react";
import "./PostTitle.css";

const PostTitle = ({ title }: { title?: React.ReactNode }) => {
  return <div className="title-items-right post-title">{title}</div>;
};

export default PostTitle;
