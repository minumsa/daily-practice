import React, { FC } from "react";
import HomePage from "../../HomePage";
import Nav from "../../Nav";
import IntroInfo from "../../Nav/IntroInfo";
import Intro from "../../HomePage/Main/Intro";

const IntroPage: FC = () => {
  return (
    <>
      <HomePage content={<Intro />} title={""} />
      <Nav page={""} info={<IntroInfo />} />
    </>
  );
};

export default IntroPage;
