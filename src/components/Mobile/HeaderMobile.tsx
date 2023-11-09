import Category from "../Nav/Category";
import "./HeaderMobile.css";
import { Link } from "gatsby";
import React, { useState } from "react";

interface HeaderMobileProps {
  darkmodeButton?: React.ReactNode;
  header?: string;
}

const Top = ({ darkmodeButton, header }: HeaderMobileProps) => {
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
        <div className="header-darkmode">{darkmodeButton}</div>
      </div>
    </header>
  );
};

export default Top;
