import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import ContactThree from "@/components/contact-three";
import ContactMap from "@/components/contact-map";
import Footer from "@/components/footer";

const Contact = () => {
  return (
    <MenuContextProvider>
      <Layout 
        PageTitle="Contact Us" 
        metaDescription="Contact Freezelines Services India Pvt Ltd for professional HVAC services. Get free quotes for chiller repair, air conditioning installation, and maintenance. Call +91 7798486823 or email us today."
        metaKeywords="contact HVAC services, get free quote, chiller repair contact, air conditioning installation, HVAC maintenance inquiry, emergency service contact, Thane HVAC company"
        canonicalUrl="https://www.freezelinesservices.com/contact"
      >
        <HeaderOne />
        <PageHeader title="Contact Us" name="Contact" />
        <ContactThree />
        <ContactMap />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default Contact;
