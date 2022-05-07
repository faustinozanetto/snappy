import '@fontsource/jetbrains-mono';
import '@fontsource/courier-prime';
import '@fontsource/fira-code';
import '@fontsource/mononoki';
import '@fontsource/poppins';
import '@fontsource/space-mono';
import '@fontsource/source-code-pro';

import { ChakraProvider } from '@chakra-ui/react';

import { persistor, store } from '@state/redux/snappyStore';
import theme from '@styles/themes';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import GoogleAnalytics from '@components/google/googleAnalytics';
import CodeHighlightStyles from '@components/editor/highlight/codeHighlightStyles';
import { DefaultSeo } from 'next-seo';
import { __URL__ } from '@lib/constants';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { trackEvent } from '@lib/google/googleTag';

function SnapifyApp(props: AppProps) {
  const { Component, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      trackEvent('pageView', {
        page: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <DefaultSeo
            openGraph={{
              type: 'website',
              locale: 'en_IE',
              url: __URL__,
              site_name: 'Snappy',
              images: [
                {
                  url: `${__URL__}images/favicon/android-chrome-512x512.png`,
                  width: 512,
                  height: 512,
                  alt: 'Image',
                  type: 'image/png',
                },
              ],
              defaultImageHeight: 512,
              defaultImageWidth: 512,
              description: 'Snappy is a simple, fast and powerful code snippet creator.',
              title: 'Snappy',
            }}
            twitter={{
              handle: '@snappy',
              site: '@snappy',
              cardType: 'summary_large_image',
            }}
          />
          <CodeHighlightStyles />
          <GoogleAnalytics />
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default SnapifyApp;
