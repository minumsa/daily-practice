import React, { FC } from "react";

import "./Menu.css";
import { Link } from "gatsby";

const Menu: FC = () => {
  return (
    <>
      <div className="hamburger">
        <div className="site-nav">
          {/* <div className="trigger"> */}
          <div className="site-nav-nav">
            <Link to="/">홈</Link>
          </div>
          <div className="site-nav-nav">
            <Link to="/intro">일러두기</Link>
          </div>
          <div className="site-nav-nav">
            <Link to="/explain">소개</Link>
          </div>
          <div className="site-nav-nav">
            <Link to="/connect">연결</Link>
          </div>
          <div className="site-nav-nav">
            <Link to="/search">검색</Link>
          </div>
          <div className="site-nav-nav">
            <Link to="/warp">워프</Link>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="x">X</div>
      {/* <div className="menu"></div> */}
    </>
  );
};

export default Menu;
