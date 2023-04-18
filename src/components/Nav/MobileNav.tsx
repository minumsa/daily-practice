import React from "react";
import "./MobileNav.css";

const MobileNav = ({ day, line }: { day: any; line: any }) => {
  return (
    <>
      <div className="mobile-nav-container">
        <div className="mobile-day-container">
          <div className="mobile-day">{day}</div>
        </div>
        {line}
        {/* <div className="mobile-line"></div> */}
      </div>
    </>
  );
};

export default MobileNav;
