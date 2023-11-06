import "./MobileNav.css";
import React from "react";

interface MobileNavProps {
  day?: string;
  line?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
  middle?: React.ReactNode;
}

const MobileNav = ({ day, line, prev, next, middle }: MobileNavProps) => {
  return (
    <>
      <div className="mobile-nav-container">
        <div className="mobile-day-container">
          <div className="mobile-day">{day}</div>
        </div>
        <div>{line}</div>
        <div className="page-nav-container">
          <div className="prev-container">{prev}</div>
          <div className="mobile-middle">{middle}</div>
          <div className="next-container">{next}</div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
