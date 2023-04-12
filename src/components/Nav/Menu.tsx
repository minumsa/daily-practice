import React, { FC } from "react";
import "./Menu.css";
import { Link } from "gatsby";
import Category from "./Category";

const Menu: FC = () => {
  return (
    <>
      <div className="hamburger">
        <Category />
      </div>
    </>
  );
};

export default Menu;
