import FooterMobile from "../Mobile/FooterMobile";
import "./Main.css";
import DivisionMarker from "./Main/DivisionMarker";
import React from "react";

interface MainProps {
  content?: React.ReactNode;
  day?: string;
  footerLineMobile?: React.ReactNode;
  arrowLeft?: React.ReactNode;
  createDate?: React.ReactNode;
  arrowRight?: React.ReactNode;
}

const Main = ({ content, ...props }: MainProps) => {
  return (
    <div className="main-container">
      <DivisionMarker />
      <div className="content-container">{content}</div>
      <div className="footer-mobile-container">
        <FooterMobile {...props} />
      </div>
      <DivisionMarker />
    </div>
  );
};

export default Main;
