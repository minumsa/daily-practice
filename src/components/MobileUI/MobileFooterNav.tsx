import "./MobileFooterNav.css";
import React from "react";

interface MobileFooterNavProps {
  line?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
  middle?: React.ReactNode;
}

const MobileFooterNav = ({ line, prev, next, middle }: MobileFooterNavProps) => {
  return (
    <div className="mobile-nav-container">
      <div>{line}</div>
      <div className="page-nav-container">
        <div className="mobile-prev-button">{prev}</div>
        <div className="mobile-post-date">{middle}</div>
        <div className="mobile-next-button">{next}</div>
      </div>
    </div>
  );
};

export default MobileFooterNav;
