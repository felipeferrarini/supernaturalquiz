import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../styles/global';
import { AppProps } from 'next/app';
import db from '../../db.json';
import Router from 'next/router';
import NProgress from 'nprogress';

export interface ThemeProps {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      verde: string;
      verdeClaro: string;
      roxo: string;
      roxoClaro: string;
      mainBg: string;
      mainBg2: string;
      contrastText: string;
      wrong: string;
      success: string;
    };
    borderRadius: string;
  };
}

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <ThemeProvider theme={db.theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;
