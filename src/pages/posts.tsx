import Home from "../components/Home";
import Layout from "../components/Layout";
import FooterDesktop from "../components/Nav/PostInfo";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <Layout footer={<FooterDesktop />}>
      <Home />
    </Layout>
  );
};

export default Page;
