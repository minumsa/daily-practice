import "./DarkMode.css";
import React from "react";

const DarkMode = ({ darkModeButton }: { darkModeButton: React.ReactNode }) => {
  return <div className="dark-mode">{darkModeButton}</div>;
};

export default DarkMode;
