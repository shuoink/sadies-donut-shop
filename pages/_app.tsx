import {VFC} from 'react';
import type {AppProps} from 'next/app';
import '../styles/index.css';

const App: VFC<AppProps> = ({Component, pageProps}) => (
  <Component {...pageProps} />
);

export default App;
