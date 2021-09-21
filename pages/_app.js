import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from "next/head";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #FAFAFA;
    font-family: Futura;
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>DocuCode</title>
      </Head>
      <GlobalStyle/>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
