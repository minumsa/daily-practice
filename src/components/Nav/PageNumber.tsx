import "./PageNumber.css";
import React from "react";

const PageNumber = ({ page }: { page?: React.ReactNode }) => {
  return (
    <div className="page-container">
      <span className="brackets">(</span>
      {page}
      <span className="brackets">)</span>
    </div>
  );
};

export default PageNumber;
