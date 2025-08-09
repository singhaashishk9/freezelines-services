import React from "react";
import MenuContextProvider from "@/context/menu-context";
import Layout from "@/components/layout";
import HeaderOne from "@/components/header-one";
import Footer from "@/components/footer";
import SliderOne from "@/components/slider-one";
import FeatureOne from "@/components/feature-one";
import AboutOne from "@/components/about-one";
import ServiceOne from "@/components/service-one";
import CtaOne from "@/components/cta-one";
import FunfactOne from "@/components/funfact-one";
import GalleryOne from "@/components/gallery-one";
import TestimonialsOne from "@/components/testimonials-one";
import SponsorOne from "@/components/sponsor-one";
import CtaTwo from "@/components/cta-two";
import BlogOne from "@/components/blog-one";
import ContactOne from "@/components/contact-one";
const HomeOne = () => {
  return (
    <MenuContextProvider>
      <Layout 
        PageTitle="Home" 
        metaDescription="Freezelines Services India Pvt Ltd - Leading provider of professional HVAC, chiller services, repair, and maintenance across India. Get expert solutions for air conditioning, heating, and cooling systems with 24/7 emergency service."
        metaKeywords="HVAC services India, chiller repair, air conditioning installation, heating services, cooling systems maintenance, emergency HVAC repair, commercial HVAC, industrial cooling, Thane Maharashtra"
        canonicalUrl="https://www.freezelinesservices.com/"
      >
        <HeaderOne />
        <SliderOne />
        <FeatureOne />
        <AboutOne />
        <ServiceOne />
        <CtaOne />
        {/* <FunfactOne /> */}
        {/* <GalleryOne /> */}
        <TestimonialsOne />
        {/* <SponsorOne /> */}
        <CtaTwo />
        <BlogOne />
        <ContactOne />
        <Footer />
      </Layout>
    </MenuContextProvider>
  );
};

export default HomeOne;
