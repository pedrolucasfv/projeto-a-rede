import { ThemeProvider } from "styled-components";
import type { AppProps } from "next/app";

import theme from "@/styles/theme";
import GlobalStyles from "@/styles/global";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
