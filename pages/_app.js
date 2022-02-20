import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import '../style/global.css';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addLocale(en)

function MyApp({ Component, pageProps }) {
  return (
    <>
        <Component {...pageProps} />
    </>
    
    )
}

export default MyApp
