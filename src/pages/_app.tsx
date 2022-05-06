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

function SnapifyApp(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider theme={theme}>
          <CodeHighlightStyles />
          <GoogleAnalytics />
          <Component {...pageProps} />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
}

export default SnapifyApp;
