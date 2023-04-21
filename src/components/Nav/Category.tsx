import React, { FC } from "react";
import "./Category.css";
import { Link } from "gatsby";

const Category: FC = () => {
  return (
    <div className="category-container">
      <Link to="/">
        <div className="category-1">홈 </div>
      </Link>
      <Link to="/intro">
        <div className="category-2">일러두기</div>
      </Link>
      <Link to="/explain">
        <div className="category">소개</div>
      </Link>
      <Link to="/connect">
        <div className="category">연결 </div>
      </Link>
      {/* <Link to="/search">
        <div className="category">검색 </div>
      </Link> */}
      <Link to="/warp">
        <div className="category">워프 </div>
      </Link>
      <div className="close">×</div>
    </div>
  );
};

export default Category;
