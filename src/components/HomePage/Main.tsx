import React from "react";
import Dash from "./Main/Dash";
import "./Main.css";
import MobileNav from "../Nav/MobileNav";

const Main = ({ content, day, line }: { content: React.ReactNode; day: any; line: any }) => {
  return (
    <div className="main-container">
      <Dash />
      <div className="content-container">{content}</div>
      <div className="content-nav-container">
        <MobileNav day={day} line={line} />
      </div>
      <Dash />
    </div>
  );
};

export default Main;
