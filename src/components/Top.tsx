import Category from "./Nav/Category";
import "./Top.css";
import { Link } from "gatsby";
import React, { useState } from "react";

interface TopProps {
  darkButton?: React.ReactNode;
  header?: string;
}

const Top = ({ darkButton, header }: TopProps) => {
  const [visible, setVisible] = useState(false);

  const handleHamburgerClick = () => {
    setVisible(!visible);
  };

  return (
    <header className={header}>
      <div className="top-content">
        <div className="top-hamburger-container" onClick={handleHamburgerClick}>
          <div className="top-hamburger">{visible ? <Category /> : null}</div>
        </div>
        <div className="top-title">
          <Link to="/">일상연습</Link>
        </div>
        <div className="top-dark">{darkButton}</div>
      </div>
    </header>
  );
};

export default Top;
