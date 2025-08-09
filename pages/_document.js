// pages/_document.js
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';
// eslint-disable-next-line @next/next/no-script-in-document
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
         {/* Basic Meta Tags */}
         <meta charSet="utf-8" />
         <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
         <meta name="robots" content="index, follow" />
         <meta name="language" content="English" />
         <meta name="author" content="Freezelines Services India Pvt Ltd" />
         
         {/* Favicon */}
         <link rel="icon" type="image/png" sizes="32x32" href="/favicon.png" />
         <link rel="icon" type="image/png" sizes="16x16" href="/favicon.png" />
         <link rel="shortcut icon" href="/favicon.png" />
         <link rel="apple-touch-icon" href="/favicon.png" />
         
         {/* Canonical URL */}
         <link rel="canonical" href="https://www.freezelinesservices.com" />
         
         {/* Sitemap */}
         <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
         
         {/* Google Fonts */}
         <link rel="preconnect" href="https://fonts.googleapis.com" />
         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
         <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
         
         {/* JSON-LD Structured Data */}
         <script
           type="application/ld+json"
           dangerouslySetInnerHTML={{
             __html: JSON.stringify({
               "@context": "https://schema.org",
               "@type": "LocalBusiness",
               "name": "Freezelines Services India Pvt Ltd",
               "image": "https://www.freezelinesservices.com/logo-freezelines.svg",
               "description": "Professional HVAC, chiller services, repair, and maintenance across India. Specialized in air conditioning, heating, and cooling solutions.",
               "address": {
                 "@type": "PostalAddress",
                 "streetAddress": "Orchid Square",
                 "addressLocality": "Thane",
                 "addressRegion": "Maharashtra", 
                 "addressCountry": "IN"
               },
               "telephone": "+91 7798486823",
               "email": "customersupport@freezelinesservices.com",
               "url": "https://www.freezelinesservices.com",
               "openingHours": "Mo-Sa 09:00-18:00",
               "priceRange": "$$",
               "serviceArea": {
                 "@type": "Country",
                 "name": "India"
               },
               "hasOfferCatalog": {
                 "@type": "OfferCatalog",
                 "name": "HVAC Services",
                 "itemListElement": [
                   {
                     "@type": "Offer",
                     "itemOffered": {
                       "@type": "Service",
                       "name": "Chiller Maintenance & Repair"
                     }
                   },
                   {
                     "@type": "Offer", 
                     "itemOffered": {
                       "@type": "Service",
                       "name": "Air Conditioning Installation"
                     }
                   },
                   {
                     "@type": "Offer",
                     "itemOffered": {
                       "@type": "Service", 
                       "name": "HVAC System Maintenance"
                     }
                   },
                   {
                     "@type": "Offer",
                     "itemOffered": {
                       "@type": "Service",
                       "name": "Pump & Motor Repair"
                     }
                   }
                 ]
               }
             })
           }}
         />
         
         {/* Google tag (gtag.js) */}
         {/* Google Analytics */}
         <Script
            strategy="afterInteractive"
            src="https://www.googletagmanager.com/gtag/js?id=G-LWYF3L6G2M"
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-LWYF3L6G2M');
              `,
            }}
          />
          {/* Google Tag Manager */}
          <Script
           id="gtm-script"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-PMB4SW2J');`,
            }}
          />
          {/* End Google Tag Manager */}
        </Head>
        <body>
          {/* Google Tag Manager (noscript) */}
          <noscript>
            <iframe
              src="https://www.googletagmanager.com/ns.html?id=GTM-PMB4SW2J"
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* End Google Tag Manager (noscript) */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
