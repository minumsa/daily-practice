import Home from "../components/Home";
import Layout from "../components/Layout";
import Footer from "../components/Nav/PostInfo";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <Layout footer={<Footer />}>
      <Home />
    </Layout>
  );
};

export default Page;
