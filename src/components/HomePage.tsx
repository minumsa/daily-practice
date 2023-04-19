import React from "react";
import Main from "./HomePage/Main";
import Title from "./HomePage/Title";
import "./HomePage.css";

interface homepage {
  content: React.ReactNode;
  title: React.ReactNode;
  day: any;
  line: any;
  prev: any;
  next: any;
}

const HomePage = ({ content, title, day, line, prev, next }: homepage) => {
  return (
    <div className="homepage-container">
      <div className="body-container">
        <Main content={content} day={day} line={line} prev={prev} next={next} />
        <Title title={title} />
      </div>
    </div>
  );
};

export default HomePage;
