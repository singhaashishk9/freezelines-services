import "bootstrap/dist/css/bootstrap.min.css";
import "node_modules/swiper/swiper-bundle.min.css";
import "@fontsource/josefin-sans/100.css";
import "@fontsource/josefin-sans/300.css";
import "@fontsource/josefin-sans/400.css";
import "@fontsource/josefin-sans/600.css";
import "@fontsource/josefin-sans/600-italic.css";
import "@fontsource/josefin-sans/700.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/fontello.css";
import "@/css/style.css";
import "@/css/responsive.css";
import {useEffect} from 'react';

import TagManager from 'react-gtm-module';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-PMB4SW2J' });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
