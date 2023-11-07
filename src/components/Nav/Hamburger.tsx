import Category from "./Category";
import "./Hamburger.css";
import React, { FC, useState } from "react";

const Hamburger: FC = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div
      className="hamburger-container"
      onClick={() => setShowCategory(prevVisible => !prevVisible)}
    >
      <div className="hamburger">{showCategory ? <Category /> : null}</div>
    </div>
  );
};

export default Hamburger;
