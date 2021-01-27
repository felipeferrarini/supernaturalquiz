import React from 'react';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="pt">
        <Head>
          <meta charSet="utf-8" />
          <meta name="title" content="AluraQuiz - Supernatural" />
          <meta
            name="description"
            content="Quiz criado como projeto inicial da Imersão React 2ª Edição: NextJs realizado pela Alura. Para você que assim como eu não perde um episódio, teste seus conhecimentos sobre os irmãos winchester!"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content="https://supernaturalquiz.vercel.app/"
          />
          <meta property="og:title" content="AluraQuiz - Supernatural" />
          <meta
            property="og:description"
            content="Quiz criado como projeto inicial da Imersão React 2ª Edição: NextJs realizado pela Alura. Para você que assim como eu não perde um episódio, teste seus conhecimentos sobre os irmãos winchester!"
          />
          <meta property="og:image" content="" />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://supernaturalquiz.vercel.app/"
          />
          <meta property="twitter:title" content="AluraQuiz - Supernatural" />
          <meta
            property="twitter:description"
            content="Quiz criado como projeto inicial da Imersão React 2ª Edição: NextJs realizado pela Alura. Para você que assim como eu não perde um episódio, teste seus conhecimentos sobre os irmãos winchester!"
          />
          <meta property="twitter:image" content="" />

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
