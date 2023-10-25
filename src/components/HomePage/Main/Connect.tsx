import React, { FC } from "react";
import "./Connect.css";

const Connect: FC = () => {
  return (
    <div className="connect-container">
      <div className="connect-gap" />
      <div className="connect-title">이메일</div>
      <div>icycyi@naver.com</div>
      <div className="connect-gap" />
      <div className="connect-title">SNS</div>
      <div>
        <a href="https://www.instagram.com/yoon.o" target="_blank">
          <span className="connect-sns">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default Connect;
