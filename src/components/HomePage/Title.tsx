import React     from "react";
import WebTitle  from "./Title/WebTitle";
import PostTitle from "./Title/PostTitle";
import "./Title.css";

const Title = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="title-container">
      <WebTitle />
      <PostTitle title={title} />
    </div>
  );
};

export default Title;
