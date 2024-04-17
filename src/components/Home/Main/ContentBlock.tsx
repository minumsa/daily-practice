import React from "react";
import { Link } from "gatsby";
import * as styles from "./ContentBlock.module.css";

interface BlockItem {
  date: string;
  id: string;
  page: number;
  slug: string;
  title: string;
}

interface ContentBlockProps {
  totalDataCount: number;
  sortedData: BlockItem[];
}

export const ContentBlock = ({ totalDataCount, sortedData }: ContentBlockProps) => {
  function formattedDate(date: string) {
    const newDate = new Date(date);
    return `${newDate.getFullYear().toString().slice(-2)}${(newDate.getMonth() + 1)
      .toString()
      .padStart(2, "0")}${newDate.getDate().toString().padStart(2, "0")}`;
  }

  const contentList = sortedData.map((item: BlockItem) => {
    const { id, title, date } = item;

    return (
      <Link to={`/posts${item.slug}`} key={id}>
        <div className={styles.textWrapper}>
          <span className={styles.title}>{title}</span>
          <sup className={styles.titleSup}>{formattedDate(date)}</sup>
        </div>
      </Link>
    );
  });

  return (
    <div className={styles.container}>
      <div className={styles.totalPost}>
        총 <span className={styles.postCount}>{totalDataCount}개</span>의 글이 있습니다.
      </div>
      <div className={styles.listTextContainer}>{contentList}</div>
    </div>
  );
};
