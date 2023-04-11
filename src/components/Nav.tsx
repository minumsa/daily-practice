import React from "react";
import Menu from "./Nav/Menu";
import DarkMode from "./Nav/DarkMode";
import "./Nav.css";

// Child: React.FC or Child: FC
const Nav = ({ page, info }: { page: React.ReactNode; info: React.ReactNode }) => {
  return (
    <div className="nav-container">
      <div className="middle">
        <Menu />
        <div className="info-container">{info}</div>
        <DarkMode />
      </div>
      <div className="blank"></div>
      <div className="page-number">{page}</div>
    </div>
  );
};

export default Nav;
