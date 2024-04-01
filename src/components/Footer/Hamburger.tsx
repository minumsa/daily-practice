import { Category } from "./Category";
import "./Hamburger.css";
import React, { useState } from "react";

const Hamburger = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className="hamburger-container" onClick={() => setShowCategory(!showCategory)}>
      <div className="hamburger">{showCategory && <Category />}</div>
    </div>
  );
};

export default Hamburger;
