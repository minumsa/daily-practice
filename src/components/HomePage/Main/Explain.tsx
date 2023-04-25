import React, { FC } from "react";
import "./Explain.css";

const Explain: FC = () => {
  return (
    <div className="explain-container">
      <p>
        서울 출생. 영화와 산책을 좋아하고 글을 쓴다. 이 사이트는 개인적인 글을 아카이빙하는 공간이다. 사이트 이름이 『일상연습』인 이유는 이곳에 주로 일기
        형식의 에세이들을 올릴 계획이기 때문이다. 물질적으로 <span className="underline">책에 가까운</span> 사이트를 만들기 위해 노력했다.
      </p>
    </div>
  );
};

export default Explain;
