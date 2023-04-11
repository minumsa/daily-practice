import React from "react";
import Dash from "./Main/Dash";
import "./Main.css";

const Main = ({ content }: { content: React.ReactNode }) => {
  return (
    <div className="main-container">
      <Dash />
      <div className="content-container">{content}</div>
      <Dash />
    </div>
  );
};

export default Main;
