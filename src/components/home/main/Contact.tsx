import React, { useState } from "react";
import * as styles from "./Contact.module.css";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const handleCopy = () => {
    window.navigator.clipboard.writeText("icycyi@naver.com");
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500);
  };

  return (
    <div className={styles.container}>
      <div className={styles.blockTitle}>이메일</div>
      <div style={{ position: "relative", width: "270px" }}>
        <div>
          <span
            className={`${styles.email} ${styles.highlight}`}
            onClick={() => {
              handleCopy();
            }}
          >
            icycyi@naver.com
          </span>
        </div>
        {isCopied && <span className={styles.copied}>Copied!</span>}
      </div>
      <div className={styles.blockTitle}>SNS</div>
      <div>
        <span className={styles.highlight}>
          <a href="https://www.instagram.com/yoon.o" target="_blank">
            Instagram
          </a>
        </span>
      </div>
    </div>
  );
};

export default Contact;
