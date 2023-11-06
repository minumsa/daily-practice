import React, { FC } from "react";
import "./Intro.css";

const Intro: FC = () => {
  return (
    <div className="intro-container">
      <div className="intro-body">
        <div className="first-intro">
          1. 이 사이트에는 스크롤 막대가 없습니다. 글 위에 마우스를 위치시키면 마우스 휠을 통해
          스크롤 할 수 있습니다.
        </div>
        <div className="intro">
          2. 글의 마지막 문장 우측에는 돌아가기 아이콘<span className="highlightedText">(↵)</span>이
          있습니다. 클릭하면 메인 화면으로 돌아갑니다.
        </div>
        <div className="intro">
          3. 만약 돌아가기 아이콘이 발견되지 않는다면 아직 남아 있는 글이 있는 것입니다.
        </div>
        <div className="intro">4. 글 하단에는 해당 작성일이 표시되어 있습니다.</div>
        <div className="intro">
          5. 작성일 양옆의 화살표
          <span className="highlightedText">{`(<, >)`}</span>을 클릭하면 각각 이전 글, 다음 글로
          이동합니다.
        </div>
        <div className="intro">
          6. 메뉴 중 <span className="highlightedText">워프</span>를 클릭하면 사이트에 있는 특정
          글로 랜덤하게 이동합니다.
        </div>
      </div>
    </div>
  );
};

export default Intro;
