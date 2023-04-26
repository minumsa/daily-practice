import Category from "./Category";
import "./Menu.css";
import React, { FC, useState } from "react";

const Menu: FC = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => setVisible(prevVisible => !prevVisible);

  return (
    <>
      <div className="hamburger-container" onClick={toggleVisible}>
        <div className="hamburger">{visible ? <Category /> : null}</div>
      </div>
    </>
  );
};

export default Menu;
