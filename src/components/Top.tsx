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
          className="top-hamburger-container"
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <div className="top-hamburger">{visible ? <Category /> : null}</div>
        </div>
        <div className="top-title">일상연습</div>
        <div className="top-dark">밤</div>
      </div>
    </div>
  );
};

export default Top;
