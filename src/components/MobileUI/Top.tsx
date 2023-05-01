import Category from "../Nav/Category";
import "./Top.css";
import { Link } from "gatsby";
import React, { useState } from "react";

interface TopProps {
  darkButton?: React.ReactNode;
  header?: string;
}

const Top = ({ darkButton, header }: TopProps) => {
  const [visible, setVisible] = useState(false);

  const handleHamburgerClick = () => {
    // visible 상태를 현재 상태의 반대 값으로 업데이트한다.
    setVisible(!visible);
  };

  return (
    <header className={header}>
      <div className="top-content">
        {/* 햄버거 버튼 클릭 시 visible 상태가 true이면 카테고리 컴포넌트가 열리고, false이면 닫힌다. */}
        <div className="top-hamburger-container" onClick={handleHamburgerClick}>
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
