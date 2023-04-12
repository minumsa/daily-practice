import React, { FC } from "react";
import "./Category.css";
import { Link } from "gatsby";

const Category: FC = () => {
  return (
    <div className="category-container">
      <div className="close">×</div>
      <div className="category">
        <Link to="/">홈</Link>
      </div>
      <div className="category">
        <Link to="/intro">일러두기</Link>
      </div>
      <div className="category">
        <Link to="/explain">소개</Link>
      </div>
      <div className="category">
        <Link to="/connect">연결</Link>
      </div>
      <div className="category">
        <Link to="/search">검색</Link>
      </div>
      <div className="category">
        <Link to="/warp">워프</Link>
      </div>
    </div>
  );
};

export default Category;
