import MobileFooter from "../Mobile/MobileFooter";
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
      <div className="mobile-footer-container">
        <MobileFooter {...props} />
      </div>
      <DivisionMarker />
    </div>
  );
};

export default Main;
