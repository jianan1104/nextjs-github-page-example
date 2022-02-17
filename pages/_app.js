import React from 'react';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import '../style/global.css';
import MenuComponent from '../components/Menu';
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en.json'
TimeAgo.addLocale(en)

function MyApp({ Component, pageProps }) {
  return (
    <Container>
      <MenuComponent />
        <Component {...pageProps} />
    </Container>
    )
}

export default MyApp
