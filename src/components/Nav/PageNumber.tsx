import React, { FC } from "react";
import "./PageNumber.css";

const PageNumber = ({ page }: { page: React.ReactNode }) => {
  return <div className="page-container">({page})</div>;
};

export default PageNumber;
