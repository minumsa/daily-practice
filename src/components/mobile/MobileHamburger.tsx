import * as styles from "./MobileHamburger.module.css";
import { Link } from "gatsby";
import React, { useState } from "react";
import { Category } from "../footer/Category";

interface HeaderMobileProps {
  header: string;
  theme: any;
  toggleTheme: any;
  darkModeButton: any;
}

const MobileHamburger = ({ header, theme, toggleTheme, darkModeButton }: HeaderMobileProps) => {
  const [showCategory, setShowCategory] = useState(false);

  return (
    <header className={header}>
      <div className={styles.container}>
        <div
          className={styles.hamburgerMobileContainer}
          onClick={() => {
            setShowCategory(!showCategory);
          }}
        >
          <div className={styles.hamburgerMobile}>{showCategory ? <Category /> : null}</div>
        </div>
        <div className={styles.title}>
          <Link to="/">일상연습</Link>
        </div>
        <div className={styles.headerDarkmode}>
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
    </header>
  );
};

export default MobileHamburger;
