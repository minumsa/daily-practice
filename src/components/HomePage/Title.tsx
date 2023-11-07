import React from "react";
import SiteTitle from "./Title/SiteTitle";
import PostTitle from "./Title/PostTitle";
import "./Title.css";

const Title = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="title-container">
      <SiteTitle />
      <PostTitle title={title} />
    </div>
  );
};

export default Title;
