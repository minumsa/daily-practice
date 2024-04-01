import React from "react";
import "./Category.css";
import { Link } from "gatsby";

export const Category = () => {
  return (
    <div className="category-container">
      <Link to="/" className="category category-home">
        홈
      </Link>
      <Link to="/explanation" className="category category-notice">
        일러두기
      </Link>
      <Link to="/introduction" className="category">
        소개
      </Link>
      <Link to="/connect" className="category">
        연결
      </Link>
      <Link to="/warp" className="category">
        워프
      </Link>
      <div className="close">×</div>
    </div>
  );
};
