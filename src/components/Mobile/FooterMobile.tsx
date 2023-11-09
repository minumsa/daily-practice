import "./FooterMobile.css";
import React from "react";

interface FooterMobileProps {
  footerLineMobile?: React.ReactNode;
  arrowLeftMobile?: React.ReactNode;
  createDateMobile?: React.ReactNode;
  arrowRightMobile?: React.ReactNode;
}

const FooterMobile = ({
  footerLineMobile,
  arrowLeftMobile,
  arrowRightMobile,
  createDateMobile,
}: FooterMobileProps) => {
  return (
    <div className="footer-mobile-container">
      {footerLineMobile}
      <div className="mobile-page-container">
        <div className="mobile-page">
          <div>{arrowLeftMobile}</div>
          <div>{createDateMobile}</div>
          <div>{arrowRightMobile}</div>
        </div>
      </div>
    </div>
  );
};

export default FooterMobile;
