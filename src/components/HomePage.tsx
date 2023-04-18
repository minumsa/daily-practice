import React from "react";
import Main from "./HomePage/Main";
import Title from "./HomePage/Title";
import "./HomePage.css";

const HomePage = ({ content, title, day, line }: { content: React.ReactNode; title: React.ReactNode; day: any; line: any }) => {
  return (
    <div className="homepage-container">
      <div className="body-container">
        <Main content={content} day={day} line={line} />
        <Title title={title} />
      </div>
    </div>
  );
};

export default HomePage;
