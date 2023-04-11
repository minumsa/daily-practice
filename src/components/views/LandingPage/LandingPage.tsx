import React, { FC } from "react";
import HomePage from "../../HomePage";
import Nav from "../../Nav";
import LandingInfo from "../../Nav/LandingInfo";
import TitleList from "../../HomePage/Main/TitleList";

const LandingPage: FC = () => {
  return (
    <>
      <HomePage content={<TitleList />} title={""} />
      <Nav page={""} info={<LandingInfo />} />
    </>
  );
};

export default LandingPage;
