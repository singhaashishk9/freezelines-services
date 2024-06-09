// components/AdSense.js
import React, { useEffect } from 'react';
import Script from 'next/script';

const AdSense = () => {
  useEffect(() => {
    try {
      (adsbygoogle = window.adsbygoogle || []).push({});
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client={process.env.NEXT_PUBLIC_ADSENSE_PUB_ID}
        data-ad-slot={process.env.NEXT_PUBLIC_ADSENSE_AD_SLOT}
        data-ad-format="auto"
      ></ins>
    </>
  );
};

export default AdSense;
