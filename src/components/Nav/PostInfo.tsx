import "./PostInfo.css";
import React from "react";

interface postInfo {
  date?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
}

const FooterDesktop = ({ date, prev, next }: postInfo) => {
  return (
    <>
      {prev}
      <div className="date-created">작성일: {date}</div>
      {next}
    </>
  );
};

export default FooterDesktop;
