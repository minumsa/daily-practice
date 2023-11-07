import React, { FC } from "react";
import "./DivisionMarker.css";

const DivisionMarker: FC = () => {
  return (
    <div className="division-container">
      <div className="marker"></div>
      <div className="marker"></div>
    </div>
  );
};

export default DivisionMarker;
