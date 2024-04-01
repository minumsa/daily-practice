import React from "react";
import * as styles from "./DivisionMarker.module.css";

const DivisionMarker = () => {
  return (
    <div className={styles.container}>
      <div className={styles.marker}></div>
      <div className={styles.marker}></div>
    </div>
  );
};

export default DivisionMarker;
