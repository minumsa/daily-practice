import React, { FC } from "react";
import "./Contact.css";

const Contact: FC = () => {
  return (
    <div className="contact-container">
      <div className="contact-title">이메일</div>
      <div>icycyi@naver.com</div>
      <div className="contact-title">SNS</div>
      <div>
        <a href="https://www.instagram.com/yoon.o" target="_blank">
          <div>Instagram</div>
        </a>
      </div>
    </div>
  );
};

export default Contact;
