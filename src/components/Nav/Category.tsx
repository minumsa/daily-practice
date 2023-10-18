import "./Category.css";
import { Link } from "gatsby";
import React, { FC } from "react";

const Category: FC = () => {
  return (
    <div className="category-container">
      <Link to="/">
        <div className="category-home">
          <div className="category-home-text">홈</div>
        </div>
      </Link>
      <Link to="/intro">
        <div className="category-notice">일러두기</div>
      </Link>
      <Link to="/explain">
        <div className="category category-introduce">소개</div>
      </Link>
      <Link to="/connect">
        <div className="category category-connect">연결 </div>
      </Link>
      <Link to="/warp">
        <div className="category category-warp">워프 </div>
      </Link>
      <div className="close">×</div>
    </div>
  );
};

export default Category;
