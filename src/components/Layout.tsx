import GlobalStyle from "../GlobalStyle";
import { lightTheme, darkTheme } from "../theme";
import "./Layout.css";
import Footer from "./Footer";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import DivisionMarker from "./home/main/DivisionMarker";
import Title from "./home/title/Title";
import MobileHeader from "./mobile/MobileHeader";

type LayoutProps = {
  children: React.ReactNode;
  title?: string;
  pageNumber?: React.ReactNode;
  footerContent?: React.ReactNode;
};

type Theme = "dark" | "light";

interface ThemeProps {
  theme: Theme;
  toggleTheme: (theme?: string) => void;
}

const Layout = ({ children, title, pageNumber, footerContent }: LayoutProps) => {
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
            footerContent={footerContent}
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
  footerContent?: React.ReactNode;
  theme: Theme;
  toggleTheme: (theme?: string) => void;
};

const LayoutInternal = ({
  children,
  title,
  pageNumber,
  footerContent,
  theme,
  toggleTheme,
}: LayoutInternalProps) => {
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
  const darkModeButton = isDarkMode ? "밤" : "낮";

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="layout-container">
        {/* 모바일 Header */}
        <MobileHeader
          header={currentPosition > 50 ? showHeader : "visible"}
          theme={theme}
          toggleTheme={toggleTheme}
          darkModeButton={darkModeButton}
        />
        <div className="home-container">
          <div className="body-container">
            <div className="main-container">
              <DivisionMarker />
              <div className="content-container">{children}</div>
              <DivisionMarker />
            </div>
            <Title title={title} />
          </div>
        </div>
        {/* 데스크톱 Footer */}
        <Footer
          pageNumber={pageNumber}
          footerContent={footerContent}
          darkModeButton={darkModeButton}
          theme={theme}
          toggleTheme={toggleTheme}
        />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
