import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import BlogDetails from "@/components/blog-details";

const BlogDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout 
        PageTitle="Blog Details" 
        metaDescription="Detailed insights and expert advice from Freezelines Services India Pvt Ltd on HVAC maintenance, chiller optimization, air conditioning best practices, and energy-efficient cooling solutions."
        metaKeywords="HVAC maintenance guide, chiller optimization tips, air conditioning best practices, energy efficient cooling, detailed HVAC insights, professional maintenance advice"
        canonicalUrl="https://www.freezelinesservices.com/blog-details"
      >
        <HeaderOne />
        <PageHeader title="Blog Details" name="Blog" />
        <BlogDetails />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default BlogDetailsPage;
