import { Link } from "gatsby";
import "./MobileFooter.css";
import React from "react";
import PrevButton from "../Footer/PrevButton";
import NextButton from "../Footer/NextButton";

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
    <div className="footer-mobile-container">
      <div className="footer-line-mobile-container">
        <div className="footer-line-mobile" />
      </div>
      <div className="footer-content-container">
        <ArrowLeft />
        <div className="create-date">작성일: {createDate}</div>
        <ArrowRight />
      </div>
    </div>
  );
};

export default MobileFooter;
