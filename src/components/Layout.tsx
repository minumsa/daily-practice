import React, { useEffect, useState } from "react";
import "./Layout.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import Nav from "./Nav";
import Top from "./Top";
import GlobalStyle from "./GlobalStyle";
import { lightTheme, darkTheme } from "../theme";

type Props = {
  children: React.ReactNode;
  page: any;
  info: any;
};

const Layout: React.FC<Props> = ({ children, page, info }) => {
  const [position, setPosition] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      let moving = window.pageYOffset;

      setVisible(position > moving);
      setPosition(moving);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [position]);

  const cls = visible ? "visible" : "hidden";

  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: any) => {
        if (theme == null) {
          return null;
        }
        const isDarkMode = theme === "dark";
        return (
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <div className="layout-container">
              <Top
                test={position > 50 ? cls : null}
                darkButton={
                  <div
                    className="mode-button"
                    onClick={() => {
                      toggleTheme(theme === "dark" ? "light" : "dark");
                    }}
                  >
                    {isDarkMode ? "밤" : "낮"}
                  </div>
                }
              />
              {children}
              <Nav
                page={page}
                info={info}
                dark={
                  <div
                    className="mode-button"
                    onClick={() => {
                      toggleTheme(theme === "dark" ? "light" : "dark");
                    }}
                  >
                    {isDarkMode ? "밤" : "낮"}
                  </div>
                }
              />
            </div>
          </ThemeProvider>
        );
      }}
    </ThemeToggler>
  );
};

export default Layout;
