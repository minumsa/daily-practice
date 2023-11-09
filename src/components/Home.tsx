import "./Home.css";
import Main from "./Home/Main";
import Title from "./Home/Title";
import React from "react";

interface HomeProps {
  content?: React.ReactNode;
  title?: React.ReactNode;
  footerLineMobile?: React.ReactNode;
  arrowLeftMobile?: React.ReactNode;
  createDateMobile?: React.ReactNode;
  arrowRightMobile?: React.ReactNode;
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
