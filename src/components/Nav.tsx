import React from "react";
import Menu from "./Nav/Menu";
import DarkMode from "./Nav/DarkMode";
import "./Nav.css";

interface NavProps {
  page: React.ReactNode;
  info: React.ReactNode;
  dark: React.ReactNode;
}

const Nav = ({ page, info, dark }: NavProps) => {
  return (
    <div className="nav-container">
      <div className="middle">
        <Menu />
        <div className="info-container">{info}</div>
        <DarkMode dark={dark} />
      </div>
      <div className="blank"></div>
      <div className="page-number">{page}</div>
    </div>
  );
};

export default Nav;
