import React, { FC } from "react";
import "./Intro.css";

const Intro: FC = () => {
  return (
    <div className="intro-container">
      <div>1. 이 사이트에는 스크롤이 숨겨져 있습니다.</div>
      <div>2. 글 위에 마우스를 대고 스크롤 해보세요.</div>
      <div>3. 모든 글의 마지막 문장 옆에는 돌아가기 버튼이 있습니다.</div>
      <div>4. 문장 끝에 돌아가기 버튼이 없으면 글이 아직 남은 것입니다.</div>
    </div>
  );
};

export default Intro;
