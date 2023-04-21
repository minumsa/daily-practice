import React from "react";
import "./MobileNav.css";

interface mobileNav {
  day: any;
  line: any;
  prev: any;
  next: any;
  middle: any;
}

const MobileNav = ({ day, line, prev, next, middle }: mobileNav) => {
  return (
    <>
      <div className="mobile-nav-container">
        <div className="mobile-day-container">
          <div className="mobile-day">{day}</div>
        </div>
        <div>{line}</div>
        <div className="next-prev-container">
          <div className="prev-container">{prev}</div>
          <div className="mobile-middle">{middle}</div>
          <div className="next-container">{next}</div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
