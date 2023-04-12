import React, { FC, useState } from "react";
import "./Menu.css";
import { Link } from "gatsby";
import Category from "./Category";

const Menu: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <div
        className="hamburger-container"
        onClick={() => {
          setVisible(!visible);
        }}
      >
        <div className="hamburger">{visible ? <Category /> : null}</div>
      </div>
    </>
  );
};

export default Menu;
