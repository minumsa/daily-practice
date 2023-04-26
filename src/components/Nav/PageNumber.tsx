import "./PageNumber.css";
import React from "react";

const PageNumber = ({ page }: { page?: React.ReactNode }) => {
  return <div className="page-container">({page})</div>;
};

export default PageNumber;
