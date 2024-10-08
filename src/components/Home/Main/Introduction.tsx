import React from "react";
import * as styles from "./Introduction.module.css";

const Introduction = () => {
  return (
    <div className={styles.container}>
      이 사이트는 개인적인 글을 아카이빙하기 위해 기획된 공간이다. 주로 일기 형식의 에세이를 올릴
      생각이다. 물질로서의 책 형태에 가까운 디자인을 시도해보았다.
    </div>
  );
};

export default Introduction;
