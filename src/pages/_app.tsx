import '@fontsource/jetbrains-mono';
import '@fontsource/courier-prime';
import '@fontsource/fira-code';
import '@fontsource/mononoki';
import '@fontsource/poppins';
import '@fontsource/space-mono';
import '@fontsource/source-code-pro';
import '../styles/globals.css';
import { ChakraProvider } from '@chakra-ui/react';

import { store } from '@state/redux/snappyStore';
import theme from '@styles/themes';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import GoogleAnalytics from '@components/google/googleAnalytics';
import CodeHighlightStyles from '@components/editor/highlight/codeHighlightStyles';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import trackEvent from '@lib/google/googleTag';

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
      <ChakraProvider theme={theme}>
        <CodeHighlightStyles />
        <GoogleAnalytics />
        <Component {...pageProps} />
      </ChakraProvider>
    </Provider>
  );
}

export default SnapifyApp;
