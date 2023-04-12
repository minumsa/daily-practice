import React from "react";
import "./Layout.css";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return <div className="layout-container">{children}</div>;
};

export default Layout;
