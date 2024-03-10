import "./FooterMobile.css";
import React from "react";

interface FooterMobileProps {
  footerContent: React.ReactNode;
}

const FooterMobile = ({ footerContent }: FooterMobileProps) => {
  return (
    <>
      <div className="footer-line-mobile-container">
        <div className="footer-line-mobile"></div>
      </div>
      <div className="footer-mobile-container">
        <div className="mobile-page-container">
          <div className="mobile-page">{footerContent}</div>
        </div>
      </div>
    </>
  );
};

export default FooterMobile;
