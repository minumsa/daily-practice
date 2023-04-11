import React, { FC } from "react";
import HomePage from "../../HomePage";
import Nav from "../../Nav";
import Connect from "../../HomePage/Main/Connect";
import ConnectInfo from "../../Nav/ConnectInfo";

const ConnectPage: FC = () => {
  return (
    <>
      <HomePage content={<Connect />} title={""} />
      <Nav page={""} info={<ConnectInfo />} />
    </>
  );
};

export default ConnectPage;
