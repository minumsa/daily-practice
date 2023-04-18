import React from "react";
import Main from "./HomePage/Main";
import Title from "./HomePage/Title";
import "./HomePage.css";

const HomePage = ({ content, title, day }: { content: React.ReactNode; title: React.ReactNode; day: any }) => {
  return (
    <div className="homepage-container">
      <div className="body-container">
        <Main content={content} day={day} />
        <Title title={title} />
      </div>
    </div>
  );
};

export default HomePage;
