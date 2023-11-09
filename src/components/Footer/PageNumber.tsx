import "./PageNumber.css";
import React from "react";

const PageNumber = ({ pageNumber }: { pageNumber?: React.ReactNode }) => {
  return (
    <div className="page-container">
      <span className="brackets">(</span>
      {pageNumber}
      <span className="brackets">)</span>
    </div>
  );
};

export default PageNumber;
