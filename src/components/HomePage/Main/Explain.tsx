import React, { FC } from "react";
import "./Explain.css";

const Explain: FC = () => {
  return (
    <div className="explain-container">
      <p>
        전기가오리는 사회정치적인 주제의 철학적 측면에 주목하고, 반엘리트주의를 주창하며, 철학을 둘러싼 격차 문제의 해소에 기여하고자 하는 학문 공동체입니다.
        공부 모임이자 출판사이기도 합니다. ‘전기가오리’라는 이름은 플라톤의 『메논』에서 따온 것입니다.
        {/* 자신이 제대로 알고 있다고 확신하던 메논은 소크라테스와의
        연이은 문답 끝에 어안이 벙벙해져 할 말을 잃습니다. */}
      </p>
    </div>
  );
};

export default Explain;
