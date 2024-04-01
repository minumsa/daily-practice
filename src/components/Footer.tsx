import * as styles from "./Footer.module.css";
import React from "react";
import Hamburger from "./footer/Hamburger";

type DarkModeToggleButton = "밤" | "낮";
type Theme = "dark" | "light";

interface NavProps {
  pageNumber: React.ReactNode;
  footerContent: React.ReactNode;
  darkModeButton: DarkModeToggleButton;
  theme: Theme;
  toggleTheme: (theme?: string) => void;
}

const Footer = ({ pageNumber, footerContent, darkModeButton, theme, toggleTheme }: NavProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.middle}>
        <Hamburger />
        <div className={styles.footerContentContainer}>{footerContent}</div>
        <div className={styles.darkMode}>
          <div
            className={styles.toggleButton}
            onClick={() => {
              toggleTheme(theme === "dark" ? "light" : "dark");
            }}
          >
            {darkModeButton}
          </div>
        </div>
      </div>
      <div className={styles.blankSpace} />
      <div className={styles.pageNumber}>{pageNumber && `(${pageNumber})`}</div>
    </div>
  );
};

export default Footer;
