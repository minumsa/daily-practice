import React, { FC } from "react";
import "./Connect.css";

const Connect: FC = () => {
  return (
    <div className="connect-container">
      <div className="connect-title">운영자</div>
      <div className="connect-content">최유일</div>
      <div className="connect-gap" />
      <div className="connect-title">이메일</div>
      <div>icycyi@naver.com</div>
      <div className="connect-gap" />
      <div className="connect-title">SNS</div>
      <div>
        <span className="connect-sns">인스타그램</span>
        <span>트위터</span>
      </div>
    </div>
  );
};

export default Connect;
