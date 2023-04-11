import React from "react";
import Main from "./HomePage/Main";
import Title from "./HomePage/Title";
import "./HomePage.css";

const HomePage = ({ content, title }: { content: React.ReactNode; title: React.ReactNode }) => {
  return (
    <div className="homepage-container">
      <div className="body-container">
        <Main content={content} />
        <Title title={title} />
      </div>
    </div>
  );
};

export default HomePage;
