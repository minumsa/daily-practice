import React from "react";
import * as styles from "./Title.module.css";
import SiteTitle from "./SiteTitle";
import PostTitle from "./PostTitle";

const Title = ({ title }: { title: React.ReactNode }) => {
  return (
    <div className={styles.title}>
      <SiteTitle />
      <PostTitle title={title} />
    </div>
  );
};

export default Title;
