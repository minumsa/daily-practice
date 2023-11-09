import "./FooterMobile.css";
import React from "react";

interface FooterMobileProps {
  footerLineMobile?: React.ReactNode;
  arrowLeft?: React.ReactNode;
  createDate?: React.ReactNode;
  arrowRight?: React.ReactNode;
}

const FooterMobile = ({
  footerLineMobile,
  arrowLeft,
  arrowRight,
  createDate,
}: FooterMobileProps) => {
  return (
    <div className="footer-mobile-container">
      {footerLineMobile}
      <div className="mobile-page-container">
        <div className="mobile-page">
          <div>{arrowLeft}</div>
          <div>{createDate}</div>
          <div>{arrowRight}</div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
