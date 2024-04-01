import "./HeaderMobile.css";
import { Link } from "gatsby";
import React, { useState } from "react";
import Category from "../footer/Category";

interface HeaderMobileProps {
  header: string;
  theme: any;
  toggleTheme: any;
  darkModeButton: any;
}

const HeaderMobile = ({ header, theme, toggleTheme, darkModeButton }: HeaderMobileProps) => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <header className={header}>
      <div className="header-content">
        <div
          className="hamburger-mobile-container"
          onClick={() => {
            setShowCategory(!showCategory);
          }}
        >
          <div className="hamburger-mobile">{showCategory ? <Category /> : null}</div>
        </div>
        <div className="header-title">
          <Link to="/">일상연습</Link>
        </div>
        <div className="header-darkmode">
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
    </header>
  );
};

export default HeaderMobile;
