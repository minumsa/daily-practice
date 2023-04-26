import React from "react";
import Main  from "./HomePage/Main";
import Title from "./HomePage/Title";
import "./HomePage.css";

interface HomePageProps {
  content?: React.ReactNode;
  title?: React.ReactNode;
  day?: string;
  line?: React.ReactNode;
  prev?: React.ReactNode;
  next?: React.ReactNode;
  middle?: React.ReactNode;
}

const HomePage = ({ content, title, ...props }: HomePageProps) => {
  return (
    <div className="homepage-container">
      <div className="body-container">
        <Main content={content} {...props} />
        <Title title={title} />
      </div>
    </div>
  );
};

export default HomePage;
