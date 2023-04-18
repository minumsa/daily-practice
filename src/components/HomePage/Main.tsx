import React from "react";
import Dash from "./Main/Dash";
import "./Main.css";
import MobileNav from "../Nav/MobileNav";

const Main = ({ content, day }: { content: React.ReactNode; day: any }) => {
  return (
    <div className="main-container">
      <Dash />
      <div className="content-container">{content}</div>
      <div className="content-nav-container">
        <MobileNav day={day} />
      </div>
      <Dash />
    </div>
  );
};

export default Main;
