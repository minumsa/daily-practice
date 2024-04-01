import React from "react";
import * as styles from "./Category.module.css";
import { Link } from "gatsby";

export const Category = () => {
  return (
    <div className={styles.container}>
      <Link to="/" className={`${styles.category} ${styles.home}`}>
        홈
      </Link>
      <Link to="/explanation" className={`${styles.category} ${styles.notice}`}>
        일러두기
      </Link>
      <Link to="/introduction" className={styles.category}>
        소개
      </Link>
      <Link to="/connect" className={styles.category}>
        연결
      </Link>
      <Link to="/warp" className={styles.category}>
        워프
      </Link>
      <div className={styles.close}>×</div>
    </div>
  );
};
