import React, { FC, useState } from "react";
import "./Top.css";
import Category from "./Nav/Category";
import { Link } from "gatsby";

// Child: React.FC or Child: FC
const Top = ({ darkButton }: { darkButton: any }) => {
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
        <div className="top-title">
          <Link to="/">일상연습</Link>
        </div>
        <div className="top-dark">{darkButton}</div>
      </div>
    </div>
  );
};

export default Top;
