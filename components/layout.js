import React, { Fragment, useContext, useEffect, useState } from "react";
import Head from "next/head";
import { Link as ScrollLink } from "react-scroll";
import MobileMenu from "./mobile-menu";
import { MenuContext } from "@/context/menu-context";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import Script from 'next/script';

const Layout = ({ PageTitle, children }) => {
  const [scrollTop, setScrollTop] = useState(false);
  const { menuStatus } = useContext(MenuContext);
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

  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <Fragment>
      <Head>
        <title>
          {PageTitle} - Freezelines Services India Pvt.Ltd. - Heating & Air Conditioning Services NextJS
          Template{" "}
        </title>
        
      </Head>
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
