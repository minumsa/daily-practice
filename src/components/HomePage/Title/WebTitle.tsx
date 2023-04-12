import React, { FC } from "react";
import "./WebTitle.css";
import { Link } from "gatsby";

const WebTitle: FC = () => {
  return (
    <Link to="/">
      <div className="web-title">일상연습</div>
    </Link>
  );
};

export default WebTitle;
