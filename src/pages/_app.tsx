import '@fontsource/jetbrains-mono';
import '@fontsource/courier-prime';
import '@fontsource/fira-code';
import '@fontsource/mononoki';
import '@fontsource/poppins';
import '@fontsource/space-mono';
import '@fontsource/source-code-pro';
import * as gtag from '@lib/google/googleTag';
import ExportProvider from '@state/context/exportContext';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { theme } from '@styles/themes';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from '@state/redux/snappyStore';
import GoogleAnalytics from '@components/google/googleAnalytics';

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
      <PersistGate loading={null} persistor={persistor}>
        <ExportProvider>
          <ChakraProvider theme={theme}>
            <GoogleAnalytics />
            <Component {...pageProps} />
          </ChakraProvider>
        </ExportProvider>
      </PersistGate>
    </Provider>
  );
};

export default SnapifyApp;
