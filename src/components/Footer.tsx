import "./Footer.css";
import DarkMode from "./Footer/DarkMode";
import Hamburger from "./Footer/Hamburger";
import React from "react";

interface NavProps {
  pageNumber: React.ReactNode;
  footerContent: React.ReactNode;
  darkModeButton: React.ReactNode;
}

const Footer = ({ pageNumber, footerContent, darkModeButton }: NavProps) => {
  return (
    <>
      <div className="nav-container">
        <div className="middle">
          <Hamburger />
          <div className="footer-content-container">{footerContent}</div>
          <DarkMode darkModeButton={darkModeButton} />
        </div>
        <div className="blank-space" />
        <div className="page-number">{pageNumber && `(${pageNumber})`}</div>
      </div>
    </>
  );
};

export default Footer;
