import React from "react";
import * as styles from "./PostTitle.module.css";

const PostTitle = ({ title }: { title: React.ReactNode }) => {
  return <div className={styles.postTitle}>{title}</div>;
};

export default PostTitle;
