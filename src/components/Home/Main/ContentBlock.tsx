import React from "react";
import { Link } from "gatsby";
import "./ContentBlock.css";

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
      <div className="list-text">
        <span style={{ display: "inline-block" }}>{item.title}</span>
        <sup className="list-sup">{item.page}</sup>
      </div>
    </Link>
  ));

  return (
    <div className="list-container">
      <div className="total-post">
        총 <span className="post-count">{totalDataCount}개</span>의 글이 있습니다.
      </div>
      <div className="list-text-container">{contentList}</div>
    </div>
  );
};
