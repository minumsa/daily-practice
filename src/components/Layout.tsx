import React from "react";
import "./Layout.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import reset from "styled-reset";
import Nav from "./Nav";

const GlobalStyle = createGlobalStyle`
  ${reset}  
  body {        
    background-color: ${props => props.theme.bgColor};
    color:${props => props.theme.textColor}
  }

  .line {
    background-color: ${props => props.theme.lineColor};
  }
`;

interface Props {
  children: React.ReactNode;
  page: any;
  steve: any;
}

const Layout: React.FC<Props> = ({ children, page, steve }) => {
  const isDarkMode = false;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="layout-container">
        {children}
        <Nav page={page} info={steve} />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
