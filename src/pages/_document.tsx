import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import db from '../../db.json';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta name="title" content={db.title} />
          <meta name="description" content={db.description} />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://supernaturalquiz.vercel.app/"
          />
          <meta property="og:title" content={db.title} />
          <meta property="og:description" content={db.description} />
          <meta property="og:image" content="/print.JPG" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://supernaturalquiz.vercel.app/"
          />
          <meta property="twitter:title" content={db.title} />
          <meta property="twitter:description" content={db.description} />
          <meta property="twitter:image" content="/print.JPG" />

          <link
            href="https://fonts.googleapis.com/css?family=Roboto:200,300,400,500,600,700,800,900"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

MyDocument.getInitialProps = async ctx => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      )
    };
  } finally {
    sheet.seal();
  }
};
