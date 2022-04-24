import '@styles/globals.css';
import '@fontsource/jetbrains-mono';
import '@fontsource/poppins';
import { SessionProvider } from 'next-auth/react';
import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { store } from 'state/SnapifyStore';
import ExportProvider from '@state/ExportContext';
import { theme } from '@styles/themes';

const SnapifyApp = (props: AppProps) => {
  const { Component, pageProps } = props;

  return (
    <Provider store={store}>
      <ExportProvider>
        <SessionProvider session={pageProps.session}>
          <ChakraProvider theme={theme}>
            <Component {...pageProps} />
          </ChakraProvider>
        </SessionProvider>
      </ExportProvider>
    </Provider>
  );
};

export default SnapifyApp;
