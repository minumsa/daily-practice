import React, { FC } from "react";
import "./Explanation.css";

const Explanation: FC = () => {
  return (
    <div className="explanation-container">
      <div className="explanation">
        <ol style={{ paddingLeft: "20px" }}>
          <li>
            이 사이트에는 스크롤 막대가 없습니다. 글 위에 마우스를 위치시키면 마우스 휠을 통해
            스크롤 할 수 있습니다.
          </li>
          <li>
            홈페이지 타이틀 <span className="highlighted-text">일상연습</span>을 클릭하면 메인
            화면으로 이동합니다.
          </li>
          <li>만약 돌아가기 아이콘이 발견되지 않는다면 아직 남아 있는 글이 있는 것입니다.</li>
          <li>글 하단에는 해당 작성일이 표시되어 있습니다.</li>
          <li>
            작성일 양옆의 화살표
            <span className="highlighted-text">{`(<, >)`}</span>을 클릭하면 각각 이전 글, 다음 글로
            이동합니다.
          </li>
          <li>
            메뉴 중 <span className="highlighted-text">워프</span>를 클릭하면 사이트에 있는 특정
            글로 랜덤하게 이동합니다.
          </li>
        </ol>
      </div>
    </div>
  );
};

export default Explanation;
