import React, { useState } from "react";
import "./Layout.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import reset from "styled-reset";
import Nav from "./Nav";

export interface ThemeType {
  bgColor: string;
  Color: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}  
  body {        
    background-color: ${props => props.theme.bgColor};
    color:${props => props.theme.Color}
  }

  .line {
    background-color: ${props => props.theme.Color};
  }

  .list-text {
    color: ${props => props.theme.Color};
    background-color: ${props => props.theme.bgColor};
    border: 1px solid ${props => props.theme.Color};
  }

  .list-button {
    background-color: ${props => props.theme.Color};
    border: 1px solid ${props => props.theme.bgColor};
  }

  .hamburger {
    background: ${props => props.theme.Color};
    box-shadow: 0 7px 0 ${props => props.theme.Color}, 0 14px 0 ${props => props.theme.Color};
  }

  .prev-button {
    border-top: 1.5px solid ${props => props.theme.Color};
    border-right: 1.5px solid ${props => props.theme.Color};
  }

  .next-button {
    border-top: 1.5px solid ${props => props.theme.Color};
    border-right: 1.5px solid ${props => props.theme.Color};
  }

  .hamburger {
    background: ${props => props.theme.Color};
    box-shadow: 0 7px 0 ${props => props.theme.Color}, 0 14px 0 ${props => props.theme.Color};
  }

  .category-container {
    background-color: ${props => props.theme.bgColor};
  }

  @media (max-width: 550px) {
    .list-text {
      background-color: ${props => props.theme.bgColor};
      border: 1px solid ${props => props.theme.Color};
    }
    .list-button {
      background-color: ${props => props.theme.bgColor};
      border: 1px solid ${props => props.theme.Color};
    }
  }
`;

interface Props {
  children: React.ReactNode;
  page: any;
  info: any;
}

const Layout: React.FC<Props> = ({ children, page, info }) => {
  const [buttonText, setButtonText] = useState("낮");

  const handleClick = () => {
    setButtonText(state => (state === "낮" ? "밤" : "낮"));
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  const clickEvent = () => {
    handleClick;
    // toggleDarkMode;
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="layout-container">
        {children}
        <Nav
          page={page}
          info={info}
          dark={
            <div
              className="mode-button"
              onClick={() => {
                toggleDarkMode();
                handleClick();
              }}
            >
              {buttonText}
            </div>
          }
        />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
