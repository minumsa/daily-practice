import Home from "../components/Home";
import Layout from "../components/Layout";
import FooterContent from "../components/Nav/PostInfo";
import React, { FC } from "react";

const Page: FC = () => {
  return (
    <Layout footerContent={<FooterContent />}>
      <Home />
    </Layout>
  );
};

export default Page;
