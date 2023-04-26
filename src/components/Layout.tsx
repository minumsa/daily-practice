import GlobalStyle from "../GlobalStyle";
import { lightTheme, darkTheme } from "../theme";
import "./Layout.css";
import Nav from "./Nav";
import Top from "./Top";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
  page?: React.ReactNode;
  info?: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children, page, info }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: { theme: string | null; toggleTheme: (theme?: string) => void }) => {
        if (theme == null) {
          return null;
        }
        return (
          <LayoutInternal page={page} info={info} theme={theme} toggleTheme={toggleTheme}>
            {" "}
            {children}{" "}
          </LayoutInternal>
        );
      }}
    </ThemeToggler>
  );
};

type LayoutInternalProps = {
  children: React.ReactNode;
  page?: React.ReactNode;
  info?: React.ReactNode;
  theme: string;
  toggleTheme: (theme: string) => void;
};

const LayoutInternal: React.FC<LayoutInternalProps> = ({ children, page, info, theme, toggleTheme }) => {
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
  const isDarkMode = theme === "dark";

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="layout-container">
        <Top
          header={position > 50 ? cls : "visible"}
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
};

export default Layout;
