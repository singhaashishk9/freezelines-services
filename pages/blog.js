import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogTwo from "@/components/blog-two";

const Blog = () => {
  return (
    <MenuContextProvider>
      <Layout 
        PageTitle="Blog" 
        metaDescription="Read the latest insights and tips from Freezelines Services India Pvt Ltd on HVAC systems, chiller maintenance, air conditioning efficiency, and industry best practices for heating and cooling solutions."
        metaKeywords="HVAC blog, chiller maintenance tips, air conditioning efficiency, heating cooling insights, HVAC industry news, maintenance best practices, energy saving tips"
        canonicalUrl="https://www.freezelinesservices.com/blog"
      >
        <HeaderOne />
        <PageHeader title="Blog Grid" name="Blog" />
        <BlogTwo />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Blog;
