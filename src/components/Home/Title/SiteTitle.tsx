import React, { FC } from "react";
import "./SiteTitle.css";
import { Link } from "gatsby";

const SiteTitle: FC = () => {
  return (
    <Link to="/">
      <div className="title-items-right site-title">일상연습</div>
    </Link>
  );
};

export default SiteTitle;
