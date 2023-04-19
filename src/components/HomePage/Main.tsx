import React from "react";
import Dash from "./Main/Dash";
import "./Main.css";
import MobileNav from "../Nav/MobileNav";

interface main {
  content: any;
  day: any;
  line: any;
  prev: any;
  next: any;
}

const Main = ({ content, day, line, prev, next }: main) => {
  return (
    <div className="main-container">
      <Dash />
      <div className="content-container">{content}</div>
      <div className="content-nav-container">
        <MobileNav day={day} line={line} prev={prev} next={next} />
      </div>
      <Dash />
    </div>
  );
};

export default Main;
