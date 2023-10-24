import "@aws-amplify/ui-react/styles.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { ThemeProvider } from "@aws-amplify/ui-react";
import studioTheme from "@/ui-components/studioTheme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />
      </Head>
      <ThemeProvider theme={studioTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
