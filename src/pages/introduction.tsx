import SEO from "../SEO";
import Home from "../components/Home";
import Introduction from "../components/Home/Main/Introduction";
import Layout from "../components/Layout";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <>
      <SEO
        title={"일상연습"}
        ogTitle={"소개 — 일상연습"}
        ogType={"website"}
        ogUrl={"https://14461.gatsbyjs.io/introduction"}
      />
      <Layout footer={"소개"}>
        <Home content={<Introduction />} title={null} />
      </Layout>
    </>
  );
};

export default Page;
