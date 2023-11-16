import React, { FC, useState, useEffect } from "react";
import "./Contact.css";

const Contact: FC = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    window.navigator.clipboard.writeText("icycyi@naver.com");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className="contact-container">
      <div className="contact-title">이메일</div>
      <div style={{ position: "relative", width: "270px" }}>
        <div>
          <span
            className="cotact-email highlighted-text"
            onClick={() => {
              handleCopy();
            }}
          >
            icycyi@naver.com
          </span>
        </div>
        {isCopied && <span className="copied-message">Copied!</span>}
      </div>
      <div className="contact-title">SNS</div>
      <div>
        <span className="highlighted-text">
          <a href="https://www.instagram.com/yoon.o" target="_blank">
            Instagram
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
