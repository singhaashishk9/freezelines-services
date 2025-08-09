import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";
import { MenuContext } from "@/context/menu-context";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Script from 'next/script';

const Layout = ({ 
  PageTitle, 
  metaDescription, 
  metaKeywords,
  canonicalUrl,
  ogImage,
  children 
}) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { menuStatus } = useContext(MenuContext);
  
  // Default SEO values
  const defaultDescription = "Freezelines Services India Pvt Ltd - Professional HVAC, chiller services, repair, and maintenance across India. Expert solutions for air conditioning, heating, and cooling systems.";
  const defaultKeywords = "HVAC services, chiller repair, air conditioning, heating services, cooling systems, maintenance, India, Mumbai, Thane, commercial HVAC, industrial cooling";
  const siteUrl = "https://www.freezelinesservices.com";
  
  const pageDescription = metaDescription || defaultDescription;
  const pageKeywords = metaKeywords || defaultKeywords;
  const pageCanonical = canonicalUrl || siteUrl;
  const pageOgImage = ogImage || `${siteUrl}/logo-freezelines.svg`;
  
  const handleScrollTop = () => {
    if (window.scrollY > 70) {
      setScrollTop(true);
    } else if (window.scrollY < 70) {
      setScrollTop(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, [scrollTop]);

  // Clean up body class on unmount
  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined') {
        document.body.classList.remove('mobile-menu-open');
      }
    };
  }, []);

  return (
    <Fragment>
      <Head>
        <title>{`${PageTitle} - Freezelines Services India Pvt Ltd | Professional HVAC Solutions`}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content={`${PageTitle} - Freezelines Services India Pvt Ltd`} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:image" content={pageOgImage} />
        <meta property="og:url" content={pageCanonical} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Freezelines Services India Pvt Ltd" />
        <meta property="og:locale" content="en_IN" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${PageTitle} - Freezelines Services India Pvt Ltd`} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={pageOgImage} />
        
        {/* Additional Meta Tags */}
        <meta name="geo.region" content="IN-MH" />
        <meta name="geo.placename" content="Thane, Maharashtra" />
        <meta name="geo.position" content="19.2183;72.9781" />
        <meta name="ICBM" content="19.2183, 72.9781" />
        
        {/* Business Contact Info */}
        <meta name="contact" content="customersupport@freezelinesservices.com" />
        <meta name="phone" content="+91 7798486823" />
        
        {/* Page specific canonical URL */}
        <link rel="canonical" href={pageCanonical} />
      </Head>
      {process.env.NEXT_PUBLIC_ADSENSE_PUB_ID && (
        <Script
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          onLoad={() => {
            (adsbygoogle = window.adsbygoogle || []).push({
              google_ad_client: process.env.NEXT_PUBLIC_ADSENSE_PUB_ID,
              enable_page_level_ads: true,
            });
          }}
        />
      )}
      <GoogleAnalytics />
      {/* <AdSense/> */}
      <div id="wrapper">{children}</div>

      {true === menuStatus ? <MobileMenu /> : null}
      {scrollTop === true ? (
        <ScrollLink
          to="wrapper"
          smooth={true}
          duration={500}
          id="backToTop"
          className="scroll-to-top scroll-to-target"
        >
          <i className="fa fa-angle-up"></i>
        </ScrollLink>
      ) : null}
    </Fragment>
  );
};

export default Layout;
