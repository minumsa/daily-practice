import "./Category.css";
import { Link } from "gatsby";
import React, { FC } from "react";

const Category: FC = () => {
  return (
    <div className="category-container">
      <Link to="/">
        <div className="category category-home">홈</div>
      </Link>
      <Link to="/explanation">
        <div className="category category-notice">일러두기</div>
      </Link>
      <Link to="/introduction">
        <div className="category">소개</div>
      </Link>
      <Link to="/connect">
        <div className="category">연결</div>
      </Link>
      <Link to="/warp">
        <div className="category">워프</div>
      </Link>
      <div className="close">×</div>
    </div>
  );
};

export default Category;
