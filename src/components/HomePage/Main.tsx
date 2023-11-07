import MobileFooterNav from "../MobileUI/MobileFooterNav";
import "./Main.css";
import DivisionMarker from "./Main/DivisionMarker";
import React from "react";

interface MainProps {
  content?: React.ReactNode;
  day?: string;
  line?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
  middle?: React.ReactNode;
}

const Main = ({ content, ...props }: MainProps) => {
  return (
    <div className="main-container">
      <DivisionMarker />
      <div className="content-container">{content}</div>
      <div className="content-nav-container">
        <MobileFooterNav {...props} />
      </div>
      <DivisionMarker />
    </div>
  );
};

export default Main;
