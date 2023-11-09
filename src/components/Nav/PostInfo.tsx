import "./PostInfo.css";
import React from "react";

interface postInfo {
  createDate?: React.ReactNode;
  arrowLeft?: React.ReactNode;
  arrowRight?: React.ReactNode;
}

const Footer = ({ createDate, arrowLeft, arrowRight }: postInfo) => {
  return (
    <>
      {arrowLeft}
      <div className="create-date">작성일: {createDate}</div>
      {arrowRight}
    </>
  );
};

export default Footer;
