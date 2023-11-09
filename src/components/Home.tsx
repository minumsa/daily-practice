import "./Home.css";
import Main from "./Home/Main";
import Title from "./Home/Title";
import React from "react";

interface HomeProps {
  content?: React.ReactNode;
  title?: React.ReactNode;
  day?: string;
  footerLineMobile?: React.ReactNode;
  arrowLeft?: React.ReactNode;
  createDate?: React.ReactNode;
  arrowRight?: React.ReactNode;
}

const Home = ({ content, title, ...props }: HomeProps) => {
  return (
    <div className="home-container">
      <div className="body-container">
        <Main content={content} {...props} />
        <Title title={title} />
      </div>
    </div>
  );
};

export default Home;
