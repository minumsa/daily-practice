import { Link } from "gatsby";
import "./FooterNav.css";
import React from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

interface FooterNavProps {
  createDate?: React.ReactNode;
  prevItemSlug: string | undefined;
  nextItemSlug: string | undefined;
}

const FooterNav = ({ createDate, prevItemSlug, nextItemSlug }: FooterNavProps) => {
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
    <div className="footer-container">
      {/* 데스크톱 */}
      <ArrowLeft />
      <div className="create-date">작성일: {createDate}</div>
      <ArrowRight />
    </div>
  );
};

export default FooterNav;
