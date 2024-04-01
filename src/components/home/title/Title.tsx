import React from "react";
import "./Title.css";
import SiteTitle from "./SiteTitle";
import PostTitle from "./PostTitle";

const Title = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="title-container">
      <SiteTitle />
      <PostTitle title={title} />
    </div>
  );
};

export default Title;
