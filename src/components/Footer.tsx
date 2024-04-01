import "./Footer.css";
import React from "react";
import Hamburger from "./footer/Hamburger";

type DarkModeToggleButton = "밤" | "낮";
type Theme = "dark" | "light";

interface NavProps {
  pageNumber: React.ReactNode;
  footerContent: React.ReactNode;
  darkModeButton: DarkModeToggleButton;
  theme: Theme;
  toggleTheme: (theme?: string) => void;
}

const Footer = ({ pageNumber, footerContent, darkModeButton, theme, toggleTheme }: NavProps) => {
  return (
    <div className="nav-container">
      <div className="middle">
        <Hamburger />
        <div className="footer-content-container">{footerContent}</div>
        <div className="dark-mode">
          <div
            className="mode-button"
            onClick={() => {
              toggleTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {darkModeButton}
          </div>
        </div>
      </div>
      <div className="blank-space" />
      <div className="page-number">{pageNumber && `(${pageNumber})`}</div>
    </div>
  );
};

export default Footer;
