
/* eslint-disable react/jsx-props-no-spreading */

import { ChakraProvider } from "@chakra-ui/react";
import { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { AppProps } from "next/app";
import dynamic from "next/dynamic";
import Head from "next/head";

import "@fontsource/lexend/latin.css";

import MainProvider from "hooks";
import createEmotionCache from "styles/createEmotionCache";
import customTheme from "styles/customTheme";

const Layout = dynamic(() => import("components/layout"));

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp = ({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: MyAppProps) => {

  return (
    <MainProvider>
      <CacheProvider value={emotionCache}>
        <ChakraProvider theme={customTheme}>
          <Head>
            <meta
              name="viewport"
              content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
            />
          </Head>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </ChakraProvider>
      </CacheProvider>
    </MainProvider>
  );
};

MyApp.defaultProps = {
  emotionCache: clientSideEmotionCache,
};

export default MyApp;