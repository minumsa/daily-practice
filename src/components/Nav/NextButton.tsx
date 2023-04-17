import React, { FC } from "react";
import "./NextButton.css";
import "../Nav/arrow-right.svg";

const NextButton: FC = () => {
  return (
    <>
      <div className="button-container">
        <div className="next-button"></div>
        {/* <div className="new-next-button">→</div> */}
      </div>
    </>
  );
};

export default NextButton;
