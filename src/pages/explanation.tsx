import SEO from "../SEO";
import Explanation from "../components/home/main/Explanation";
import Layout from "../components/Layout";
import React, { FC } from "react";
import { siteTitle } from "../lib/constants";

const Page: FC = () => {
  return (
    <>
      <SEO
        ogTitle={`일러두기 — ${siteTitle}`}
        ogType={"website"}
        ogURL={"https://blog.divdivdiv.com/explanation/"}
      />
      <Layout footerContent={"일러두기"}>
        <Explanation />
      </Layout>
    </>
  );
};

export default Page;
