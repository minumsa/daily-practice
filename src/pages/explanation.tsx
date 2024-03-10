import SEO from "../SEO";
import Explanation from "../components/Home/Main/Explanation";
import Layout from "../components/Layout";
import React, { FC } from "react";
import { siteTitle } from "../lib/data";

const Page: FC = () => {
  return (
    <>
      <SEO
        ogTitle={`일러두기 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://14461.gatsbyjs.io/explanation/"}
      />
      <Layout footerContent={"일러두기"}>
        <Explanation />
      </Layout>
    </>
  );
};

export default Page;
