import createCache from "@emotion/cache";
import { CacheProvider, EmotionCache } from "@emotion/react";
import "@fontsource/playfair-display";
// import "@fontsource/playfair-display/500.css";
// import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
// import "@fontsource/playfair-display/800.css";
// import "@fontsource/playfair-display/900.css";
import "@fontsource/raleway";
import "@fontsource/raleway/100.css";
import "@fontsource/raleway/200.css";
import "@fontsource/raleway/300.css";
import "@fontsource/raleway/500.css";
import "@fontsource/raleway/600.css";
import "@fontsource/raleway/700.css";
import "@fontsource/raleway/800.css";
import "@fontsource/raleway/900.css";

import React, { useEffect } from "react";

import AOS from "aos";

import { DefaultSeo } from "next-seo";
import { AppProps } from "next/app";

import { ChakraProvider } from "@chakra-ui/react";

import theme from "@definitions/chakra/theme";
import { ThemeColorProvider } from "@definitions/context/theme";

import Layout from "@layouts/default";

// Global CSS
import "@styles/global.scss";

import SEO from "../next-seo.config";

type ComponentWithPageLayout = AppProps & {
  Component: AppProps["Component"] & {
    PageLayout?: React.ComponentType<{ children: React.ReactNode }>;
  };
  emotionCache: EmotionCache;
};

const createEmotionCache = () => {
  return createCache({ key: "css" });
};

const clientSideEmotionCache = createEmotionCache();

function SencoApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: ComponentWithPageLayout): JSX.Element {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);

  return (
    <CacheProvider value={emotionCache}>
      <ThemeColorProvider>
        <ChakraProvider theme={theme}>
          <DefaultSeo {...SEO} />
          {Component.PageLayout ? (
            <Component.PageLayout>
              <Component {...pageProps} />
            </Component.PageLayout>
          ) : (
            <Layout>
              <Component {...pageProps} />
            </Layout>
          )}
        </ChakraProvider>
      </ThemeColorProvider>
    </CacheProvider>
  );
}

export default SencoApp;
