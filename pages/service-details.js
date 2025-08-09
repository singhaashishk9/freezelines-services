import React from "react";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import MenuContextProvider from "@/context/menu-context";
import PageHeader from "@/components/page-header";
import Footer from "@/components/footer";
import ContactTwo from "@/components/contact-two";
import ServiceDetails from "@/components/service-details";

const ServiceDetailsPage = () => {
  return (
    <MenuContextProvider>
      <Layout 
        PageTitle="Service Details" 
        metaDescription="Detailed information about professional HVAC services from Freezelines Services India Pvt Ltd. Learn about our chiller maintenance, air conditioning installation, repair services, and technical specifications."
        metaKeywords="service details, HVAC service specifications, chiller maintenance details, air conditioning installation process, repair service information, technical HVAC services"
        canonicalUrl="https://www.freezelinesservices.com/service-details"
      >
        <HeaderOne />
        <PageHeader title="Service Details" name="Service" />
        <ServiceDetails />
        <ContactTwo />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default ServiceDetailsPage;
