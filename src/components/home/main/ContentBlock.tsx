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
  const contentList = sortedData.map((item: BlockItem) => (
    <Link to={`/posts${item.slug}`} key={item.id}>
      <div className={styles.textWrapper}>
        <span className={styles.title}>{item.title}</span>
        <sup className={styles.titleSup}>{item.page}</sup>
      </div>
    </Link>
  ));

  return (
    <div className={styles.container}>
      <div className={styles.totalPost}>
        총 <span className={styles.postCount}>{totalDataCount}개</span>의 글이 있습니다.
      </div>
      <div className={styles.listTextContainer}>{contentList}</div>
    </div>
  );
};
