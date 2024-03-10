import GlobalStyle from "../GlobalStyle";
import { lightTheme, darkTheme } from "../theme";
import "./Layout.css";
import HeaderMobile from "./Mobile/HeaderMobile";
import Footer from "./Footer";
// @ts-ignore
import { ThemeToggler } from "gatsby-plugin-dark-mode";
import React, { useEffect, useState } from "react";
import styled, { ThemeProvider } from "styled-components";

type Props = {
  children: React.ReactNode;
  pageNumber?: React.ReactNode;
  footerContent?: React.ReactNode;
};

interface ThemeProps {
  theme: string | null;
  toggleTheme: (theme?: string) => void;
}

const Layout: React.FC<Props> = ({ children, pageNumber, footerContent }) => {
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }: ThemeProps) => {
        if (theme == null) {
          return null;
        }
        return (
          <LayoutInternal
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
  pageNumber?: React.ReactNode;
  footerContent?: React.ReactNode;
  theme: string | null;
  toggleTheme: (theme?: string) => void;
};

const LayoutInternal: React.FC<LayoutInternalProps> = ({
  children,
  pageNumber,
  footerContent,
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
        {children}
        <Footer
          pageNumber={pageNumber}
          footerContent={footerContent}
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
