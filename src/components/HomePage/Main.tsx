import React from "react";
import Dash from "./Main/Dash";
import "./Main.scss";
import MobileNav from "../Nav/MobileNav";

interface MainProps {
  content: React.ReactNode;
  day: string;
  line: React.ReactNode;
  prev: React.ReactNode;
  next: React.ReactNode;
  middle: React.ReactNode;
}

const Main = ({ content, ...props }: MainProps) => {
  return (
    <div className="main-container">
      <Dash />
      <div className="content-container">{content}</div>
      <div className="content-nav-container">
        <MobileNav {...props} />
      </div>
      <Dash />
    </div>
  );
};

export default Main;
