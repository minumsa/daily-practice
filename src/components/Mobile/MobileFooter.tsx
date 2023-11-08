import "./MobileFooter.css";
import React from "react";

interface MobileFooterProps {
  line?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
  middle?: React.ReactNode;
}

const MobileFooter = ({ line, prev, next, middle }: MobileFooterProps) => {
  return (
    <div className="footer-mobile-container">
      {line}
      <div className="mobile-page-container">
        <div className="mobile-page">
          <div>{prev}</div>
          <div>{middle}</div>
          <div>{next}</div>
        </div>
      </div>
    </div>
  );
};

export default MobileFooter;
