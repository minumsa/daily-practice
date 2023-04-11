import React, { FC } from "react";
import HomePage from "../../HomePage";
import Nav from "../../Nav";
import Warp from "../../HomePage/Main/Warp";

const WarpPage: FC = () => {
  return (
    <>
      <HomePage content={<Warp />} title={""} />
      <Nav page={""} info={""} />
    </>
  );
};

export default WarpPage;
