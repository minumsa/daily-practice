import React, { FC } from "react";
import HomePage from "../../HomePage";
import Nav from "../../Nav";
import Explain from "../../HomePage/Main/Explain";
import ExplainInfo from "../../Nav/ExplainInfo";

const ExplainPage: FC = () => {
  return (
    <>
      <HomePage content={<Explain />} title={""} />
      <Nav page={""} info={<ExplainInfo />} />
    </>
  );
};

export default ExplainPage;
