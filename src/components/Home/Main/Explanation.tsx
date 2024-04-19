import React from "react";
import * as styles from "./Explanation.module.css";

const Explanation = () => {
  return (
    <div className={styles.container}>
      <div className={styles.explanation}>
        <ol style={{ paddingLeft: "20px" }}>
          <li>
            이 사이트에는 스크롤 막대가 없습니다. 글 위에 마우스를 위치시키면 마우스 휠을 통해
            스크롤 할 수 있습니다.
          </li>
          <li>
            홈페이지 타이틀 <span className={styles.highlight}>일상연습</span>을 클릭하면 메인
            화면으로 이동합니다.
          </li>
          <li>글 하단에는 해당 작성일이 표시되어 있습니다.</li>
          <li>
            작성일 양옆의 화살표
            <span className={styles.highlight}>{`(<, >)`}</span>을 클릭하면 각각 이전 글, 다음 글로
            이동합니다.
          </li>
          <li>
            메뉴 중 <span className={styles.highlight}>워프</span>를 클릭하면 사이트에 있는 특정
            글로 랜덤하게 이동합니다.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Explanation;
