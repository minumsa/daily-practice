import { Link } from "gatsby";
import * as styles from "./MobileFooter.module.css";
import React from "react";
import NextButton from "../footer/NextButton";
import PrevButton from "../footer/PrevButton";

interface FooterMobileProps {
  createDate?: React.ReactNode;
  prevItemSlug: string | undefined;
  nextItemSlug: string | undefined;
}

const MobileFooter = ({ createDate, prevItemSlug, nextItemSlug }: FooterMobileProps) => {
  const ArrowLeft = () => {
    return prevItemSlug ? (
      <Link to={"/posts" + prevItemSlug}>
        <PrevButton />
      </Link>
    ) : (
      <div onClick={() => alert("첫 번째 게시물입니다.")}>
        <PrevButton />
      </div>
    );
  };

  const ArrowRight = () => {
    return nextItemSlug ? (
      <Link to={"/posts" + nextItemSlug}>
        <NextButton />
      </Link>
    ) : (
      <div onClick={() => alert("마지막 게시물입니다.")}>
        <NextButton />
      </div>
    );
  };
  return (
    <div className={styles.container}>
      <div className={styles.footerLineMobileContainer}>
        <div className={styles.footerLineMobile} />
      </div>
      <div className={styles.footerContentContainer}>
        <ArrowLeft />
        <div className={styles.createDate}>작성일: {createDate}</div>
        <ArrowRight />
      </div>
    </div>
  );
};

export default MobileFooter;
