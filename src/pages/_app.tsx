import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";
import Head from 'next/head'

import theme from "@/styles/theme";
import GlobalStyles from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
       <Head>
        <title>Projeto A Rede</title>
        <meta name="theme-color" content="#191919" />
        <link rel="shortcut icon" href="/img/logo.png" />
        <meta
          name="description"
          content="Junte-se a nós para fazer a diferença na vida de quem mais precisa! "
        />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
