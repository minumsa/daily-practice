import Category from "./Category";
import "./Hamburger.css";
import React, { FC, useState } from "react";

const Hamburger: FC = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="hamburger-container" onClick={() => setShowCategory(!showCategory)}>
      <div className="hamburger">{showCategory && <Category />}</div>
    </div>
  );
};

export default Hamburger;
