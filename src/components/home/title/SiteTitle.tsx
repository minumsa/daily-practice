import React from "react";
import * as styles from "./SiteTitle.module.css";
import { Link } from "gatsby";

const SiteTitle = () => {
  return (
    <Link to="/">
      <div className={styles.siteTitle}>일상연습</div>
    </Link>
  );
};

export default SiteTitle;
