import React, { FC, useState } from "react";
import "./Top.css";
import Category from "./Nav/Category";

// Child: React.FC or Child: FC
const Top: FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div className="top-container">
      <div className="top-content">
        <div
          className="hamburger-container2"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <div className="hamburger2">{visible ? <Category /> : null}</div>
        </div>
        <div className="top-title">일상연습</div>
        <div className="top-dark">밤</div>
      </div>
    </div>
  );
};

export default Top;
