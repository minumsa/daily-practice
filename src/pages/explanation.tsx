import SEO from "../SEO";
import Home from "../components/Home";
import Explanation from "../components/Home/Main/Explanation";
import Layout from "../components/Layout";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <>
      <SEO
        title={"일상연습"}
        ogTitle={"일러두기 — 일상연습"}
        ogType={"website"}
        ogUrl={"https://14461.gatsbyjs.io/explanation/"}
      />
      <Layout info={"일러두기"}>
        <Home content={<Explanation />} />
      </Layout>
    </>
  );
};

export default Page;
