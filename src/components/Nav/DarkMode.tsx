import "./DarkMode.css";
import React from "react";

const DarkMode = ({ dark }: { dark: React.ReactNode }) => {
  return <div className="dark-mode">{dark}</div>;
};

export default DarkMode;
