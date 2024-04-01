import { Link } from "gatsby";
import "./FooterNav.css";
import React from "react";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

type ItemSlug = string | undefined;

interface FooterNavProps {
  createDate?: React.ReactNode;
  prevItemSlug: ItemSlug;
  nextItemSlug: ItemSlug;
}

const FooterNav = ({ createDate, prevItemSlug, nextItemSlug }: FooterNavProps) => {
  const ArrowButton = (itemSlug: ItemSlug) => {
    const isPrevItemSlug = itemSlug === prevItemSlug;
    return itemSlug ? (
      <Link to={"/posts" + itemSlug}>{isPrevItemSlug ? <PrevButton /> : <NextButton />}</Link>
    ) : (
      <div onClick={() => alert(`${isPrevItemSlug ? "첫 번째" : "마지막"} 게시물입니다.`)}>
        {isPrevItemSlug ? <PrevButton /> : <NextButton />}
      </div>
    );
  };

  return (
    <div className="footer-container">
      {ArrowButton(prevItemSlug)}
      <div className="create-date">작성일: {createDate}</div>
      {ArrowButton(nextItemSlug)}
    </div>
  );
};

export default FooterNav;
