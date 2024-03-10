import GlobalStyle from "../GlobalStyle";
import { lightTheme, darkTheme } from "../theme";
import "./Layout.css";
import HeaderMobile from "./Mobile/HeaderMobile";
import Footer from "./Footer";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import Main from "./Home/Main";
import Title from "./Home/Title";
import DivisionMarker from "./Home/Main/DivisionMarker";
import FooterMobile from "./Mobile/FooterMobile";

type Props = {
  children: React.ReactNode;
  title?: string;
  pageNumber?: React.ReactNode;
  footerText?: React.ReactNode;
};

interface ThemeProps {
  theme: string | null;
  toggleTheme: (theme?: string) => void;
}

const Layout: React.FC<Props> = ({ children, title, pageNumber, footerText }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: ThemeProps) => {
        if (theme == null) {
          return null;
        }
        return (
          <LayoutInternal
            title={title}
            pageNumber={pageNumber}
            footerText={footerText}
            theme={theme}
            toggleTheme={toggleTheme}
          >
            {children}
          </LayoutInternal>
        );
      }}
    </ThemeToggler>
  );
};

type LayoutInternalProps = {
  children: React.ReactNode;
  title?: string;
  pageNumber?: React.ReactNode;
  footerText?: React.ReactNode;
  theme: string | null;
  toggleTheme: (theme?: string) => void;
};

const LayoutInternal: React.FC<LayoutInternalProps> = ({
  children,
  title,
  pageNumber,
  footerText,
  theme,
  toggleTheme,
}) => {
  const [currentPosition, setCurrentPosition] = useState(0);
  const [isScrollUp, setIsScrollUp] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.pageYOffset;
      setIsScrollUp(currentPosition > position);
      setCurrentPosition(position);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentPosition]);

  const showHeader = isScrollUp ? "visible" : "hidden";
  const isDarkMode = theme === "dark";
  const darkModeToggleButton = isDarkMode ? "밤" : "낮";

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="layout-container">
        <HeaderMobile
          header={currentPosition > 50 ? showHeader : "visible"}
          darkmodeButton={
            <div
              className="mode-button"
              onClick={() => {
                toggleTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {darkModeToggleButton}
            </div>
          }
        />
        <div className="home-container">
          <div className="body-container">
            <div className="main-container">
              <DivisionMarker />
              <div className="content-container">{children}</div>
              <div className="footer-mobile-container">
                {/* FIXME: 나중에 살리기 */}
                {/* <FooterMobile {...props} /> */}
              </div>
              <DivisionMarker />
            </div>
            {/* FIXME: 나중에 살리기 */}
            <Title title={title} />
          </div>
        </div>
        <Footer
          pageNumber={pageNumber}
          footerContent={footerText}
          darkModeButton={
            <div
              className="mode-button"
              onClick={() => {
                toggleTheme(theme === "dark" ? "light" : "dark");
              }}
            >
              {darkModeToggleButton}
            </div>
          }
        />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
