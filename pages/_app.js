import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../style/global.css';
import ScrollToTop from "react-scroll-to-top";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
        <ScrollToTop smooth />
    </>
    
    )
}

export default MyApp
