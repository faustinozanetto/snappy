import '@styles/globals.css';
import '@fontsource/jetbrains-mono';
import '@fontsource/courier-prime';
import '@fontsource/fira-code';
import '@fontsource/mononoki';
import '@fontsource/poppins';
import '@fontsource/space-mono';
import '@fontsource/source-code-pro';
import * as gtag from '@lib/GoogleTag';
import ExportProvider from '@state/ExportContext';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'state/SnapifyStore';
import { theme } from '@styles/themes';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { GoogleAnalytics } from '@components/google/GoogleAnalytics';

const SnapifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <Provider store={store}>
      <ExportProvider>
        <SessionProvider session={pageProps.session}>
          <ChakraProvider theme={theme}>
            <GoogleAnalytics />
            <Component {...pageProps} />
          </ChakraProvider>
        </SessionProvider>
      </ExportProvider>
    </Provider>
  );
};

export default SnapifyApp;
