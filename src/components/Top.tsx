import React, { useState } from "react";
import "./Top.css";
import Category from "./Nav/Category";
import { Link } from "gatsby";

// Child: React.FC or Child: FC
const Top = ({ darkButton, test }: { darkButton: any; test: any }) => {
  const [visible, setVisible] = useState(false);

  return (
    <header className={test}>
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
    </header>
  );
};

export default Top;
