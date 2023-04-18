import React from "react";
import "./MobileNav.css";

const MobileNav = ({ day }: { day: any }) => {
  return (
    <>
      <div className="mobile-nav-container">
        <div className="mobile-day-container">
          <div className="mobile-day">{day}</div>
        </div>
        <div className="mobile-line"></div>
      </div>
    </>
  );
};

export default MobileNav;
