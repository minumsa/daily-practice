import React from "react";
import "./Title.css";
import WebTitle from "./Title/WebTitle";

const Title = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className="title-container">
      <WebTitle />
      {title}
      {/* <PostTitle /> */}
    </div>
  );
};

export default Title;
