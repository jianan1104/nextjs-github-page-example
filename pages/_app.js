import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../style/global.css';
import ScrollToTop from "react-scroll-to-top";
import NextNProgress from "nextjs-progressbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <NextNProgress />
        <Component {...pageProps} />
        <ScrollToTop smooth />
    </>
    
    )
}

export default MyApp
