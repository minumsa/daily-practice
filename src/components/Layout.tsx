import React from "react";
import "./Layout.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="app-container">{children}</div>;
};

export default Layout;
