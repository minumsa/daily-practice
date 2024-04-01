import { Category } from "./Category";
import * as styles from "./Hamburger.module.css";
import React, { useState } from "react";

const Hamburger = () => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <div className={styles.container} onClick={() => setShowCategory(!showCategory)}>
      <div className={styles.hamburger}>{showCategory && <Category />}</div>
    </div>
  );
};

export default Hamburger;
