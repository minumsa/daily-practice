import GlobalStyle from "../GlobalStyle";
import { lightTheme, darkTheme } from "../theme";
import "./Layout.css";
import Top from "./MobileUI/Top";
import Nav from "./Nav";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
  page?: React.ReactNode;
  info?: React.ReactNode;
};

// void는 JavaScript에서 데이터 타입이 없는 값을 반환할 때 사용되는 예약어다. 이 코드에서 void는 toggleTheme 함수가 반환하는 값이 없음을 나타낸다. toggleTheme 함수는 선택적으로 문자열 타입의 매개변수를 받을 수 있지만, 반환값은 없다. 따라서 void 예약어를 사용하여 명시적으로 반환값이 없음을 나타내고 있다.
interface ThemeProps {
  theme: string | null;
  toggleTheme: (theme?: string) => void;
}

const Layout: React.FC<Props> = ({ children, page, info }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: ThemeProps) => {
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
