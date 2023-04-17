import React, { FC } from "react";
import "./Intro.css";

const Intro: FC = () => {
  return (
    <div className="intro-container">
      <div className="test">
        <div className="first-intro">1. 글 위에 마우스를 위치시키면 스크롤 할 수 있습니다.</div>
        <div className="intro">2. 글의 마지막 문장 우측에는 돌아가기 아이콘(↵)이 있습니다. 클릭하면 메인 화면으로 돌아갑니다.</div>
        <div className="intro">3. 돌아가기 아이콘이 발견되지 않는다면 아직 남아 있는 글이 있는 것입니다. 더 스크롤 해보세요.</div>
        <div className="intro">4. 글의 하단에는 해당 글 작성일이 표기되어 있습니다.</div>
        <div className="intro">5. 작성일 양쪽 아이콘을 클릭하면 각각 이전 글, 다음 글로 이동합니다.</div>
        <div className="intro">6. 메뉴 중 “워프”를 클릭하면 사이트에 있는 특정 글로 랜덤하게 이동합니다.</div>
      </div>
    </div>
  );
};

export default Intro;
