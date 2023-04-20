import React, { useEffect, useState } from "react";
import "./Layout.css";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../theme";
import reset from "styled-reset";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import Nav from "./Nav";
import Top from "./Top";

export interface ThemeType {
  bgColor: string;
  Color: string;
  categoryColor: string;
  opacity: number;
  listBgColor: string;
  textColor: string;
  lineColor: string;
}

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`
  ${reset}  
  
  @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.6/dist/web/variable/pretendardvariable.css");

  body {        
    background-color: ${props => props.theme.bgColor};
    color:${props => props.theme.Color};
    font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo",
    "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  }

  .line {
    background-color: ${props => props.theme.Color};
  }

  .list-text, .list-button {
    background-color: ${props => props.theme.categoryColor};
    color: ${props => props.theme.Color};
    border: 1px solid ${props => props.theme.Color};
  }

  // .list-button {
  //   background-color: ${props => props.theme.Color};
  //   border: 1px solid ${props => props.theme.bgColor};
  // }

  .prev-button {
    border-top: 1.5px solid ${props => props.theme.Color};
    border-right: 1.5px solid ${props => props.theme.Color};
  }

  .next-button {
    border-top: 1.5px solid ${props => props.theme.Color};
    border-right: 1.5px solid ${props => props.theme.Color};
  }

  .post-line {
    border-top: 1.5px solid ${props => props.theme.Color};
  }

  .hamburger, .top-hamburger {
    background-color: ${props => props.theme.Color};
    box-shadow: 0 7px 0 ${props => props.theme.Color}, 0 14px 0 ${props => props.theme.Color};
  }

  .category-container {
    color: ${props => props.theme.listBgColor};
    background-color: ${props => props.theme.categoryColor};
    border: 1px solid ${props => props.theme.listBgColor};
    box-shadow: 1px 1px 5px ${props => props.theme.listBgColor};
  }

  @media (max-width: 550px) {
    .post-line {
      border-top: 1px solid ${props => props.theme.Color};
    }

    // .list-text {
    //   background-color: ${props => props.theme.bgColor};
    //   border: 1px solid ${props => props.theme.Color};
    // }
    // .list-button {
    //   background-color: ${props => props.theme.bgColor};
    //   border: 1px solid ${props => props.theme.Color};
    // }
  }

    p::selection {
      color: ${props => props.theme.categoryColor};
      background-color: ${props => props.theme.Color};
    }

    .content-text, .date-created, .line, .button-container, .page-container, .title-container, .info-container, .intro-container, .explain-container, .connect-container, .warp-container, .line-color {
      opacity: ${props => props.theme.opacity};
    }

    .underline {
      text-decoration: wavy underline ${props => props.theme.lineColor};
    }

    .mobile-line {
      background-color: ${props => props.theme.lineColor};
    }
    .prev-post,
    .next-post {
      border: 1px solid ${props => props.theme.lineColor};
      background-color: ${props => props.theme.categoryColor};
    }
    .prev-post-title,
    .next-post-title {
      text-decoration: wavy underline ${props => props.theme.lineColor};
    }

    .top-title {
      opacity: ${props => props.theme.opacity};
    }

    .mode-button {
      opacity: ${props => props.theme.opacity};
    }

    header {
      display: flex;
      background-color: ${props => props.theme.bgColor};
    }
  }
`;

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
        // Don't render anything at compile time. Deferring rendering until we
        // know which theme to use on the client avoids incorrect initial
        // state being displayed.
        if (theme == null) {
          return null;
        }
        // console.log(theme);
        const isDarkMode = theme === "dark";
        return (
          <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
            <GlobalStyle />
            <div className="layout-container">
              <Top
                test={position > 50 ? cls : ""}
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
